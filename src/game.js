// The game: an axe in one hand, a hammer in the other, 90 seconds, a beautiful classroom.
// Swing speed at contact decides everything: a tap dents, a committed swing sends the room flying.
import { BoxGeometry, ConeGeometry, CylinderGeometry, Group, InstancedMesh, Matrix4, Mesh, MeshStandardMaterial, Object3D, Quaternion, Vector3 } from 'three';

const ROUND = 90;
// Which tool each material wants: the axe cleaves wood, the hammer smashes glass.
const AFFINITY = { axe: { wood: 1, glass: 0.45 }, hammer: { wood: 0.5, glass: 1 } };
const QUIPS = { wood: ['THAT DESK WAS NEW.', 'SPLINTERS. EVERYWHERE.', 'IT WAS REPLACED 14 TIMES. NOW 15.'], glass: ['THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.', 'TRY THE HAMMER ON GLASS. SO SAYS THE BOARD.', 'FRESH AIR!'] };

function axe() {
    const g = new Group();
    const handle = new Mesh(new CylinderGeometry(0.016, 0.02, 0.62, 10), new MeshStandardMaterial({ color: 0xb7834d, roughness: 0.6 }));
    handle.rotation.x = Math.PI / 2; handle.position.z = -0.22; g.add(handle);
    const head = new Mesh(new BoxGeometry(0.03, 0.11, 0.09), new MeshStandardMaterial({ color: 0xb3121a, roughness: 0.4, metalness: 0.3 }));
    head.position.set(0, -0.04, -0.5); g.add(head);
    const edge = new Mesh(new BoxGeometry(0.012, 0.06, 0.13), new MeshStandardMaterial({ color: 0xe8e8ea, roughness: 0.15, metalness: 1 }));
    edge.position.set(0, -0.12, -0.5); g.add(edge);
    g.userData.tip = new Vector3(0, -0.14, -0.5);
    return g;
}
function hammer() {
    const g = new Group();
    const handle = new Mesh(new CylinderGeometry(0.017, 0.017, 0.46, 10), new MeshStandardMaterial({ color: 0x1d1d1d, roughness: 0.7 }));
    handle.rotation.x = Math.PI / 2; handle.position.z = -0.15; g.add(handle);
    const head = new Mesh(new BoxGeometry(0.075, 0.17, 0.075), new MeshStandardMaterial({ color: 0x3a3d42, roughness: 0.35, metalness: 0.9 }));
    head.position.set(0, -0.02, -0.38); g.add(head);
    g.userData.tip = new Vector3(0, -0.1, -0.38);
    return g;
}

export function createGame({ scene, renderer, rig, room, audio, say, flip }) {
    const tools = [{ name: 'axe', mesh: axe() }, { name: 'hammer', mesh: hammer() }];
    tools.forEach((tool, i) => {
        tool.mesh.rotation.x = 0.5;   // tilt the head up out of the fist
        tool.grip = renderer.xr.getControllerGrip(i);
        tool.grip.add(tool.mesh);
        tool.prev = null; tool.vel = new Vector3();
    });

    // Targets: every desk, every chair, every window bay.
    const targets = [], m = new Matrix4(), hidden = new Matrix4().makeScale(0, 0, 0);
    room.seats.forEach((s, i) => targets.push({ kind: 'desk', material: 'wood', hp: 1.4, mesh: room.desks, index: i, center: new Vector3(s.x, 0.55, s.z), half: new Vector3(0.62, 0.25, 0.26), value: 400 }));
    for (let i = 0; i < room.chairs.count; i++) {
        room.chairs.getMatrixAt(i, m);
        const p = new Vector3().setFromMatrixPosition(m);
        targets.push({ kind: 'chair', material: 'wood', hp: 0.7, mesh: room.chairs, index: i, center: new Vector3(p.x, 0.45, p.z), half: new Vector3(0.22, 0.45, 0.22), value: 150 });
    }
    room.glass.forEach((pane) => targets.push({ kind: 'window', material: 'glass', hp: 0.2, pane, center: pane.position.clone().setX(pane.position.x + 0.1), half: new Vector3(0.25, 0.95, 0.85), value: 600 }));
    for (const t of targets) { t.max = t.hp; if (t.mesh) { t.mesh.getMatrixAt(t.index, m); t.matrix = m.clone(); } }

    // Debris: instanced boxes with gravity, bounce and a floor. Planks for wood, thin shards for glass.
    const N = 700, debris = { wood: makePool(0x9a6a3e, 0.6, 0), glass: makePool(0xdff3ff, 0.05, 0.9) };
    function makePool(color, roughness, metalness) {
        const mesh = new InstancedMesh(new BoxGeometry(1, 1, 1), new MeshStandardMaterial({ color, roughness, metalness, transparent: metalness > 0, opacity: metalness > 0 ? 0.7 : 1 }), N);
        mesh.castShadow = true; mesh.frustumCulled = false;
        for (let i = 0; i < N; i++) mesh.setMatrixAt(i, hidden);
        scene.add(mesh);
        return { mesh, next: 0, parts: Array.from({ length: N }, () => ({ alive: false, p: new Vector3(), v: new Vector3(), q: new Quaternion(), w: new Vector3(), s: new Vector3() })) };
    }
    const spin = new Quaternion(), dummy = new Object3D();
    function burst(material, at, dir, n, power, big) {
        const pool = debris[material];
        for (let k = 0; k < n; k++) {
            const d = pool.parts[pool.next]; pool.next = (pool.next + 1) % N;
            d.alive = true; d.rest = 0;
            d.p.copy(at).add(new Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(big ? 0.5 : 0.08));
            d.v.copy(dir).multiplyScalar(power * (0.4 + Math.random())).add(new Vector3((Math.random() - 0.5) * 2, Math.random() * 2, (Math.random() - 0.5) * 2).multiplyScalar(0.6 + power * 0.4));
            d.w.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(20);
            d.q.random();
            if (material === 'wood') d.s.set(0.02 + Math.random() * (big ? 0.5 : 0.03), 0.02 + Math.random() * 0.02, big ? 0.05 + Math.random() * 0.12 : 0.1 + Math.random() * 0.08);
            else d.s.set(0.04 + Math.random() * 0.12, 0.004, 0.04 + Math.random() * 0.15);
        }
    }

    // Sound: synthesised per material. Wood crunches dry and low, glass rings bright and high.
    const ctx = () => audio()?.ctx;
    let noise = null;
    function hiss(c, { dur, type, freq, to = freq, gain, q = 1, delay = 0 }) {
        if (!noise) { noise = c.createBuffer(1, c.sampleRate, c.sampleRate); const d = noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1; }
        const t = c.currentTime + delay, s = new AudioBufferSourceNode(c, { buffer: noise, loop: true }), f = new BiquadFilterNode(c, { type, frequency: freq, Q: q }), g = new GainNode(c, { gain });
        f.frequency.exponentialRampToValueAtTime(to, t + dur); g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        s.connect(f).connect(g).connect(c.destination); s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
    }
    function ping(c, freq, dur, gain, delay = 0, type = 'sine') {
        const t = c.currentTime + delay, o = new OscillatorNode(c, { type, frequency: freq }), g = new GainNode(c, { gain });
        g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(c.destination); o.start(t); o.stop(t + dur + 0.05);
    }
    const sound = {
        wood(e, broke) {
            const c = ctx(); if (!c) return;
            ping(c, 150 + Math.random() * 40, 0.18, 0.5 * e);   // the thock
            for (let k = 0; k < (broke ? 9 : 3); k++) hiss(c, { dur: 0.05, type: 'bandpass', freq: 700 + Math.random() * 1600, gain: 0.5 * e, q: 3, delay: k * 0.025 * Math.random() * 2 });   // the dry crunch
            if (broke) hiss(c, { dur: 0.6, type: 'lowpass', freq: 900, to: 120, gain: 0.6 });
        },
        glass(e, broke) {
            const c = ctx(); if (!c) return;
            hiss(c, { dur: broke ? 0.5 : 0.12, type: 'highpass', freq: 4000, gain: 0.5 * e });
            for (let k = 0; k < (broke ? 12 : 3); k++) ping(c, 2200 + Math.random() * 4800, 0.25 + Math.random() * 0.5, 0.08, k * 0.04 * Math.random() * 3);   // chime, then shards tinkling down
        },
        lodge() {   // thunk, then the handle twangs
            const c = ctx(); if (!c) return;
            ping(c, 115, 0.35, 0.7); hiss(c, { dur: 0.12, type: 'bandpass', freq: 500, gain: 0.6, q: 2 });
            const t = c.currentTime, o = new OscillatorNode(c, { type: 'sawtooth', frequency: 105 }), lfo = new OscillatorNode(c, { frequency: 9 }), depth = new GainNode(c, { gain: 12 });
            const f = new BiquadFilterNode(c, { type: 'lowpass', frequency: 700 }), g = new GainNode(c, { gain: 0.16 });
            g.gain.setValueAtTime(0.16, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
            lfo.connect(depth).connect(o.frequency); o.connect(f).connect(g).connect(c.destination);
            o.start(t); lfo.start(t); o.stop(t + 0.75); lfo.stop(t + 0.75);
        },
        yank() { const c = ctx(); if (!c) return; hiss(c, { dur: 0.22, type: 'bandpass', freq: 1400, to: 380, gain: 0.5, q: 4 }); ping(c, 260, 0.12, 0.4, 0.15); },
        glance() { const c = ctx(); if (!c) return; hiss(c, { dur: 0.18, type: 'bandpass', freq: 2600, to: 1500, gain: 0.3, q: 6 }); },
        bell(notes) { const c = ctx(); if (!c) return; notes.forEach((f, k) => { ping(c, f, 1.6, 0.25, k * 0.55); ping(c, f * 2.76, 0.8, 0.05, k * 0.55); }); },
    };
    const WESTMINSTER = [329.6, 261.6, 293.7, 196.0];   // the Japanese school bell

    const state = { phase: 'intro', dust: 0, score: 0, combo: 0, lastBreak: -9, endsAt: 0, broken: 0, materials: new Set(), right: 0, hits: 0, lodges: 0, followThroughs: 0 };
    const haptic = (i, v, ms) => renderer.xr.getSession()?.inputSources[i]?.gamepad?.hapticActuators?.[0]?.pulse?.(v, ms);

    // How the blow lands, not just how fast. The axe wants its edge leading and the wood square-on;
    // the flat of the blade is a slap. The hammer forgives the angle, but not a glancing blow.
    const edge = new Vector3(), normal = new Vector3(), toolQ = new Quaternion();
    function faceNormal(target, from) {   // the face of the box the head came in through
        const d = from.clone().sub(target.center), h = target.half;
        const ax = Math.abs(d.x) / h.x, ay = Math.abs(d.y) / h.y, az = Math.abs(d.z) / h.z;
        return ax > ay && ax > az ? normal.set(Math.sign(d.x), 0, 0) : ay > az ? normal.set(0, Math.sign(d.y), 0) : normal.set(0, 0, Math.sign(d.z));
    }
    function hit(tool, i, t, target, point, speed, dir, now) {
        if (now - (target.lastHit ?? -9) < 0.2) return;
        target.lastHit = now;
        tool.mesh.getWorldQuaternion(toolQ);
        const align = edge.set(0, -1, 0).applyQuaternion(toolQ).dot(dir);   // 1: edge (or hammer face) leading the swing
        const square = Math.max(0, -faceNormal(target, tool.entry ?? point).dot(dir));   // 1: straight in; 0: skimming along the surface
        const quality = tool.name === 'axe' ? 0.25 + 0.75 * Math.max(0, align) ** 1.5 : 0.6 + 0.4 * Math.abs(align);
        const e = Math.min(1.3, (speed - 0.8) / 5) * quality * (0.35 + 0.65 * square);   // 0: a tap; 1: a full committed swing, edge first, square on
        if (square < 0.3 && target.material !== 'glass') { sound.glance(); haptic(i, 0.2, 25); state.score += 5; return; }   // a glancing blow scrapes off
        const affinity = AFFINITY[tool.name][target.material];
        target.hp -= e * affinity;
        // Follow-through: if the swing is still moving a tenth of a second later, the blow carried. Committed swings hit harder.
        tool.follow = { target, at: now + 0.1, speed, e, affinity, dir: dir.clone(), point: point.clone() };
        // A good axe blow into a desk that holds: the blade bites and stays.
        if (tool.name === 'axe' && target.kind === 'desk' && target.hp > 0 && align > 0.55 && square > 0.5 && e > 0.2) lodge(tool, i, target, point, dir, now);
        state.hits++; if (affinity === 1) state.right++;
        haptic(i, Math.min(1, 0.3 + e), 20 + e * 60);
        const broke = target.hp <= 0;
        sound[target.material](Math.max(0.3, e), broke);
        burst(target.material, point, dir, Math.round(4 + e * 14), speed * 0.35, false);
        if (target.mesh && !broke) {   // a jolt: the desk shoves in the direction of the hit, then settles
            target.shove = dir.clone().setY(0).multiplyScalar(0.04 * e);
        }
        if (!broke) return state.score += Math.round(10 * e * (affinity === 1 ? 2 : 1));
        if (target.mesh) { target.mesh.setMatrixAt(target.index, hidden); target.mesh.instanceMatrix.needsUpdate = true; renderer.shadowMap.needsUpdate = true; }
        if (target.pane) target.pane.visible = false;
        for (const other of tools) if (other.lodged?.target === target) free(other, false);
        burst(target.material, target.center, dir, target.material === 'wood' ? 14 : 40, speed * 0.5, true);
        state.combo = now - state.lastBreak < 2.5 ? state.combo + 1 : 1;
        state.lastBreak = now;
        state.broken++; state.materials.add(target.material);
        state.dust = Math.min(2.6, state.dust + (target.kind === 'chair' ? 0.12 : 0.3));   // what breaks hangs in the air, and in the light
        const gained = Math.round(target.value * (affinity === 1 ? 1.5 : 1) * Math.min(8, state.combo) * (0.6 + e * 0.5));
        state.score += gained;
        flip();
        const quips = QUIPS[target.material];
        say(state.combo > 2 ? `COMBO x${state.combo}! +${gained}` : Math.random() < 0.5 ? quips[Math.floor(Math.random() * quips.length)] : `+${gained}`);
    }

    function lodge(tool, i, target, point, dir, now) {
        const pivot = new Group();
        pivot.position.copy(point);   // pivot on the blade, so the handle quivers about it
        pivot.quaternion.copy(toolQ);
        scene.add(pivot);
        pivot.updateMatrixWorld();
        pivot.attach(tool.mesh);
        pivot.position.addScaledVector(dir, 0.035);   // bitten in a few centimetres
        tool.lodged = { target, pivot, at: now, hand: tool.grip.getWorldPosition(new Vector3()), axis: new Vector3(1, 0, 0) };
        tool.follow = null;
        sound.lodge();
        haptic(i, 1, 140);
        if (!state.lodges++) say('IT IS STUCK. PULL.');
    }
    function free(tool, yanked, i = 0, now = 0) {
        const { pivot, target } = tool.lodged;
        tool.grip.attach(tool.mesh);
        tool.mesh.position.set(0, 0, 0); tool.mesh.quaternion.identity(); tool.mesh.rotation.set(0.5, 0, 0);
        scene.remove(pivot);
        tool.lodged = null; tool.prev = null; tool.vel.set(0, 0, 0);
        if (!yanked) return;
        sound.yank(); haptic(i, 0.8, 60);
        burst('wood', pivot.position, pivot.position.clone().sub(target.center).setY(0.5).normalize(), 12, 2.5, false);
        target.lastHit = -9;
        target.hp -= 0.35;   // wrenching it out tears the wood too
        state.score += 60;
        if (target.hp <= 0) { target.hp = 0.001; hit(tool, i, now, target, pivot.position.clone(), 6, new Vector3(0, 1, 0), now + 1); }
    }
    function resolveFollow(tool, i, now) {
        const f = tool.follow;
        if (!f || now < f.at) return;
        tool.follow = null;
        if (f.target.hp <= 0 || tool.vel.length() < f.speed * 0.55) return;   // stopped dead: no follow-through
        f.target.hp -= f.e * f.affinity * 0.4;
        state.score += Math.round(25 * f.e);
        state.followThroughs++;
        if (f.target.hp <= 0) { f.target.hp = 0.001; f.target.lastHit = -9; hit(tool, i, now, f.target, f.point, f.speed * 1.15, f.dir, now); }
    }

    function start(now) {
        state.phase = 'play'; state.endsAt = now + ROUND;
        sound.bell(WESTMINSTER);
        say('LESSON 2: DEMOLITION. 90 SECONDS. GO.');
    }
    function finish() {
        state.phase = 'over';
        sound.bell([...WESTMINSTER].reverse());
        const total = state.score + state.materials.size * 1000;
        const grade = total > 25000 ? 'A+ (PLEASE LEAVE)' : total > 12000 ? 'B. SHOWS PROMISE. THE SCHOOL DOES NOT.' : total > 4000 ? 'C. NEEDS MORE DEMOLITION.' : 'F. GENTLE. SUSPICIOUSLY GENTLE.';
        say(`PENCILS DOWN. SCORE ${total}. ${grade}`);
        state.finishedAt = performance.now() / 1000;
    }
    function reset() {
        for (const t of targets) { t.hp = t.max; if (t.mesh) t.mesh.setMatrixAt(t.index, t.matrix); if (t.pane) t.pane.visible = true; }
        room.desks.instanceMatrix.needsUpdate = room.chairs.instanceMatrix.needsUpdate = true;
        renderer.shadowMap.needsUpdate = true;
        for (const pool of Object.values(debris)) { pool.parts.forEach((d, i) => { d.alive = false; pool.mesh.setMatrixAt(i, hidden); }); pool.mesh.instanceMatrix.needsUpdate = true; }
        for (const tool of tools) if (tool.lodged) free(tool, false);
        Object.assign(state, { phase: 'ready', dust: 0, score: 0, combo: 0, broken: 0, materials: new Set(), right: 0, hits: 0, lodges: 0, followThroughs: 0 });
        say('TUESDAY (AGAIN). SWING TO START.');
    }

    const world = new Vector3(), dir = new Vector3();
    function update(t, dt) {
        state.dust *= Math.exp(-dt / 35);
        for (const tool of tools) tool.mesh.visible = state.phase !== 'intro';
        if (!renderer.xr.isPresenting || state.phase === 'intro') return;
        if (state.phase === 'play' && t > state.endsAt) finish();
        if (state.phase === 'play' && Math.ceil(state.endsAt - t) !== state.shown) { state.shown = Math.ceil(state.endsAt - t); if (state.shown <= 10 || state.shown % 15 === 0) say(`${state.shown}s LEFT  ·  SCORE ${state.score}`); }
        tools.forEach((tool, i) => {
            if (!tool.grip.visible) { tool.prev = null; return; }
            if (tool.lodged) {   // the handle quivers, and the hand has to pull it free
                const l = tool.lodged, age = t - l.at;
                l.pivot.rotation.set(0, 0, 0); l.pivot.quaternion.copy(l.pivot.userData.q ??= l.pivot.quaternion.clone());
                l.pivot.rotateX(Math.sin(age * 57) * 0.22 * Math.exp(-age * 5));
                if (tool.grip.getWorldPosition(dir).distanceTo(l.hand) > 0.3 || age > 6) free(tool, age <= 6, i, t);
                return;
            }
            resolveFollow(tool, i, t);
            tool.mesh.localToWorld(world.copy(tool.mesh.userData.tip));
            if (tool.prev && dt > 0) tool.vel.lerp(dir.subVectors(world, tool.prev).divideScalar(dt), 0.6);
            tool.prev = (tool.prev ?? new Vector3()).copy(world);
            const speed = tool.vel.length();
            if (speed < 1.2) return;   // resting, or a gentle touch
            if (state.phase === 'ready') { start(t); }
            if (state.phase === 'over') { if (t - state.finishedAt > 4 && speed > 3) reset(); return; }
            dir.copy(tool.vel).normalize();
            const entry = world.clone().addScaledVector(tool.vel, -dt * 1.5);   // where the head was just before: tells which face it came through
            for (const target of targets) {
                if (target.hp <= 0 || tool.lodged) continue;
                if (Math.abs(world.x - target.center.x) < target.half.x && Math.abs(world.y - target.center.y) < target.half.y && Math.abs(world.z - target.center.z) < target.half.z) { tool.entry = entry; hit(tool, i, t, target, world.clone(), speed, dir.clone(), t); }
            }
        });
        // Jolted furniture springs back.
        for (const target of targets) if (target.shove) {
            m.copy(target.matrix); m.elements[12] += target.shove.x; m.elements[14] += target.shove.z;
            target.mesh.setMatrixAt(target.index, m); target.mesh.instanceMatrix.needsUpdate = true;
            target.shove.multiplyScalar(0.8); if (target.shove.lengthSq() < 1e-7) target.shove = null;
        }
        for (const [material, pool] of Object.entries(debris)) {
            let moved = false;
            pool.parts.forEach((d, i) => {
                if (!d.alive || d.rest > 1) return;
                moved = true;
                d.v.y -= 9.8 * dt; d.p.addScaledVector(d.v, dt);
                spin.setFromAxisAngle(dir.copy(d.w).normalize(), d.w.length() * dt); d.q.premultiply(spin);
                if (d.p.y < d.s.y / 2) {   // the floor: bounce, scrape, settle flat
                    d.p.y = d.s.y / 2; d.v.y *= -0.3; d.v.x *= 0.6; d.v.z *= 0.6; d.w.multiplyScalar(0.5);
                    if (material === 'glass' && Math.abs(d.v.y) > 0.4 && Math.random() < 0.15 && ctx()) ping(ctx(), 3000 + Math.random() * 4000, 0.12, 0.03);
                    if (d.v.lengthSq() < 0.02) { d.rest += dt * 10; d.w.set(0, 0, 0); d.q.set(0, Math.random(), 0, 1).normalize(); }
                }
                d.p.x = Math.max(-4.4, Math.min(4.4, d.p.x)); d.p.z = Math.max(-4.7, Math.min(4.7, d.p.z));
                dummy.position.copy(d.p); dummy.quaternion.copy(d.q); dummy.scale.copy(d.s); dummy.updateMatrix();
                pool.mesh.setMatrixAt(i, dummy.matrix);
            });
            if (moved) pool.mesh.instanceMatrix.needsUpdate = true;
        }
    }
    return { update, state, tools, targets, reset, start };
}
