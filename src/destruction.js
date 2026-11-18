// Everything in the classroom that can break, and how it breaks.
//
// The approach, after the literature (impact-seeded Voronoi fracture; Müller et al., "Real Time Dynamic Fracture
// with Volumetric Approximate Convex Decompositions", SIGGRAPH 2013) and what holds up on a Quest:
// - Every breakable thing is a piece: a closed mesh with a collider. Intact, still pieces are drawn in one
//   BatchedMesh per material, so a room of four hundred pieces costs about ten draw calls.
// - A hit that does enough damage fractures the piece around the impact: Voronoi cells seeded densely near the point
//   and sparsely far from it, cut in a worker so the frame never stalls. Cut faces show the inside of the material.
// - What breaks free depends on the material. Plaster and slate let go near the blow and keep jagged remains in the
//   wall, which can be hit again. Glass cracks in rings and spokes around the blow; the middle flies, the rest
//   cascades out a beat later, and a few shards stay stuck in the frame. Wood splits along the grain.
// - Loose pieces are rigid bodies with convex-hull colliders. Once they come to rest they are baked back into the
//   batches (still solid, still breakable), so wreckage accumulates without costing a draw call each.
import { BatchedMesh, Box3, BoxGeometry, BufferAttribute, BufferGeometry, Color, ConeGeometry, CylinderGeometry, Euler, Matrix4, Mesh, MeshStandardMaterial, Quaternion, SphereGeometry, Vector3 } from 'three';

// What each room material is made of, physically.
const STUFF = {
    plaster: { material: 'plaster', inside: 0xd9d2c3, density: 1100, hp: 1.0 },
    wains: { material: 'wood', inside: 0xf0d2a8, density: 650, hp: 1.3 },
    trim: { material: 'wood', inside: 0xf0d2a8, density: 650, hp: 0.6 },
    chair: { material: 'wood', inside: 0xf0d2a8, density: 600, hp: 0.9 },
    desk: { material: 'wood', inside: 0xf0d2a8, density: 650, hp: 1.6 },
    speaker: { material: 'wood', inside: 0xc8b090, density: 500, hp: 0.5 },
    glass: { material: 'glass', inside: 0x8fd6b8, density: 2500, hp: 0.12 },
    frosted: { material: 'glass', inside: 0x8fd6b8, density: 2500, hp: 0.12 },
    slate: { material: 'slate', inside: 0x6a6e72, density: 2700, hp: 1.1 },
};
const BUDGET = { live: 80, fragments: 14 };   // loose meshes before the oldest are baked; Voronoi cells per break
const rnd = () => Math.random() - 0.5;

export function createDestruction({ scene, physics, room }) {
    const api = {};
    const { RAPIER, world } = physics;
    const pieces = new Map();   // collider handle -> piece
    let nextId = 0;

    // Materials: the room's own, cloned to take a vertex colour (cut faces are tinted with it).
    const materials = {};
    const materialFor = (key) => {
        if (materials[key]) return materials[key];
        let m;
        if (key === 'glass') m = new MeshStandardMaterial({ color: 0xe8f4f8, roughness: 0.04, metalness: 0.1, transparent: true, opacity: 0.22, envMapIntensity: 1.4, depthWrite: false, vertexColors: true });
        else if (key === 'frosted') m = new MeshStandardMaterial({ color: 0x20262a, emissive: 0x9aa8b3, roughness: 0.6, transparent: true, opacity: 0.95, vertexColors: true });   // lit from the corridor side, not ours
        else if (room.M[key]) { m = room.M[key].clone(); m.vertexColors = true; }
        else m = new MeshStandardMaterial({ vertexColors: true, roughness: 0.5 });
        return (materials[key] = m);
    };

    // One BatchedMesh per material for everything that isn't moving.
    const batches = {};
    function batchFor(key) {
        if (batches[key]) return batches[key];
        const b = new BatchedMesh(256, 16384, 32768, materialFor(key));
        b.userData = { v: 16384, i: 32768 };
        b.castShadow = !['glass', 'frosted'].includes(key); b.receiveShadow = true;
        b.sortObjects = key === 'glass' || key === 'frosted';
        b.frustumCulled = false;
        scene.add(b);
        return (batches[key] = b);
    }
    function batchAdd(key, geometry, matrix) {
        const b = batchFor(key), v = geometry.attributes.position.count, i = geometry.index.count;
        if (b.unusedVertexCount < v || b.unusedIndexCount < i) {   // grow: BatchedMesh has no public size, so keep our own
            b.userData.v = Math.max(b.userData.v * 2, b.userData.v + v * 4); b.userData.i = Math.max(b.userData.i * 2, b.userData.i + i * 4);
            b.setGeometrySize(b.userData.v, b.userData.i);
        }
        if (b.instanceCount >= b.maxInstanceCount) b.setInstanceCount(b.maxInstanceCount * 2);
        const g = b.addGeometry(geometry), id = b.addInstance(g);
        b.setMatrixAt(id, matrix);
        return { key, g, id };
    }
    function batchRemove(slot) {
        const b = batches[slot.key];
        b.deleteInstance(slot.id); b.deleteGeometry(slot.g);
    }

    const tint = (geometry, from, color) => {   // vertex colour: white outside, the material's inside colour on cut faces
        const n = geometry.attributes.position.count, c = new Float32Array(n * 3).fill(1), k = new Color(color), index = geometry.index.array;
        for (let i = from; i < index.length; i++) { const v = index[i] * 3; c[v] = k.r; c[v + 1] = k.g; c[v + 2] = k.b; }
        geometry.setAttribute('color', new BufferAttribute(c, 3));
        return geometry;
    };

    // ---- Pieces --------------------------------------------------------------------------------------------------
    const m4 = new Matrix4(), v3 = new Vector3(), q4 = new Quaternion(), one = new Vector3(1, 1, 1);
    function colliderFor(geometry, size, density, convex) {
        const thin = Math.min(size.x, size.y, size.z) < 0.004;   // a near-flat sliver has no volume to hull: a thin box instead
        // Fragments share their faces with their neighbours; a hull a little smaller than the mesh starts clear of them,
        // so a piece that is knocked loose falls out instead of jamming in its own hole.
        const hull = convex && !thin ? geometry.attributes.position.array.map((v) => v * 0.9) : null;
        let desc = hull ? RAPIER.ColliderDesc.convexHull(hull) : null;
        if (!desc) desc = RAPIER.ColliderDesc.cuboid(Math.max(0.004, size.x / 2), Math.max(0.004, size.y / 2), Math.max(0.004, size.z / 2));
        return desc.setDensity(density).setFriction(0.7).setRestitution(0.15);
    }
    /** A piece: geometry in its own space, a world matrix, a material key, still (anchored) or loose (dynamic). */
    function addPiece({ key, geometry, matrix, kind, anchored, hp, convex = false, generation = 0, velocity, spin, extra = {} }) {
        const stuff = STUFF[key] ?? { material: 'wood', inside: 0xffffff, density: 600, hp: 1 };
        geometry.computeBoundingBox();
        const size = geometry.boundingBox.getSize(new Vector3()), volume = size.x * size.y * size.z;
        const p = { id: nextId++, key, kind, material: stuff.material, geometry, matrix: matrix.clone(), size, volume, generation, hp: hp ?? stuff.hp, anchored, ...extra };
        p.max = p.hp;
        matrix.decompose(v3, q4, new Vector3());
        const body = world.createRigidBody((anchored ? RAPIER.RigidBodyDesc.fixed() : RAPIER.RigidBodyDesc.dynamic().setCcdEnabled(volume < 0.0004)).setTranslation(v3.x, v3.y, v3.z).setRotation(q4));
        const collider = world.createCollider(colliderFor(geometry, size, stuff.density, convex), body);
        if (!anchored && (stuff.material === 'glass' || stuff.material === 'slate' || volume > 0.004)) { collider.setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS); collider.setContactForceEventThreshold(stuff.material === 'glass' ? 2 : 60); }
        p.body = body; p.collider = collider;
        pieces.set(collider.handle, p);
        if (anchored) p.slot = batchAdd(key, geometry, p.matrix);
        else loosen(p, velocity, spin);
        return p;
    }
    function dropPiece(p) {
        pieces.delete(p.collider.handle);
        if (p.slot) { batchRemove(p.slot); p.slot = null; }
        if (p.mesh) { scene.remove(p.mesh); p.mesh = null; live.delete(p); }
        physics.remove(p.body);
        p.gone = true;
    }

    // Loose pieces: a mesh of their own while they move.
    const live = new Set();
    function loosen(p, velocity, spin) {
        if (p.cell && p.anchored) scheduleCheck();
        if (p.slot) { batchRemove(p.slot); p.slot = null; }
        if (p.body.isFixed()) p.body.setBodyType(RAPIER.RigidBodyType.Dynamic, true);
        p.anchored = false;
        const mesh = new Mesh(p.geometry, materialFor(p.key));
        mesh.castShadow = p.volume > 0.0002 && !['glass', 'frosted'].includes(p.key); mesh.receiveShadow = true;
        p.matrix.decompose(mesh.position, mesh.quaternion, mesh.scale);
        scene.add(mesh);
        p.mesh = mesh; p.born = performance.now() / 1000; p.restFor = 0;
        physics.link(p.body, mesh, () => p.matrix.compose(mesh.position, mesh.quaternion, one));
        if (velocity) p.body.setLinvel(velocity, true);
        if (spin) p.body.setAngvel(spin, true);
        live.add(p);
    }
    // Back to the batch once it has come to rest: still there, still solid, one less draw call.
    function settle(p) {
        physics.unlink(p.body);
        scene.remove(p.mesh); p.mesh = null;
        live.delete(p);
        p.body.setBodyType(RAPIER.RigidBodyType.Fixed, true);
        p.anchored = true; p.rubble = true;
        p.slot = batchAdd(p.key, p.geometry, p.matrix);
    }

    // ---- The room ------------------------------------------------------------------------------------------------
    const box = (w, h, d) => { const g = new BoxGeometry(w, h, d); g.deleteAttribute('uv'); return g; };
    function worldUV(g, pos, tile, uv) {   // one painted metre is a metre everywhere, as in the room itself
        const p = g.attributes.position, n = g.attributes.normal, out = new Float32Array(p.count * 2);
        for (let i = 0; i < p.count; i++) {
            const x = p.getX(i) + pos.x, y = p.getY(i) + pos.y, z = p.getZ(i) + pos.z, ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i));
            if (uv) { out[i * 2] = (x - uv.x0) / uv.w; out[i * 2 + 1] = (y - uv.y0) / uv.h; continue; }
            const [u, v] = ax > 0.5 ? [z, y] : ay > 0.5 ? [x, z] : [x, y];
            out[i * 2] = u / tile; out[i * 2 + 1] = v / tile;
        }
        g.setAttribute('uv', new BufferAttribute(out, 2));
        return g;
    }
    // ---- Structure ------------------------------------------------------------------------------------------------
    // The walls are courses of tiles. A tile stands if what is under it stands. One tile knocked out and the one above
    // holds, carried by its neighbours like a lintel; knock out two side by side and the wall above them has nothing:
    // it groans, cracks and comes down into the room, and whatever was resting on it follows.
    const cells = new Map();
    function cellOf(s) {
        const { wall, col, y0, y1 } = s.cell, key = `${wall}:${col}:${y0.toFixed(2)}`;
        if (!cells.has(key)) {
            const along = wall[0] === 'x' ? 'x' : 'z', across = along === 'x' ? 'z' : 'x';
            const [w, , d] = s.size, half = (along === 'x' ? w : d) / 2, plane = s.pos[across === 'x' ? 0 : 2];
            cells.set(key, { key, wall, col, y0, y1, along, across, mid: s.pos[along === 'x' ? 0 : 2], half, plane, inward: -Math.sign(plane), collapsed: false });
        }
        return cells.get(key);
    }
    const cellAt = (wall, col, y0, y1) => [...cells.values()].find((c) => c.wall === wall && c.col === col && (y1 === undefined ? Math.abs(c.y0 - y0) < 0.03 : Math.abs(c.y1 - y1) < 0.03));
    // How much of a tile is still in the wall: rays through it on a 3 x 3 grid, counting what they meet of that tile.
    function coverage(c, memo) {
        if (memo.has(c.key)) return memo.get(c.key);
        let hits = 0;
        for (const u of [0.2, 0.5, 0.8]) for (const v of [0.2, 0.5, 0.8]) {
            const o = { x: 0, y: c.y0 + (c.y1 - c.y0) * v, z: 0 }, d = { x: 0, y: 0, z: 0 };
            o[c.along] = c.mid - c.half + 2 * c.half * u; o[c.across] = c.plane + c.inward * 0.5; d[c.across] = -c.inward;
            if (world.castRay(new RAPIER.Ray(o, d), 1.0, true, undefined, undefined, undefined, undefined, (k) => { const p = pieces.get(k.handle); return !!p && p.anchored && p.cell === c.key; })) hits++;
        }
        memo.set(c.key, c.collapsed ? 0 : hits / 9);
        return memo.get(c.key);
    }
    const standing = (c, memo) => !c.collapsed && coverage(c, memo) >= 0.5;
    function supported(c, memo, depth = 0) {
        if (c.y0 < 0.05 || depth > 6) return true;   // on the floor
        const below = cellAt(c.wall, c.col, undefined, c.y0);
        return !below || (standing(below, memo) && supported(below, memo, depth + 1));   // nothing modelled underneath: the building holds it
    }
    let checkAt = 0;
    const scheduleCheck = (delay = 0.45) => { const t = performance.now() / 1000 + delay; checkAt = checkAt ? Math.min(checkAt, t) : t; };
    function checkStructure() {
        const memo = new Map();
        for (const c of [...cells.values()].sort((a, b) => a.y0 - b.y0)) {
            if (c.collapsed || c.y0 < 0.05 || coverage(c, memo) === 0 || supported(c, memo)) continue;
            const holds = (n) => !n || (standing(n, memo) && supported(n, memo));   // a wall's end is held by the corner
            if (holds(cellAt(c.wall, c.col - 1, c.y0)) && holds(cellAt(c.wall, c.col + 1, c.y0))) continue;   // a lintel
            collapse(c);
        }
    }
    function collapse(c) {
        c.collapsed = true;
        const centre = new Vector3(), inward = new Vector3();
        centre[c.along] = c.mid; centre.y = (c.y0 + c.y1) / 2; centre[c.across] = c.plane; inward[c.across] = c.inward;
        api.onCollapse?.({ point: centre.clone().setY(c.y1), inward, cell: c });
        setTimeout(() => {   // a beat of groaning first; then it goes, falling forward into the room
            const fall = inward.clone().multiplyScalar(0.9).add(new Vector3(0, -0.3, 0));
            const inside = (p) => { const e = p.matrix.elements, x = { x: e[12], y: e[13], z: e[14] }; return Math.abs(x[c.along] - c.mid) < c.half && x.y > c.y0 - 0.03 && x.y < c.y1 + 0.06 && (x[c.across] - c.plane) * c.inward > -0.2 && (x[c.across] - c.plane) * c.inward < 0.25; };
            for (const p of new Set(pieces.values())) {
                if (!p.anchored || p.gone || p.parts || p.prop || p.rubble || p.key === 'glass') continue;   // window glass has its own frame
                if (p.cell === c.key && p.generation === 0) fracture(p, centre, fall, 0.3, true);
                else if (p.cell === c.key || (!p.cell && inside(p))) loosen(p, fall.clone().multiplyScalar(0.6 + Math.random() * 0.6), new Vector3(rnd(), rnd(), rnd()).multiplyScalar(2));   // the rails, the board, what hangs on it
            }
            const size = new Vector3(0.1, c.y1 - c.y0, 0.1); size[c.along] = c.half * 2; size[c.across] = 0.5;
            releaseMounts({ matrix: new Matrix4().makeTranslation(centre.x, centre.y, centre.z) }, size);
            wakeNear(centre, 2);
            scheduleCheck(0.6);   // and what was standing on it
        }, 380);
    }

    const buildRoom = () => { for (const s of room.pieces) {
        const pos = new Vector3(...s.pos), g = tint(worldUV(box(...s.size), pos, s.tile, s.uv), Infinity, 0xffffff);
        addPiece({ key: s.mat, geometry: g, matrix: new Matrix4().makeTranslation(pos.x, pos.y, pos.z), kind: s.kind, anchored: true, hp: s.kind === 'trim' ? 0.4 : undefined, extra: { cell: s.cell && cellOf(s).key } });
    } };
    buildRoom();

    // Desks and chairs: real bodies you can shove and knock over, drawn by the room's instanced meshes.
    const DESK = [[[1.2, 0.035, 0.46], [0, 0, 0]], ...[-0.56, 0.56].flatMap((x) => [-0.19, 0.19].map((z) => [[0.04, 0.68, 0.04], [x, -0.357, z]])), [[1.1, 0.015, 0.38], [0, -0.11, 0]], [[1.14, 0.1, 0.015], [0, -0.065, -0.2]]];
    const CHAIR = [[[0.38, 0.03, 0.36], [0, 0.42, 0]], [[0.36, 0.22, 0.022], [0, 0.72, 0.17], -0.08], ...[-0.16, 0.16].flatMap((x) => [[[0.03, 0.42, 0.03], [x, 0.21, -0.15]], [[0.03, 0.84, 0.03], [x, 0.42, 0.16]]])];
    const furniture = [];
    function addFurniture(instanced, index, parts, key, kind, mass, hp, home) {
        if (home) instanced.setMatrixAt(index, home);
        instanced.instanceMatrix.needsUpdate = true;
        instanced.getMatrixAt(index, m4);
        const object = { position: new Vector3(), quaternion: new Quaternion() };
        m4.decompose(object.position, object.quaternion, v3);
        const body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(object.position.x, object.position.y, object.position.z).setRotation(object.quaternion).setCanSleep(true));
        const volume = parts.reduce((a, [[w, h, d]]) => a + w * h * d, 0), f = { kind, key, material: 'wood', instanced, index, parts, body, hp, max: hp, home: m4.clone(), colliders: [], args: [instanced, index, parts, key, kind, mass, hp] };
        for (const [[w, h, d], [x, y, z], rx = 0] of parts) {
            const c = world.createCollider(RAPIER.ColliderDesc.cuboid(w / 2, h / 2, d / 2).setTranslation(x, y, z).setRotation(new Quaternion().setFromEuler(new Euler(rx, 0, 0))).setDensity(mass / volume).setFriction(0.6).setRestitution(0.1), body);
            pieces.set(c.handle, f); f.colliders.push(c);
        }
        body.sleep();
        physics.link(body, object, () => { instanced.setMatrixAt(index, m4.compose(object.position, object.quaternion, one)); instanced.instanceMatrix.needsUpdate = true; });
        f.object = object;
        furniture.push(f);
        return f;
    }
    room.seats.forEach((s, i) => addFurniture(room.desks, i, DESK, 'desk', 'desk', 11, 1.5));
    for (let i = 0; i < room.chairs.count; i++) addFurniture(room.chairs, i, CHAIR, 'chair', 'chair', 4, 0.7);
    // Taking furniture apart: the instance disappears, its boards come away as pieces with the body's motion.
    function dismantle(f, point, dir, energy) {
        physics.remove(f.body);
        for (const c of f.colliders) pieces.delete(c.handle);
        f.instanced.setMatrixAt(f.index, new Matrix4().makeScale(0, 0, 0)); f.instanced.instanceMatrix.needsUpdate = true;
        f.gone = true;
        const base = new Matrix4().compose(f.object.position, f.object.quaternion, one);
        let nearest = null, best = Infinity;
        for (const [[w, h, d], [x, y, z], rx = 0] of f.parts) {
            const matrix = base.clone().multiply(new Matrix4().compose(new Vector3(x, y, z), new Quaternion().setFromEuler(new Euler(rx, 0, 0)), one));
            const centre = new Vector3().setFromMatrixPosition(matrix), far = centre.distanceTo(point);
            const push = dir.clone().multiplyScalar((1.5 + energy * 3) * Math.exp(-far / 0.5)).add(new Vector3(rnd(), Math.random() * 0.8, rnd()).multiplyScalar(0.8 + energy));
            const g = tint(worldUV(box(w, h, d), new Vector3(), 0.9), Infinity, 0xffffff);
            const p = addPiece({ key: f.key, geometry: g, matrix, kind: 'board', anchored: false, hp: 0.35, velocity: push, spin: new Vector3(rnd(), rnd(), rnd()).multiplyScalar(6 + energy * 8) });
            if (far < best) { best = far; nearest = p; }
        }
        if (nearest && energy > 0.4) fracture(nearest, point, dir, energy * 0.8);   // the board that took the blow splits too
    }

    // ---- Fracture ------------------------------------------------------------------------------------------------
    const worker = new Worker(new URL('fracture.worker.js', document.baseURI), { type: 'module' });
    const waiting = new Map();
    let nextJob = 0;

    /** Break a piece at a world point, along a direction, with an energy of about 0 (a tap) to 1+ (a full swing). */
    function fracture(p, point, dir, energy, collapsing = false) {
        if (p.pending || p.gone) return;
        p.pending = true;
        const inverse = p.matrix.clone().invert(), local = point.clone().applyMatrix4(inverse), s = p.size;
        const thin = s.x < s.y && s.x < s.z ? 'x' : s.y < s.z ? 'y' : 'z', flat = s[thin] < 0.35 * Math.min(...['x', 'y', 'z'].filter((a) => a !== thin).map((a) => s[a]));
        const axis = new Vector3(thin === 'x' ? 1 : 0, thin === 'y' ? 1 : 0, thin === 'z' ? 1 : 0);
        const big = Math.max(s.x, s.y, s.z);
        if (big < 0.09 || p.generation >= 3) return crumble(p, point, dir, energy);   // too small to split again: it just goes
        const g = p.geometry, job = { id: nextJob++, p, point: point.clone(), dir: dir.clone(), energy, collapsing };
        let seeds = null, count = Math.round(Math.min(BUDGET.fragments, 6 + energy * 8 + big * 4));
        if (p.material === 'glass') seeds = radial(local, axis, s, energy);
        else if (p.material === 'wood' && flat) seeds = grain(local, axis, s);
        if (seeds) count = seeds.length / 3;
        waiting.set(job.id, job);
        worker.postMessage({
            id: job.id, position: g.attributes.position.array.slice(), normal: g.attributes.normal.array.slice(), uv: g.attributes.uv.array.slice(), index: Uint32Array.from(g.index.array),
            count, mode: flat ? '2.5D' : '3D', seeds, impact: local.toArray(), radius: 0.12 + energy * 0.12, normalDir: flat ? axis.toArray() : null,
        });
    }
    // Glass: rings and spokes around the blow, the spider web (seed points on circles, after the classic setup).
    function radial(c, axis, s, energy) {
        const out = [], [u, v] = ['x', 'y', 'z'].filter((a) => !axis[a]), ring = [0.03, 0.08, 0.15, 0.26], spokes = 6 + Math.round(energy * 3);
        for (const [k, r] of ring.entries()) for (let i = 0; i < spokes; i++) {
            const a = (i + (k % 2) * 0.5 + rnd() * 0.3) / spokes * Math.PI * 2, rr = r * (0.85 + Math.random() * 0.3), p = c.clone();
            p[u] += Math.cos(a) * rr; p[v] += Math.sin(a) * rr;
            if (Math.abs(p[u]) < s[u] / 2 && Math.abs(p[v]) < s[v] / 2) out.push(p.x, p.y, p.z);
        }
        out.push(c.x, c.y, c.z);
        return new Float32Array(out.slice(0, 3 * 22));
    }
    // Wood: seeds strung out along the grain, so the board splits into long splinters rather than chunks.
    function grain(c, axis, s) {
        const [u, v] = ['x', 'y', 'z'].filter((a) => !axis[a]), along = s[u] >= s[v] ? u : v, across = along === u ? v : u, out = [];
        for (let i = 0; i < 9; i++) {
            const p = c.clone();
            p[along] = Math.max(-s[along] / 2, Math.min(s[along] / 2, c[along] + rnd() * s[along] * 0.5));
            p[across] = Math.max(-s[across] / 2, Math.min(s[across] / 2, c[across] + rnd() * Math.min(0.12, s[across])));
            out.push(p.x, p.y, p.z);
        }
        return new Float32Array(out);
    }
    function crumble(p, point, dir, energy) {
        if (p.anchored) loosen(p, dir.clone().multiplyScalar(1 + energy * 3), new Vector3(rnd(), rnd(), rnd()).multiplyScalar(8));
        else p.body.applyImpulse(dir.clone().multiplyScalar(p.body.mass() * (1 + energy * 3)), true);
        p.pending = false;
        api.onBreak?.(p, { point, energy, crumbled: true });
    }

    // The fragments are back: swap the piece for them and decide what flies, what falls later and what stays.
    const pendingRelease = [];
    // A generator: fragments are made a few per frame (each is a body and a hull), so a big break never costs a frame.
    // The piece's collider goes at once, so nothing new collides with it; its picture goes when the last fragment is in.
    function* shatter({ p, point, dir, energy, collapsing }, fragments) {
        if (p.gone) return;
        if (!fragments.length) return crumble(p, point, dir, energy);
        const velocity = p.anchored ? new Vector3() : new Vector3().copy(p.body.linvel());
        const wasAnchored = p.anchored, s = p.size, stuff = STUFF[p.key] ?? { inside: 0xffffff };
        pieces.delete(p.collider.handle); physics.remove(p.body); p.gone = true; live.delete(p);   // no body from here on: off the moving list too
        releaseMounts(p, s);
        wakeNear(point, 2);
        api.onBreak?.(p, { point, energy, collapsing });
        if (p.cell) scheduleCheck();
        // What the blow itself carries away: everything within reach, and always the two cells nearest it (the cell that
        // contains the impact can have its centre well away from it; leaving it would be a crack, not a hole).
        const centres = fragments.map((f) => new Vector3(...f.center).applyMatrix4(p.matrix).distanceTo(point)).sort((a, b) => a - b);
        const reach = Math.max(p.material === 'glass' ? 0.09 : 0.14 + energy * 0.3, (centres[Math.min(1, centres.length - 1)] ?? 0) + 0.001);
        const now = performance.now() / 1000;
        const one = (f) => {
            const g = new BufferGeometry();
            g.setAttribute('position', new BufferAttribute(f.position, 3)); g.setAttribute('normal', new BufferAttribute(f.normal, 3)); g.setAttribute('uv', new BufferAttribute(f.uv, 2));
            g.setIndex(new BufferAttribute(f.index, 1));
            tint(g, f.inside, stuff.inside);
            const local = new Vector3(...f.center), matrix = p.matrix.clone().multiply(new Matrix4().makeTranslation(local.x, local.y, local.z));
            const centre = new Vector3().setFromMatrixPosition(matrix), far = centre.distanceTo(point);
            const edge = Math.min(...['x', 'y', 'z'].filter((a) => s[a] > 0.05).map((a) => s[a] / 2 - Math.abs(local[a])));
            const kick = () => collapsing ? dir.clone().multiplyScalar(0.5 + Math.random() * 0.7).add(new Vector3(rnd(), rnd(), rnd()).multiplyScalar(0.35)) : dir.clone().multiplyScalar((0.6 + energy * 2.4) * Math.exp(-far / 0.25)).add(centre.clone().sub(point).normalize().multiplyScalar(0.4 + energy)).add(new Vector3(rnd(), rnd(), rnd()).multiplyScalar(0.4)).add(velocity);
            const spin = () => new Vector3(rnd(), rnd(), rnd()).multiplyScalar(4 + energy * 10);
            const hp = Math.max(0.15, p.max * 0.5);
            if (wasAnchored && p.material === 'glass') {
                if (edge < 0.035 && Math.random() < 0.7) return addPiece({ key: p.key, geometry: g, matrix, kind: 'shard', anchored: true, hp: 0.05, convex: true, generation: 3 });   // stuck in the frame
                const shard = addPiece({ key: p.key, geometry: g, matrix, kind: 'shard', anchored: far > reach, hp: 0.05, convex: true, generation: 3, velocity: far > reach ? null : kick(), spin: spin() });
                if (far > reach) pendingRelease.push({ at: now + 0.04 + far * 1.4 + Math.random() * 0.25, p: shard, v: dir.clone().multiplyScalar(0.3).add(new Vector3(rnd() * 0.3, -0.2, rnd() * 0.3)) });   // the cascade
                return;
            }
            const stays = !collapsing && wasAnchored && far > reach && Math.random() > 0.15;
            addPiece({ key: p.key, geometry: g, matrix, kind: stays ? p.kind : 'fragment', anchored: stays, hp, convex: true, generation: p.generation + 1, velocity: stays ? null : kick(), spin: stays ? null : spin(), extra: stays ? { cell: p.cell } : {} });
        };
        for (const f of fragments) { one(f); yield; }
        if (p.slot) { batchRemove(p.slot); p.slot = null; }
        if (p.mesh) { scene.remove(p.mesh); p.mesh = null; live.delete(p); }
    }

    // What was hanging on a piece that broke comes down with it: notes, scrolls, signs, the clock.
    const mounts = room.mounts.map((object) => ({ object, at: object.getWorldPosition(new Vector3()) }));
    function releaseMounts(p, s) {
        const inverse = p.matrix.clone().invert();
        for (const m of mounts) {
            if (m.body) continue;
            const local = m.at.clone().applyMatrix4(inverse);
            if (Math.abs(local.x) > s.x / 2 + 0.08 || Math.abs(local.y) > s.y / 2 + 0.02 || Math.abs(local.z) > s.z / 2 + 0.08) continue;
            const o = m.object;
            o.updateMatrixWorld(); o.removeFromParent(); scene.attach(o);
            const body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(m.at.x, m.at.y, m.at.z).setRotation(o.getWorldQuaternion(new Quaternion())).setLinearDamping(2.5).setAngularDamping(1));   // paper falls slowly
            world.createCollider(RAPIER.ColliderDesc.cuboid(0.08, 0.08, 0.004).setDensity(300), body);
            body.setAngvel({ x: rnd() * 3, y: rnd() * 3, z: rnd() * 3 }, true);
            physics.link(body, o, () => o.updateMatrix());
            m.body = body;
        }
    }

    // ---- Things that were never part of the room: books, props, the plunger --------------------------------------
    /** Give a group a body. `shape`: 'box' (half-extents from its bounds) or 'ball'. Brittle ones break on a hard landing. */
    const props = [];
    function addProp(object, options = {}, p = { id: nextId++ }) {
        const { kind, material = 'ceramic', mass = 1, hp = Infinity, brittle = 0, colors = [0xffffff], inside = 0xf2ead8, shape = 'box', proxy } = options;
        if (!p.home) { object.updateMatrixWorld(true); scene.attach(object); p.home = { position: object.position.clone(), quaternion: object.quaternion.clone() }; props.push(p); }
        object.position.copy(p.home.position); object.quaternion.copy(p.home.quaternion); object.visible = true;
        object.updateMatrixWorld(true);
        const bounds = new Vector3(), centre = new Vector3(), q = object.getWorldQuaternion(new Quaternion());
        const box3 = new Box3().setFromObject(object);
        box3.getSize(bounds); box3.getCenter(centre);
        const offset = centre.clone().sub(object.getWorldPosition(new Vector3()));
        const body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(centre.x, centre.y, centre.z).setRotation(q).setCanSleep(true));
        const desc = shape === 'ball' ? RAPIER.ColliderDesc.ball(Math.max(bounds.x, bounds.y, bounds.z) / 2) : RAPIER.ColliderDesc.cuboid(bounds.x / 2, bounds.y / 2, bounds.z / 2);
        const collider = world.createCollider(desc.setMass(mass).setFriction(0.6).setRestitution(0.2), body);
        if (brittle) { collider.setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS); collider.setContactForceEventThreshold(brittle); }
        Object.assign(p, { kind, material, object, body, collider, hp, max: hp, brittle, colors, inside, proxy, size: bounds, prop: true, gone: false, pending: false, options });
        // The group's origin isn't its centre: carry the offset in the body's frame.
        const local = offset.applyQuaternion(q.clone().invert());
        const holder = { position: new Vector3(), quaternion: new Quaternion() };
        physics.link(body, holder, () => { object.quaternion.copy(holder.quaternion); object.position.copy(holder.position).sub(local.clone().applyQuaternion(holder.quaternion)); });
        body.sleep();
        pieces.set(collider.handle, p);
        return p;
    }
    /** Shatter a prop: its stand-in shape (a lathe, a sphere) in the prop's colours, fractured in 3D. */
    function breakProp(p, point, dir, energy) {
        if (p.gone || p.pending) return;
        const t = p.body.translation(), r = p.body.rotation(), v = p.body.linvel();
        const matrix = new Matrix4().compose(new Vector3(t.x, t.y, t.z), new Quaternion(r.x, r.y, r.z, r.w), one);
        const s = p.size, g = (p.proxy?.(s) ?? new CylinderGeometry(Math.min(s.x, s.z) / 2, Math.min(s.x, s.z) / 2, s.y, 14, 2)).toNonIndexed();
        const indexed = new BufferGeometry();
        indexed.setAttribute('position', g.attributes.position); indexed.setAttribute('normal', g.attributes.normal); indexed.setAttribute('uv', g.attributes.uv);
        indexed.setIndex([...Array(g.attributes.position.count).keys()]);
        // Colour: the prop's paint, banded, painted into the vertex colours; the key picks a plain material.
        const key = `prop:${p.material}`;
        materials[key] ??= new MeshStandardMaterial({ vertexColors: true, roughness: p.material === 'ceramic' ? 0.25 : 0.9 });
        const stand = { ...p, key, geometry: indexed, matrix, generation: 0, anchored: false, size: s, colorsOut: p.colors };
        pieces.delete(p.collider.handle); physics.remove(p.body);
        p.object.visible = false; p.gone = true;
        STUFF[key] ??= { material: p.material, inside: p.inside, density: p.material === 'ceramic' ? 2200 : 1200, hp: 0.1 };
        const job = { id: nextJob++, p: { ...stand, body: { linvel: () => v }, collider: { handle: -1 }, pending: false, gone: false, max: 0.2, mesh: null, slot: null, prop: true }, point: point.clone(), dir: dir.clone(), energy };
        waiting.set(job.id, job);
        const count = p.material === 'ceramic' ? 12 + Math.round(energy * 6) : 9;
        worker.postMessage({ id: job.id, position: indexed.attributes.position.array.slice(), normal: indexed.attributes.normal.array.slice(), uv: indexed.attributes.uv.array.slice(), index: Uint32Array.from(indexed.index.array), count, mode: '3D', seeds: null, impact: point.clone().applyMatrix4(matrix.clone().invert()).toArray(), radius: 0.06, normalDir: null });
        api.onBreak?.(p, { point, energy, prop: true });
    }

    // Prop fragments carry the prop's colours: the shatter() above tints insides; outsides need painting.
    const paintOutside = (g, colors) => { const c = g.attributes.color.array; for (let i = 0; i < c.length; i += 3) { if (c[i] === 1 && c[i + 1] === 1 && c[i + 2] === 1) { const k = new Color(colors[(i / 3 | 0) % colors.length]); c[i] = k.r; c[i + 1] = k.g; c[i + 2] = k.b; } } };
    function* shatterProp(job, fragments) {
        const { p } = job;
        p.anchored = false;
        p.gone = false;
        // dropPiece() would touch a body that is already gone; this stand-in has none.
        const stuff = STUFF[p.key];
        for (const f of fragments) {
            const g = new BufferGeometry();
            g.setAttribute('position', new BufferAttribute(f.position, 3)); g.setAttribute('normal', new BufferAttribute(f.normal, 3)); g.setAttribute('uv', new BufferAttribute(f.uv, 2));
            g.setIndex(new BufferAttribute(f.index, 1));
            tint(g, f.inside, stuff.inside); paintOutside(g, p.colorsOut);
            const local = new Vector3(...f.center), matrix = p.matrix.clone().multiply(new Matrix4().makeTranslation(local.x, local.y, local.z));
            const centre = new Vector3().setFromMatrixPosition(matrix), far = centre.distanceTo(job.point);
            const v = job.dir.clone().multiplyScalar((0.8 + job.energy * 2.5) * Math.exp(-far / 0.2)).add(centre.clone().sub(job.point).normalize().multiplyScalar(0.6 + job.energy)).add(p.body.linvel());
            addPiece({ key: p.key, geometry: g, matrix, kind: 'fragment', anchored: false, hp: 0.08, convex: true, generation: 3, velocity: v, spin: new Vector3(rnd(), rnd(), rnd()).multiplyScalar(10) });
            yield;
        }
    }
    const incoming = [];
    worker.onmessage = ({ data }) => { const job = waiting.get(data.id); waiting.delete(data.id); if (job) incoming.push(job.p.prop ? shatterProp(job, data.fragments) : shatter(job, data.fragments)); };

    // Whatever was resting on something that just broke has to find out.
    function wakeNear(point, r) {
        for (const f of furniture) if (!f.gone && f.object.position.distanceTo(point) < r + 0.8) f.body.wakeUp();
        for (const p of props) if (!p.gone) { const t = p.body.translation(); if (Math.hypot(t.x - point.x, t.y - point.y, t.z - point.z) < r) p.body.wakeUp(); }
        for (const p of pieces.values()) if (p.rubble && !p.gone && new Vector3().setFromMatrixPosition(p.matrix).distanceTo(point) < r * 0.5) loosen(p);
    }

    // Stay after class: the room as it was. Every piece, pane and board; the furniture where it stood; things back on shelves.
    const mountHomes = room.mounts.map((o) => ({ o, parent: o.parent, position: o.position.clone(), quaternion: o.quaternion.clone() }));
    function reset() {
        if (!api.dirty) return;   // untouched since the last time: nothing to put back
        api.dirty = false; checkAt = 0;
        for (const c of cells.values()) c.collapsed = false;
        waiting.clear(); pendingRelease.length = 0; incoming.length = 0;
        for (const p of new Set(pieces.values())) if (!p.parts && !p.prop) dropPiece(p);
        for (const p of [...live]) dropPiece(p);
        buildRoom();
        for (const f of furniture.splice(0)) {
            if (!f.gone) { physics.remove(f.body); for (const c of f.colliders) pieces.delete(c.handle); }
            addFurniture(...f.args, f.home);
        }
        for (const p of props) {
            if (!p.gone) { pieces.delete(p.collider.handle); physics.remove(p.body); }
            addProp(p.object, p.options, p);
        }
        mounts.forEach((m, i) => {
            if (m.body) { physics.remove(m.body); m.body = null; }
            const h = mountHomes[i]; h.o.removeFromParent(); h.parent.add(h.o); h.o.position.copy(h.position); h.o.quaternion.copy(h.quaternion);
        });
    }

    // ---- Per frame -----------------------------------------------------------------------------------------------
    function update(dt) {
        const now = performance.now() / 1000;
        if (checkAt && now >= checkAt && !incoming.length) { checkAt = 0; checkStructure(); }   // once the last break's fragments are all in place
        for (let budget = 3; incoming.length && budget > 0; budget--) if (incoming[0].next().done) incoming.shift();   // a few new bodies a frame
        for (let i = pendingRelease.length - 1; i >= 0; i--) {
            const r = pendingRelease[i];
            if (now < r.at) continue;
            pendingRelease.splice(i, 1);
            if (!r.p.gone && r.p.anchored) loosen(r.p, r.v, new Vector3(rnd(), rnd(), rnd()).multiplyScalar(3));
        }
        // Rest, then bake. Too many loose at once: the smallest, oldest go first; dust doesn't need a body.
        for (const p of live) {
            p.restFor = p.body.isSleeping() || p.body.linvel().y ** 2 + p.body.linvel().x ** 2 + p.body.linvel().z ** 2 < 0.0004 ? p.restFor + dt : 0;
            if (p.restFor > 1.2) settle(p);
            else if (p.body.translation().y < -5) dropPiece(p);
        }
        if (live.size > BUDGET.live) {
            const oldest = [...live].sort((a, b) => a.volume - b.volume || a.born - b.born);
            for (const p of oldest.slice(0, live.size - BUDGET.live)) (p.volume < 0.00002 ? dropPiece : settle)(p);
        }
    }

    function pieceOf(collider) { return pieces.get(collider.handle); }
    return Object.assign(api, { pieces, furniture, props, live, cells, coverage: (c) => coverage(c, new Map()), fracture, dismantle, breakProp, addProp, pieceOf, update, loosen, reset, batches });
}
