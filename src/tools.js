// Demolition Boy's tools, made the way the room is made: turned hardwood handles with painted grain,
// forged heads painted on canvases at load time. Both are held with the head out along -Z of the grip,
// striking towards -Y; `userData.tip` is the point that does the hitting.
import { CanvasTexture, CylinderGeometry, ExtrudeGeometry, Group, LatheGeometry, Matrix4, Mesh, MeshStandardMaterial, RepeatWrapping, Shape, SRGBColorSpace, Vector2, Vector3 } from 'three';
import { FONTS, wood } from './paint.js';

const canvas = (w, h) => { const c = Object.assign(document.createElement('canvas'), { width: w, height: h }); return [c, c.getContext('2d')]; };
const tex = (c, srgb = true) => { const t = new CanvasTexture(c); t.anisotropy = 8; if (srgb) t.colorSpace = SRGBColorSpace; return t; };

/** A turned handle along -Z from `butt` (z > 0, in the fist) to `top`: a profile of [radius, z] pairs, grain running its length. */
function handle(profile, base, seed, bend = () => [0, 0]) {
    const g = new LatheGeometry(profile.map(([r, z]) => new Vector2(r, -z)), 16);   // lathe runs along +Y; -z so the head end is up
    const p = g.attributes.position, length = Math.abs(profile.at(-1)[1] - profile[0][1]);
    for (let i = 0; i < p.count; i++) {   // the haft's sweep: bend(f) gives the offset across and towards the edge, f from butt to head
        const [x, y] = bend((p.getY(i) + profile[0][1]) / length);
        p.setX(i, p.getX(i) + x); p.setZ(i, p.getZ(i) - y);   // lathe -Z becomes tool -Y (towards the edge) after the turn below
    }
    g.rotateX(-Math.PI / 2);   // +Y becomes -Z
    g.computeVertexNormals();
    const map = wood({ planks: 1, base, seed, rings: 70, seams: false, size: 256 });
    map.repeat.set(0.15, length);
    const mesh = new Mesh(g, new MeshStandardMaterial({ map, roughness: 0.48, envMapIntensity: 0.6 }));
    mesh.castShadow = true;
    return mesh;
}

/** One canvas, laid over a head's shape coordinates: colour in the map, roughness in G and metalness in B of a second. */
function paintHead(bounds, paint) {
    const [c, g] = canvas(512, 512), [r, q] = canvas(512, 512);
    const [x0, y0, x1, y1] = bounds, toPx = (x, y) => [(x - x0) / (x1 - x0) * 512, (1 - (y - y0) / (y1 - y0)) * 512];
    paint(g, q, toPx, 512 / (x1 - x0));
    const map = tex(c), rm = tex(r, false);
    for (const t of [map, rm]) { t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(1 / (x1 - x0), 1 / (y1 - y0)); t.offset.set(-x0 / (x1 - x0), -y0 / (y1 - y0)); }
    return new MeshStandardMaterial({ map, roughnessMap: rm, metalnessMap: rm, roughness: 1, metalness: 1, envMapIntensity: 1.1 });
}
/** Forge scale: dark, mottled, with hammer marks. */
function scale(g, w, h, base = [44, 44, 46]) {
    g.fillStyle = `rgb(${base})`; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) { const v = Math.random() * 30 - 15; g.fillStyle = `rgba(${base.map((c) => c + v)},.5)`; g.beginPath(); g.arc(Math.random() * w, Math.random() * h, 2 + Math.random() * 10, 0, 7); g.fill(); }
}

/** A side-on profile extruded through its thickness, tapering where `taper(d)` says, laid along the haft:
 *  shape x runs up the haft (to -Z), shape y towards the striking side (to -Y). */
function head(shape, thick, taper) {
    const geo = new ExtrudeGeometry(shape, { depth: thick, bevelEnabled: true, bevelThickness: 0.0025, bevelSize: 0.002, bevelSegments: 2, curveSegments: 20 });
    geo.translate(0, 0, -thick / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) p.setZ(i, p.getZ(i) * taper(p.getY(i)));
    geo.applyMatrix4(new Matrix4().makeBasis(new Vector3(0, 0, -1), new Vector3(0, -1, 0), new Vector3(-1, 0, 0)));
    geo.computeVertexNormals();
    return geo;
}
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

/** The axe: a firefighter's pick-head axe. Red head, a long ground edge on one side, a curved pick on the other,
 *  the end of the haft showing through the top of the eye, and a hickory haft that swells and hooks at the butt. */
export function axe() {
    const g = new Group(), at = -0.5;   // the head's centre, along the haft
    g.add(handle([[0, 0.105], [0.019, 0.1], [0.025, 0.085], [0.023, 0.06], [0.017, 0.02], [0.0155, -0.15], [0.016, -0.33], [0.019, -0.42], [0.025, at + 0.05], [0.02, at + 0.035], [0.019, at - 0.035], [0, at - 0.038]], [176, 118, 62], 21,
        (f) => [0, 0.013 * Math.sin(Math.PI * f) - 0.03 * Math.max(0, 1 - f / 0.14) ** 2]));   // a long bow, and the butt hooks to the edge side
    const s = new Shape();
    s.moveTo(0.035, -0.03);                                      // top of the head, at the pick
    s.quadraticCurveTo(0.048, -0.1, 0.038, -0.165);               // the pick's upper line, a slight rise
    s.lineTo(0.029, -0.171);                                      // its point
    s.lineTo(-0.004, -0.072);                                     // under the pick
    s.lineTo(-0.028, -0.052);                                     // the shoulder
    s.quadraticCurveTo(-0.048, -0.05, -0.048, -0.03);             // into the eye
    s.lineTo(-0.05, 0.025);                                       // the bottom of the head, on the haft
    s.lineTo(-0.105, 0.112);                                      // the lower cheek, flaring to the heel
    s.quadraticCurveTo(-0.118, 0.14, -0.1, 0.152);                // the heel, rounded
    s.quadraticCurveTo(-0.015, 0.172, 0.068, 0.132);              // the edge: long and barely convex
    s.lineTo(0.035, -0.03);                                       // the upper cheek, straight back to the top
    const steel = paintHead([-0.13, -0.23, 0.1, 0.19], (c, rm, px) => {
        c.fillStyle = '#9c1219'; c.fillRect(0, 0, 512, 512);    // fire-engine red, a little dulled
        for (let i = 0; i < 260; i++) { c.fillStyle = `rgba(50,6,8,${Math.random() * 0.2})`; c.beginPath(); c.arc(Math.random() * 512, Math.random() * 512, Math.random() * 7, 0, 7); c.fill(); }
        rm.fillStyle = 'rgb(0,95,0)'; rm.fillRect(0, 0, 512, 512);   // enamel: not metal, satin
        const band = (g, fill, from, to, wave) => { g.fillStyle = fill; g.beginPath(); const [, y0] = px(0, from), [, y1] = px(0, to); g.moveTo(0, y0); for (let x = 0; x <= 512; x += 16) g.lineTo(x, y0 + Math.sin(x * 0.04) * wave); g.lineTo(512, y1); g.lineTo(0, y1); g.fill(); };
        band(c, '#a9adb0', 0.108, 0.2, 2); band(rm, 'rgb(0,70,255)', 0.108, 0.2, 2);       // the ground edge, bare steel
        band(c, '#a9adb0', -0.138, -0.23, 0); band(rm, 'rgb(0,70,255)', -0.138, -0.23, 0);  // and the pick's point
        for (let i = 0; i < 120; i++) { const x = Math.random() * 512, [, y] = px(0, 0.12 + Math.random() * 0.05); c.strokeStyle = `rgba(255,255,255,${Math.random() * 0.3})`; c.beginPath(); c.moveTo(x, y); c.lineTo(x + 20 + Math.random() * 40, y + 3); c.stroke(); }   // grinding marks
        c.fillStyle = 'rgba(255,190,190,.18)'; c.fillRect(0, px(0, -0.06)[1], 512, 3);   // a highlight line down the pick's crown
    });
    const geo = head(s, 0.03, (d) => d > 0.03 ? 1 - 0.88 * smooth(0.03, 0.15, d) : d < -0.07 ? 1 - 0.7 * smooth(-0.07, -0.171, d) : 1);
    const mesh = new Mesh(geo, steel);
    mesh.position.z = at; mesh.castShadow = true;
    g.add(mesh);
    const end = new Mesh(new CylinderGeometry(0.018, 0.018, 0.01, 16), new MeshStandardMaterial({ map: wood({ planks: 1, base: [150, 98, 50], seed: 23, rings: 40, seams: false, size: 128 }), roughness: 0.6 }));
    end.scale.set(1, 1, 1.35); end.rotation.x = Math.PI / 2; end.position.z = at - 0.038;   // the end of the haft, through the top of the eye
    g.add(end);
    g.userData = { tip: new Vector3(0, -0.145, at), band: band(g, 0.0162, -0.075) };
    return g;
}

/** The hammer: a sledgehammer. A long hickory handle, a heavy forged head with ground chamfers and polished faces. */
export function hammer() {
    const g = new Group(), at = -0.64;
    g.add(handle([[0, 0.09], [0.02, 0.085], [0.024, 0.07], [0.02, 0.04], [0.017, -0.1], [0.0175, -0.4], [0.021, at + 0.07], [0.0225, at + 0.045], [0.02, at - 0.045], [0, at - 0.047]], [208, 168, 112], 22, (f) => [0, -0.006 * Math.sin(Math.PI * f)]));
    const A = 0.045, C = 0.012, L = 0.21;   // half-width, chamfer, length along the swing
    const oct = new Shape();
    [[A - C, -A], [A, -A + C], [A, A - C], [A - C, A], [-A + C, A], [-A, A - C], [-A, -A + C], [-A + C, -A]].forEach(([x, y], i) => (i ? oct.lineTo(x, y) : oct.moveTo(x, y)));
    const body = paintHead([-0.1, -0.1, 0.1, 0.1], (c, rm) => {
        scale(c, 512, 512, [58, 60, 64]);   // forged, blued, a little rusty at the edges
        for (let i = 0; i < 90; i++) { c.fillStyle = `rgba(120,60,30,${Math.random() * 0.25})`; c.beginPath(); c.arc(Math.random() * 512, Math.random() * 512, 2 + Math.random() * 8, 0, 7); c.fill(); }
        rm.fillStyle = 'rgb(0,140,210)'; rm.fillRect(0, 0, 512, 512);
    });
    const geo = new ExtrudeGeometry(oct, { depth: L - 0.016, bevelEnabled: true, bevelThickness: 0.008, bevelSize: 0.006, bevelSegments: 3 });
    geo.translate(0, 0, -(L - 0.016) / 2); geo.rotateX(Math.PI / 2);   // the long axis along the swing (Y)
    const block = new Mesh(geo, body);
    block.position.z = at; block.castShadow = true;
    g.add(block);
    const polished = new MeshStandardMaterial({ color: 0xd5d8db, metalness: 1, roughness: 0.18 });
    for (const y of [-L / 2 - 0.0005, L / 2 + 0.0005]) { const face = new Mesh(new CylinderGeometry(A * 0.82, A * 0.82, 0.002, 8), polished); face.rotation.y = Math.PI / 8; face.position.set(0, y, at); g.add(face); }   // struck bright
    const chamfer = new MeshStandardMaterial({ color: 0x9a9ea2, metalness: 1, roughness: 0.3 });
    for (const y of [-L / 2 + 0.004, L / 2 - 0.004]) { const ring = new Mesh(new CylinderGeometry(A * 0.98, A * 0.98, 0.008, 8, 1, true), chamfer); ring.rotation.y = Math.PI / 8; ring.position.set(0, y, at); g.add(ring); }
    const wedge = new Mesh(new CylinderGeometry(0.002, 0.002, 0.034, 4), new MeshStandardMaterial({ color: 0x2a2a2a, metalness: 0.9, roughness: 0.4 }));
    wedge.rotation.x = Math.PI / 2; wedge.position.set(0, 0, at - A - 0.002); g.add(wedge);   // the steel wedge across the top of the eye
    const guard = new Mesh(new CylinderGeometry(0.0235, 0.0235, 0.05, 14, 1, true), new MeshStandardMaterial({ color: 0x3a3d40, metalness: 0.9, roughness: 0.35 }));
    guard.rotation.x = Math.PI / 2; guard.position.z = at + A + 0.03; g.add(guard);   // an overstrike collar, for the misses
    g.userData = { tip: new Vector3(0, -L / 2 - 0.005, at), band: band(g, 0.0182, -0.07) };
    return g;
}

/** A band of masking tape round the handle above the fist, with the time left on it in marker. */
function band(g, r, z) {
    const [c, x] = canvas(512, 96), map = tex(c);
    const mesh = new Mesh(new CylinderGeometry(r, r, 0.04, 20, 1, true), new MeshStandardMaterial({ map, roughness: 0.85 }));
    mesh.rotation.x = Math.PI / 2; mesh.position.z = z;
    g.add(mesh);
    return (text, hot) => {
        x.fillStyle = hot ? '#f2c418' : '#e6dcc0'; x.fillRect(0, 0, 512, 96);
        x.fillStyle = 'rgba(120,100,60,.25)'; x.fillRect(0, 0, 512, 6); x.fillRect(0, 90, 512, 6);   // tape edges
        x.fillStyle = hot ? '#b3121a' : '#1d2433'; x.font = `72px ${FONTS.marker}`; x.textAlign = 'center';
        for (const cx of [128, 384]) x.fillText(text, cx, 76);   // twice round, so one is always facing you
        map.needsUpdate = true;
    };
}
