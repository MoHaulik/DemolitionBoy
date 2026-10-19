// Before the dream: the real class. A Tuesday afternoon at 2:47, flat fluorescent light, the sky grey, the teacher
// droning through a muted trombone with his back to everyone, a fly, and a doodle in the margin of a notebook.
// The boy's eyes get heavy. Then, behind them, the dream: the empty, sunlit room, and the axe.
//
// It is shot like a film from one chair: you can't cut the camera in VR, so the direction is done with sound
// (where the drone and the fly are), with movement (the fly leads your eye to the doodle) and with the eyelids
// (the blinks are the cuts). The ending bookends it: the bell, a blink, and the class is staring at you.
import {
    BackSide, CanvasTexture, CapsuleGeometry, Color, CylinderGeometry, DoubleSide, Group, InstancedMesh, Matrix4, Mesh, MeshBasicMaterial,
    MeshStandardMaterial, Object3D, PlaneGeometry, Quaternion, ShaderMaterial, SphereGeometry, SRGBColorSpace, TorusGeometry, Vector3,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { FONTS } from './paint.js';

const rnd = () => Math.random() - 0.5;
const paint = (geometry, color) => {   // one colour into a geometry's vertex colours, so merged parts keep theirs
    const c = new Color(color), n = geometry.attributes.position.count, a = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) a.set([c.r, c.g, c.b], i * 3);
    geometry.setAttribute('color', new (geometry.attributes.position.constructor)(a, 3));
    return geometry;
};

/** The boy's notebook, open at the doodle he has been working on all lesson instead of listening. */
function doodle() {
    const c = Object.assign(document.createElement('canvas'), { width: 640, height: 512 }), g = c.getContext('2d');
    g.fillStyle = '#f6f3e8'; g.fillRect(0, 0, 640, 512);
    g.strokeStyle = 'rgba(80,120,200,.35)'; g.lineWidth = 2;
    for (let y = 60; y < 512; y += 34) { g.beginPath(); g.moveTo(0, y); g.lineTo(640, y); g.stroke(); }
    g.strokeStyle = 'rgba(210,70,70,.4)'; g.beginPath(); g.moveTo(50, 0); g.lineTo(50, 512); g.stroke();
    g.fillStyle = 'rgba(0,0,0,.08)'; g.fillRect(316, 0, 8, 512);   // the spine
    const pencil = (w = 3, a = 0.85) => { g.strokeStyle = `rgba(40,40,46,${a})`; g.lineWidth = w; g.lineCap = g.lineJoin = 'round'; };
    const line = (pts) => { g.beginPath(); pts.forEach(([x, y], i) => g[i ? 'lineTo' : 'moveTo'](x + rnd() * 2, y + rnd() * 2)); g.stroke(); };
    // Left page: the hero. A stick figure in a power stance, a cape, a lightning bolt, a hammer far too big for him.
    pencil(4);
    g.beginPath(); g.arc(170, 170, 22, 0, 7); g.stroke();
    line([[170, 192], [170, 290]]); line([[170, 290], [138, 360]]); line([[170, 290], [205, 360]]);
    line([[170, 220], [120, 250]]); line([[170, 215], [220, 160], [236, 110]]);
    pencil(3); line([[226, 115], [252, 40]]);   // the handle
    g.fillStyle = 'rgba(40,40,46,.85)'; g.fillRect(222, 18, 70, 36);   // the head
    pencil(2.5); line([[160, 200], [96, 300], [140, 290], [110, 330], [176, 230]]);   // the cape, flapping
    g.fillStyle = '#d22'; g.beginPath(); [[168, 228], [178, 228], [170, 246], [182, 246], [162, 272], [168, 252], [158, 252]].forEach(([x, y], i) => g[i ? 'lineTo' : 'moveTo'](x, y)); g.fill();
    pencil(2, 0.6); for (let k = 0; k < 6; k++) { const a = -2.4 + k * 0.25; line([[262 + Math.cos(a) * 30, 36 + Math.sin(a) * 30], [262 + Math.cos(a) * 52, 36 + Math.sin(a) * 52]]); }   // swoosh
    g.save(); g.translate(70, 460); g.rotate(-0.06); g.fillStyle = '#c8202a'; g.font = `44px ${FONTS.marker}`; g.fillText('DEMOLITION BOY', 0, 0); g.restore();
    pencil(3, 0.7); line([[70, 472], [300, 462]]);
    // Right page: the school, coming down. KA-BOOM. And the teacher, small, in a corner.
    pencil(3);
    line([[400, 330], [400, 200], [560, 200], [560, 330]]); line([[390, 205], [480, 150], [570, 205]]);
    for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) g.strokeRect(415 + k * 48, 225 + r * 50, 26, 26);
    pencil(3.5, 0.9); line([[480, 150], [492, 200], [470, 250], [500, 290], [484, 330]]);   // the crack
    g.fillStyle = 'rgba(40,40,46,.8)'; for (let k = 0; k < 7; k++) g.fillRect(560 + Math.random() * 60, 140 + Math.random() * 90, 10, 8);   // flying bricks
    g.strokeStyle = '#e07a10'; g.lineWidth = 3; g.beginPath();
    for (let k = 0; k <= 16; k++) { const a = k / 16 * Math.PI * 2, r = k % 2 ? 40 : 78; g.lineTo(580 + Math.cos(a) * r, 120 + Math.sin(a) * r); }
    g.stroke(); g.fillStyle = '#e07a10'; g.font = `28px ${FONTS.marker}`; g.fillText('KA-BOOM!', 525, 128);
    pencil(2.5); g.beginPath(); g.arc(380, 420, 10, 0, 7); g.stroke(); line([[380, 430], [380, 465]]); line([[380, 440], [366, 452]]); line([[380, 440], [394, 452]]);
    g.fillStyle = 'rgba(40,40,46,.85)'; g.font = `600 26px ${FONTS.hand}`; g.fillText('teacher (sad)', 400, 430); g.fillText('vs. TUESDAY', 440, 480);
    g.fillStyle = 'rgba(70,90,160,.9)'; g.font = `600 30px ${FONTS.hand}`; g.fillText('D.B.', 560, 40);
    const t = new CanvasTexture(c); t.colorSpace = SRGBColorSpace; t.anisotropy = 8;
    return t;
}

/** Eyelids: a sphere round the head; the upper lid comes down further than the lower comes up, as real ones do,
 *  with a curve to the edge, a soft rim and the warm dark of light through skin. `open` 1 is wide awake, 0 is asleep. */
function eyelids() {
    const m = new ShaderMaterial({
        uniforms: { open: { value: 0 }, heavy: { value: 0 } }, transparent: true, depthTest: false, depthWrite: false, side: BackSide,
        vertexShader: 'varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
        fragmentShader: `uniform float open; uniform float heavy; varying vec3 vDir;
            void main() {
                vec3 d = normalize(vDir);
                float z = max(.15, -d.z), x = d.x / z, y = d.y / z;
                float top = mix(-.1, 1.7, open) - .2 * x * x, bottom = mix(-.1, -1.7, open) + .12 * x * x;
                float lid = max(smoothstep(top - .09, top + .01, y), 1. - smoothstep(bottom - .01, bottom + .09, y));
                float vignette = heavy * smoothstep(.35, 1.5, length(vec2(x, y * 1.25)));
                float a = max(lid, vignette * .85);
                float rim = 1. - smoothstep(0., .25, min(abs(y - top), abs(y - bottom)));
                gl_FragColor = vec4(vec3(.09, .02, .015) * rim * (1. - .6 * (1. - open)), a);
            }`,
    });
    const s = new Mesh(new SphereGeometry(0.25, 32, 16), m);
    s.renderOrder = 1000; s.frustumCulled = false; s.visible = false;
    return s;
}

export function createStory({ scene, camera, rig, room, audio, write, params }) {
    const speed = Number(params.get('storyspeed')) || 1;   // a test knob: the same story, faster
    const seatOf = room.seats.find((s) => s.row === 4 && s.col === 1);   // his desk: the one that has been replaced fourteen times
    const SPOT = new Vector3(seatOf.x, 0, seatOf.z + 0.62);   // where he sits: behind it, between the chairs

    // ---- The class ------------------------------------------------------------------------------------------------
    const cast = new Group(); cast.visible = false; scene.add(cast);
    const bodyGeo = mergeGeometries([
        new CapsuleGeometry(0.15, 0.24, 4, 12).scale(1, 1, 0.72),
        new CapsuleGeometry(0.045, 0.22, 3, 8).rotateX(-1.1).translate(-0.17, 0.0, -0.1), new CapsuleGeometry(0.045, 0.22, 3, 8).rotateX(-1.1).translate(0.17, 0.0, -0.1),
    ]);
    const headGeo = mergeGeometries([
        paint(new SphereGeometry(0.092, 18, 14), 0xe8c3a2),
        paint(new SphereGeometry(0.011, 8, 6).translate(-0.033, 0.01, -0.085), 0x111111), paint(new SphereGeometry(0.011, 8, 6).translate(0.033, 0.01, -0.085), 0x111111),
    ]);
    // Who sits where: not every chair; never his, never the one on its back.
    const chairs = [];
    for (let i = 0; i < room.chairs.count; i++) if (Math.floor(i / 2) !== room.seats.indexOf(seatOf) && i !== 19) chairs.push(i);
    const taken = chairs.sort(() => Math.random() - 0.5).slice(0, 12);
    const N = taken.length;
    const bodies = new InstancedMesh(bodyGeo, new MeshStandardMaterial({ roughness: 0.8 }), N);
    const heads = new InstancedMesh(headGeo, new MeshStandardMaterial({ vertexColors: true, roughness: 0.6 }), N);
    const collars = new InstancedMesh(new PlaneGeometry(0.3, 0.17), new MeshStandardMaterial({ color: 0xf2f2ec, roughness: 0.8, side: DoubleSide }), N);
    for (const m of [bodies, heads, collars]) { m.castShadow = true; m.frustumCulled = false; cast.add(m); }
    const students = taken.map((chair, i) => {
        const girl = i % 2 === 1, hair = [0x15110e, 0x221812, 0x2c1e14][i % 3];
        bodies.setColorAt(i, new Color(girl ? 0x1f2b44 : 0x15181f));   // sailor navy, gakuran black
        heads.setColorAt(i, new Color(0xffffff));
        const s = { chair, girl, hair, turn: 0, nod: 0, nodTo: 0, fidget: Math.random() * 10 };
        return s;
    });
    // Hair: a cap over the top and back of each head, in its own colour, moving with it.
    const hairs = new InstancedMesh(new SphereGeometry(0.102, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.56).rotateX(0.55).translate(0, 0.012, 0.01), new MeshStandardMaterial({ roughness: 0.55 }), N);
    hairs.castShadow = true; hairs.frustumCulled = false; cast.add(hairs);
    students.forEach((s, i) => hairs.setColorAt(i, new Color(s.hair)));

    // The teacher: back to the class, chalk in hand, a man who has said this before.
    const teacher = new Group(), suit = new MeshStandardMaterial({ color: 0x5b5249, roughness: 0.85 }), skin = new MeshStandardMaterial({ color: 0xe2b996, roughness: 0.6 });
    const torso = new Mesh(new CapsuleGeometry(0.2, 0.42, 4, 14).scale(1, 1, 0.7), suit); torso.position.y = 1.28; teacher.add(torso);
    for (const x of [-0.09, 0.09]) { const leg = new Mesh(new CylinderGeometry(0.06, 0.055, 0.86, 10), new MeshStandardMaterial({ color: 0x2c2a2a, roughness: 0.9 })); leg.position.set(x, 0.43, 0); teacher.add(leg); }
    const head = new Group(); head.position.y = 1.74; teacher.add(head);
    head.add(new Mesh(new SphereGeometry(0.11, 20, 16), skin));
    const fringe = new Mesh(new TorusGeometry(0.1, 0.025, 8, 20, Math.PI * 1.3), new MeshStandardMaterial({ color: 0x8a8580, roughness: 0.8 }));
    fringe.rotation.set(Math.PI / 2, 0, Math.PI * 0.35 + Math.PI); fringe.position.y = -0.01; head.add(fringe);   // what is left of his hair, round the back
    const dark = new MeshStandardMaterial({ color: 0x1d1a18, roughness: 0.5 });
    for (const x of [-0.04, 0.04]) { const lens = new Mesh(new TorusGeometry(0.026, 0.004, 6, 16), dark); lens.position.set(x, 0.02, -0.105); head.add(lens); }
    const tache = new Mesh(new CapsuleGeometry(0.012, 0.07, 3, 8).rotateZ(Math.PI / 2), dark); tache.position.set(0, -0.035, -0.1); head.add(tache);
    const arm = new Group(); arm.position.set(0.24, 1.5, 0); teacher.add(arm);
    const sleeve = new Mesh(new CapsuleGeometry(0.05, 0.5, 3, 10), suit); sleeve.position.y = -0.27; arm.add(sleeve);
    const chalk = new Mesh(new CylinderGeometry(0.006, 0.006, 0.06), new MeshStandardMaterial({ color: 0xf6f4ea })); chalk.position.y = -0.56; arm.add(chalk);
    const otherArm = new Mesh(new CapsuleGeometry(0.05, 0.5, 3, 10), suit); otherArm.position.set(-0.24, 1.25, 0); teacher.add(otherArm);
    teacher.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    cast.add(teacher);
    const STAND = new Vector3(-0.9, 0.16, -4.38);

    // His notebook, open at the doodle; a fly that has opinions about it.
    const notebook = new Mesh(new PlaneGeometry(0.34, 0.27), new MeshStandardMaterial({ map: doodle(), roughness: 0.9, polygonOffset: true, polygonOffsetFactor: -2 }));
    notebook.rotation.set(-Math.PI / 2, 0, 0.12); notebook.receiveShadow = true; notebook.visible = false;
    scene.add(notebook);
    const fly = new Group(), wingMat = new MeshBasicMaterial({ color: 0xcfd8e0, transparent: true, opacity: 0.45, side: DoubleSide, depthWrite: false });
    fly.add(new Mesh(new SphereGeometry(0.006, 8, 6).scale(1, 0.8, 1.5), new MeshStandardMaterial({ color: 0x111111, roughness: 0.3, metalness: 0.4 })));
    const wings = [-1, 1].map((s) => { const w = new Mesh(new PlaneGeometry(0.012, 0.006), wingMat); w.position.set(s * 0.006, 0.003, 0.002); fly.add(w); return w; });
    fly.visible = false; scene.add(fly);

    // The axe, stuck in his desk when he wakes up. It was a dream. Mostly.
    let evidence = null;
    function plant(tool) {
        evidence?.removeFromParent();
        evidence = tool.clone();
        evidence.visible = true;
        // Buried edge-first in the desk top, the handle leaning back towards where he swung it from.
        evidence.quaternion.setFromAxisAngle(new Vector3(0, 1, 0), 0.35).multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -0.95));
        const blade = new Vector3(seatOf.x + 0.2, 0.77, seatOf.z + 0.02);
        evidence.position.copy(blade).sub(new Vector3(0, 0, -0.5).applyQuaternion(evidence.quaternion));
        scene.add(evidence);
    }

    // ---- Sound: the drone, the fly, a room that goes muffled as he goes under ------------------------------------
    let voice = null, buzz = null;
    function sound() {
        const a = audio();
        if (!a || voice) return;
        const ctx = a.ctx;
        const panner = (x, y, z, ref = 2) => { const p = new PannerNode(ctx, { panningModel: 'HRTF', refDistance: ref, positionX: x, positionY: y, positionZ: z }); p.connect(a.out); return p; };
        voice = { ctx, at: panner(STAND.x, 1.7, STAND.z, 3), next: 0, rate: 1, pitch: 1, on: false };
        const o = new OscillatorNode(ctx, { type: 'sawtooth', frequency: 205 }), f = new BiquadFilterNode(ctx, { type: 'bandpass', frequency: 600, Q: 1.2 }), g = new GainNode(ctx, { gain: 0 });
        const p = panner(0, 1.6, 0, 0.25);
        o.connect(f).connect(g).connect(p); o.start();
        buzz = { o, g, p };
    }
    // One syllable of a muted trombone: a sawtooth through a resonant filter that opens and closes. Wah.
    function wah(t0, { f = 160, dur = 0.28, gain = 0.2, ask = false }) {
        const { ctx, at, pitch } = voice, o = new OscillatorNode(ctx, { type: 'sawtooth', frequency: f * pitch });
        o.frequency.linearRampToValueAtTime(f * pitch * (ask ? 1.55 : 0.9 + Math.random() * 0.08), t0 + dur);
        const filter = new BiquadFilterNode(ctx, { type: 'lowpass', Q: 7, frequency: 320 });
        filter.frequency.setValueAtTime(320, t0); filter.frequency.linearRampToValueAtTime(1250 * pitch, t0 + dur * 0.35); filter.frequency.linearRampToValueAtTime(420, t0 + dur);
        const g = new GainNode(ctx, { gain: 0 });
        g.gain.setValueAtTime(0, t0); g.gain.linearRampToValueAtTime(gain, t0 + 0.03); g.gain.setValueAtTime(gain, t0 + dur * 0.75); g.gain.linearRampToValueAtTime(0, t0 + dur);
        o.connect(filter).connect(g).connect(at); o.start(t0); o.stop(t0 + dur + 0.05);
    }
    function drone() {   // phrases of wah, falling a little at the end of each, with pauses for nobody to answer
        if (!voice?.on || voice.ctx.currentTime < voice.next - 0.25) return;
        let t0 = Math.max(voice.ctx.currentTime + 0.05, voice.next);
        const n = 3 + Math.floor(Math.random() * 5), base = 150 + Math.random() * 25;
        for (let k = 0; k < n; k++) { const dur = (0.16 + Math.random() * 0.26) / voice.rate; wah(t0, { f: base * (1 - k * 0.02), dur }); t0 += dur + 0.05 / voice.rate; }
        voice.next = t0 + (0.5 + Math.random() * 0.9) / voice.rate;
    }
    const muffle = (hz, tc = 0.8) => { const a = audio(); a?.master.frequency.setTargetAtTime(hz, a.ctx.currentTime, tc); };

    // ---- The timeline -------------------------------------------------------------------------------------------
    const lids = eyelids(); camera.add(lids);
    const st = { mode: 'off', t: 0, events: [], onDone: null, lesson: '', written: 0, writeAt: 0 };
    const LESSON = 'STRUCTURAL INTEGRITY, PART 47';
    let open = 0, openTo = 0, openRate = 1, heavy = 0;
    const lid = (to, seconds) => { openTo = to; openRate = 1 / Math.max(0.05, seconds / speed); };

    function seat() {   // back at his desk, facing the board
        const local = camera.position;
        rig.rotation.y = 0;
        rig.position.set(SPOT.x - local.x, 0, SPOT.z - local.z);
    }
    function showClass(staring) {
        cast.visible = true; notebook.visible = true;
        teacher.position.copy(STAND); teacher.rotation.y = staring ? Math.PI : 0;
        students.forEach((s) => { s.turn = staring ? 1 : 0; s.turnAt = staring ? Math.random() * 0.9 : 0; s.nod = 0; s.nodTo = 0; });
        room.lamps.forEach((m) => { m.emissiveIntensity = 1.8; });
    }
    function hideClass() {
        cast.visible = false; notebook.visible = false; fly.visible = false; evidence?.removeFromParent(); evidence = null;
        if (buzz) buzz.g.gain.value = 0;
        if (voice) voice.on = false;
        room.lamps.forEach((m) => { m.emissiveIntensity = 0.05; });
    }
    function schedule(list) { st.t = 0; st.events = list.map(([at, run]) => ({ at: at / speed, run })); }

    /** The real class: eyes open on a dull Tuesday, the drone, the fly, the doodle, heavy eyes, and under. */
    function enter({ short = false } = {}, onAsleep) {
        sound();
        st.mode = 'class'; st.onDone = onAsleep; st.boring = true;
        seat(); showClass(false);
        lids.visible = true; open = 0; heavy = 0; lid(0.95, 1.8);
        write(''); st.written = 0;
        muffle(18000, 0.1);
        const full = [
            [0.4, () => { voice.on = true; voice.rate = 1; voice.pitch = 1; voice.next = 0; }],
            [1.8, () => { st.writeAt = st.t; }],                                          // he writes, slowly, on the board
            [6.0, () => { fly.visible = true; st.fly = { mode: 'circle', at: st.t }; }],    // the fly arrives
            [10.0, () => { st.fly.mode = 'land'; st.fly.at = st.t; }],                      // and lands on the doodle: look at it
            [12.5, () => { lid(0.35, 1.2); heavy = 0.25; voice.rate = 0.85; muffle(7000); }],
            [13.9, () => lid(0.85, 0.9)],
            [15.0, () => { st.fly.mode = 'leave'; st.fly.at = st.t; }],
            [16.4, () => { lid(0.12, 1.5); heavy = 0.55; voice.rate = 0.65; voice.pitch = 0.85; muffle(2500); }],
            [18.2, () => lid(0.6, 1.1)],
            [19.6, () => { lid(0, 2.6); heavy = 1; voice.rate = 0.4; voice.pitch = 0.6; muffle(500, 1.2); }],
            [22.4, () => { voice.on = false; }],
            [23.4, () => asleep()],
        ];
        const brief = [   // the second time: straight to the heavy eyes
            [0.2, () => { voice.on = true; voice.rate = 0.85; voice.pitch = 0.95; voice.next = 0; st.writeAt = st.t; }],
            [2.4, () => { lid(0.3, 1.0); heavy = 0.4; voice.rate = 0.65; muffle(3000); }],
            [3.6, () => lid(0.7, 0.8)],
            [4.6, () => { lid(0, 2.0); heavy = 1; voice.rate = 0.4; voice.pitch = 0.6; muffle(500, 1); }],
            [6.8, () => { voice.on = false; }],
            [7.6, () => asleep()],
        ];
        schedule(short ? brief : full);
    }
    function asleep() {
        st.mode = 'off'; st.boring = false;
        hideClass();
        muffle(18000, 0.6);
        lids.visible = false;
        const done = st.onDone; st.onDone = null; done?.();
    }
    /** Leave the class without the story (the test knob, or straight into a dream). */
    function hide() { st.mode = 'off'; st.boring = false; st.events = []; hideClass(); lids.visible = false; muffle(18000, 0.1); }
    /** Skip to the heavy eyes (a tap during the class). */
    function skip() {
        if (st.mode !== 'class') return;
        schedule([[0, () => { lid(0, 1.0); heavy = 1; if (voice) { voice.rate = 0.4; voice.pitch = 0.6; } muffle(500, 0.5); }], [1.0, () => { if (voice) voice.on = false; }], [1.4, () => asleep()]]);
    }
    /** The end of the dream: a blink at the bell; behind it, the room is whole again, he's at his desk, and everyone is looking. */
    function wake(tool, onBlack, onAwake) {
        sound();
        st.mode = 'waking'; lids.visible = true; heavy = 0.3; lid(0, 0.7);
        schedule([
            [0.8, () => { onBlack?.(); seat(); showClass(true); plant(tool); st.boring = true; write(''); }],
            [1.6, () => { lid(1, 1.6); heavy = 0; muffle(18000, 0.3); }],
            [3.2, () => { wah(voice.ctx.currentTime + 0.05, { f: 150, dur: 0.3, gain: 0.24 }); wah(voice.ctx.currentTime + 0.4, { f: 150, dur: 0.5, gain: 0.24, ask: true }); }],   // "Wah? Wah?"
            [4.4, () => { st.mode = 'awake'; onAwake?.(); }],
        ]);
    }
    /** Back under (a tap, from the class with his report card). */
    function sleep(onAsleep) { enter({ short: true }, onAsleep); }

    // ---- Per frame ------------------------------------------------------------------------------------------------
    const m4 = new Matrix4(), v3 = new Vector3(), q4 = new Quaternion(), s3 = new Vector3(), one = new Vector3(1, 1, 1), o3 = new Object3D(), headPos = new Vector3();
    function update(t, dt) {
        if (st.mode === 'off') return;
        st.t += dt;
        while (st.events.length && st.t >= st.events[0].at) st.events.shift().run();
        open += Math.sign(openTo - open) * Math.min(Math.abs(openTo - open), dt * openRate);
        lids.material.uniforms.open.value = open * open * (3 - 2 * open);
        lids.material.uniforms.heavy.value += (heavy - lids.material.uniforms.heavy.value) * Math.min(1, dt * 2);
        drone();
        camera.getWorldPosition(headPos);
        if (notebook.visible) {   // on his desk, wherever the desk has settled
            room.desks.getMatrixAt(room.seats.indexOf(seatOf), m4); m4.decompose(v3, q4, s3);
            notebook.position.set(v3.x + 0.12, v3.y + 0.0195, v3.z + 0.03);
        }

        // The board: chalk, a letter at a time, as his arm moves.
        if (st.writeAt && st.written < LESSON.length && st.t - st.writeAt > (st.written + 1) * 0.32 / speed) { st.written++; write(LESSON.slice(0, st.written)); audio()?.scratch(); }
        const writing = st.writeAt && st.written < LESSON.length;
        arm.rotation.set(writing ? 2.55 + Math.sin(t * 9) * 0.05 : 0.2, 0, writing ? 0.25 + Math.sin(t * 6) * 0.08 : 0.1);
        if (writing) teacher.position.x = STAND.x + st.written * 0.025;
        if (teacher.rotation.y > 1) head.rotation.set(0, Math.sin(t * 0.7) * 0.1, Math.sin(t * 2.3) * 0.04); else head.rotation.set(-0.15, 0, 0);

        // The class: one nods off, one fidgets, and at the end they all turn round.
        if (cast.visible) {
            students.forEach((s, i) => {
                room.chairs.getMatrixAt(s.chair, m4); m4.decompose(v3, q4, s3);
                const yaw = Math.atan2(2 * (q4.w * q4.y + q4.x * q4.z), 1 - 2 * (q4.y * q4.y + q4.z * q4.z));
                if (i === 3 && st.mode === 'class') s.nodTo = Math.min(1, st.t / 10 / (1 / speed));   // this one is losing too
                s.nod += (s.nodTo - s.nod) * Math.min(1, dt * 0.8);
                let look = s.turn && st.t > (s.turnAt ?? 0) / speed ? Math.atan2(-(headPos.x - v3.x), -(headPos.z - v3.z)) - yaw : 0;
                look = Math.atan2(Math.sin(look), Math.cos(look));   // the short way round
                s.look = (s.look ?? 0) + (look - (s.look ?? 0)) * Math.min(1, dt * 4);
                const fidget = st.mode === 'class' && i === 7 ? Math.sin(t * 0.9 + s.fidget) * 0.5 : 0;
                o3.position.set(v3.x, 0.72, v3.z - 0.02); o3.rotation.set(0, yaw + s.look * 0.7, 0); o3.updateMatrix();
                bodies.setMatrixAt(i, o3.matrix);
                collars.setMatrixAt(i, s.girl ? m4.compose(new Vector3(0, 0.15, 0.1).applyEuler(o3.rotation).add(o3.position), new Quaternion().setFromEuler(o3.rotation).multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -0.5)), one) : m4.makeScale(0, 0, 0));
                o3.position.set(v3.x, 1.07, v3.z - 0.03); o3.rotation.set(0.35 * s.nod - (s.look ? 0.15 : 0), yaw + s.look + fidget, 0, 'YXZ'); o3.updateMatrix();
                heads.setMatrixAt(i, o3.matrix);
                if (s.girl) { o3.scale.set(1.08, 1.25, 1.12); o3.updateMatrix(); }   // longer hair, down the back
                hairs.setMatrixAt(i, o3.matrix); o3.scale.set(1, 1, 1);
            });
            for (const m of [bodies, heads, hairs, collars]) m.instanceMatrix.needsUpdate = true;
        }

        // The fly: loops round your head, lands on the doodle (silence), leaves by the window.
        if (fly.visible && st.fly && buzz) {
            const age = (st.t - st.fly.at) * speed, target = new Vector3();
            if (st.fly.mode === 'circle') target.set(headPos.x + Math.sin(age * 2.1) * 0.45 + Math.sin(age * 5.3) * 0.08, headPos.y - 0.15 + Math.sin(age * 3.1) * 0.18, headPos.z - 0.3 + Math.cos(age * 1.7) * 0.4);
            else if (st.fly.mode === 'land') target.copy(notebook.position).add(new Vector3(0.05, 0.004, 0.02));
            else target.set(-4.6, 2.4, seatOf.z - 2);
            fly.position.lerp(target, Math.min(1, dt * (st.fly.mode === 'land' ? 2.5 : 3)));
            const landed = st.fly.mode === 'land' && fly.position.distanceTo(target) < 0.01;
            fly.lookAt(target.x + 0.01, target.y, target.z);
            wings.forEach((w, k) => { w.rotation.z = landed ? (k ? 0.3 : -0.3) : Math.sin(t * 90 + k * Math.PI) * 0.9; });
            buzz.g.gain.setTargetAtTime(landed || st.fly.mode === 'leave' && age > 3 ? 0 : 0.05, buzz.o.context.currentTime, 0.05);
            buzz.o.frequency.setTargetAtTime(200 + Math.sin(t * 7) * 15 + rnd() * 20, buzz.o.context.currentTime, 0.03);
            buzz.p.positionX.value = fly.position.x; buzz.p.positionY.value = fly.position.y; buzz.p.positionZ.value = fly.position.z;
            if (st.fly.mode === 'leave' && age > 3) fly.visible = false;
        }
    }

    return { enter, hide, skip, wake, sleep, update, state: st, cast, teacher, students, notebook, lids, fly, SPOT, get evidence() { return evidence; } };
}
