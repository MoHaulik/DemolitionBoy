// Demolition Boy's tools, made the way the room is made: turned hardwood handles with painted grain,
// forged heads painted on canvases at load time. Both are held with the head out along -Z of the grip,
// striking towards -Y; `userData.tip` is the point that does the hitting.
import { CanvasTexture, CylinderGeometry, ExtrudeGeometry, Group, LatheGeometry, Matrix4, Mesh, MeshStandardMaterial, RepeatWrapping, Shape, SRGBColorSpace, Vector2, Vector3 } from 'three';
import { FONTS, wood } from './paint.js';

const canvas = (w, h) => { const c = Object.assign(document.createElement('canvas'), { width: w, height: h }); return [c, c.getContext('2d')]; };
const tex = (c, srgb = true) => { const t = new CanvasTexture(c); t.anisotropy = 8; if (srgb) t.colorSpace = SRGBColorSpace; return t; };

/** A turned handle along -Z from `butt` (z > 0, in the fist) to `top`: a profile of [radius, z] pairs, grain running its length. */
function handle(profile, base, seed, bend = 0) {
    const g = new LatheGeometry(profile.map(([r, z]) => new Vector2(r, -z)), 14);   // lathe runs along +Y; -z so the head end is up
    const p = g.attributes.position, length = Math.abs(profile.at(-1)[1] - profile[0][1]);
    for (let i = 0; i < p.count; i++) {   // a hint of a curve, the way a real haft sweeps
        const f = (p.getY(i) + profile[0][1]) / length;
        p.setX(i, p.getX(i) + Math.sin(f * Math.PI) * bend);
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

/** The axe: a hickory haft, a head in the plunger's red, the bit ground back to bright steel. */
export function axe() {
    const g = new Group();
    g.add(handle([[0, 0.085], [0.017, 0.085], [0.021, 0.07], [0.016, 0.03], [0.015, -0.2], [0.0145, -0.44], [0.016, -0.54], [0.014, -0.545], [0, -0.545]], [214, 166, 108], 21, 0.012));   // hickory

    // The head, drawn side-on in (along the haft, towards the edge) and extruded through its thickness.
    const s = new Shape();
    s.moveTo(-0.032, -0.036); s.lineTo(0.032, -0.036);                       // the poll
    s.lineTo(0.03, 0.02); s.quadraticCurveTo(0.036, 0.07, 0.072, 0.118);       // front cheek, flaring to the toe
    s.quadraticCurveTo(0.002, 0.162, -0.078, 0.122);                           // the edge, a long convex sweep
    s.quadraticCurveTo(-0.046, 0.07, -0.03, 0.02);                             // the beard, swept back
    s.lineTo(-0.032, -0.036);
    const thick = 0.026, geo = new ExtrudeGeometry(s, { depth: thick, bevelEnabled: true, bevelThickness: 0.003, bevelSize: 0.0025, bevelSegments: 2, curveSegments: 18 });
    geo.translate(0, 0, -thick / 2);
    const p = geo.attributes.position;
    for (let i = 0; i < p.count; i++) {   // taper from the eye to a sharp edge
        const d = p.getY(i), f = Math.min(1, Math.max(0, (d - 0.02) / 0.13));
        p.setZ(i, p.getZ(i) * (1 - 0.9 * f * f * (3 - 2 * f)));
    }
    geo.applyMatrix4(new Matrix4().makeBasis(new Vector3(0, 0, -1), new Vector3(0, -1, 0), new Vector3(-1, 0, 0)));   // shape x along -Z, shape y towards -Y
    geo.computeVertexNormals();
    const steel = paintHead([-0.1, -0.06, 0.1, 0.18], (c, rm, at, ppm) => {
        c.fillStyle = '#7a1610'; c.fillRect(0, 0, 512, 512);                   // enamel, the plunger's red
        for (let i = 0; i < 300; i++) { c.fillStyle = `rgba(40,8,5,${Math.random() * 0.25})`; c.beginPath(); c.arc(Math.random() * 512, Math.random() * 512, Math.random() * 6, 0, 7); c.fill(); }
        rm.fillStyle = 'rgb(0,110,0)'; rm.fillRect(0, 0, 512, 512);           // paint: not metal, satin
        const [, y] = at(0, 0.088);
        const ground = (g, fill) => { g.fillStyle = fill; g.beginPath(); g.moveTo(0, y); for (let x = 0; x <= 512; x += 16) g.lineTo(x, y + Math.sin(x * 0.05) * 6 + Math.random() * 3); g.lineTo(512, 0); g.lineTo(0, 0); g.fill(); };   // the edge is up the canvas
        ground(c, '#c9ccd0'); ground(rm, 'rgb(0,60,255)');                     // the ground bit: bare, bright steel
        for (let i = 0; i < 140; i++) {                                         // grinding marks along the edge
            const x = Math.random() * 512, yy = y - 10 - Math.random() * 200;
            c.strokeStyle = `rgba(255,255,255,${Math.random() * 0.35})`; c.lineWidth = 1; c.beginPath(); c.moveTo(x, yy); c.lineTo(x + 30 + Math.random() * 40, yy + 4); c.stroke();
        }
        const [sx, sy] = at(0, 0.035);   // the smith's stamp, struck through the paint
        c.strokeStyle = 'rgba(30,8,6,.8)'; c.lineWidth = 0.002 * ppm; c.beginPath(); c.arc(sx, sy, 0.009 * ppm, 0, 7); c.stroke();
        c.beginPath(); c.moveTo(sx - 0.005 * ppm, sy); c.lineTo(sx + 0.005 * ppm, sy); c.moveTo(sx, sy - 0.005 * ppm); c.lineTo(sx, sy + 0.005 * ppm); c.stroke();
        c.strokeStyle = 'rgba(20,6,4,.5)'; c.lineWidth = 3;   // chips in the paint at the poll, from being used as a hammer
        for (let i = 0; i < 12; i++) { const [px, py] = at((Math.random() - 0.5) * 0.06, -0.03 + Math.random() * 0.01); c.beginPath(); c.arc(px, py, 2 + Math.random() * 5, 0, 7); c.fillStyle = '#5a5a5c'; c.fill(); }
    });
    const head = new Mesh(geo, steel);
    head.position.z = -0.5; head.castShadow = true;
    g.add(head);
    const wedge = new Mesh(new CylinderGeometry(0.0015, 0.0015, 0.03, 4), new MeshStandardMaterial({ color: 0x3a3a3a, metalness: 0.9, roughness: 0.4 }));
    wedge.rotation.x = Math.PI / 2; wedge.position.set(0, 0.0385, -0.5); g.add(wedge);   // the wedge across the top of the eye
    g.userData = { tip: new Vector3(0, -0.13, -0.5), band: band(g, 0.0175, -0.075) };
    return g;
}

/** The hammer: a genno, the Japanese carpenter's hammer, scaled up for the occasion. Octagonal forged head, two polished faces, oak handle. */
export function hammer() {
    const g = new Group();
    g.add(handle([[0, 0.07], [0.018, 0.07], [0.021, 0.055], [0.018, 0.0], [0.016, -0.25], [0.0155, -0.375], [0, -0.375]], [226, 190, 140], 22));   // white oak
    const R = 0.034, L = 0.18;
    const body = paintHead([-0.12, -0.12, 0.12, 0.12], (c, rm) => {
        scale(c, 512, 512, [86, 88, 92]);   // forged, not painted: grey-blue scale
        rm.fillStyle = 'rgb(0,120,230)'; rm.fillRect(0, 0, 512, 512);
        for (let i = 0; i < 260; i++) { rm.fillStyle = `rgba(0,${80 + Math.random() * 100},230,.6)`; rm.beginPath(); rm.arc(Math.random() * 512, Math.random() * 512, 3 + Math.random() * 12, 0, 7); rm.fill(); }
    });
    const head = new Mesh(new LatheGeometry([[0, -L / 2], [R * 0.82, -L / 2], [R, -L / 2 + 0.008], [R * 0.97, 0], [R, L / 2 - 0.008], [R * 0.82, L / 2], [0, L / 2]].map(([x, y]) => new Vector2(x, y)), 8), body);
    head.position.z = -0.355; head.castShadow = true;
    g.add(head);
    const polished = new MeshStandardMaterial({ color: 0xd9dcdf, metalness: 1, roughness: 0.16 });
    for (const y of [-L / 2 - 0.0005, L / 2 + 0.0005]) { const face = new Mesh(new CylinderGeometry(R * 0.8, R * 0.8, 0.001, 8), polished); face.position.set(0, y, -0.355); g.add(face); }
    const groove = new MeshStandardMaterial({ color: 0x141414, metalness: 0.6, roughness: 0.6 });
    for (const y of [-L / 2 + 0.024, L / 2 - 0.024]) { const ring = new Mesh(new CylinderGeometry(R * 1.004, R * 1.004, 0.003, 8, 1, true), groove); ring.position.set(0, y, -0.355); g.add(ring); }   // turned grooves near each face
    const bevel = new MeshStandardMaterial({ color: 0xbfc3c7, metalness: 1, roughness: 0.25 });
    for (const y of [-L / 2 + 0.004, L / 2 - 0.004]) { const ring = new Mesh(new CylinderGeometry(R * 0.93, R * 0.93, 0.0075, 8, 1, true), bevel); ring.position.set(0, y, -0.355); g.add(ring); }   // the chamfers, ground bright
    const ring = new Mesh(new CylinderGeometry(0.0205, 0.0205, 0.012, 14, 1, true), new MeshStandardMaterial({ color: 0xb08d57, metalness: 0.9, roughness: 0.35 }));
    ring.rotation.x = Math.PI / 2; ring.position.z = -0.318; g.add(ring);   // a brass ferrule under the head
    g.userData = { tip: new Vector3(0, -L / 2 - 0.005, -0.355), band: band(g, 0.0185, -0.07) };
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
