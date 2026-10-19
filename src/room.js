// Demolition Boy's classroom: an old wooden Japanese schoolroom, empty, with evidence.
// Built from boxes with world-scaled UVs, so one painted metre of wood is a metre everywhere.
import {
    AdditiveBlending, BoxGeometry, BufferGeometry, CylinderGeometry, DoubleSide, Euler, Float32BufferAttribute, Group, InstancedMesh,
    Matrix4, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, Points, Quaternion, ShaderMaterial, SphereGeometry, Vector3, Vector4,
} from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import * as P from './paint.js';

export const W = 9, D = 9.6, H = 3.3;              // x ±4.5, z ±4.8; the blackboard wall is -z
export const SUN = new Vector3(-1, 0.55, 0.25).normalize();   // towards the sun, low through the left windows
export const WINDOWS = [-3.15, -1.05, 1.05, 3.15].map((z) => [z - 0.85, z + 0.85]);   // z spans of the window bays
export const SILL = 0.9, HEAD = 2.75;

function boxGeometry(w, h, d, tile = 1) {
    const g = new BoxGeometry(w, h, d), uv = g.attributes.uv, spans = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
    for (let i = 0; i < 24; i++) { const [su, sv] = spans[i >> 2]; uv.setXY(i, uv.getX(i) * su / tile, uv.getY(i) * sv / tile); }
    return g;
}
const placed = (geometry, x, y, z, rx = 0, ry = 0, rz = 0) => geometry.applyMatrix4(new Matrix4().compose(new Vector3(x, y, z), new Quaternion().setFromEuler(new Euler(rx, ry, rz)), new Vector3(1, 1, 1)));

export function buildRoom(scene, { cjk }) {
    const std = (map, roughness, extra = {}) => new MeshStandardMaterial({ map, roughness, envMapIntensity: 0.6, ...extra });
    const M = {
        floor: std(P.wood({ planks: 8, base: [96, 60, 36], rings: 90, joints: 0.7, seed: 2 }), 0.38),
        ceiling: std(P.wood({ planks: 6, base: [140, 90, 52], seed: 3, spread: 0.12, joints: 0 }), 0.75),
        beam: std(P.wood({ planks: 1, base: [104, 66, 40], seed: 4, seams: false }), 0.6),
        wains: std(P.wood({ planks: 7, base: [86, 54, 33], seed: 5, joints: 0 }), 0.5),
        trim: std(P.wood({ planks: 1, base: [74, 46, 28], seed: 6, seams: false }), 0.5),
        plaster: std(P.plaster(), 0.95),
        desk: std(P.wood({ planks: 2, base: [128, 86, 52], seed: 7, spread: 0.06, seams: false }), 0.42),
        chair: std(P.wood({ planks: 2, base: [104, 68, 40], seed: 8, seams: false }), 0.55),
        metal: new MeshStandardMaterial({ color: 0xb9b6ae, roughness: 0.45, metalness: 0.3 }),
        dark: new MeshStandardMaterial({ color: 0x0a0806, roughness: 1 }),
        glass: new MeshStandardMaterial({ color: 0xffffff, roughness: 0.05, metalness: 0.9, transparent: true, opacity: 0.06, depthWrite: false }),
        frosted: new MeshBasicMaterial({ color: 0x9aa8b3 }),   // lit from the corridor side, not ours
    };
    const box = (mat, w, h, d, x, y, z, { tile = 1, parent = scene, cast = true, ry = 0 } = {}) => {
        const mesh = new Mesh(boxGeometry(w, h, d, tile), mat);
        mesh.position.set(x, y, z); mesh.rotation.y = ry;
        mesh.castShadow = cast; mesh.receiveShadow = true;
        mesh.userData.bake = parent === scene;
        parent.add(mesh);
        return mesh;
    };
    const decal = (map, w, h, x, y, z, { ry = 0, rx = 0, rz = 0, parent = scene, lit = true, blend } = {}) => {
        const mat = lit ? new MeshStandardMaterial({ map, roughness: 0.9, transparent: true, alphaTest: 0.02, polygonOffset: true, polygonOffsetFactor: -2 })
            : new MeshBasicMaterial({ map, transparent: true, depthWrite: false, toneMapped: false, ...(blend && { blending: blend }) });
        const mesh = new Mesh(new PlaneGeometry(w, h), mat);
        mesh.position.set(x, y, z); mesh.rotation.set(rx, ry, rz, 'YXZ');
        mesh.receiveShadow = lit;
        parent.add(mesh);
        return mesh;
    };
    // Everything that can be broken is handed over as a piece, not built: a box with its material, world-scaled UVs and a kind.
    // The destruction system batches the intact ones and gives each a collider. `mount` records what hangs on them.
    const pieces = [], mounts = [];
    const piece = (mat, w, h, d, x, y, z, { tile = 1, kind = 'wall', cast = true, uv } = {}) => pieces.push({ mat, size: [w, h, d], pos: [x, y, z], tile, kind, cast, uv });
    const wall = (mat, axis, from, to, rows, depth, at, { tile = 1, kind = 'wall', size = 0.95 } = {}) => {   // a wall cut into tiles about `size` wide
        const n = Math.max(1, Math.round((to - from) / size)), step = (to - from) / n;
        for (let i = 0; i < n; i++) for (const [y0, y1] of rows) {
            const c = from + step * (i + 0.5);
            if (axis === 'x') piece(mat, step, y1 - y0, depth, c, (y0 + y1) / 2, at, { tile, kind });
            else piece(mat, depth, y1 - y0, step, at, (y0 + y1) / 2, c, { tile, kind });
        }
    };
    const mount = (object) => { mounts.push(object); return object; };
    const note = (text, color, x, y, z, ry = 0, rz = (Math.random() - 0.5) * 0.2, size) => decal(P.sticky(text, color, size), 0.13, 0.13, x, y, z, { ry, rz });
    const flatNote = (text, color, x, y, z, rz) => decal(P.sticky(text, color), 0.12, 0.12, x, y, z, { rx: -Math.PI / 2, rz });

    // Shell: floor, teacher's platform, coffered ceiling.
    box(M.floor, W, 0.1, D, 0, -0.05, 0, { tile: 1.6 });
    box(M.floor, 6.6, 0.16, 1.5, 0, 0.08, -D / 2 + 0.75, { tile: 1.6 });
    box(M.ceiling, W + 0.6, 0.1, D + 0.6, 0, H + 0.05, 0, { tile: 1.2 });
    for (let x = -3; x <= 3; x += 1.5) box(M.beam, 0.12, 0.17, D, x, H - 0.085, 0, { cast: false });
    for (let z = -3.2; z <= 3.2; z += 1.6) box(M.beam, W, 0.17, 0.12, 0, H - 0.085, z, { cast: false });

    // Front and back walls: plaster over dark wainscot, with rails.
    for (const side of [-1, 1]) {
        const z = side * D / 2;
        wall('wains', 'x', -W / 2, W / 2, [[0, 0.98]], 0.23, z + side * 0.085, { tile: 1.2 });   // the lower wall, faced in dark wood
        wall('plaster', 'x', -W / 2, W / 2, [[0.98, 2.14], [2.14, H]], 0.2, z + side * 0.1, { tile: 2 });
        wall('trim', 'x', -W / 2, W / 2, [[0.95, 1.01]], 0.06, z - side * 0.03, { kind: 'trim' });
        wall('trim', 'x', -W / 2, W / 2, [[2.355, 2.405]], 0.04, z - side * 0.02, { kind: 'trim' });
        wall('trim', 'x', -W / 2, W / 2, [[H - 0.1, H]], 0.06, z - side * 0.03, { kind: 'trim' });
    }

    // Right wall: the corridor, frosted panes and two sliding doors.
    wall('wains', 'z', -D / 2, D / 2, [[0, 1.0]], 0.23, W / 2 + 0.085, { tile: 1.2 });
    wall('plaster', 'z', -D / 2, D / 2, [[1.0, 2.15], [2.15, H]], 0.2, W / 2 + 0.1, { tile: 2 });
    wall('trim', 'z', -D / 2, D / 2, [[0.99, 1.05]], 0.06, W / 2 - 0.03, { kind: 'trim' });
    for (const z of [-2.4, -0.8, 0.8, 2.4]) {   // frosted panes in a 2 x 2 grid of bars
        for (const dz of [-0.3625, 0.3625]) for (const y of [1.4125, 2.0875]) piece('frosted', 0.008, 0.675, 0.725, W / 2 - 0.012, y, z + dz, { kind: 'pane', cast: false });
        for (const dz of [-0.725, 0, 0.725]) for (const y of [1.4125, 2.0875]) piece('trim', 0.05, 0.7, 0.05, W / 2 - 0.03, y, z + dz, { kind: 'trim', cast: false });
        for (const y of [1.08, 1.75, 2.42]) for (const dz of [-0.3625, 0.3625]) piece('trim', 0.05, 0.05, 0.725, W / 2 - 0.03, y, z + dz, { kind: 'trim', cast: false });
    }
    for (const z of [-3.95, 3.95]) {
        for (const y of [0.5, 1.5]) piece('chair', 0.05, 1.0, 0.92, W / 2 - 0.04, y, z, { tile: 0.9, kind: 'door' });
        piece('frosted', 0.008, 0.6, 0.5, W / 2 - 0.068, 1.45, z, { kind: 'pane', cast: false });
        piece('trim', 0.07, 0.08, 1.0, W / 2 - 0.04, 2.04, z, { kind: 'trim' });
    }
    mount(note('Bomb squad: knock twice. Everyone else: run.', 'orange', W / 2 - 0.07, 1.2, 3.75, -Math.PI / 2));

    // Left wall: four tall window bays, wooden posts, the summer outside.
    const solids = [[-D / 2, WINDOWS[0][0]], ...WINDOWS.slice(1).map(([a], i) => [WINDOWS[i][1], a]), [WINDOWS[3][1], D / 2]];
    wall('wains', 'z', -D / 2, D / 2, [[0, SILL]], 0.28, -W / 2 - 0.11, { tile: 1.2 });
    wall('plaster', 'z', -D / 2, D / 2, [[HEAD, H]], 0.25, -W / 2 - 0.125, { tile: 2 });
    const mid = (SILL + HEAD) / 2;
    for (const [a, b] of solids) for (const [y0, y1] of [[SILL, mid], [mid, HEAD]]) piece('trim', 0.3, y1 - y0, b - a, -W / 2 - 0.12, (y0 + y1) / 2, (a + b) / 2, { kind: 'post' });
    wall('trim', 'z', -D / 2, D / 2, [[SILL - 0.005, SILL + 0.045]], 0.34, -W / 2 - 0.05, { kind: 'trim' });
    wall('trim', 'z', -D / 2, D / 2, [[HEAD, HEAD + 0.08]], 0.3, -W / 2 - 0.1, { kind: 'trim' });
    for (const [a, b] of WINDOWS) {   // each bay: sixteen panes in a grid of bars
        const c = (a + b) / 2, cw = (b - a) / 4, ch = (HEAD - SILL) / 4;
        for (let i = 0; i < 4; i++) for (let k = 0; k < 4; k++) piece('glass', 0.006, ch, cw, -W / 2 - 0.08, SILL + ch * (k + 0.5), a + cw * (i + 0.5), { kind: 'pane', cast: false });
        for (const dz of [-0.425, 0, 0.425]) for (const [y0, y1] of [[SILL, mid], [mid, HEAD]]) piece('trim', 0.06, y1 - y0, dz ? 0.03 : 0.06, -W / 2 - 0.08, (y0 + y1) / 2, c + dz, { kind: 'trim' });
        for (let k = 1; k < 4; k++) for (const dz of [-cw, cw]) piece('trim', 0.06, 0.03, cw * 2, -W / 2 - 0.08, SILL + ch * k, c + dz, { kind: 'trim' });
    }
    mount(note('This window has been tested. From both sides.', 'blue', -W / 2 - 0.05, 1.55, 1.4, Math.PI / 2));
    decal(P.outside(), 46, 18, -16, 5, 0, { ry: Math.PI / 2, lit: false });
    // What is outside the other walls, for when they are not there any more: the same overexposed summer.
    decal(P.outside(), 46, 18, 0, 5, -16, { lit: false });
    decal(P.outside(), 46, 18, 0, 5, 16, { ry: Math.PI, lit: false });
    decal(P.outside(), 46, 18, 16, 5, 0, { ry: -Math.PI / 2, lit: false });

    // AO by hand: soft dark strips where walls meet floor and ceiling.
    const strip = P.gradientStrip(), shade = (w, h, x, y, z, rx, ry) => decal(strip, w, h, x, y, z, { rx, ry, lit: false });
    for (const [len, x, z, ry] of [[W, 0, -D / 2, 0], [W, 0, D / 2, Math.PI], [D, -W / 2, 0, Math.PI / 2], [D, W / 2, 0, -Math.PI / 2]]) {
        const inward = new Vector3(0, 0, 0.18).applyAxisAngle(new Vector3(0, 1, 0), ry);
        shade(len, 0.36, x + inward.x, 0.003, z + inward.z, -Math.PI / 2, ry);   // floor, darkest at the wall
        shade(len, 0.4, x + inward.x * 1.1, H - 0.01, z + inward.z * 1.1, Math.PI / 2, ry + Math.PI);
    }

    // The front: blackboard, scrolls, the safety sign, a clock that knows the truth, the speaker.
    const front = -D / 2;
    M.slate = new MeshStandardMaterial({ map: P.blackboard(), roughness: 0.82, envMapIntensity: 0.4 });
    for (let i = 0; i < 4; i++) {   // the frame and the slate, in four panels; the chalk stays on the pieces
        piece('trim', 1.06, 1.48, 0.06, -1.59 + i * 1.06, 1.55, front + 0.03, { kind: 'frame' });
        piece('slate', 1.0, 1.29, 0.02, -1.5 + i * 1.0, 1.55, front + 0.0525, { kind: 'board', uv: { x0: -2.0, y0: 1.55 - 0.645, w: 4.0, h: 1.29 } });
        piece('trim', 1.025, 0.035, 0.11, -1.5375 + i * 1.025, 0.84, front + 0.1, { kind: 'trim' });
    }
    const board = null;
    [[0xf6f4ea, -1.2], [0xf2d860, -1.1], [0xf3a3b8, 0.9]].forEach(([color, x]) => {
        const stick = new Mesh(new CylinderGeometry(0.006, 0.006, 0.07), new MeshStandardMaterial({ color, roughness: 1 }));
        stick.position.set(x, 0.865, front + 0.1); stick.rotation.z = Math.PI / 2 + 0.2;
        scene.add(stick);
    });
    box(new MeshStandardMaterial({ color: 0x2b2b33, roughness: 0.9 }), 0.14, 0.04, 0.05, 1.5, 0.877, front + 0.1);
    const statusCanvas = P.chalkLine(''), status = mount(decal(P.texture(statusCanvas), 1.68, 0.1575, 1.12, 1.885, front + 0.064, { lit: true }));   // under the detention box, clear of the lectern
    status.material.alphaTest = 0;
    const SCROLLS = [['壊すな', 'Rule 1: No demolishing.'], ['柱は友達', 'The pillar is your friend.'], ['爆発禁止', 'No explosions. Yes, small ones too.'], ['廊下を走るな', 'No running from the blast radius.']];
    const scrolls = [-3.35, -2.6, 2.6, 3.35].map((x, i) => {
        const g = new Group();
        g.position.set(x, 2.25, front + 0.04);
        decal(P.scroll(...SCROLLS[i], cjk), 0.36, 1.08, 0, -0.56, 0, { parent: g });
        for (const y of [-0.02, -1.1]) { const rod = new Mesh(new CylinderGeometry(0.012, 0.012, 0.42), M.trim); rod.rotation.z = Math.PI / 2; rod.position.y = y; rod.position.z = 0.01; g.add(rod); }
        scene.add(g);
        return mount(g);
    });
    mount(decal(P.sign('SAFETY FIRST', 'DAYS WITHOUT AN EXPLOSION', { size: 64, foot: 'record: ½' }), 0.84, 0.42, -1.55, 2.68, front + 0.035));
    const flip = new Group(), card = decal(P.digit('0'), 0.075, 0.11, 0, 0, 0, { parent: flip });
    flip.position.set(-1.55, 2.54, front + 0.04);
    scene.add(mount(flip));
    const clock = new Group();
    clock.position.set(1.55, 2.68, front + 0.04);
    decal(P.clockFace(), 0.36, 0.36, 0, 0, 0.012, { parent: clock });
    const rim = new Mesh(new CylinderGeometry(0.19, 0.19, 0.04, 40), M.metal); rim.rotation.x = Math.PI / 2; clock.add(rim);
    const hand = (len, w, color) => { const h = new Group(), bar = new Mesh(new BoxGeometry(w, len, 0.004), new MeshStandardMaterial({ color })); bar.position.y = len * 0.4; h.add(bar); h.position.z = 0.026; clock.add(h); return h; };
    const hands = { hour: hand(0.09, 0.012, 0x151515), minute: hand(0.14, 0.008, 0x151515), second: hand(0.15, 0.003, 0xc02020) };
    scene.add(mount(clock));
    M.speaker = new MeshStandardMaterial({ color: 0x3a3833, roughness: 0.8 });
    piece('speaker', 0.34, 0.22, 0.12, 0, 2.7, front + 0.06, { kind: 'speaker' });

    // The teacher's lectern, the confiscated detonator on it, and a letter home.
    piece('desk', 0.95, 1.05, 0.55, 0, 0.16 + 0.525, -3.8, { tile: 0.9, kind: 'lectern' });
    const plunger = new Group(), top = 0.16 + 1.05;
    plunger.position.set(0.12, top, -3.78); plunger.rotation.y = -0.35;
    box(new MeshStandardMaterial({ color: 0x7a1a14, roughness: 0.6 }), 0.18, 0.13, 0.13, 0, 0.065, 0, { parent: plunger });
    for (const dx of [-0.05, 0.05]) box(new MeshStandardMaterial({ color: 0x9a9a98, roughness: 0.5 }), 0.03, 0.135, 0.14, dx, 0.066, 0, { parent: plunger });   // duct tape
    const handle = new Group();
    const shaft = new Mesh(new CylinderGeometry(0.008, 0.008, 0.16), M.metal); shaft.position.y = -0.08; handle.add(shaft);
    const grip = new Mesh(new CylinderGeometry(0.014, 0.014, 0.17), new MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.5 })); grip.rotation.z = Math.PI / 2; handle.add(grip);
    handle.position.y = 0.21; plunger.add(handle);
    decal(P.sticky('CONFISCATED. Do NOT push. — Mgmt.', 'pink', 40), 0.09, 0.09, 0.0, 0.08, 0.0665, { parent: plunger, rz: 0.12 });
    scene.add(plunger);
    decal(P.letter('TIL FORÆLDRE / TO PARENTS', 'Kære forældre. Deres søn har igen sprængt kantinen. Vi har derfor ingen kantine. Vi har heller ingen skole, så vi skriver dette fra en båd. Båden er også væk nu. Venlig hilsen, Rektor (svømmer)\n\nDear parents: your son has once again blown up the cafeteria. The school is gone. We are writing from a boat. The boat is also gone. Regards, the Principal (swimming).'),
        0.21, 0.28, -0.22, top + 0.002, -3.75, { rx: -Math.PI / 2, rz: 0.25 });

    // Desks and chairs: three columns of double desks, a little crooked, chairs pushed back mid-thought.
    const deskGeometry = mergeGeometries([
        boxGeometry(1.2, 0.035, 0.46), ...[-0.56, 0.56].flatMap((x) => [-0.19, 0.19].map((z) => placed(boxGeometry(0.04, 0.68, 0.04), x, -0.357, z))),
        placed(boxGeometry(1.1, 0.015, 0.38), 0, -0.11, 0), placed(boxGeometry(1.14, 0.1, 0.015), 0, -0.065, -0.2),
    ]);
    const chairGeometry = mergeGeometries([
        placed(boxGeometry(0.38, 0.03, 0.36), 0, 0.42, 0), placed(boxGeometry(0.36, 0.22, 0.022), 0, 0.72, 0.17, -0.08),
        ...[-0.16, 0.16].flatMap((x) => [placed(boxGeometry(0.03, 0.42, 0.03), x, 0.21, -0.15), placed(boxGeometry(0.03, 0.84, 0.03), x, 0.42, 0.16)]),
    ]);
    const seats = [];
    for (let row = 0; row < 5; row++) for (let col = 0; col < 3; col++) seats.push({ x: (col - 1) * 2.7 + (Math.random() - 0.5) * 0.1, z: -2.45 + row * 1.15 + (Math.random() - 0.5) * 0.08, ry: (Math.random() - 0.5) * 0.07, row, col });
    const deskTop = 0.7, desks = new InstancedMesh(deskGeometry, M.desk, seats.length), chairs = new InstancedMesh(chairGeometry, M.chair, seats.length * 2);
    const blobs = new InstancedMesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({ map: P.blob(0.55), transparent: true, depthWrite: false }), seats.length * 3);
    const m = new Matrix4(), q = new Quaternion(), e = new Euler(), one = new Vector3(1, 1, 1);
    let c = 0, b = 0;
    seats.forEach((s, i) => {
        desks.setMatrixAt(i, m.compose(new Vector3(s.x, deskTop, s.z), q.setFromEuler(e.set(0, s.ry, 0)), one));
        blobs.setMatrixAt(b++, m.compose(new Vector3(s.x, 0.004, s.z), q.setFromEuler(e.set(-Math.PI / 2, 0, 0)), new Vector3(1.6, 0.8, 1)));
        for (const dx of [-0.3, 0.3]) {
            const tipped = s.row === 3 && s.col === 0 && dx > 0, out = 0.42 + Math.random() * 0.2;
            const pos = new Vector3(s.x + dx + (Math.random() - 0.5) * 0.08, tipped ? 0.185 : 0, s.z + out + (tipped ? 0.1 : 0));
            chairs.setMatrixAt(c++, m.compose(pos, q.setFromEuler(tipped ? e.set(Math.PI / 2, 0, 0.6, 'YXZ') : e.set(0, (Math.random() - 0.5) * 0.35, 0)), one));
            blobs.setMatrixAt(b++, m.compose(new Vector3(pos.x, 0.005, pos.z), q.setFromEuler(e.set(-Math.PI / 2, 0, 0)), new Vector3(0.6, 0.6, 1)));
        }
    });
    for (const mesh of [desks, chairs]) { mesh.castShadow = mesh.receiveShadow = true; scene.add(mesh); }
    scene.add(blobs);

    const deskAt = (row, col) => seats.find((s) => s.row === row && s.col === col);
    const surfaceY = deskTop + 0.019;
    // The crater desk.
    const crater = deskAt(2, 0);
    decal(P.scorch('D.B. WAS HERE'), 0.62, 0.62, crater.x - 0.2, surfaceY, crater.z, { rx: -Math.PI / 2, rz: 0.4 });
    flatNote("Science project: 'What if…?' Grade: F. (The F is also on fire.)", 'yellow', crater.x + 0.38, surfaceY + 0.001, crater.z + 0.05, -0.3);
    // Notes on other desks.
    [[deskAt(4, 1), 'This desk has been replaced 14 times. It is new. Be gentle.', 'green'], [deskAt(1, 1), 'LOST: one (1) eyebrow. Reward: the other one. — D.B.', 'yellow'],
        [deskAt(3, 2), 'Nothing matters. Except load-bearing walls. Those REALLY matter.', 'blue'], [deskAt(0, 0), 'Tip: the fire alarm is NOT a starting pistol.', 'orange']]
        .forEach(([s, text, color], i) => flatNote(text, color, s.x + (i % 2 ? 0.3 : -0.3), surfaceY + 0.001, s.z + 0.04, (Math.random() - 0.5) * 0.6));
    // The desk that looks back.
    const lair = deskAt(1, 2), dark = box(M.dark, 1.02, 0.085, 0.3, lair.x, deskTop - 0.067, lair.z - 0.02, { cast: false });
    dark.rotation.y = lair.ry;
    const eyes = decal(P.eyes(), 0.15, 0.075, lair.x + 0.2, deskTop - 0.065, lair.z + 0.135, { lit: false, blend: AdditiveBlending });
    flatNote('Homework. It bites. Do NOT feed it.', 'pink', lair.x - 0.25, surfaceY + 0.001, lair.z, 0.2);
    // A passed note, dropped in the aisle.
    decal(P.passedNote(['u still got the big one?', 'under the floor', 'WHICH floor', 'ALL OF THEM']), 0.2, 0.25, 1.3, 0.004, 1.6, { rx: -Math.PI / 2, rz: 0.7 });

    // The back: cubbies, a hard hat, a hole that is not a hole, a prize, an extinguisher with advice.
    const back = D / 2, cubby = new Group(), books = [];
    for (let k = 0; k <= 18; k++) piece('chair', 0.025, 1.2, 0.36, -3.6 + k * 0.4, 0.6, back - 0.18, { tile: 0.9, kind: 'shelf' });
    for (const y of [0.01, 0.4, 0.8, 1.2]) for (let k = 0; k < 6; k++) piece('chair', 7.25 / 6, 0.025, 0.36, -3.625 + 7.25 / 6 * (k + 0.5), y, back - 0.18, { tile: 0.9, kind: 'shelf' });
    scene.add(cubby);
    const slots = [...Array(54).keys()].sort(() => Math.random() - 0.5).slice(0, 26);   // one thing per cubby: they are bodies now, and can't share
    slots.forEach((slot, k) => {   // what students leave behind: books, shoeboxes, one lunchbox nobody will open. They fall off.
        const col = slot % 18, row = Math.floor(slot / 18), w = 0.04 + Math.random() * 0.12, h = Math.min(0.34, 0.1 + Math.random() * 0.2);
        books.push(box(new MeshStandardMaterial({ color: [0x7a2f2f, 0x2f4f7a, 0xc9b27a, 0x3f6b46, 0xd8d2c4, 0x6b4a8a][k % 6], roughness: 0.8 }), w, h, 0.22, -3.4 + col * 0.4 + (Math.random() - 0.5) * (0.36 - w), row * 0.4 + 0.0255 + h / 2, back - 0.2, { parent: cubby, cast: false }));
    });
    const hat = new Mesh(new SphereGeometry(0.13, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), new MeshStandardMaterial({ color: 0xf2c418, roughness: 0.35 }));
    hat.position.set(-2.2, 1.213, back - 0.2); hat.scale.y = 0.85; hat.castShadow = true;
    const brim = new Mesh(new CylinderGeometry(0.16, 0.16, 0.012, 24), hat.material); brim.position.y = 0.006; hat.add(brim);
    scene.add(hat);
    mount(note('Property of D.B. NOT a helmet for indoor use. (It is. That is the problem.)', 'yellow', -2.2, 1.38, back - 0.006, Math.PI, 0.1, 36));
    const notAHole = [decal(P.cracks(), 2.2, 2.2, 2.0, 2.0, back - 0.004, { ry: Math.PI })];
    notAHole.push(decal(P.glow(), 1.25, 0.85, 2.03, 1.98, back - 0.007, { ry: Math.PI, lit: false, blend: AdditiveBlending }));
    notAHole[1].material.color.set(0x8a6a44);   // daylight round the edges
    notAHole.push(decal(P.sign('FACILITY MANAGEMENT', 'THIS IS NOT A HOLE.', { bar: '#1f3d7a', size: 92, h: 640, foot: 'please stop asking' }), 1.05, 0.66, 2.0, 2.0, back - 0.012, { ry: Math.PI, rz: -0.04 }));
    mount(decal(P.sign('SCIENCE FAIR', "2nd PLACE: 'Volcano'", { bar: '#1d7a3a', size: 74, foot: 'judges were evacuated' }), 0.5, 0.25, 0.4, 1.75, back - 0.006, { ry: Math.PI, rz: 0.05 }));
    const ext = new Mesh(new CylinderGeometry(0.075, 0.075, 0.5, 24), new MeshStandardMaterial({ color: 0xb3121a, roughness: 0.35, metalness: 0.1 }));
    ext.position.set(W / 2 - 0.18, 1.25, back - 0.6); ext.castShadow = true; scene.add(ext);
    mount(note('Use BEFORE. Not after.', 'yellow', W / 2 - 0.01, 1.62, back - 0.6, -Math.PI / 2, -0.08));

    // Fluorescent lamps, off. Except the one hanging by a single wire, under its own scorch mark.
    const lamp = (x, z) => {
        const g = new Group();
        box(M.metal, 1.3, 0.05, 0.17, 0.62, 0, 0, { parent: g, cast: false });
        const tubes = new MeshStandardMaterial({ color: 0xf2f2ee, emissive: 0xf4f6ff, emissiveIntensity: 0.05, roughness: 0.3 });
        for (const dz of [-0.045, 0.045]) { const t = new Mesh(new CylinderGeometry(0.016, 0.016, 1.22, 12), tubes); t.rotation.z = Math.PI / 2; t.position.set(0.62, -0.04, dz); g.add(t); }
        g.position.set(x - 0.62, H - 0.72, z);
        scene.add(g);
        return { g, tubes };
    };
    const wire = (x, z, len) => { const w = new Mesh(new CylinderGeometry(0.003, 0.003, len), M.dark); w.position.set(x, H - len / 2, z); scene.add(w); };
    for (const [x, z] of [[-1.8, -1.6], [1.8, -1.6], [-1.8, 1.6]]) { lamp(x, z); wire(x - 0.55, z, 0.72); wire(x + 0.55, z, 0.72); }
    const crooked = lamp(1.8, 1.6);
    wire(1.8 - 0.55, 1.6, 0.72);
    crooked.g.position.x = 1.8 - 0.55; crooked.g.children.forEach((child) => { child.position.x -= 0.07; });
    crooked.g.rotation.z = -0.62;
    decal(P.scorch(), 1.8, 1.8, 2.3, H - 0.004, 1.5, { rx: Math.PI / 2, rz: 1.1 });

    bake(scene);
    mounts.push(...notAHole);
    return { M, pieces, mounts, books, seats, desks, chairs, board, status, statusCanvas, scrolls, flip, card, hands, plunger, handle, eyes, lair, crooked, hat, ext, notAHole };
}

/** Merge every static box that shares a material into one mesh: a few draw calls instead of hundreds. */
function bake(scene) {
    const groups = new Map();
    for (const mesh of scene.children.filter((m) => m.userData.bake)) {
        mesh.updateMatrixWorld();
        if (!groups.has(mesh.material)) groups.set(mesh.material, []);
        groups.get(mesh.material).push(mesh.geometry.applyMatrix4(mesh.matrixWorld));
        scene.remove(mesh);
    }
    for (const [material, geometries] of groups) {
        const merged = new Mesh(mergeGeometries(geometries), material);
        merged.castShadow = merged.receiveShadow = true;
        scene.add(merged);
    }
}

/** Sunbeams: sheets along the light through each bay, masked by the window bars; dust that only shows inside them. */
export function buildLight(scene) {
    const mask = /* glsl */`
        uniform vec3 sun; uniform vec4 bays[4]; uniform float time; uniform float haze;
        float inBeam(vec3 p) {
            float t = (${(-W / 2).toFixed(2)} - p.x) / sun.x;   // walk back along the light to the window plane
            vec2 q = p.zy + sun.zy * t;
            float m = 0.;
            for (int i = 0; i < 4; i++) {
                vec2 lo = bays[i].xy, hi = bays[i].zw;
                float edge = smoothstep(lo.x, lo.x + .04, q.x) * smoothstep(hi.x, hi.x - .04, q.x) * smoothstep(lo.y, lo.y + .04, q.y) * smoothstep(hi.y, hi.y - .04, q.y);
                vec2 cell = vec2((q.x - lo.x) / ((hi.x - lo.x) * .25), (q.y - lo.y) / ((hi.y - lo.y) * .25));
                vec2 bar = smoothstep(.0, .06, abs(fract(cell) - .0)) * smoothstep(.0, .06, abs(fract(cell) - 1.));
                m += edge * bar.x * bar.y;
            }
            return m * step(0., t) * exp(-t * .12);
        }`;
    const uniforms = { sun: { value: SUN }, bays: { value: WINDOWS.map(([a, b]) => new Vector4(a, SILL, b, HEAD)) }, time: { value: 0 }, haze: { value: 1 } };   // haze: how much is in the air; the beams thicken as the room comes down
    // Sheets: for each bay, a fan of planes containing the light direction, spread across the bay.
    const positions = [], down = SUN.clone().negate();
    for (const [a, b] of WINDOWS) for (let k = 0; k < 7; k++) {
        const z = a + (b - a) * (k + 0.5) / 7, len = HEAD / -down.y + 0.5;
        const corner = (y, s) => new Vector3(-W / 2, y, z).addScaledVector(down, s);
        const quad = [corner(SILL - 0.1, 0), corner(HEAD + 0.1, 0), corner(HEAD + 0.1, len), corner(SILL - 0.1, len)];
        [0, 1, 2, 0, 2, 3].forEach((i) => positions.push(...quad[i].toArray()));
    }
    const sheets = new BufferGeometry();
    sheets.setAttribute('position', new Float32BufferAttribute(positions, 3));
    const beams = new Mesh(sheets, new ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide,
        vertexShader: 'varying vec3 vP; void main() { vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }',
        fragmentShader: `${mask} varying vec3 vP;
            void main() {
                float near = smoothstep(.3, 1.2, distance(vP, cameraPosition));
                float m = inBeam(vP) * near * step(0., vP.y);
                gl_FragColor = vec4(vec3(1., .86, .62) * m * .035 * haze, 1.);
            }`,
    }));
    beams.frustumCulled = false;
    scene.add(beams);
    // Dust: drifting motes everywhere, bright only where the sun catches them.
    const n = 2600, dust = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) dust.set([(Math.random() - 0.5) * W * 0.95, Math.random() * H * 0.9, (Math.random() - 0.5) * D * 0.95], i * 3);
    const dustGeometry = new BufferGeometry();
    dustGeometry.setAttribute('position', new Float32BufferAttribute(dust, 3));
    const motes = new Points(dustGeometry, new ShaderMaterial({
        uniforms, transparent: true, depthWrite: false, blending: AdditiveBlending,
        vertexShader: `${mask} varying float vB;
            void main() {
                vec3 p = position + vec3(sin(time * .11 + position.y * 3.), sin(time * .07 + position.x * 2.) * .5 - .2, cos(time * .09 + position.z * 3.)) * .25;
                p.y = mod(p.y, ${H.toFixed(1)});
                vB = .06 / haze + inBeam(p) * (.6 + .4 * haze);   // in a thick haze the shadows go dark and the beams go solid
                vec4 mv = modelViewMatrix * vec4(p, 1.);
                gl_PointSize = clamp(5. / -mv.z, 1., 6.);
                gl_Position = projectionMatrix * mv;
            }`,
        fragmentShader: 'varying float vB; void main() { float d = length(gl_PointCoord - .5); gl_FragColor = vec4(vec3(1., .9, .7) * vB * smoothstep(.5, 0., d) * .5, 1.); }',
    }));
    motes.frustumCulled = false;
    scene.add(motes);
    return uniforms;
}
