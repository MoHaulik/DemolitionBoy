// The game: an axe in one hand, a hammer in the other, 90 seconds, a beautiful classroom.
// Swing speed at contact decides everything: a tap dents, a committed swing sends the room flying.
import {
    AdditiveBlending, BoxGeometry, BufferGeometry, Color, CylinderGeometry, Float32BufferAttribute, Group, IcosahedronGeometry, InstancedMesh, Matrix4, Mesh,
    CanvasTexture, MeshBasicMaterial, MeshStandardMaterial, NormalBlending, Object3D, PlaneGeometry, Points, Quaternion, ShaderMaterial, Vector3,
} from 'three';
import * as Props from './props.js';
import { ConeGeometry, SphereGeometry } from 'three';
import { axe, hammer } from './tools.js';
import { createShafts } from './shafts.js';
import { SUN } from './room.js';
import { FONTS, letter } from './paint.js';

const ROUND = 90, TILT = 0, TOOL_MASS = { axe: 1.8, hammer: 4.5 };   // kg: what a blow carries into what it hits   // TILT: extra tip of the head out of the fist (the grip pose already holds it upright)
// Which tool each material wants. The axe cleaves the soft and fibrous; the hammer smashes the hard and brittle.
const AFFINITY = {
    axe: { wood: 1, glass: 0.45, ceramic: 0.45, plaster: 0.55, slate: 0.4, metal: 0.15, paper: 1 },
    hammer: { wood: 0.5, glass: 1, ceramic: 1, plaster: 1, slate: 1, metal: 0.15, paper: 0.3 },
};
const MATERIALS = ['wood', 'glass', 'ceramic', 'plaster', 'slate', 'metal'];
// When the wrong tool keeps bouncing off, the board says so. That is the whole tutorial.
const HINTS = { glass: 'GLASS PREFERS A HAMMER. SO DO I.', ceramic: 'POTTERY WANTS THE HAMMER.', plaster: 'PLASTER WANTS THE HAMMER. TRUST ME.', wood: 'WOOD WANTS THE AXE.', slate: 'SLATE WANTS THE HAMMER. I WOULD KNOW.' };
const QUIPS = {
    desk: ['THAT DESK WAS NEW.', 'IT WAS REPLACED 14 TIMES. NOW 15.', 'SPLINTERS. EVERYWHERE.'],
    chair: ['SIT DOWN. OH.', 'THAT CHAIR HAD A FAMILY.'],
    pane: ['THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.', 'FRESH AIR!', 'VENTILATION: IMPROVED.'],
    wall: ['WALLS HOLD UP THE CEILING. REMEMBER?', 'THAT WALL WAS LOAD-BEARING. PROBABLY.', 'YOU CAN SEE THE PARK NOW.'],
    board: ['NO.', 'NOT THE BOARD.', 'I AM SLATE. I AM ALSO NOW GRAVEL.'],
    lectern: ["THE TEACHER'S DESK. OH NO."],
    door: ['THE DOOR WAS OPEN.'],
    speaker: ['THIS WAS NOT AN ANNOUNCEMENT.'],
    post: ['THE WINDOWS ARE NOW ONE WINDOW.'],
    shelf: ['THE BOOKS ARE FREE.'],
    pot: ['THE PLANT IS FINE. THE PLANT IS NOT FINE.', 'IT WAS A CACTUS. EMOTIONALLY.'],
    vase: ['A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.', 'MING DYNASTY. (IT WAS NOT.)'],
    cat: ['THERE GOES OUR LUCK.'],
    bust: ['THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES.'],
    volcano: ['STILL 2ND PLACE.'],
    drywall: ['OK. IT WAS A HOLE.'],
    ext: ['USE BEFORE. NOT AFTER.'],
};
// What a break is worth: by kind, and by how much of it there was.
const VALUE = { wall: 260, board: 500, pane: 220, trim: 60, post: 320, door: 300, lectern: 900, speaker: 300, shelf: 80, frame: 160, fragment: 30, shard: 15, board_: 0, desk: 420, chair: 160, pot: 350, vase: 400, cat: 900, bust: 1200, volcano: 800, ext: 700 };

export function createGame({ scene, renderer, rig, camera, room, audio, say, flip, physics, destruction, light, shake }) {
    // One tool at a time, in one hand: the axe or the hammer. Squeeze the grip to swap, into whichever hand squeezed.
    const tools = [{ name: 'axe', mesh: axe() }, { name: 'hammer', mesh: hammer() }];
    const grips = [0, 1].map((i) => renderer.xr.getControllerGrip(i));
    // Where each hand is, controllers or bare hands. three.js only poses the grip for controllers, so for
    // tracked hands read the hand's own grip space from the frame (the Quest browser provides one).
    const anchors = [0, 1].map(() => { const a = new Group(); a.matrixAutoUpdate = false; a.visible = false; rig.add(a); return a; });
    // With bare hands the grip is built from the hand's bones, so the tool sits in a closed fist the way a real
    // one does: the handle comes up out of the thumb side, the edge (or the hammer's face) faces where the knuckles point.
    const jm = new Matrix4(), jx = new Vector3(), jy = new Vector3(), jz = new Vector3(), jp = new Vector3(), up = new Vector3(), fwd = new Vector3(), side = new Vector3();
    function fist(source, frame, ref, out) {
        const bone = source.hand?.get('middle-finger-metacarpal'), pose = bone && frame.getJointPose?.(bone, ref);
        if (!pose) return false;
        jm.fromArray(pose.transform.matrix).extractBasis(jx, jy, jz);
        jp.setFromMatrixPosition(jm).addScaledVector(jy, -0.03).addScaledVector(jz, -0.02);   // into the palm, towards the fingers: the middle of the fist
        up.copy(jx).multiplyScalar(source.handedness === 'left' ? 1 : -1).addScaledVector(jz, -0.25).normalize();   // thumb side, leaning a little forward
        fwd.copy(jz).negate().addScaledVector(up, -jz.clone().negate().dot(up)).normalize();   // the knuckles' way, square to the handle
        side.crossVectors(fwd, up);   // tool X = E x H
        out.makeBasis(side, fwd.negate(), up.negate()).setPosition(jp);   // tool -Y = knuckles, tool -Z = handle
        return true;
    }
    function syncAnchors() {
        const session = renderer.xr.getSession(), frame = renderer.xr.getFrame(), ref = renderer.xr.getReferenceSpace();
        anchors.forEach((a, i) => {
            const source = session?.inputSources[i];
            let ok = grips[i].visible;
            if (ok) a.matrix.copy(grips[i].matrix);
            else if (source && frame && ref) {
                ok = fist(source, frame, ref, a.matrix);
                const pose = !ok && source.gripSpace ? frame.getPose(source.gripSpace, ref) : null;
                if (pose) { a.matrix.fromArray(pose.transform.matrix); ok = true; }
            }
            a.visible = ok;
            a.matrixWorldNeedsUpdate = true;
        });
    }

    // Walking, from Goats (goat5): swing your free arm to go, look where you want to go. How hard you swing, measured
    // relative to your own body, pushes you along your gaze; momentum carries between swings and friction bleeds it off.
    // Same model, a classroom's pace: a top speed of 1.4 m/s against the goat's 9.5. The hand holding the tool doesn't
    // walk you, or every chop would carry you into the desk.
    const WALK = { min: 0.6, max: 6, push: 1.1, top: 1.4, damping: 0.965 };
    const walk = { v: new Vector3(), last: [null, null], hand: new Vector3(), look: new Vector3(), head: new Vector3() };
    function locomote(dt) {
        const free = holder.hand === null ? -1 : 1 - holder.hand;
        camera.getWorldDirection(walk.look).setY(0).normalize();
        anchors.forEach((a, i) => {
            if (!a.visible) { walk.last[i] = null; return; }
            walk.hand.setFromMatrixPosition(a.matrix);   // rig-local: your own moving body doesn't read as a swing
            if (walk.last[i] && dt > 0 && i === free && !grab.held && !tools.some((t) => t.lodged && t.hand === i)) {   // holding something, the arm isn't walking
                const speed = walk.hand.distanceTo(walk.last[i]) / dt;
                if (speed > WALK.min) walk.v.addScaledVector(walk.look, Math.min(speed, WALK.max) * WALK.push * dt);
            }
            (walk.last[i] ??= new Vector3()).copy(walk.hand);
        });
        if (walk.v.length() > WALK.top) walk.v.setLength(WALK.top);
        walk.v.multiplyScalar(Math.pow(WALK.damping, dt * 60));
        rig.position.addScaledVector(walk.v, dt);
        camera.getWorldPosition(walk.head);   // stay in the room
        const offX = walk.head.x - rig.position.x, offZ = walk.head.z - rig.position.z;
        rig.position.x = Math.min(4.5 - 0.35, Math.max(-4.5 + 0.35, rig.position.x + offX)) - offX;
        rig.position.z = Math.min(4.8 - 0.35, Math.max(-4.8 + 0.9, rig.position.z + offZ)) - offZ;
        state.speed = walk.v.length();
    }
    for (const tool of tools) {
        tool.prev = null; tool.vel = new Vector3(); tool.mesh.visible = false;
        tool.mesh.traverse((o) => { if (o.material?.metalness > 0) { o.material.envMap = scene.environment; o.material.envMapIntensity = 0.9; } });   // steel needs something to reflect, even in a dark room
    }
    const holder = { tool: 0, hand: null };
    const rightHand = () => Math.max(0, [...(renderer.xr.getSession()?.inputSources ?? [])].findIndex((s) => s.handedness === 'right'));
    function equip(index, hand = holder.hand ?? rightHand()) {
        if (tools.some((t) => t.lodged)) return;   // pull the axe out first
        for (const t of tools) t.mesh.removeFromParent();
        const tool = tools[index];
        tool.grip = anchors[hand]; tool.hand = hand;
        tool.grip.add(tool.mesh);
        tool.mesh.position.set(0, 0, 0); tool.mesh.quaternion.identity(); tool.mesh.rotation.x = TILT;
        tool.prev = null; tool.vel.set(0, 0, 0); tool.follow = null;
        tool.settle = performance.now() / 1000 + 0.3;   // a swap is not a swing
        holder.tool = index; holder.hand = hand;
        if (state.phase !== 'intro') { sound.swap(); haptic(hand, 0.4, 30); animate(0.25, (f) => tool.mesh.scale.setScalar(0.5 + 0.5 * f + Math.sin(f * Math.PI) * 0.12)); }
    }
    // Tap to swap: a pinch with bare hands, or the trigger, or the grip, swaps axe and hammer into the hand that did it.
    const swap = (i) => { if (state.phase === 'ready' || state.phase === 'play') equip(1 - holder.tool, i); };
    // A press (pinch, trigger or grip): with the free hand near something loose, it grabs; otherwise it swaps the tool.
    // Letting go throws.
    const press = (i) => {
        if (state.phase !== 'ready' && state.phase !== 'play') return;
        if (holder.hand !== null && i !== holder.hand && !grab.held) { const p = reachFor(i); if (p) return startGrab(i, p); }
        swap(i);
    };
    [0, 1].forEach((i) => {
        const c = renderer.xr.getController(i);
        c.addEventListener('selectstart', () => press(i)); c.addEventListener('squeezestart', () => press(i));
        for (const end of ['selectend', 'squeezeend']) c.addEventListener(end, () => { if (grab.held && grab.hand === i) release(); });
    });
    const active = () => tools[holder.tool];

    // New things to break, placed where the room had a gap for them, each a rigid body: knock them off, they fall, they break.
    const back = 4.8, shelf = 1.2125, { RAPIER, world: physicsWorld } = physics;
    const place = (object, x, y, z, ry = 0) => { object.position.set(x, y, z); object.rotation.y = ry; scene.add(object); return object; };
    const lathe = (r, h) => (s) => new CylinderGeometry(s.x * r, s.x * 0.42, s.y * h, 16, 3);
    const props = [
        ...[-2.1, 0, 2.1].map((z) => destruction.addProp(place(Props.pot(), -4.42, 0.95, z), { kind: 'pot', material: 'ceramic', mass: 1.2, hp: 0.3, brittle: 25, colors: [0xb5562f, 0x9a4626], inside: 0xd9a27a, proxy: lathe(0.42, 0.55) })),
        destruction.addProp(place(Props.vase(), -3.0, shelf + 0.005, back - 0.2), { kind: 'vase', material: 'ceramic', mass: 0.8, hp: 0.25, brittle: 18, colors: [0xf4f1ea, 0x2b4f9a], proxy: lathe(0.4, 1) }),
        destruction.addProp(place(Props.vase(0x9a2b2b), 3.15, shelf + 0.005, back - 0.2), { kind: 'vase', material: 'ceramic', mass: 0.8, hp: 0.25, brittle: 18, colors: [0xf4f1ea, 0x9a2b2b], proxy: lathe(0.4, 1) }),
        destruction.addProp(place(Props.luckyCat(), 1.2, shelf + 0.005, back - 0.22, Math.PI), { kind: 'cat', material: 'ceramic', mass: 0.9, hp: 0.25, brittle: 18, colors: [0xf7f3ea, 0xf7f3ea, 0xc8282c, 0xe2b23c], shape: 'ball', proxy: (s) => new SphereGeometry(Math.min(s.x, s.y) * 0.5, 16, 12) }),
        destruction.addProp(place(Props.bust(), -0.9, shelf + 0.005, back - 0.2, Math.PI), { kind: 'bust', material: 'plaster', mass: 6, hp: 0.8, brittle: 160, colors: [0xe8e2d4, 0xd5cebf], inside: 0xcfc8b8, proxy: (s) => new SphereGeometry(Math.min(s.x, s.y) * 0.5, 14, 10) }),
        destruction.addProp(place(Props.volcano(), 0.4, shelf + 0.005, back - 0.22), { kind: 'volcano', material: 'plaster', mass: 2.5, hp: 0.6, brittle: 90, colors: [0x8a6b55, 0x8a6b55, 0xd9481c], inside: 0xff6a2a, proxy: (s) => new ConeGeometry(s.x * 0.5, s.y, 14, 2) }),
    ];
    const hat = destruction.addProp(room.hat, { kind: 'hat', material: 'metal', mass: 0.4, shape: 'ball' });
    const ext = destruction.addProp(room.ext, { kind: 'ext', material: 'metal', mass: 4, hp: 0.25 });
    const books = room.books.map((b) => destruction.addProp(b, { kind: 'book', material: 'paper', mass: 0.4 }));
    const plunger = destruction.addProp(room.plunger, { kind: 'plunger', material: 'metal', mass: 2.5 });
    const cat = props.find((p) => p.kind === 'cat'), principal = props.find((p) => p.kind === 'bust'), pots = props.filter((p) => p.kind === 'pot');

    // The tool and the free hand are kinematic bodies: they shove what they touch, slowly or not.
    const kinematic = (radius) => { const b = physicsWorld.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, -10, 0)); physicsWorld.createCollider(RAPIER.ColliderDesc.ball(radius).setDensity(800), b); return b; };
    const toolBody = kinematic(0.055), handBody = kinematic(0.05);
    // They only push when moving gently: a fast swing is a blow (an impulse from its momentum), not a bulldozer.
    // Parking and unparking teleport (no inferred velocity), so nothing gets swept up on the way.
    function steer(body, at, gentle) {
        if (!at || !gentle) { if (!body.userData) { body.setTranslation({ x: 0, y: -10, z: 0 }, true); body.userData = 'parked'; } return; }
        if (body.userData) { body.setTranslation({ x: at.x, y: at.y, z: at.z }, true); body.userData = null; }
        else body.setNextKinematicTranslation({ x: at.x, y: at.y, z: at.z });
    }
    const handLast = new Vector3();
    const ours = (c) => c.parent() !== toolBody && c.parent() !== handBody;

    // Chips: small cosmetic bits thrown off every blow (the real pieces are rigid bodies; these are the spray).
    const N = 400, white = (roughness, extra = {}) => new MeshStandardMaterial({ color: 0xffffff, roughness, ...extra });
    const hidden = new Matrix4().makeScale(0, 0, 0);
    const debris = {
        wood: makePool(new BoxGeometry(1, 1, 1), white(0.65)),
        glass: makePool(new BoxGeometry(1, 1, 1), white(0.04, { metalness: 0.9, transparent: true, opacity: 0.75 })),
        shard: makePool(new BoxGeometry(1, 1, 1), white(0.3)),
        lump: makePool(new IcosahedronGeometry(0.5, 0), white(0.95, { flatShading: true })),
    };
    const POOL = { wood: 'wood', glass: 'glass', ceramic: 'shard', paper: 'shard', slate: 'lump', plaster: 'lump', metal: 'shard' };
    const CHIPS = { wood: [0xa77548, 0xd8b088], glass: [0xdff3ff], ceramic: [0xf4f1ea, 0xd9a27a], plaster: [0xe8e2d4, 0xd5cebf], slate: [0x2a3530, 0x5a5e62], metal: [0xffd080], paper: [0xf4efe2] };
    function makePool(geometry, material) {
        const mesh = new InstancedMesh(geometry, material, N);
        mesh.castShadow = false; mesh.frustumCulled = false;
        for (let i = 0; i < N; i++) { mesh.setMatrixAt(i, hidden); mesh.setColorAt(i, new Color(0xffffff)); }
        scene.add(mesh);
        return { mesh, next: 0, parts: Array.from({ length: N }, () => ({ alive: false, p: new Vector3(), v: new Vector3(), q: new Quaternion(), w: new Vector3(), s: new Vector3() })) };
    }
    const spin = new Quaternion(), dummy = new Object3D(), tint = new Color(), rnd = () => Math.random() - 0.5;
    function burst(material, at, dir, n, power, colors = CHIPS[material] ?? [0xffffff]) {
        const name = POOL[material] ?? 'shard', pool = debris[name];
        for (let k = 0; k < n; k++) {
            const i = pool.next, d = pool.parts[i]; pool.next = (pool.next + 1) % N;
            d.alive = true; d.rest = 0; d.material = material;
            d.p.copy(at).add(new Vector3(rnd(), rnd(), rnd()).multiplyScalar(0.05));
            d.v.copy(dir).multiplyScalar(power * (0.4 + Math.random())).add(new Vector3(rnd() * 2, Math.random() * 2, rnd() * 2).multiplyScalar(0.5 + power * 0.35));
            d.w.set(rnd(), rnd(), rnd()).multiplyScalar(22);
            d.q.random();
            const r = Math.random();
            if (material === 'wood') d.s.set(0.006 + r * 0.012, 0.006, 0.04 + Math.random() * 0.06);   // splinters
            else if (material === 'glass') d.s.set(0.01 + r * 0.03, 0.002, 0.01 + Math.random() * 0.03);
            else if (material === 'plaster' || material === 'slate') d.s.setScalar(0.006 + r * r * 0.025);
            else d.s.set(0.008 + r * 0.02, 0.004, 0.008 + Math.random() * 0.02);
            pool.mesh.setColorAt(i, tint.set(colors[k % colors.length]).offsetHSL(0, 0, rnd() * 0.08));
        }
        pool.mesh.instanceColor.needsUpdate = true;
    }

    // Dust, powder and sparks: soft sprites that drift, spread and fade. Plaster and drywall make clouds; metal makes sparks.
    function makeCloud(n, blending) {
        const g = new BufferGeometry(), pos = new Float32Array(n * 3), col = new Float32Array(n * 3), a = new Float32Array(n), size = new Float32Array(n);
        g.setAttribute('position', new Float32BufferAttribute(pos, 3)); g.setAttribute('color', new Float32BufferAttribute(col, 3));
        g.setAttribute('alpha', new Float32BufferAttribute(a, 1)); g.setAttribute('size', new Float32BufferAttribute(size, 1));
        const points = new Points(g, new ShaderMaterial({
            uniforms: { map: { value: Props.puffTexture() }, scale: { value: 900 } }, transparent: true, depthWrite: false, blending, vertexColors: true,
            vertexShader: 'attribute float alpha; attribute float size; uniform float scale; varying float vA; varying vec3 vC; void main() { vA = alpha; vC = color; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }',
            fragmentShader: 'uniform sampler2D map; varying float vA; varying vec3 vC; void main() { gl_FragColor = vec4(vC, vA * texture2D(map, gl_PointCoord).a); }',
        }));
        points.frustumCulled = false;
        scene.add(points);
        return { g, pos, col, a, size, n, next: 0, vel: new Float32Array(n * 3), life: new Float32Array(n), max: new Float32Array(n), grow: new Float32Array(n), peak: new Float32Array(n), drag: new Float32Array(n) };
    }
    const dust = makeCloud(900, NormalBlending), sparks = makeCloud(300, AdditiveBlending);
    function puff(cloud, at, n, { color = 0xd8d2c4, spread = 0.1, speed = 0.4, size = 0.12, life = 2.5, up = 0.2, grow = 0.5, alpha = 0.45, dir = null, drag = 1.6 }) {
        for (let k = 0; k < n; k++) {
            const i = cloud.next; cloud.next = (cloud.next + 1) % cloud.n;
            cloud.pos.set([at.x + rnd() * spread, at.y + rnd() * spread, at.z + rnd() * spread], i * 3);
            const v = new Vector3(rnd(), rnd() + up, rnd()).normalize().multiplyScalar(speed * (0.3 + Math.random()));
            if (dir) v.addScaledVector(dir, speed * (0.5 + Math.random()));
            cloud.vel.set(v.toArray(), i * 3);
            cloud.col.set(tint.set(color).offsetHSL(0, 0, rnd() * 0.06).toArray(), i * 3);
            cloud.life[i] = cloud.max[i] = life * (0.6 + Math.random() * 0.6);
            cloud.size[i] = size * (0.5 + Math.random()); cloud.grow[i] = grow; cloud.peak[i] = alpha; cloud.drag[i] = drag;
        }
    }
    function stepCloud(cloud, dt, gravity) {
        for (let i = 0; i < cloud.n; i++) {
            if (cloud.life[i] <= 0) { cloud.a[i] = 0; continue; }
            cloud.life[i] -= dt;
            const o = i * 3, f = cloud.life[i] / cloud.max[i], drag = Math.exp(-dt * cloud.drag[i]);
            cloud.vel[o] *= drag; cloud.vel[o + 2] *= drag; cloud.vel[o + 1] = cloud.vel[o + 1] * drag - gravity * dt;
            cloud.pos[o] += cloud.vel[o] * dt; cloud.pos[o + 1] = Math.max(0.02, cloud.pos[o + 1] + cloud.vel[o + 1] * dt); cloud.pos[o + 2] += cloud.vel[o + 2] * dt;
            cloud.size[i] *= 1 + cloud.grow[i] * dt;
            cloud.a[i] = cloud.peak[i] * Math.min(1, (1 - f) * 8) * f;   // quick in, slow out
        }
        for (const name of ['position', 'color', 'alpha', 'size']) cloud.g.attributes[name].needsUpdate = true;
    }

    // Plaster walls keep their scars: a pool of crater decals.
    const craterMat = new MeshStandardMaterial({ map: Props.craterTexture(), transparent: true, roughness: 1, polygonOffset: true, polygonOffsetFactor: -3, depthWrite: false });
    const craters = Array.from({ length: 40 }, () => { const c = new Mesh(new PlaneGeometry(1, 1), craterMat); c.visible = false; c.receiveShadow = true; scene.add(c); return c; });
    let nextCrater = 0;
    function crater(point, n, e, piece) {   // a dent where a blow didn't break through; it goes when the piece does
        const c = craters[nextCrater++ % craters.length];
        c.visible = true; c.position.copy(point).addScaledVector(n, 0.004);
        c.lookAt(point.clone().add(n)); c.rotateZ(Math.random() * 6);
        c.scale.setScalar(0.08 + e * 0.18);
        c.userData.piece = piece;
    }

    // Sound: synthesised per material, through a soft limiter so a combo of ten breaks doesn't clip.
    const ctx = () => audio()?.ctx;
    let noise = null, bus = null;
    const out = (c) => {
        if (!bus) {   // through the room's reverb and the master (which muffles in slow motion and as he falls asleep)
            bus = new DynamicsCompressorNode(c, { threshold: -14, knee: 8, ratio: 6, attack: 0.003, release: 0.2 });
            const a = audio();
            bus.connect(a?.master ?? c.destination);
            if (a?.reverb) bus.connect(a.reverb);
        }
        return bus;
    };
    function hiss(c, { dur, type, freq, to = freq, gain, q = 1, delay = 0 }) {
        if (!noise) { noise = c.createBuffer(1, c.sampleRate, c.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
        const t = c.currentTime + delay, s = new AudioBufferSourceNode(c, { buffer: noise, loop: true }), f = new BiquadFilterNode(c, { type, frequency: freq, Q: q }), g = new GainNode(c, { gain });
        f.frequency.exponentialRampToValueAtTime(to, t + dur); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        s.connect(f).connect(g).connect(out(c)); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
    }
    function ping(c, freq, dur, gain, delay = 0, type = 'sine', to = freq) {
        const t = c.currentTime + delay, o = new OscillatorNode(c, { type, frequency: freq }), g = new GainNode(c, { gain });
        if (to !== freq) o.frequency.exponentialRampToValueAtTime(to, t + dur);
        g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(out(c)); o.start(t); o.stop(t + dur + 0.05);
    }
    const sound = {
        wood(e, broke) {   // a low thock and a dry crunch; a break is a long tearing crackle
            const c = ctx(); if (!c) return;
            ping(c, 150 + Math.random() * 40, 0.18, 0.5 * e);
            for (let k = 0; k < (broke ? 12 : 3); k++) hiss(c, { dur: 0.05, type: 'bandpass', freq: 700 + Math.random() * 1600, gain: 0.5 * e, q: 3, delay: Math.random() * (broke ? 0.3 : 0.05) });
            if (broke) hiss(c, { dur: 0.6, type: 'lowpass', freq: 900, to: 120, gain: 0.6 });
        },
        glass(e, broke) {   // a bright chime, then the shards tinkling down
            const c = ctx(); if (!c) return;
            hiss(c, { dur: broke ? 0.5 : 0.12, type: 'highpass', freq: 4000, gain: 0.5 * e });
            for (let k = 0; k < (broke ? 12 : 3); k++) ping(c, 2200 + Math.random() * 4800, 0.25 + Math.random() * 0.5, 0.08, Math.random() * (broke ? 0.5 : 0.05));
        },
        ceramic(e, broke) {   // higher and shorter than glass: a clink, a crunch, a scatter of tiny tinkles
            const c = ctx(); if (!c) return;
            hiss(c, { dur: 0.08, type: 'bandpass', freq: 3200, gain: 0.55 * e, q: 2 });
            ping(c, 1800 + Math.random() * 600, 0.12, 0.18 * e, 0, 'triangle');
            if (broke) for (let k = 0; k < 16; k++) ping(c, 3500 + Math.random() * 5000, 0.06 + Math.random() * 0.1, 0.06, Math.random() * 0.35);
        },
        plaster(e, broke) {   // a soft, dead thud and a crumble that trickles on
            const c = ctx(); if (!c) return;
            ping(c, 75, 0.25, 0.7 * e, 0, 'sine', 50);
            hiss(c, { dur: 0.3, type: 'lowpass', freq: 500, to: 150, gain: 0.6 * e });
            for (let k = 0; k < (broke ? 10 : 3); k++) hiss(c, { dur: 0.06, type: 'lowpass', freq: 900 + Math.random() * 600, gain: 0.2, delay: 0.05 + Math.random() * (broke ? 0.7 : 0.25) });
        },
        drywall(e, broke) {   // papery crunch over a hollow thump
            const c = ctx(); if (!c) return;
            ping(c, 95, 0.2, 0.6 * e, 0, 'sine', 70);
            hiss(c, { dur: 0.14, type: 'bandpass', freq: 1500, to: 900, gain: 0.6 * e, q: 1.5 });
            if (broke) { hiss(c, { dur: 1.2, type: 'lowpass', freq: 700, to: 100, gain: 0.7 }); for (let k = 0; k < 8; k++) hiss(c, { dur: 0.08, type: 'bandpass', freq: 1200 + Math.random() * 800, gain: 0.3, delay: Math.random() * 0.5 }); }
        },
        metal(e) {   // a clang: inharmonic partials that ring
            const c = ctx(); if (!c) return;
            const f = 380 + Math.random() * 80;
            [1, 2.76, 5.4, 8.93].forEach((k, j) => ping(c, f * k, 0.9 / (j + 1), 0.22 * e / (j + 1)));
            hiss(c, { dur: 0.04, type: 'highpass', freq: 3000, gain: 0.4 * e });
        },
        slate(e) { const c = ctx(); if (!c) return; ping(c, 110, 0.15, 0.6 * e); hiss(c, { dur: 0.25, type: 'lowpass', freq: 400, gain: 0.3 * e }); },
        bonk() { const c = ctx(); if (!c) return; ping(c, 700, 0.18, 0.35, 0, 'sine', 180); ping(c, 160, 0.6, 0.2, 0.05, 'triangle', 240); },
        squeak() { const c = ctx(); if (!c) return; ping(c, 1300, 0.12, 0.08, 0, 'sine', 2100); },
        powder() { const c = ctx(); if (!c) return; hiss(c, { dur: 2.6, type: 'bandpass', freq: 2500, to: 1200, gain: 0.45, q: 0.8 }); ping(c, 90, 0.4, 0.4, 0, 'sine', 40); },
        erupt() { const c = ctx(); if (!c) return; for (let k = 0; k < 10; k++) ping(c, 120 + Math.random() * 200, 0.15, 0.2, k * 0.08 + Math.random() * 0.04, 'sine', 400); hiss(c, { dur: 1.2, type: 'lowpass', freq: 600, gain: 0.3 }); },
        lodge() {   // thunk, then the handle twangs
            const c = ctx(); if (!c) return;
            ping(c, 115, 0.35, 0.7); hiss(c, { dur: 0.12, type: 'bandpass', freq: 500, gain: 0.6, q: 2 });
            const t = c.currentTime, o = new OscillatorNode(c, { type: 'sawtooth', frequency: 105 }), lfo = new OscillatorNode(c, { frequency: 9 }), depth = new GainNode(c, { gain: 12 });
            const f = new BiquadFilterNode(c, { type: 'lowpass', frequency: 700 }), g = new GainNode(c, { gain: 0.16 });
            g.gain.setValueAtTime(0.16, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
            lfo.connect(depth).connect(o.frequency); o.connect(f).connect(g).connect(out(c));
            o.start(t); lfo.start(t); o.stop(t + 0.75); lfo.stop(t + 0.75);
        },
        yank() { const c = ctx(); if (!c) return; hiss(c, { dur: 0.22, type: 'bandpass', freq: 1400, to: 380, gain: 0.5, q: 4 }); ping(c, 260, 0.12, 0.4, 0.15); },
        glance() { const c = ctx(); if (!c) return; hiss(c, { dur: 0.18, type: 'bandpass', freq: 2600, to: 1500, gain: 0.3, q: 6 }); },
        tink(material) { const c = ctx(); if (!c) return; ping(c, (material === 'glass' ? 3000 : 2200) + Math.random() * 4000, 0.1, 0.025); },
        swap() { const c = ctx(); if (!c) return; hiss(c, { dur: 0.16, type: 'bandpass', freq: 800, to: 2400, gain: 0.25, q: 2 }); ping(c, 420, 0.08, 0.15, 0.12, 'triangle'); },
        // The cinematic layer: the deep boom under a heavy break, the taiko that builds with a combo, the swell into slow motion,
        // and the rising tension of the last ten seconds.
        boom(e) { const c = ctx(); if (!c) return; ping(c, 62, 1.5, 0.25 + 0.5 * e, 0, 'sine', 30); hiss(c, { dur: 1.3, type: 'lowpass', freq: 260, to: 50, gain: 0.25 + 0.45 * e }); },
        taiko(level) {
            const c = ctx(); if (!c) return;
            const g = Math.min(0.9, 0.3 + level * 0.07);
            ping(c, 96, 0.75, g, 0, 'sine', 47); hiss(c, { dur: 0.14, type: 'lowpass', freq: 420, to: 110, gain: g * 0.7 });
            if (level >= 4) ping(c, 1700, 0.05, 0.14, 0.13, 'square', 1500);   // the rim: ka
            if (level >= 8) { ping(c, 92, 0.6, g * 0.8, 0.26, 'sine', 45); hiss(c, { dur: 0.12, type: 'lowpass', freq: 400, to: 110, gain: g * 0.5, delay: 0.26 }); }
        },
        whoom() {
            const c = ctx(); if (!c) return;
            const t = c.currentTime, s = new AudioBufferSourceNode(c, { buffer: noise, loop: true }), f = new BiquadFilterNode(c, { type: 'lowpass', frequency: 150, Q: 2 }), g = new GainNode(c, { gain: 0.0001 });
            f.frequency.exponentialRampToValueAtTime(2600, t + 0.45); g.gain.exponentialRampToValueAtTime(0.35, t + 0.42); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.6);
            s.connect(f).connect(g).connect(out(c)); s.start(t); s.stop(t + 0.65);
            ping(c, 45, 1.6, 0.45, 0.3, 'sine', 32);
        },
        riser(seconds) {   // two detuned saws climbing an octave, opening up, getting louder; cut dead at the bell
            const c = ctx(); if (!c) return () => {};
            const t = c.currentTime, f = new BiquadFilterNode(c, { type: 'lowpass', frequency: 250, Q: 3 }), g = new GainNode(c, { gain: 0.0001 });
            f.frequency.exponentialRampToValueAtTime(2400, t + seconds); g.gain.exponentialRampToValueAtTime(0.12, t + seconds);
            const os = [70, 70.8, 140.5].map((hz) => { const o = new OscillatorNode(c, { type: 'sawtooth', frequency: hz }); o.frequency.exponentialRampToValueAtTime(hz * 2, t + seconds); o.connect(f); o.start(t); return o; });
            f.connect(g).connect(out(c));
            return () => { const n = c.currentTime; g.gain.cancelScheduledValues(n); g.gain.setValueAtTime(g.gain.value, n); g.gain.linearRampToValueAtTime(0, n + 0.04); os.forEach((o) => o.stop(n + 0.06)); };
        },
        grab(heavy) { const c = ctx(); if (!c) return; ping(c, 220 - heavy * 120, 0.12, 0.25, 0, 'triangle', 140 - heavy * 60); hiss(c, { dur: 0.08, type: 'lowpass', freq: 900, gain: 0.2 }); },
        groan() {   // timber and plaster giving way: a low, wavering creak, then the crackle of it letting go
            const c = ctx(); if (!c) return;
            const t = c.currentTime, o = new OscillatorNode(c, { type: 'sawtooth', frequency: 58 }), lfo = new OscillatorNode(c, { frequency: 5.5 }), depth = new GainNode(c, { gain: 9 });
            const f = new BiquadFilterNode(c, { type: 'bandpass', frequency: 320, Q: 5 }), g = new GainNode(c, { gain: 0.0001 });
            o.frequency.linearRampToValueAtTime(41, t + 0.5); g.gain.exponentialRampToValueAtTime(0.32, t + 0.12); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
            lfo.connect(depth).connect(o.frequency); o.connect(f).connect(g).connect(out(c)); o.start(t); lfo.start(t); o.stop(t + 0.6); lfo.stop(t + 0.6);
            for (let k = 0; k < 10; k++) hiss(c, { dur: 0.05, type: 'bandpass', freq: 500 + Math.random() * 1500, gain: 0.25, q: 3, delay: 0.25 + Math.random() * 0.25 });
        },
        bell(notes) { const c = ctx(); if (!c) return; notes.forEach((f, k) => { ping(c, f, 1.6, 0.25, k * 0.55); ping(c, f * 2.76, 0.8, 0.05, k * 0.55); }); },
    };
    const WESTMINSTER = [329.6, 261.6, 293.7, 196.0];   // the Japanese school bell

    // Masking tape round the handle above the fist: time left, where your eyes already are.
    const writeTag = (text, hot) => { for (const tool of tools) tool.mesh.userData.band(text, hot); };
    writeTag('1:30');

    // The report card: after the bell, a sheet of school stationery floats up in front of you.
    const report = new Mesh(new PlaneGeometry(0.42, 0.56), new MeshBasicMaterial({ transparent: true, opacity: 0, side: 2, toneMapped: false }));   // paper white, not graded with the room
    report.visible = false;
    scene.add(report);
    function showReport({ total, kinds, grade } = state.summary) {
        const pct = state.hits ? Math.round(state.right / state.hits * 100) : 0;
        const comment = total > 30000 ? 'Your child has demolished the classroom, the corridor and, we suspect, the concept of school.' : total > 15000 ? 'Shows real promise. The school does not.' : total > 5000 ? 'Tries hard. Breaks things. Could break more things.' : 'Your child was gentle with the furniture. We are worried.';
        report.material.map?.dispose();
        report.material.map = letter('REPORT CARD: DEMOLITION', `Score: ${total}\nMaterials broken: ${kinds} of 6\nThings destroyed: ${state.broken}\nRight tool for the job: ${pct}%\nFollow-through: ${state.followThroughs} swings\nBest combo: x${state.bestCombo}\n\nGRADE: ${grade.split('.')[0]}\n\nTeacher's comment: ${comment}\n\nPinch (or pull the trigger) to fall asleep again.`);
        report.material.needsUpdate = true;
        const head = camera.getWorldPosition(new Vector3()), ahead = camera.getWorldDirection(new Vector3()).setY(0).normalize();
        report.position.copy(head).addScaledVector(ahead, 0.62).setY(head.y - 0.38);   // low, like a sheet held in front of you: the class stays in view above it
        report.lookAt(head.x, head.y, head.z);
        report.visible = true;
        const y0 = report.position.y;
        animate(1.2, (f) => { report.material.opacity = f; report.position.y = y0 - 0.15 * (1 - f) ** 2; });
    }

    const fresh = () => ({ bestCombo: 0, slowUntil: 0, dust: 0, score: 0, combo: 0, lastBreak: -9, broken: 0, materials: new Set(), right: 0, hits: 0, lodges: 0, followThroughs: 0, wrong: {}, said: new Set(), boardHits: 0, powderUntil: 0 });
    const state = { phase: 'intro', endsAt: 0, ...fresh() };
    const haptic = (i, v, ms) => renderer.xr.getSession()?.inputSources[i]?.gamepad?.hapticActuators?.[0]?.pulse?.(v, ms);
    const anims = [];
    const animate = (dur, run, done) => anims.push({ t: 0, dur, run, done });

    // How the blow lands, not just how fast. The axe wants its edge leading and the surface square-on; the flat of the
    // blade is a slap. The hammer forgives the angle, but not a glancing blow. The surface and its normal are real:
    // a ray along the path the head took this frame finds them.
    const edge = new Vector3(), toolQ = new Quaternion();
    let lastBlow = null;   // which blow a break that follows belongs to: tool, how well it was chosen, how hard
    function hit(tool, i, piece, point, n, dir, speed, now) {
        if (now - (piece.lastHit ?? -9) < 0.15) return false;
        piece.lastHit = now;
        tool.mesh.getWorldQuaternion(toolQ);
        const align = edge.set(0, -1, 0).applyQuaternion(toolQ).dot(dir);   // 1: edge (or hammer face) leading the swing
        const square = Math.max(0, -n.dot(dir));   // 1: straight in; 0: skimming along the surface
        const quality = tool.name === 'axe' ? 0.25 + 0.75 * Math.max(0, align) ** 1.5 : 0.6 + 0.4 * Math.abs(align);
        const e = Math.min(1.3, (speed - 0.8) / 5) * quality * (0.35 + 0.65 * square);   // 0: a tap; 1: a full committed swing, edge first, square on
        const material = piece.material, brittle = material === 'glass' || material === 'ceramic';
        if (square < 0.25 && !brittle) { sound.glance(); haptic(i, 0.2, 25); state.score += 5; push(piece, point, dir, TOOL_MASS[tool.name] * speed * 0.15); return true; }   // a glancing blow scrapes off
        const affinity = AFFINITY[tool.name][material] ?? 0.5;
        state.hits++;
        if (affinity === 1) state.right++;
        else if (affinity < 0.9 && HINTS[material] && (state.wrong[material] = (state.wrong[material] ?? 0) + 1) >= 3 && !state.said.has(material)) { state.said.add(material); say(HINTS[material]); }
        haptic(i, Math.min(1, 0.3 + e), 20 + e * 60);
        lastBlow = { tool: tool.name, affinity, e, at: now };
        (sound[material] ?? sound.wood)(Math.max(0.3, e), false);
        burst(material, point, n.clone().add(dir).normalize(), Math.round(3 + e * 10), 1 + speed * 0.3);
        if (material === 'plaster' || material === 'slate') puff(dust, point, 6 + e * 18, { color: material === 'slate' ? 0xb8bcb4 : 0xe4ded0, speed: 0.3 + e * 0.6, size: 0.12, dir: n });
        if (material === 'metal') puff(sparks, point, 10 + e * 20, { color: 0xffb050, speed: 2 + e * 3, size: 0.012, life: 0.4, alpha: 1, grow: 0, drag: 0.5, dir: n });
        push(piece, point, dir, TOOL_MASS[tool.name] * speed * (0.3 + 0.5 * e));   // the blow's momentum: chairs topple, desks skid a little
        if (piece.kind === 'hat') { sound.bonk(); state.materials.add('metal'); state.score += 50; if (!state.said.has('hat')) { state.said.add('hat'); say('IT IS A HELMET. THAT IS THE PROBLEM.'); } return true; }
        if (piece.kind === 'ext' && !ext.spent && e > 0.15) { ext.spent = true; sound.powder(); state.powderUntil = now + 2.6; say('USE BEFORE. NOT AFTER.'); score(ext, 'ext', 'metal', e, 1); return true; }
        if (piece.hp === Infinity) return true;
        piece.hp -= e * affinity;
        tool.follow = { piece, at: now + 0.1, speed, e, affinity, dir: dir.clone(), point: point.clone(), n: n.clone() };
        // A good axe blow into wood that holds: the blade bites and stays.
        if (tool.name === 'axe' && material === 'wood' && piece.hp > 0 && align > 0.55 && square > 0.5 && e > 0.2 && (piece.anchored || piece.parts)) return lodge(tool, i, piece, point, dir, now), true;
        if (piece.hp > 0) {   // a blow that didn't break it: a dent, a crack, a wobble
            if ((material === 'plaster' || material === 'slate' || material === 'glass') && e > 0.08) crater(point, n, e, piece);
            if (piece.object) piece.wobble = 1;
            state.score += Math.round(10 * e * (affinity === 1 ? 2 : 1));
            return true;
        }
        breakPiece(piece, point, dir, e);
        return true;
    }
    function push(piece, point, dir, impulse) {   // N·s, no more than would send it off at 3 m/s
        const body = piece.body;
        if (!body || !body.isDynamic?.()) return;
        body.applyImpulseAtPoint(dir.clone().multiplyScalar(Math.min(impulse, body.mass() * 3)), point, true);
    }
    function breakPiece(piece, point, dir, e) {
        for (const other of tools) if (other.lodged?.piece === piece) free(other, false);
        for (const c of craters) if (c.userData.piece === piece) c.visible = false;
        if (piece.parts) destruction.dismantle(piece, point, dir, e);   // desks and chairs come apart, then the board that took it splits
        else if (piece.prop) destruction.breakProp(piece, point, dir, e);
        else destruction.fracture(piece, point, dir, e);
        if (piece.parts) onBreak(piece, { point, energy: e });
    }

    // ---- Cinema ---------------------------------------------------------------------------------------------------
    // Hit-stop: the world freezes for a few hundredths of a second when something heavy goes (never the camera: this is VR).
    // Bullet-time for the landmarks: the board, the lectern, the first wall broken through, a big combo. The sound muffles
    // and swells with it. Light pours through every hole in the walls.
    const shafts = createShafts(scene, light);
    const cine = { stop: 0, bulletAt: -9, bulletDur: 1, bulletDepth: 1 };
    function timeScale(t) {
        let s = t < state.slowUntil ? 0.15 + 0.85 * ((1.8 - (state.slowUntil - t)) / 1.8) ** 3 : 1;   // the final bell eases time back in
        if (t < cine.stop) s = Math.min(s, 0.03);
        const b = (t - cine.bulletAt) / cine.bulletDur;
        if (b >= 0 && b < 1) s = Math.min(s, cine.bulletDepth + (1 - cine.bulletDepth) * b ** 2.4);
        return s;
    }
    function bullet(now, depth = 0.22, dur = 1.0) {
        if (now - cine.bulletAt < cine.bulletDur + 1.5) return;   // not back to back: it stops meaning anything
        Object.assign(cine, { bulletAt: now, bulletDur: dur, bulletDepth: depth });
        sound.whoom();
        const a = audio();
        if (a?.master) { const f = a.master.frequency, n = a.ctx.currentTime; f.cancelScheduledValues(n); f.setTargetAtTime(700, n, 0.03); f.setTargetAtTime(18000, n + dur * 0.6, 0.25); }
    }
    const LANDMARKS = ['board', 'lectern', 'desk', 'bust', 'cat', 'volcano', 'speaker', 'door'];
    function moment(piece, kind, point, energy) {
        const now = performance.now() / 1000, heavy = energy > 0.65 || (piece.volume ?? 0) > 0.04 || !!piece.parts;
        if (heavy) { cine.stop = now + 0.035 + 0.05 * Math.min(1, energy); sound.boom(Math.min(1, energy)); shake?.(point, Math.min(1, energy + 0.2)); }
        if (LANDMARKS.includes(kind) && !state.said.has(`moment:${kind}`)) { state.said.add(`moment:${kind}`); bullet(now); }
        else if ([5, 10, 15, 20].includes(state.combo)) bullet(now, 0.3, 0.8);
        if (state.combo >= 2) sound.taiko(state.combo);
    }
    // Is there a hole through to outside where this broke? Look along the wall's thickness, through what is still fixed.
    function holeCheck(piece, point) {
        const s = piece.size, e = piece.matrix.elements, pos = new Vector3(e[12], e[13], e[14]);
        const axis = s.x < s.y && s.x < s.z ? 'x' : s.y < s.z ? 'y' : 'z';
        if (axis === 'y' || Math.abs(pos[axis]) < 4.2) return;   // only the outer walls open onto anything
        const inward = new Vector3(); inward[axis] = -Math.sign(pos[axis]);
        const from = point.clone(); from[axis] = pos[axis] + inward[axis] * 0.6;
        const ray = new RAPIER.Ray({ x: from.x, y: from.y, z: from.z }, { x: -inward.x, y: 0, z: -inward.z });
        if (physicsWorld.castRay(ray, 1.2, true, undefined, undefined, undefined, undefined, (c) => !!destruction.pieceOf(c)?.anchored)) return;
        const at = point.clone(); at[axis] = pos[axis] - inward[axis] * (s[axis] / 2 + 0.05);
        const size = Math.min(...['x', 'y', 'z'].filter((a) => a !== axis).map((a) => s[a])) * 0.9;
        shafts.open(at, inward, size, axis === 'x' && pos.x < 0 ? SUN : null);
        if (!state.said.has('moment:through')) { state.said.add('moment:through'); bullet(performance.now() / 1000, 0.25, 1.2); say('YOU CAN SEE THE PARK NOW.'); }
    }

    // Every break, by tool or by gravity, lands here: sound, dust, the haze in the light, the score and the board's opinion.
    function onBreak(piece, { point, energy = 0.5 }) {
        const now = performance.now() / 1000, material = piece.material, kind = piece.kind;
        const blow = lastBlow && now - lastBlow.at < 0.6 ? lastBlow : null;
        (sound[material] ?? sound.wood)(Math.max(0.4, energy), true);
        renderer.shadowMap.needsUpdate = true;
        if (material === 'plaster' || material === 'slate') { puff(dust, point, 50, { color: material === 'slate' ? 0xb8bcb4 : 0xe4ded0, spread: 0.25, speed: 0.6, size: 0.22, life: 4 }); state.dust = Math.min(2.6, state.dust + 0.25); }
        if (kind === 'volcano') { sound.erupt(); for (let k = 0; k < 6; k++) setTimeout(() => puff(dust, point.clone().setY(point.y + 0.1), 12, { color: k % 2 ? 0xff6a2a : 0xffe6a0, speed: 1.6, up: 3, size: 0.1, life: 2, dir: new Vector3(0, 1, 0) }), k * 90); }
        if (kind === 'pot') burst('plaster', point, new Vector3(0, 1, 0), 18, 1.5, [0x3a2414, 0x4a301a, 0x3f7a33]);   // soil, and the plant
        if (piece.generation > 0 && kind !== 'pane') { if (piece.anchored !== undefined && ['wall', 'post', 'door', 'board', 'frame'].includes(kind)) setTimeout(() => holeCheck(piece, point), 450); return; }   // breaking up rubble: the sound and the dust, not the score
        score(piece, kind, material, blow?.e ?? energy, blow?.affinity ?? 1, !blow);
        moment(piece, kind, point, blow?.e ?? energy);
        if (['wall', 'post', 'door', 'board', 'frame', 'speaker'].includes(kind) && !piece.parts && !piece.prop) setTimeout(() => holeCheck(piece, point), 450);
        if (kind === 'wall' && Math.abs(point.x - 2.0) < 0.6 && Math.abs(point.y - 2.0) < 0.5 && point.z > 4) return say('OK. IT WAS A HOLE.');
        const quips = QUIPS[kind];
        if (quips && (Math.random() < 0.45 || !state.said.has(kind))) { state.said.add(kind); say(state.combo > 2 ? `COMBO x${state.combo}! ${quips[Math.floor(Math.random() * quips.length)]}` : quips[Math.floor(Math.random() * quips.length)]); }
        else if (state.combo > 2) say(`COMBO x${state.combo}!`);
    }
    function score(piece, kind, material, e, affinity, chain = false) {
        const now = performance.now() / 1000;
        state.combo = now - state.lastBreak < 2.5 ? state.combo + 1 : 1;
        state.bestCombo = Math.max(state.bestCombo, state.combo);
        state.lastBreak = now;
        state.broken++; state.materials.add(material);
        state.dust = Math.min(2.6, state.dust + 0.12);   // what breaks hangs in the air, and in the light
        const base = VALUE[kind] ?? 100, gained = Math.round(base * (affinity === 1 ? 1.5 : 1) * Math.min(8, state.combo) * (0.6 + Math.min(1.3, e) * 0.5) * (chain ? 1.5 : 1));   // knock-on breaks pay extra
        state.score += gained;
        flip();
    }
    destruction.onBreak = onBreak;
    // A section of wall with nothing left under it: it groans, dust sifts from the crack, the building shudders, and it comes down.
    destruction.onCollapse = ({ point, inward }) => {
        sound.groan();
        puff(dust, point, 30, { color: 0xe4ded0, spread: 0.4, speed: 0.25, size: 0.16, life: 3.5, up: -0.4, dir: inward });
        shake?.(point, 0.8);
        state.dust = Math.min(2.6, state.dust + 0.4);
        if (!state.said.has('moment:collapse')) { state.said.add('moment:collapse'); setTimeout(() => bullet(performance.now() / 1000, 0.25, 1.3), 380); say('THE WALL HAS GIVEN UP.'); }
    };

    function lodge(tool, i, piece, point, dir, now) {
        const pivot = new Group();
        pivot.position.copy(point);   // pivot on the blade, so the handle quivers about it
        pivot.quaternion.copy(toolQ);
        scene.add(pivot);
        pivot.updateMatrixWorld();
        pivot.attach(tool.mesh);
        pivot.position.addScaledVector(dir, 0.035);   // bitten in a few centimetres
        pivot.userData.q = pivot.quaternion.clone();
        tool.lodged = { piece, pivot, at: now, hand: tool.grip.getWorldPosition(new Vector3()) };
        if (piece.parts) {   // stuck in a desk: the desk holds still, and the axe moves with it if it's shoved
            const t = piece.body.translation(), r = piece.body.rotation();
            tool.lodged.inBody = new Matrix4().compose(new Vector3(t.x, t.y, t.z), new Quaternion(r.x, r.y, r.z, r.w), new Vector3(1, 1, 1)).invert().multiply(pivot.matrix.clone());
            piece.body.setLinvel({ x: 0, y: 0, z: 0 }, true); piece.body.setAngvel({ x: 0, y: 0, z: 0 }, true);
        }
        tool.follow = null;
        sound.lodge();
        haptic(i, 1, 140);
        if (!state.lodges++) say('IT IS STUCK. PULL.');
    }
    function free(tool, yanked, i = 0, now = 0) {
        const { pivot, piece } = tool.lodged;
        tool.grip.attach(tool.mesh);
        tool.mesh.position.set(0, 0, 0); tool.mesh.quaternion.identity(); tool.mesh.rotation.set(TILT, 0, 0);
        scene.remove(pivot);
        tool.lodged = null; tool.prev = null; tool.vel.set(0, 0, 0); tool.samples = null;
        if (!yanked || piece.gone) return;
        sound.yank(); haptic(i, 0.8, 60);
        const out = tool.grip.getWorldPosition(new Vector3()).sub(pivot.position).normalize();
        burst('wood', pivot.position, out, 12, 2.5);
        push(piece, pivot.position, out, 6);   // wrenching it out drags the desk
        piece.lastHit = -9;
        piece.hp -= 0.35;   // and tears the wood
        state.score += 60;
        if (piece.hp <= 0) breakPiece(piece, pivot.position.clone(), out, 0.6);
    }
    function resolveFollow(tool, i, now) {
        const f = tool.follow;
        if (!f || now < f.at) return;
        tool.follow = null;
        if (f.piece.gone || f.piece.hp <= 0 || tool.vel.length() < f.speed * 0.55) return;   // stopped dead: no follow-through
        f.piece.hp -= f.e * f.affinity * 0.4;
        state.score += Math.round(25 * f.e);
        state.followThroughs++;
        if (f.piece.hp <= 0) breakPiece(f.piece, f.point, f.dir, f.e * 1.15);
    }

    function start(now) {
        state.phase = 'play'; state.endsAt = now + ROUND;
        report.visible = false;
        destruction.dirty = true;
        sound.bell(WESTMINSTER);
        say('LESSON 2: DEMOLITION. 90 SECONDS. GO.');
    }
    function finish() {
        state.phase = 'over';
        state.riser?.(); state.riser = null;
        sound.bell([...WESTMINSTER].reverse());
        const kinds = MATERIALS.filter((k) => state.materials.has(k)).length, total = state.score + kinds * kinds * 400;
        const grade = total > 40000 ? 'A+ (PLEASE LEAVE)' : total > 20000 ? 'B. SHOWS PROMISE. THE SCHOOL DOES NOT.' : total > 7000 ? 'C. NEEDS MORE DEMOLITION.' : 'F. GENTLE. SUSPICIOUSLY GENTLE.';
        say(`PENCILS DOWN. ${total} PTS, ${kinds}/6 MATERIALS. ${grade}`);
        state.total = total; state.summary = { total, kinds, grade };
        state.finishedAt = performance.now() / 1000;
        state.slowUntil = state.finishedAt + 1.8;   // the bell: everything in the air hangs for a moment
        writeTag('0:00', true);
    }
    function clearRoom() {   // the whole room, put back: walls, glass, furniture, everything on the shelves, the light
        grab.held = null; grab.thrown = null; grab.hover = null;
        for (const tool of tools) if (tool.lodged) free(tool, false);
        destruction.reset();
        shafts.clear();
        for (const pool of Object.values(debris)) { pool.parts.forEach((d, i) => { d.alive = false; pool.mesh.setMatrixAt(i, hidden); }); pool.mesh.instanceMatrix.needsUpdate = true; }
        for (const cloud of [dust, sparks]) cloud.life.fill(0);
        for (const c of craters) c.visible = false;
        renderer.shadowMap.needsUpdate = true;
        report.visible = false; ext.spent = false;
        state.riser?.(); state.riser = null;
        anims.length = 0;
    }
    /** Waking up: the room is whole, it was a dream; the score stays for the report card. */
    function backToClass() {
        clearRoom();
        state.phase = 'awake'; state.dust = 0; state.slowUntil = 0;
    }
    function reset() {
        clearRoom();
        Object.assign(state, { phase: 'ready', ...fresh() });
        writeTag('1:30');
        say('TUESDAY (AGAIN). SWING TO START.');
    }

    // Personality: the cat waves, and flinches when a tool comes at it; the Principal leans away; the plants shiver.
    const fear = { cat: 0, bust: 0, squeakAt: -9 };
    function personality(t, dt, heads) {
        const near = (object, r) => heads.some(({ p, speed }) => speed > 1 && p.distanceTo(object.position) < r);
        const k = 1 - Math.exp(-dt * 14);
        if (!cat.gone) {
            const catScared = near(cat.object, 0.7);
            if (catScared && fear.cat < 0.3 && t - fear.squeakAt > 1.2) { fear.squeakAt = t; sound.squeak(); }
            fear.cat += ((catScared ? 1 : 0) - fear.cat) * k;
            const { head, paw } = cat.object.userData;
            head.rotation.set(-0.3 * fear.cat, 1.1 * fear.cat, 0);                   // looks away
            paw.rotation.z = fear.cat > 0.5 ? 1.2 : Math.sin(t * 4) * 0.35;           // stops waving, covers up
        }
        if (!principal.gone) {
            fear.bust += ((near(principal.object, 0.8) ? 1 : 0) - fear.bust) * k;
            principal.object.userData.head.rotation.set(-0.35 * fear.bust, 0, 0.12 * fear.bust);
        }
        for (const p of pots) if (!p.gone) {
            const shiver = near(p.object, 0.6) ? 1 : 0;
            p.object.userData.leaves.forEach((leaf, j) => { leaf.rotation.y = shiver * Math.sin(t * 40 + j) * 0.25; });
        }
    }

    // Brittle things that land hard break; heavy things that land hard thud; glass tinkles.
    let lastTink = 0;
    const born = performance.now() / 1000;
    // ---- Grab and throw ---------------------------------------------------------------------------------------------
    // The free hand picks up anything loose: chairs, desks, books, rubble, the cat. What it holds is still a body: it is
    // pulled towards the hand by a spring that a heavy thing can't follow quickly (a book snaps to the hand, a desk is a
    // heave), it still collides, and what it hits (held or thrown) takes the blow from its real momentum.
    const grab = { held: null, hand: -1, offset: new Matrix4(), thrown: null, hover: null, hist: [], frame: 0 };
    const handWorld = (i) => { anchors[i].updateMatrixWorld(true); return anchors[i].matrixWorld; };
    const bodyMatrix = (b) => { const t = b.translation(), r = b.rotation(); return new Matrix4().compose(new Vector3(t.x, t.y, t.z), new Quaternion(r.x, r.y, r.z, r.w), new Vector3(1, 1, 1)); };
    const grabbable = (p) => !!p && !p.gone && !p.pending && !!p.body && (p.parts || p.prop || p.rubble || p.body.isDynamic?.());
    const reachBall = [new RAPIER.Ball(0.1), new RAPIER.Ball(0.2)];
    function reachFor(i) {
        if (!anchors[i].visible) return null;
        const h = new Vector3().setFromMatrixPosition(handWorld(i));
        for (const ball of reachBall) {   // in the hand first; failing that, within a short reach
            let best = null, bd = Infinity;
            physicsWorld.intersectionsWithShape(h, { x: 0, y: 0, z: 0, w: 1 }, ball, (c) => {
                const p = destruction.pieceOf(c);
                if (grabbable(p)) { const t = p.body.translation(), d = Math.hypot(t.x - h.x, t.y - h.y, t.z - h.z); if (d < bd) { bd = d; best = p; } }
                return true;
            });
            if (best) return best;
        }
        return null;
    }
    const collidersOf = (p) => p.colliders ?? [p.collider];
    function startGrab(i, p) {
        if (p.rubble || p.anchored) destruction.loosen(p);   // rubble that had settled comes up off the floor
        p.body.wakeUp();
        grab.held = p; grab.hand = i; grab.hist.length = 0;
        grab.offset.copy(handWorld(i)).invert().multiply(bodyMatrix(p.body));
        for (const c of collidersOf(p)) { c.setActiveEvents(RAPIER.ActiveEvents.CONTACT_FORCE_EVENTS); c.setContactForceEventThreshold(1); }
        grab.thrown = { p, until: Infinity };
        sound.grab(Math.min(1, p.body.mass() / 8)); haptic(i, 0.5, 40);
    }
    function release() {
        const p = grab.held;
        grab.held = null;
        if (!p || p.gone) return;
        // The hand's speed over the last few frames, and a little extra for light things (a flick); heavy ones you heave.
        const v = new Vector3();
        if (grab.hist.length > 1) { const a = grab.hist[0], b = grab.hist.at(-1); if (b.t > a.t) v.subVectors(b.p, a.p).divideScalar(b.t - a.t); }
        const mass = p.body.mass(), boost = Math.min(1.5, 0.6 + 2.2 / Math.max(0.3, mass));
        v.multiplyScalar(boost);
        p.body.setLinvel(v, true);
        p.body.setAngvel(new Vector3(rnd(), rnd(), rnd()).multiplyScalar(v.length() * 1.5 / Math.sqrt(mass)), true);
        grab.thrown = { p, until: performance.now() / 1000 + 2.5 };
        if (v.length() > 2) { sound.swap(); haptic(grab.hand, 0.4, 30); }
    }
    function hold(dt) {
        const p = grab.held;
        if (!p) return;
        if (p.gone || !anchors[grab.hand].visible) { grab.held = null; return; }
        const target = handWorld(grab.hand).clone().multiply(grab.offset), tp = new Vector3(), tq = new Quaternion();
        target.decompose(tp, tq, new Vector3());
        const now = performance.now() / 1000;
        grab.hist.push({ p: new Vector3().setFromMatrixPosition(handWorld(grab.hand)), t: now }); if (grab.hist.length > 5) grab.hist.shift();
        const b = p.body, t = b.translation(), r = b.rotation(), mass = b.mass(), k = Math.min(1, 0.2 + 3 / Math.max(0.3, mass));   // how well it keeps up
        const want = tp.sub(new Vector3(t.x, t.y, t.z)).multiplyScalar(16), top = 2 + 12 / Math.sqrt(Math.max(0.3, mass));
        if (want.length() > top) want.setLength(top);
        const v = b.linvel(), nv = new Vector3(v.x, v.y, v.z).lerp(want, k);
        b.setLinvel(nv, true);
        const err = tq.multiply(new Quaternion(r.x, r.y, r.z, r.w).invert());
        if (err.w < 0) err.set(-err.x, -err.y, -err.z, -err.w);
        const angle = 2 * Math.acos(Math.min(1, err.w)), sin = Math.sqrt(1 - err.w * err.w);
        const w = sin > 1e-4 ? new Vector3(err.x / sin, err.y / sin, err.z / sin).multiplyScalar(Math.min(angle * 12, 20) * k) : new Vector3();
        b.setAngvel(w, true);
    }
    // What a held or thrown thing hits: the momentum lands as a blow. A chair through a window; the chair suffers too.
    const HURTS = { glass: 1, ceramic: 1, plaster: 0.8, wood: 0.7, slate: 0.6, metal: 0.1, paper: 0.5 };
    function impact(a, b) {
        const now = performance.now() / 1000, v = grab.thrown?.v ?? a.body.linvel(), speed = Math.hypot(v.x, v.y, v.z);   // its speed going in, not after the solver has stopped it
        if (speed < 2 || now - (b.lastHit ?? -9) < 0.2) return;
        b.lastHit = now;
        const mass = a.body.mass(), e = Math.min(1.4, (speed - 1.8) / 5 * Math.min(1.6, Math.sqrt(mass / 2.5)));
        const t = a.body.translation(), point = new Vector3(t.x, t.y, t.z), dir = new Vector3(v.x, v.y, v.z).normalize();
        lastBlow = { tool: 'throw', affinity: 1, e, at: now };
        (sound[b.material] ?? sound.wood)(Math.max(0.3, e), false);
        burst(b.material, point, dir, Math.round(3 + e * 10), 1 + speed * 0.3);
        push(b, point, dir, mass * speed * 0.4);
        if (!state.said.has('throw')) { state.said.add('throw'); say('NO THROWING IN CLASS.'); }
        if (b.hp !== Infinity && b.hp > 0) {
            b.hp -= e * (HURTS[b.material] ?? 0.6);
            if (b.hp <= 0) { breakPiece(b, point, dir, e); a.body.setLinvel(new Vector3(v.x, v.y, v.z).multiplyScalar(0.75), true); }   // it goes through what it broke
        }
        if (mass > 1.5 && e > 0.5) {   // something heavy arriving fast takes the glass around it too
            const c = a.body.worldCom?.() ?? t;
            physicsWorld.intersectionsWithShape(c, { x: 0, y: 0, z: 0, w: 1 }, new RAPIER.Ball(0.35), (k) => {
                const g = destruction.pieceOf(k);
                if (g && !g.gone && g.anchored && g.material === 'glass' && g.hp > 0) { g.hp = 0; breakPiece(g, new Vector3(c.x, c.y, c.z), dir, e); }
                return true;
            });
        }
        if (a.hp !== Infinity && a.hp > 0 && a !== grab.held) { a.hp -= e * 0.35; if (a.hp <= 0) breakPiece(a, point, dir.negate(), e * 0.7); }   // what you threw takes it too
    }
    // The free hand, shown: a soft glow; yellow when something is in reach; it closes when it holds.
    const marker = new Mesh(new SphereGeometry(0.03, 16, 12), new MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false }));
    marker.visible = false; scene.add(marker);
    function showHand(t, armed) {
        const i = holder.hand === null ? -1 : 1 - holder.hand;
        marker.visible = armed && i >= 0 && anchors[i].visible;
        if (!marker.visible) return;
        marker.position.setFromMatrixPosition(handWorld(i));
        if (!grab.held && grab.frame++ % 3 === 0) grab.hover = reachFor(i);
        const hot = grab.held || grab.hover;
        marker.material.color.set(grab.held ? 0xff9a30 : hot ? 0xffe040 : 0xffffff);
        marker.material.opacity = grab.held ? 0.7 : hot ? 0.55 + 0.25 * Math.sin(t * 10) : 0.3;
        marker.scale.setScalar(grab.held ? 0.75 : hot ? 1.25 : 1);
    }

    function onForce(event) {
        const now = performance.now() / 1000, force = event.totalForceMagnitude();
        const th = grab.thrown;
        if (th && now < th.until && !th.p.gone) {
            const p1 = destruction.pieces.get(event.collider1()), p2 = destruction.pieces.get(event.collider2());
            const other = p1 === th.p ? p2 : p2 === th.p ? p1 : null;
            if (other && !other.gone) impact(th.p, other);
        }
        if (now - born < 2) return;   // the first moments: everything settling onto its shelf is not a fall
        for (const handle of [event.collider1(), event.collider2()]) {
            const p = destruction.pieces.get(handle);
            if (!p || p.gone) continue;
            if (p.prop && p.brittle && force > p.brittle * 4 && p.hp !== Infinity) {
                const t = p.body.translation(), v = p.body.linvel();
                destruction.breakProp(p, new Vector3(t.x, t.y - p.size.y * 0.3, t.z), new Vector3(v.x, v.y, v.z).normalize(), Math.min(1, force / (p.brittle * 20)));
            } else if (now - lastTink > 0.04 && (p.material === 'glass' || p.material === 'ceramic')) { lastTink = now; sound.tink(p.material); }
            else if (now - lastTink > 0.08 && force > 300) { lastTink = now; (sound[p.material] ?? sound.wood)(Math.min(0.6, force / 3000), false); }
        }
    }

    // The tool's path this frame, sampled along the striking edge: rays from where each point was to where it is.
    // The axe strikes with its edge, and with its pick on the back-swing; the sledge with either face.
    const SAMPLES = { axe: [new Vector3(0, -0.145, -0.5), new Vector3(0, -0.14, -0.43), new Vector3(0, -0.125, -0.57), new Vector3(0, -0.06, -0.5), new Vector3(0, 0.16, -0.53)], hammer: [new Vector3(0, -0.11, -0.64), new Vector3(0, 0.11, -0.64), new Vector3(0, 0, -0.64)] };
    const ray = new RAPIER.Ray({ x: 0, y: 0, z: 0 }, { x: 0, y: 1, z: 0 }), a = new Vector3(), b = new Vector3();
    function sweep(tool, i, speed, now) {
        const pts = SAMPLES[tool.name].map((s) => tool.mesh.localToWorld(s.clone()));
        const prev = tool.samples;
        tool.samples = pts;
        if (!prev || speed < 1.2) return;
        let best = null;
        for (let k = 0; k < pts.length; k++) {
            a.copy(prev[k]); b.copy(pts[k]).sub(a);
            const len = b.length() + 0.02;
            if (len < 0.025) continue;
            b.normalize();
            ray.origin = { x: a.x, y: a.y, z: a.z }; ray.dir = { x: b.x, y: b.y, z: b.z };
            const found = physicsWorld.castRayAndGetNormal(ray, len, true, undefined, undefined, undefined, undefined, ours);
            if (found && (!best || found.timeOfImpact < best.toi)) best = { toi: found.timeOfImpact, collider: found.collider, n: new Vector3(found.normal.x, found.normal.y, found.normal.z), point: a.clone().addScaledVector(b, found.timeOfImpact), dir: b.clone() };
        }
        if (!best) return;
        const piece = destruction.pieceOf(best.collider);
        if (!piece || piece.gone) return;
        hit(tool, i, piece, best.point, best.n.lengthSq() > 0.5 ? best.n : best.dir.clone().negate(), tool.vel.clone().normalize(), speed, now);
    }

    const world = new Vector3(), dir = new Vector3(), heads = tools.map(() => ({ p: new Vector3(), speed: 0 }));
    function update(t, dt) {
        state.dust *= Math.exp(-dt / 35);
        const armed = state.phase === 'ready' || state.phase === 'play' || state.phase === 'over';   // the tools exist only in the dream
        if (!armed && grab.held) grab.held = null;
        showHand(t, armed && renderer.xr.isPresenting);
        for (const tool of tools) tool.mesh.visible = armed && (tool === active() || !!tool.lodged);
        for (let i = anims.length - 1; i >= 0; i--) { const a = anims[i]; a.t += dt; const f = Math.min(1, a.t / a.dur); a.run(f); if (f === 1) { anims.splice(i, 1); a.done?.(); } }
        const slow = timeScale(t);
        shafts.update(dt, light.tint.value);
        stepCloud(dust, dt * slow, 0.02); stepCloud(sparks, dt * slow, 6);
        if (t < state.powderUntil && !ext.gone) {   // the extinguisher, finally used: it sprays, and the spray shoves it round the floor
            const tt = ext.body.translation(), r = ext.body.rotation(), nozzle = new Vector3(0, 0.3, 0).applyQuaternion(new Quaternion(r.x, r.y, r.z, r.w));
            const jet = new Vector3(Math.sin(t * 7), 0.2, Math.cos(t * 5)).normalize();
            puff(dust, new Vector3(tt.x, tt.y, tt.z).add(nozzle), 6, { color: 0xffffff, speed: 2.2, size: 0.09, life: 3, grow: 1.4, alpha: 0.35, dir: jet, drag: 1.2 });
            ext.body.applyImpulse(jet.multiplyScalar(-0.35), true);
        }
        hold(dt);
        if (grab.thrown && !grab.thrown.p.gone) { const v = grab.thrown.p.body.linvel(); grab.thrown.v = { x: v.x, y: v.y, z: v.z }; }
        const moving = physics.step(dt * slow, onForce);
        destruction.update(dt);
        if (moving && (state.frame = (state.frame ?? 0) + 1) % 2 === 0) renderer.shadowMap.needsUpdate = true;   // moving things move their shadows
        if (renderer.xr.isPresenting) syncAnchors();
        if (!renderer.xr.isPresenting || !armed) { stepDebris(dt * slow); steer(toolBody, null); steer(handBody, null); return; }
        locomote(dt);
        if (state.phase === 'play' && t > state.endsAt) finish();
        if (state.phase === 'play' && Math.ceil(state.endsAt - t) !== state.shown) {
            state.shown = Math.ceil(state.endsAt - t);
            writeTag(`${Math.floor(state.shown / 60)}:${String(state.shown % 60).padStart(2, '0')}`, state.shown <= 10);
            if (state.shown <= 10 || state.shown % 15 === 0) say(`${state.shown}s LEFT  ·  SCORE ${state.score}`);
            if (state.shown <= 10 && ctx()) { ping(ctx(), state.shown <= 3 ? 1900 : 1500, 0.06, 0.25, 0, 'square'); haptic(1, 0.15, 15); }   // the last ten seconds tick, loud, in the hand
            if (state.shown === 10 && !state.riser) state.riser = sound.riser(10);
        }
        for (const h of heads) h.speed = 0;
        if (holder.hand === null) equip(0);
        // The free hand is a body too: you can shove a chair over with it.
        const freeAnchor = holder.hand === null ? null : anchors[1 - holder.hand];
        if (freeAnchor?.visible) {
            freeAnchor.updateMatrixWorld(true);
            const h = new Vector3().setFromMatrixPosition(freeAnchor.matrixWorld), v = dt > 0 ? h.distanceTo(handLast) / dt : 0;
            steer(handBody, h, v < 1.5 && !grab.held); handLast.copy(h);   // holding something, the hand itself doesn't shove
        } else steer(handBody, null);
        tools.forEach((tool) => {
            const i = tool.hand ?? 0;
            if (tool !== active() && !tool.lodged) return;
            if (!tool.grip.visible) { tool.prev = null; tool.samples = null; steer(toolBody, null); return; }
            if (tool.lodged) {   // the handle quivers, and the hand has to pull it free
                const l = tool.lodged, age = t - l.at;
                if (l.inBody && !l.piece.gone) {
                    const tr = l.piece.body.translation(), r = l.piece.body.rotation();
                    new Matrix4().compose(new Vector3(tr.x, tr.y, tr.z), new Quaternion(r.x, r.y, r.z, r.w), new Vector3(1, 1, 1)).multiply(l.inBody).decompose(l.pivot.position, l.pivot.userData.q, new Vector3());
                }
                l.pivot.quaternion.copy(l.pivot.userData.q);
                l.pivot.rotateX(Math.sin(age * 57) * 0.22 * Math.exp(-age * 5));
                steer(toolBody, null);
                if (l.piece.gone || tool.grip.getWorldPosition(dir).distanceTo(l.hand) > 0.3 || age > 6) free(tool, !l.piece.gone && age <= 6, i, t);
                return;
            }
            resolveFollow(tool, i, t);
            tool.mesh.localToWorld(world.copy(tool.mesh.userData.tip));
            if (tool.prev && dt > 0) tool.vel.lerp(dir.subVectors(world, tool.prev).divideScalar(dt), 0.6);
            tool.prev = (tool.prev ?? new Vector3()).copy(world);
            const speed = tool.vel.length();
            steer(toolBody, world, speed < 1.2);
            if (t < (tool.settle ?? 0)) { tool.vel.set(0, 0, 0); tool.samples = null; return; }
            heads[0].p.copy(world); heads[0].speed = speed;
            if (speed > 1.2 && state.phase === 'ready') start(t);
            if (state.phase === 'over') { tool.samples = null; return; }
            sweep(tool, i, speed, t);
        });
        personality(t, dt, heads);
        stepDebris(dt * slow);
    }

    function stepDebris(dt) {
        for (const pool of Object.values(debris)) {
            let moved = false;
            pool.parts.forEach((d, i) => {
                if (!d.alive || d.rest > 1) return;
                moved = true;
                d.v.y -= 9.8 * dt; d.v.x *= 0.99; d.v.z *= 0.99; d.p.addScaledVector(d.v, dt);
                spin.setFromAxisAngle(dir.copy(d.w).normalize(), d.w.length() * dt); d.q.premultiply(spin);
                const floor = Math.min(d.s.x, d.s.y, d.s.z) / 2;
                if (d.p.y < floor) {   // the floor: bounce, scrape, settle flat, and fade after a while
                    d.p.y = floor; d.v.y *= -0.25; d.v.x *= 0.5; d.v.z *= 0.5; d.w.multiplyScalar(0.5);
                    if (d.v.lengthSq() < 0.02) { d.rest += dt * 10; d.w.set(0, 0, 0); }
                }
                dummy.position.copy(d.p); dummy.quaternion.copy(d.q); dummy.scale.copy(d.s); dummy.updateMatrix();
                pool.mesh.setMatrixAt(i, dummy.matrix);
            });
            if (moved) pool.mesh.instanceMatrix.needsUpdate = true;
        }
    }
    return { update, state, tools, props, hat, ext, books, plunger, reset, start, finish, equip, holder, report, destruction, showReport, backToClass, shafts, cine, grab };
}
