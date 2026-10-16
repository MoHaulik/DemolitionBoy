// The game: an axe in one hand, a hammer in the other, 90 seconds, a beautiful classroom.
// Swing speed at contact decides everything: a tap dents, a committed swing sends the room flying.
import {
    AdditiveBlending, BoxGeometry, BufferGeometry, Color, CylinderGeometry, Float32BufferAttribute, Group, IcosahedronGeometry, InstancedMesh, Matrix4, Mesh,
    CanvasTexture, MeshBasicMaterial, MeshStandardMaterial, NormalBlending, Object3D, PlaneGeometry, Points, Quaternion, ShaderMaterial, Vector3,
} from 'three';
import * as Props from './props.js';
import { axe, hammer } from './tools.js';
import { FONTS, letter } from './paint.js';

const ROUND = 90, TILT = 0.5;   // TILT: the head tipped up out of the fist
// Which tool each material wants. The axe cleaves the soft and fibrous; the hammer smashes the hard and brittle.
const AFFINITY = {
    axe: { wood: 1, drywall: 1, glass: 0.45, ceramic: 0.45, plaster: 0.5, metal: 0.15, slate: 0.1 },
    hammer: { wood: 0.5, drywall: 0.6, glass: 1, ceramic: 1, plaster: 1, metal: 0.15, slate: 0.1 },
};
const MATERIALS = ['wood', 'glass', 'ceramic', 'plaster', 'drywall', 'metal'];
// When the wrong tool keeps bouncing off, the board says so. That is the whole tutorial.
const HINTS = { glass: 'GLASS PREFERS A HAMMER. SO DO I.', ceramic: 'POTTERY WANTS THE HAMMER.', plaster: 'PLASTER WANTS THE HAMMER. TRUST ME.', wood: 'WOOD WANTS THE AXE.', drywall: 'DRYWALL WANTS THE AXE.' };
const QUIPS = {
    desk: ['THAT DESK WAS NEW.', 'IT WAS REPLACED 14 TIMES. NOW 15.', 'SPLINTERS. EVERYWHERE.'],
    chair: ['SIT DOWN. OH.', 'THAT CHAIR HAD A FAMILY.'],
    window: ['THAT WINDOW HAS NOW BEEN TESTED. FROM BOTH SIDES.', 'FRESH AIR!', 'VENTILATION: IMPROVED.'],
    pot: ['THE PLANT IS FINE. THE PLANT IS NOT FINE.', 'IT WAS A CACTUS. EMOTIONALLY.'],
    vase: ['A VASE. FROM A TRIP. NOBODY REMEMBERS THE TRIP.', 'MING DYNASTY. (IT WAS NOT.)'],
    cat: ['THERE GOES OUR LUCK.'],
    bust: ['THE PRINCIPAL WILL HEAR ABOUT THIS. HE IS IN PIECES.'],
    volcano: ['STILL 2ND PLACE.'],
    drywall: ['OK. IT WAS A HOLE.'],
    ext: ['USE BEFORE. NOT AFTER.'],
};
const once = { wall: 'WALLS HOLD UP THE CEILING. REMEMBER?', board: 'NO.', hat: 'IT IS A HELMET. THAT IS THE PROBLEM.' };
const BOARD = ['NO.', 'STILL NO.', 'I AM SLATE. YOU ARE NOT.', 'THE BOARD IS NOT PART OF THE LESSON.', 'DETENTION.'];

export function createGame({ scene, renderer, rig, camera, room, audio, say, flip }) {
    // One tool at a time, in one hand: the axe or the hammer. Squeeze the grip to swap, into whichever hand squeezed.
    const tools = [{ name: 'axe', mesh: axe() }, { name: 'hammer', mesh: hammer() }];
    const grips = [0, 1].map((i) => renderer.xr.getControllerGrip(i));
    // Where each hand is, controllers or bare hands. three.js only poses the grip for controllers, so for
    // tracked hands read the hand's own grip space from the frame (the Quest browser provides one).
    const anchors = [0, 1].map(() => { const a = new Group(); a.matrixAutoUpdate = false; a.visible = false; rig.add(a); return a; });
    function syncAnchors() {
        const session = renderer.xr.getSession(), frame = renderer.xr.getFrame(), ref = renderer.xr.getReferenceSpace();
        anchors.forEach((a, i) => {
            const source = session?.inputSources[i];
            const pose = !grips[i].visible && source?.gripSpace && frame && ref ? frame.getPose(source.gripSpace, ref) : null;
            if (grips[i].visible) a.matrix.copy(grips[i].matrix);
            else if (pose) a.matrix.fromArray(pose.transform.matrix);
            a.visible = grips[i].visible || !!pose;
            a.matrixWorldNeedsUpdate = true;
        });
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
    const swap = (i) => { if (state.phase !== 'intro') equip(1 - holder.tool, i); };
    [0, 1].forEach((i) => { const c = renderer.xr.getController(i); c.addEventListener('select', () => swap(i)); c.addEventListener('squeezestart', () => swap(i)); });
    const active = () => tools[holder.tool];

    // New things to break, placed where the room had a gap for them.
    const back = 4.8, shelf = 1.2125;
    const place = (object, x, y, z, ry = 0) => { object.position.set(x, y, z); object.rotation.y = ry; scene.add(object); return object; };
    const props = [
        ...[-2.1, 0, 2.1].map((z) => ({ kind: 'pot', material: 'ceramic', hp: 0.35, object: place(Props.pot(), -4.42, 0.945, z), half: [0.09, 0.14, 0.09], up: 0.12, value: 350, colors: [0xb5562f, 0x9a4626, 0x3a2414] })),
        { kind: 'vase', material: 'ceramic', hp: 0.3, object: place(Props.vase(), -3.0, shelf, back - 0.2), half: [0.09, 0.14, 0.09], up: 0.12, value: 400, colors: [0xf4f1ea, 0x2b4f9a] },
        { kind: 'vase', material: 'ceramic', hp: 0.3, object: place(Props.vase(0x9a2b2b), 3.15, shelf, back - 0.2), half: [0.09, 0.14, 0.09], up: 0.12, value: 400, colors: [0xf4f1ea, 0x9a2b2b] },
        { kind: 'cat', material: 'ceramic', hp: 0.3, object: place(Props.luckyCat(), 1.2, shelf, back - 0.22, Math.PI), half: [0.1, 0.15, 0.1], up: 0.14, value: 900, colors: [0xf7f3ea, 0xc8282c, 0xe2b23c] },
        { kind: 'bust', material: 'plaster', hp: 0.9, object: place(Props.bust(), -0.9, shelf, back - 0.2, Math.PI), half: [0.14, 0.17, 0.12], up: 0.16, value: 1200, colors: [0xe8e2d4, 0xd5cebf] },
        { kind: 'volcano', material: 'plaster', hp: 0.7, object: place(Props.volcano(), 0.4, shelf, back - 0.22), half: [0.2, 0.13, 0.2], up: 0.12, value: 800, colors: [0x8a6b55, 0xd9481c] },
    ];

    // Targets. Breakables first; then things that only take a beating (walls, the board, the hat), checked last.
    const targets = [], m = new Matrix4(), hidden = new Matrix4().makeScale(0, 0, 0);
    for (const p of props) targets.push({ ...p, center: p.object.position.clone().setY(p.object.position.y + p.up), half: new Vector3(...p.half) });
    targets.push({ kind: 'drywall', material: 'drywall', hp: 1.1, center: new Vector3(2.0, 2.0, back - 0.06), half: new Vector3(0.55, 0.36, 0.12), value: 1500, colors: [0xf2efe8, 0xd9d3c4, 0x1f3d7a] });
    room.glass.forEach((pane) => targets.push({ kind: 'window', material: 'glass', hp: 0.2, pane, center: pane.position.clone().setX(pane.position.x + 0.1), half: new Vector3(0.25, 0.95, 0.85), value: 600, colors: [0xdff3ff] }));
    room.seats.forEach((s, i) => targets.push({ kind: 'desk', material: 'wood', hp: 1.4, mesh: room.desks, index: i, center: new Vector3(s.x, 0.55, s.z), half: new Vector3(0.62, 0.25, 0.26), value: 400, colors: [0x9a6a3e, 0x80552f] }));
    for (let i = 0; i < room.chairs.count; i++) {
        room.chairs.getMatrixAt(i, m);
        const p = new Vector3().setFromMatrixPosition(m);
        targets.push({ kind: 'chair', material: 'wood', hp: 0.7, mesh: room.chairs, index: i, center: new Vector3(p.x, 0.45, p.z), half: new Vector3(0.22, 0.45, 0.22), value: 150, colors: [0x7f5632, 0x6b4527] });
    }
    targets.push({ kind: 'ext', material: 'metal', hp: 0.25, center: room.ext.position.clone(), half: new Vector3(0.11, 0.28, 0.11), value: 700, colors: [0xb3121a] });
    targets.push({ kind: 'hat', material: 'metal', hp: Infinity, center: room.hat.position.clone().setY(room.hat.position.y + 0.06), half: new Vector3(0.17, 0.12, 0.17) });
    targets.push({ kind: 'board', material: 'slate', hp: Infinity, center: new Vector3(0, 1.55, -4.74), half: new Vector3(2.05, 0.68, 0.12) });
    for (const [x, z, hx, nz] of [[0, back, 4.5, -1], [-3.35, -back, 1.15, 1], [3.35, -back, 1.15, 1]]) targets.push({ kind: 'wall', material: 'plaster', hp: Infinity, center: new Vector3(x, 2.25, z), half: new Vector3(hx, 1.05, 0.14), normal: new Vector3(0, 0, nz) });
    for (const t of targets) { t.max = t.hp; if (t.mesh) { t.mesh.getMatrixAt(t.index, m); t.matrix = m.clone(); } }

    // The hole behind the poster, waiting, and the light that comes through it.
    const holeView = place(Props.hole(), 2.0, 2.0, back - 0.008, Math.PI);
    holeView.visible = false;
    // No real light for it (a light added mid-game recompiles every material, and one more light costs every pixel on a Quest):
    // a warm pool spilling across the floor in front of the hole does the job.
    const daylight = new Mesh(new PlaneGeometry(2.6, 3.4), holeView.userData.halo.material.clone());
    daylight.material.opacity = 0; daylight.material.color.set(0xffb070);
    daylight.rotation.x = -Math.PI / 2; daylight.position.set(2.0, 0.008, back - 1.7);
    scene.add(daylight);
    const signHome = room.notAHole[2].position.clone(), signTurn = room.notAHole[2].rotation.clone();
    const extHome = room.ext.rotation.clone(), hatHome = room.hat.position.clone();

    // Debris: instanced pieces with gravity, spin, bounce and a floor. Each material breaks into its own shape.
    const N = 600, white = (roughness, extra = {}) => new MeshStandardMaterial({ color: 0xffffff, roughness, ...extra });
    const debris = {
        wood: makePool(new BoxGeometry(1, 1, 1), white(0.65)),   // splinters and planks
        glass: makePool(new BoxGeometry(1, 1, 1), white(0.04, { metalness: 0.9, transparent: true, opacity: 0.75 })),   // thin shards that catch the sun
        shard: makePool(new BoxGeometry(1, 1, 1), white(0.3)),   // pottery and drywall: thin, curved-looking flakes
        lump: makePool(new IcosahedronGeometry(0.5, 0), white(0.95, { flatShading: true })),   // plaster: crumbly chunks
    };
    const POOL = { wood: 'wood', glass: 'glass', ceramic: 'shard', drywall: 'shard', plaster: 'lump', metal: 'shard' };
    function makePool(geometry, material) {
        const mesh = new InstancedMesh(geometry, material, N);
        mesh.castShadow = true; mesh.frustumCulled = false;
        for (let i = 0; i < N; i++) { mesh.setMatrixAt(i, hidden); mesh.setColorAt(i, new Color(0xffffff)); }
        scene.add(mesh);
        return { mesh, next: 0, parts: Array.from({ length: N }, () => ({ alive: false, p: new Vector3(), v: new Vector3(), q: new Quaternion(), w: new Vector3(), s: new Vector3() })) };
    }
    const spin = new Quaternion(), dummy = new Object3D(), tint = new Color(), rnd = () => Math.random() - 0.5;
    function burst(material, at, dir, n, power, big, colors = [0xffffff], spread = big ? 0.4 : 0.06) {
        const name = POOL[material], pool = debris[name];
        for (let k = 0; k < n; k++) {
            const i = pool.next, d = pool.parts[i]; pool.next = (pool.next + 1) % N;
            d.alive = true; d.rest = 0; d.material = material;
            d.p.copy(at).add(new Vector3(rnd(), rnd(), rnd()).multiplyScalar(spread));
            d.v.copy(dir).multiplyScalar(power * (0.4 + Math.random())).add(new Vector3(rnd() * 2, Math.random() * 2, rnd() * 2).multiplyScalar(0.5 + power * 0.35));
            d.w.set(rnd(), rnd(), rnd()).multiplyScalar(material === 'plaster' ? 10 : 22);
            d.q.random();
            const r = Math.random();
            if (material === 'wood') d.s.set(0.015 + r * (big ? 0.45 : 0.025), 0.015 + Math.random() * 0.02, big ? 0.05 + Math.random() * 0.12 : 0.08 + Math.random() * 0.1);   // long, thin, along the grain
            else if (material === 'glass') d.s.set(0.03 + r * 0.13, 0.003, 0.03 + Math.random() * 0.16);
            else if (material === 'ceramic') d.s.set(0.015 + r * 0.05, 0.006, 0.015 + Math.random() * 0.05);   // small, and lots of them
            else if (material === 'drywall') d.s.set(0.04 + r * (big ? 0.2 : 0.06), 0.013, 0.04 + Math.random() * (big ? 0.18 : 0.05));
            else if (material === 'plaster') d.s.setScalar(0.015 + r * r * (big ? 0.11 : 0.04));
            else d.s.set(0.01, 0.01, 0.01);
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
    function crater(point, n, e) {
        const c = craters[nextCrater++ % craters.length];
        c.visible = true; c.position.copy(point).setZ(n.z > 0 ? -back + 0.006 : back - 0.006);
        c.rotation.set(0, n.z > 0 ? 0 : Math.PI, Math.random() * 6);
        c.scale.setScalar(0.12 + e * 0.22);
    }

    // Sound: synthesised per material, through a soft limiter so a combo of ten breaks doesn't clip.
    const ctx = () => audio()?.ctx;
    let noise = null, bus = null;
    const out = (c) => {
        if (!bus) { bus = new DynamicsCompressorNode(c, { threshold: -14, knee: 8, ratio: 6, attack: 0.003, release: 0.2 }); bus.connect(c.destination); }
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
    function showReport(total, kinds, grade) {
        const pct = state.hits ? Math.round(state.right / state.hits * 100) : 0;
        const comment = total > 30000 ? 'Your child has demolished the classroom, the corridor and, we suspect, the concept of school.' : total > 15000 ? 'Shows real promise. The school does not.' : total > 5000 ? 'Tries hard. Breaks things. Could break more things.' : 'Your child was gentle with the furniture. We are worried.';
        report.material.map?.dispose();
        report.material.map = letter('REPORT CARD: DEMOLITION', `Score: ${total}\nMaterials broken: ${kinds} of 6\nThings destroyed: ${state.broken}\nRight tool for the job: ${pct}%\nFollow-through: ${state.followThroughs} swings\nBest combo: x${state.bestCombo}\n\nGRADE: ${grade.split('.')[0]}\n\nTeacher's comment: ${comment}\n\nSwing hard to stay after class (again).`);
        report.material.needsUpdate = true;
        const head = camera.getWorldPosition(new Vector3()), ahead = camera.getWorldDirection(new Vector3()).setY(0).normalize();
        report.position.copy(head).addScaledVector(ahead, 0.75).setY(head.y - 0.12);
        report.lookAt(head.x, report.position.y, head.z);
        report.visible = true;
        const y0 = report.position.y;
        animate(1.2, (f) => { report.material.opacity = f; report.position.y = y0 - 0.15 * (1 - f) ** 2; });
    }

    const fresh = () => ({ bestCombo: 0, slowUntil: 0, dust: 0, score: 0, combo: 0, lastBreak: -9, broken: 0, materials: new Set(), right: 0, hits: 0, lodges: 0, followThroughs: 0, wrong: {}, said: new Set(), boardHits: 0, powderUntil: 0 });
    const state = { phase: 'intro', endsAt: 0, ...fresh() };
    const haptic = (i, v, ms) => renderer.xr.getSession()?.inputSources[i]?.gamepad?.hapticActuators?.[0]?.pulse?.(v, ms);
    const anims = [];
    const animate = (dur, run, done) => anims.push({ t: 0, dur, run, done });

    // How the blow lands, not just how fast. The axe wants its edge leading and the wood square-on;
    // the flat of the blade is a slap. The hammer forgives the angle, but not a glancing blow.
    const edge = new Vector3(), normal = new Vector3(), toolQ = new Quaternion();
    function faceNormal(target, from) {   // the face of the box the head came in through
        const d = from.clone().sub(target.center), h = target.half;
        const ax = Math.abs(d.x) / h.x, ay = Math.abs(d.y) / h.y, az = Math.abs(d.z) / h.z;
        return ax > ay && ax > az ? normal.set(Math.sign(d.x), 0, 0) : ay > az ? normal.set(0, Math.sign(d.y), 0) : normal.set(0, 0, Math.sign(d.z));
    }
    function hit(tool, i, t, target, point, speed, dir, now) {
        if (now - (target.lastHit ?? -9) < 0.2) return false;
        target.lastHit = now;
        tool.mesh.getWorldQuaternion(toolQ);
        const align = edge.set(0, -1, 0).applyQuaternion(toolQ).dot(dir);   // 1: edge (or hammer face) leading the swing
        const square = Math.max(0, -(target.normal ?? faceNormal(target, tool.entry ?? point)).dot(dir));   // 1: straight in; 0: skimming along the surface
        const quality = tool.name === 'axe' ? 0.25 + 0.75 * Math.max(0, align) ** 1.5 : 0.6 + 0.4 * Math.abs(align);
        const e = Math.min(1.3, (speed - 0.8) / 5) * quality * (0.35 + 0.65 * square);   // 0: a tap; 1: a full committed swing, edge first, square on
        const brittle = target.material === 'glass' || target.material === 'ceramic';
        if (square < 0.3 && !brittle) { sound.glance(); haptic(i, 0.2, 25); state.score += 5; return true; }   // a glancing blow scrapes off
        const affinity = AFFINITY[tool.name][target.material];
        state.hits++;
        if (affinity === 1) state.right++;
        else if (affinity < 0.9 && HINTS[target.material] && (state.wrong[target.material] = (state.wrong[target.material] ?? 0) + 1) >= 3 && !state.said.has(target.material)) { state.said.add(target.material); say(HINTS[target.material]); }
        haptic(i, Math.min(1, 0.3 + e), 20 + e * 60);
        if (target.hp === Infinity) return bump(tool, i, target, point, dir, e, now), true;
        target.hp -= e * affinity;
        // Follow-through: if the swing is still moving a tenth of a second later, the blow carried. Committed swings hit harder.
        tool.follow = { target, at: now + 0.1, speed, e, affinity, dir: dir.clone(), point: point.clone() };
        // A good axe blow into something fibrous that holds: the blade bites and stays.
        if (tool.name === 'axe' && (target.kind === 'desk' || target.kind === 'drywall') && target.hp > 0 && align > 0.55 && square > 0.5 && e > 0.2) lodge(tool, i, target, point, dir, now);
        const broke = target.hp <= 0;
        sound[target.material](Math.max(0.3, e), broke);
        burst(target.material, point, dir, Math.round(4 + e * 14), speed * 0.35, false, target.colors);
        if (target.material === 'plaster' || target.material === 'drywall') puff(dust, point, 6 + e * 14, { color: 0xe4ded0, speed: 0.3 + e * 0.6, size: 0.12, dir });
        if (target.material === 'metal') puff(sparks, point, 10 + e * 20, { color: 0xffb050, speed: 2 + e * 3, size: 0.012, life: 0.4, alpha: 1, grow: 0, drag: 0.5, dir });
        if (target.mesh && !broke) target.shove = dir.clone().setY(0).multiplyScalar(0.04 * e);   // a jolt: the desk shoves along the hit, then settles
        if (target.object && !broke) target.wobble = 1;
        if (!broke) { state.score += Math.round(10 * e * (affinity === 1 ? 2 : 1)); return true; }
        shatter(tool, target, point, dir, speed, e, affinity, now);
        return true;
    }

    // Things that don't break, but react.
    function bump(tool, i, target, point, dir, e, now) {
        if (once[target.kind] && !state.said.has(target.kind) && e > 0.15) { state.said.add(target.kind); say(once[target.kind]); }
        if (target.kind === 'wall') {
            sound.plaster(Math.max(0.3, e), false);
            if (e > 0.12) crater(point, target.normal, e);
            burst('plaster', point, target.normal.clone().multiplyScalar(-1).add(dir).normalize(), Math.round(3 + e * 10), 1 + e * 2, false, [0xe8e2d4, 0xd5cebf]);
            puff(dust, point, 8 + e * 16, { color: 0xe8e2d4, speed: 0.3 + e * 0.5, size: 0.14, dir: target.normal });
            state.score += Math.round(15 * e); state.dust = Math.min(2.6, state.dust + 0.05 * e);
            state.materials.add('plaster');
        } else if (target.kind === 'board') {   // the one thing you cannot break, because it keeps the score
            sound.slate(Math.max(0.3, e));
            puff(dust, point, 14, { color: 0xf2f2ea, speed: 0.3, size: 0.08, dir: new Vector3(0, 0, 1) });
            say(BOARD[Math.min(BOARD.length - 1, state.boardHits++)]);
        } else if (target.kind === 'hat') {   // indestructible, and smug about it
            sound.bonk(); sound.metal(0.4);
            const hat = room.hat, y0 = hatHome.y;
            animate(0.6, (f) => { hat.position.y = y0 + Math.sin(f * Math.PI) * 0.25; hat.rotation.y += 0.4; }, () => { hat.position.copy(hatHome); });
            state.score += 50; state.materials.add('metal');
        }
    }

    function shatter(tool, target, point, dir, speed, e, affinity, now) {
        if (target.mesh) { target.mesh.setMatrixAt(target.index, hidden); target.mesh.instanceMatrix.needsUpdate = true; }
        if (target.pane) target.pane.visible = false;
        if (target.object) target.object.visible = false;
        renderer.shadowMap.needsUpdate = true;
        for (const other of tools) if (other.lodged?.target === target) free(other, false);
        const big = { wood: 14, glass: 40, ceramic: 45, plaster: 30, drywall: 26, metal: 0 }[target.material];
        burst(target.material, target.center, dir, big, speed * 0.5, true, target.colors, target.kind === 'desk' || target.kind === 'window' ? 0.45 : 0.12);
        if (target.kind === 'pot') burst('plaster', target.center, dir, 18, speed * 0.3, false, [0x3a2414, 0x4a301a, 0x3f7a33]);   // soil, and the plant
        if (target.material === 'plaster' || target.material === 'drywall') { puff(dust, target.center, 70, { color: 0xe4ded0, spread: 0.3, speed: 0.6, size: 0.22, life: 4, dir }); state.dust += 0.4; }
        if (target.kind === 'volcano') { sound.erupt(); for (let k = 0; k < 6; k++) setTimeout(() => puff(dust, target.center.clone().setY(target.center.y + 0.1), 12, { color: k % 2 ? 0xff6a2a : 0xffe6a0, speed: 1.6, up: 3, size: 0.1, life: 2, dir: new Vector3(0, 1, 0) }), k * 90); }
        if (target.kind === 'drywall') reveal();
        if (target.kind === 'ext') { sound.powder(); state.powderUntil = now + 2.6; const ext = room.ext; animate(0.5, (f) => { ext.rotation.z = extHome.z + f * 0.5; ext.rotation.x = extHome.x - f * 0.2; }); }
        state.combo = now - state.lastBreak < 2.5 ? state.combo + 1 : 1;
        state.bestCombo = Math.max(state.bestCombo, state.combo);
        state.lastBreak = now;
        state.broken++; state.materials.add(target.material);
        state.dust = Math.min(2.6, state.dust + (target.kind === 'chair' ? 0.12 : 0.3));   // what breaks hangs in the air, and in the light
        const gained = Math.round(target.value * (affinity === 1 ? 1.5 : 1) * Math.min(8, state.combo) * (0.6 + e * 0.5));
        state.score += gained;
        flip();
        const quips = QUIPS[target.kind] ?? [''];
        const special = !['desk', 'chair', 'window'].includes(target.kind);
        say(special ? quips[Math.floor(Math.random() * quips.length)] : state.combo > 2 ? `COMBO x${state.combo}! +${gained}` : Math.random() < 0.4 ? quips[Math.floor(Math.random() * quips.length)] : `+${gained}`);
    }

    // The poster comes down, the hole was a hole, and the summer comes in.
    function reveal() {
        const [cracks, glow, sign] = room.notAHole;
        cracks.visible = glow.visible = false;
        holeView.visible = true;
        animate(1.1, (f) => { sign.position.set(signHome.x, signHome.y - (signHome.y - 0.05) * f * f, signHome.z - 0.25 * f); sign.rotation.set(-Math.PI / 2 * f * f, signTurn.y, signTurn.z + f * 0.6, 'YXZ'); });
        animate(1.5, (f) => { daylight.material.opacity = 0.55 * f; holeView.userData.halo.material.opacity = 0.4 + 0.6 * f; });
    }

    function lodge(tool, i, target, point, dir, now) {
        const pivot = new Group();
        pivot.position.copy(point);   // pivot on the blade, so the handle quivers about it
        pivot.quaternion.copy(toolQ);
        scene.add(pivot);
        pivot.updateMatrixWorld();
        pivot.attach(tool.mesh);
        pivot.position.addScaledVector(dir, 0.035);   // bitten in a few centimetres
        tool.lodged = { target, pivot, at: now, hand: tool.grip.getWorldPosition(new Vector3()) };
        tool.follow = null;
        sound.lodge();
        haptic(i, 1, 140);
        if (!state.lodges++) say('IT IS STUCK. PULL.');
    }
    function free(tool, yanked, i = 0, now = 0) {
        const { pivot, target } = tool.lodged;
        tool.grip.attach(tool.mesh);
        tool.mesh.position.set(0, 0, 0); tool.mesh.quaternion.identity(); tool.mesh.rotation.set(TILT, 0, 0);
        scene.remove(pivot);
        tool.lodged = null; tool.prev = null; tool.vel.set(0, 0, 0);
        if (!yanked) return;
        sound.yank(); haptic(i, 0.8, 60);
        burst(target.material, pivot.position, pivot.position.clone().sub(target.center).setY(0.5).normalize(), 12, 2.5, false, target.colors);
        target.lastHit = -9;
        target.hp -= 0.35;   // wrenching it out tears the material too
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
        report.visible = false;
        sound.bell(WESTMINSTER);
        say('LESSON 2: DEMOLITION. 90 SECONDS. GO.');
    }
    function finish() {
        state.phase = 'over';
        sound.bell([...WESTMINSTER].reverse());
        const kinds = MATERIALS.filter((k) => state.materials.has(k)).length, total = state.score + kinds * kinds * 400;
        const grade = total > 30000 ? 'A+ (PLEASE LEAVE)' : total > 15000 ? 'B. SHOWS PROMISE. THE SCHOOL DOES NOT.' : total > 5000 ? 'C. NEEDS MORE DEMOLITION.' : 'F. GENTLE. SUSPICIOUSLY GENTLE.';
        say(`PENCILS DOWN. ${total} PTS, ${kinds}/6 MATERIALS. ${grade}`);
        state.total = total;
        state.finishedAt = performance.now() / 1000;
        state.slowUntil = state.finishedAt + 1.8;   // the bell: everything in the air hangs for a moment
        writeTag('0:00', true);
        setTimeout(() => state.phase === 'over' && showReport(total, kinds, grade), 2200);
    }
    function reset() {
        for (const t of targets) { t.hp = t.max; if (t.mesh) t.mesh.setMatrixAt(t.index, t.matrix); if (t.pane) t.pane.visible = true; if (t.object) t.object.visible = true; }
        room.desks.instanceMatrix.needsUpdate = room.chairs.instanceMatrix.needsUpdate = true;
        renderer.shadowMap.needsUpdate = true;
        for (const pool of Object.values(debris)) { pool.parts.forEach((d, i) => { d.alive = false; pool.mesh.setMatrixAt(i, hidden); }); pool.mesh.instanceMatrix.needsUpdate = true; }
        for (const cloud of [dust, sparks]) cloud.life.fill(0);
        for (const c of craters) c.visible = false;
        for (const tool of tools) if (tool.lodged) free(tool, false);
        const [cracks, glow, sign] = room.notAHole;
        cracks.visible = glow.visible = true; sign.position.copy(signHome); sign.rotation.copy(signTurn);
        holeView.visible = false; daylight.material.opacity = 0; report.visible = false;
        room.ext.rotation.copy(extHome); room.hat.position.copy(hatHome);
        anims.length = 0;
        Object.assign(state, { phase: 'ready', ...fresh() });
        writeTag('1:30');
        say('TUESDAY (AGAIN). SWING TO START.');
    }

    // Personality: the cat waves, and flinches when a tool comes at it; the Principal leans away; the plants shiver.
    const cat = props.find((p) => p.kind === 'cat'), principal = props.find((p) => p.kind === 'bust'), pots = props.filter((p) => p.kind === 'pot');
    const fear = { cat: 0, bust: 0, squeakAt: -9 };
    function personality(t, dt, heads) {
        const near = (object, r) => heads.some(({ p, speed }) => speed > 1 && p.distanceTo(object.position) < r);
        const k = 1 - Math.exp(-dt * 14);
        const catScared = cat.object.visible && near(cat.object, 0.7);
        if (catScared && fear.cat < 0.3 && t - fear.squeakAt > 1.2) { fear.squeakAt = t; sound.squeak(); }
        fear.cat += ((catScared ? 1 : 0) - fear.cat) * k;
        const { head, paw } = cat.object.userData;
        head.rotation.set(-0.3 * fear.cat, 1.1 * fear.cat, 0);                   // looks away
        paw.rotation.z = fear.cat > 0.5 ? 1.2 : Math.sin(t * 4) * 0.35;           // stops waving, covers up
        cat.object.scale.set(1 + 0.08 * fear.cat, 1 - 0.14 * fear.cat, 1);       // ducks
        fear.bust += ((principal.object.visible && near(principal.object, 0.8) ? 1 : 0) - fear.bust) * k;
        principal.object.userData.head.rotation.set(-0.35 * fear.bust, 0, 0.12 * fear.bust);
        principal.object.rotation.x = -0.1 * fear.bust;
        for (const p of pots) if (p.object.visible) {
            const shiver = near(p.object, 0.6) ? 1 : 0;
            p.object.userData.leaves.forEach((leaf, j) => { leaf.rotation.y = shiver * Math.sin(t * 40 + j) * 0.25; });
        }
        for (const p of props) if (p.wobble) {   // a hit that didn't break it: it rocks on its base
            p.wobble *= Math.exp(-dt * 5);
            p.object.rotation.z = Math.sin(t * 30) * 0.12 * p.wobble;
            if (p.wobble < 0.01) { p.wobble = 0; p.object.rotation.z = 0; }
        }
    }

    const world = new Vector3(), dir = new Vector3(), heads = tools.map(() => ({ p: new Vector3(), speed: 0 }));
    function update(t, dt) {
        state.dust *= Math.exp(-dt / 35);
        for (const tool of tools) tool.mesh.visible = state.phase !== 'intro' && (tool === active() || !!tool.lodged);
        for (let i = anims.length - 1; i >= 0; i--) { const a = anims[i]; a.t += dt; const f = Math.min(1, a.t / a.dur); a.run(f); if (f === 1) { anims.splice(i, 1); a.done?.(); } }
        const slow = t < state.slowUntil ? 0.15 + 0.85 * ((1.8 - (state.slowUntil - t)) / 1.8) ** 3 : 1;   // the final bell eases time back in
        stepCloud(dust, dt * slow, 0.02); stepCloud(sparks, dt * slow, 6);
        if (t < state.powderUntil) puff(dust, room.ext.position.clone().setY(1.55), 6, { color: 0xffffff, speed: 2.2, size: 0.09, life: 3, grow: 1.4, alpha: 0.35, dir: new Vector3(Math.sin(t * 7) - 0.8, 0.2, Math.cos(t * 5) * 0.8).normalize(), drag: 1.2 });   // the extinguisher, finally used
        if (renderer.xr.isPresenting) syncAnchors();
        if (!renderer.xr.isPresenting || state.phase === 'intro') return;
        if (state.phase === 'play' && t > state.endsAt) finish();
        if (state.phase === 'play' && Math.ceil(state.endsAt - t) !== state.shown) {
            state.shown = Math.ceil(state.endsAt - t);
            writeTag(`${Math.floor(state.shown / 60)}:${String(state.shown % 60).padStart(2, '0')}`, state.shown <= 10);
            if (state.shown <= 10 || state.shown % 15 === 0) say(`${state.shown}s LEFT  ·  SCORE ${state.score}`);
            if (state.shown <= 10 && ctx()) { ping(ctx(), state.shown <= 3 ? 1900 : 1500, 0.06, 0.25, 0, 'square'); haptic(1, 0.15, 15); }   // the last ten seconds tick, loud, in the hand
        }
        for (const h of heads) h.speed = 0;
        if (holder.hand === null) equip(0);
        tools.forEach((tool) => {
            const i = tool.hand ?? 0;
            if (tool !== active() && !tool.lodged) return;
            if (!tool.grip.visible) { tool.prev = null; return; }
            if (tool.lodged) {   // the handle quivers, and the hand has to pull it free
                const l = tool.lodged, age = t - l.at;
                l.pivot.quaternion.copy(l.pivot.userData.q ??= l.pivot.quaternion.clone());
                l.pivot.rotateX(Math.sin(age * 57) * 0.22 * Math.exp(-age * 5));
                if (tool.grip.getWorldPosition(dir).distanceTo(l.hand) > 0.3 || age > 6) free(tool, age <= 6, i, t);
                return;
            }
            resolveFollow(tool, i, t);
            tool.mesh.localToWorld(world.copy(tool.mesh.userData.tip));
            if (tool.prev && dt > 0) tool.vel.lerp(dir.subVectors(world, tool.prev).divideScalar(dt), 0.6);
            tool.prev = (tool.prev ?? new Vector3()).copy(world);
            const speed = tool.vel.length();
            if (t < (tool.settle ?? 0)) { tool.vel.set(0, 0, 0); return; }
            heads[0].p.copy(world); heads[0].speed = speed;
            if (speed < 1.2) return;   // resting, or a gentle touch
            kick(world, tool.vel);
            if (state.phase === 'ready') start(t);
            if (state.phase === 'over') { if (t - state.finishedAt > 4 && speed > 3) reset(); return; }
            dir.copy(tool.vel).normalize();
            const entry = world.clone().addScaledVector(tool.vel, -dt * 1.5);   // where the head was just before: tells which face it came through
            for (const target of targets) {
                if (target.hp <= 0 || tool.lodged) continue;
                if (Math.abs(world.x - target.center.x) < target.half.x && Math.abs(world.y - target.center.y) < target.half.y && Math.abs(world.z - target.center.z) < target.half.z) {
                    tool.entry = entry;
                    if (hit(tool, i, t, target, world.clone(), speed, dir.clone(), t)) break;   // one thing per swing per frame: the nearest layer takes it
                }
            }
        });
        personality(t, dt, heads);
        // Jolted furniture springs back.
        for (const target of targets) if (target.shove) {
            m.copy(target.matrix); m.elements[12] += target.shove.x; m.elements[14] += target.shove.z;
            target.mesh.setMatrixAt(target.index, m); target.mesh.instanceMatrix.needsUpdate = true;
            target.shove.multiplyScalar(0.8); if (target.shove.lengthSq() < 1e-7) target.shove = null;
        }
        stepDebris(dt * slow);
    }

    // A swinging tool bats loose debris out of the way.
    function kick(at, vel) {
        for (const pool of Object.values(debris)) for (const d of pool.parts) {
            if (!d.alive || Math.abs(d.p.x - at.x) > 0.15 || Math.abs(d.p.z - at.z) > 0.15 || Math.abs(d.p.y - at.y) > 0.15) continue;
            d.v.copy(vel).multiplyScalar(0.5 + Math.random() * 0.3).add(new Vector3(0, 1 + Math.random(), 0));
            d.w.set(rnd(), rnd(), rnd()).multiplyScalar(18); d.rest = 0;
        }
    }
    function stepDebris(dt) {
        for (const pool of Object.values(debris)) {
            let moved = false;
            pool.parts.forEach((d, i) => {
                if (!d.alive || d.rest > 1) return;
                moved = true;
                const flutter = d.material === 'drywall' || d.material === 'glass' ? 0.97 : 0.995;   // flat things sail a little
                d.v.y -= 9.8 * dt; d.v.x *= flutter; d.v.z *= flutter; d.p.addScaledVector(d.v, dt);
                spin.setFromAxisAngle(dir.copy(d.w).normalize(), d.w.length() * dt); d.q.premultiply(spin);
                const floor = Math.min(d.s.x, d.s.y, d.s.z) / 2;
                if (d.p.y < floor) {   // the floor: bounce, scrape, settle flat
                    const impact = -d.v.y;
                    d.p.y = floor; d.v.y *= d.material === 'plaster' ? -0.15 : -0.3; d.v.x *= 0.6; d.v.z *= 0.6; d.w.multiplyScalar(0.5);
                    if ((d.material === 'glass' || d.material === 'ceramic') && impact > 1 && Math.random() < 0.12) sound.tink(d.material);
                    if (d.v.lengthSq() < 0.02) {
                        d.rest += dt * 10; d.w.set(0, 0, 0);
                        if (d.material !== 'plaster') { const thin = d.s.y < d.s.x ? 'y' : 'x'; d.q.setFromAxisAngle(new Vector3(0, 1, 0), Math.random() * 6); if (thin === 'x') d.q.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI / 2)); }
                    }
                }
                d.p.x = Math.max(-4.4, Math.min(4.4, d.p.x)); d.p.z = Math.max(-4.7, Math.min(4.7, d.p.z));
                dummy.position.copy(d.p); dummy.quaternion.copy(d.q); dummy.scale.copy(d.s); dummy.updateMatrix();
                pool.mesh.setMatrixAt(i, dummy.matrix);
            });
            if (moved) pool.mesh.instanceMatrix.needsUpdate = true;
        }
    }
    return { update, state, tools, targets, props, reset, start, finish, equip, holder, hole: holeView, report };
}
