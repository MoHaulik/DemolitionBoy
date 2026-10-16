// Things worth breaking that the classroom didn't have yet: pottery on the sills, a lucky cat, the Principal
// in plaster, the 2nd-place volcano, and what is really behind the NOT A HOLE poster.
import { AdditiveBlending, CanvasTexture, ConeGeometry, CylinderGeometry, Group, LatheGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, PlaneGeometry, SphereGeometry, TorusGeometry, Vector2 } from 'three';

const std = (color, roughness = 0.5, extra = {}) => new MeshStandardMaterial({ color, roughness, ...extra });
const shadowed = (g) => { g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } }); return g; };
const lathe = (profile, mat, segments = 24) => new Mesh(new LatheGeometry(profile.map(([x, y]) => new Vector2(x, y)), segments), mat);

/** A terracotta pot with something leafy that has given up. */
export function pot() {
    const g = new Group();
    g.add(lathe([[0, 0], [0.05, 0], [0.065, 0.12], [0.075, 0.13], [0.072, 0.14], [0, 0.14]], std(0xb5562f, 0.85)));
    const soil = new Mesh(new CylinderGeometry(0.062, 0.062, 0.01, 16), std(0x3a2414, 1)); soil.position.y = 0.13; g.add(soil);
    const leaf = std(0x3f7a33, 0.6);
    for (let k = 0; k < 6; k++) {
        const l = new Mesh(new ConeGeometry(0.018, 0.16, 5), leaf);
        l.position.set(Math.cos(k) * 0.02, 0.2, Math.sin(k) * 0.02); l.rotation.set(Math.sin(k * 2.3) * 0.6, 0, Math.cos(k * 1.7) * 0.6);
        g.add(l);
    }
    g.userData.leaves = g.children.slice(2);
    return shadowed(g);
}

/** A glazed vase, blue on white, from a trip nobody remembers. */
export function vase(color = 0x2b4f9a) {
    const g = new Group();
    const c = Object.assign(document.createElement('canvas'), { width: 256, height: 128 }), x = c.getContext('2d');
    x.fillStyle = '#f4f1ea'; x.fillRect(0, 0, 256, 128);
    x.strokeStyle = `#${color.toString(16).padStart(6, '0')}`; x.lineWidth = 5;
    for (let k = 0; k < 8; k++) { x.beginPath(); x.arc(k * 32 + 16, 64, 12, 0, 7); x.stroke(); }
    x.fillStyle = x.strokeStyle; x.fillRect(0, 14, 256, 6); x.fillRect(0, 108, 256, 6);
    g.add(lathe([[0, 0], [0.045, 0], [0.07, 0.07], [0.065, 0.14], [0.03, 0.2], [0.032, 0.24], [0, 0.24]], std(0xffffff, 0.2, { map: new CanvasTexture(c) })));
    return shadowed(g);
}

/** Maneki-neko: one paw up, waving. It is the most fragile thing in the room and it knows it. */
export function luckyCat() {
    const g = new Group(), white = std(0xf7f3ea, 0.25), red = std(0xc8282c, 0.35), gold = std(0xe2b23c, 0.25, { metalness: 0.8 });
    const body = new Mesh(new SphereGeometry(0.075, 20, 14), white); body.scale.set(1, 1.15, 0.85); body.position.y = 0.085; g.add(body);
    const head = new Group(); head.position.y = 0.2; g.add(head);
    head.add(new Mesh(new SphereGeometry(0.065, 20, 14), white));
    for (const s of [-1, 1]) {
        const ear = new Mesh(new ConeGeometry(0.022, 0.04, 8), white); ear.position.set(s * 0.038, 0.055, 0); ear.rotation.z = -s * 0.35; head.add(ear);
        const eye = new Mesh(new SphereGeometry(0.008, 8, 6), std(0x111111, 0.3)); eye.position.set(s * 0.024, 0.008, 0.058); eye.scale.y = 0.4; head.add(eye);
    }
    const collar = new Mesh(new TorusGeometry(0.045, 0.008, 8, 20), red); collar.rotation.x = Math.PI / 2; collar.position.y = 0.155; g.add(collar);
    const bell = new Mesh(new SphereGeometry(0.012, 10, 8), gold); bell.position.set(0, 0.14, 0.045); g.add(bell);
    const paw = new Group(); paw.position.set(0.055, 0.17, 0.02); g.add(paw);
    const arm = new Mesh(new CylinderGeometry(0.016, 0.018, 0.08, 10), white); arm.position.y = 0.04; paw.add(arm);
    const coin = new Mesh(new CylinderGeometry(0.03, 0.03, 0.008, 16), gold); coin.rotation.x = Math.PI / 2; coin.position.set(-0.04, 0.07, 0.05); g.add(coin);
    g.userData = { head, paw };
    return shadowed(g);
}

/** The Principal, in plaster, on a plinth. Moustache, glasses, the look of a man who has read the letter. */
export function bust() {
    const g = new Group(), plaster = std(0xe8e2d4, 0.9), dark = std(0x2a2622, 0.6);
    const plinth = new Mesh(new CylinderGeometry(0.09, 0.1, 0.06, 16), plaster); plinth.position.y = 0.03; g.add(plinth);
    const shoulders = new Mesh(new SphereGeometry(0.13, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), plaster); shoulders.scale.set(1, 0.6, 0.6); shoulders.position.y = 0.06; g.add(shoulders);
    const head = new Group(); head.position.y = 0.21; g.add(head);
    const skull = new Mesh(new SphereGeometry(0.075, 20, 14), plaster); skull.scale.set(0.9, 1.1, 0.95); head.add(skull);
    const nose = new Mesh(new ConeGeometry(0.014, 0.04, 8), plaster); nose.rotation.x = Math.PI / 2; nose.position.set(0, 0, 0.075); head.add(nose);
    const tache = new Mesh(new CylinderGeometry(0.008, 0.008, 0.07, 8), dark); tache.rotation.z = Math.PI / 2; tache.position.set(0, -0.025, 0.07); head.add(tache);
    for (const s of [-1, 1]) { const lens = new Mesh(new TorusGeometry(0.018, 0.003, 6, 16), dark); lens.position.set(s * 0.027, 0.018, 0.072); head.add(lens); }
    g.userData = { head };
    return shadowed(g);
}

/** The science fair volcano: papier-mâché over plaster, 2nd place, still wet inside. */
export function volcano() {
    const g = new Group();
    g.add(lathe([[0, 0], [0.2, 0], [0.16, 0.05], [0.08, 0.2], [0.05, 0.24], [0.035, 0.22], [0, 0.2]], std(0x8a6b55, 0.95)));
    const lava = new Mesh(new CylinderGeometry(0.04, 0.03, 0.01, 12), std(0xff5a1f, 0.6, { emissive: 0xff3a00, emissiveIntensity: 0.6 })); lava.position.y = 0.228; g.add(lava);
    for (let k = 0; k < 5; k++) {   // dribbles of old eruptions
        const d = new Mesh(new CylinderGeometry(0.008, 0.012, 0.1, 6), std(0xd9481c, 0.7)); const a = k * 1.3;
        d.position.set(Math.cos(a) * 0.075, 0.17, Math.sin(a) * 0.075); d.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5); g.add(d);
    }
    return shadowed(g);
}

/** What is behind the poster: a hole, and the blown-out summer through it. */
export function hole() {
    const c = Object.assign(document.createElement('canvas'), { width: 512, height: 512 }), x = c.getContext('2d');
    x.beginPath();
    for (let k = 0; k <= 40; k++) { const a = k / 40 * Math.PI * 2, r = 170 + Math.sin(k * 3.7) * 30 + Math.random() * 40; x.lineTo(256 + Math.cos(a) * r, 256 + Math.sin(a) * r * 0.85); }
    const sky = x.createRadialGradient(256, 256, 0, 256, 256, 230);
    sky.addColorStop(0, '#fffdf3'); sky.addColorStop(0.7, '#f4f1dc'); sky.addColorStop(1, '#c9b48d');
    x.fillStyle = sky; x.fill();
    x.lineWidth = 18; x.strokeStyle = '#6b5a45'; x.stroke();   // the broken plaster lip
    const g = new Group();
    g.add(new Mesh(new PlaneGeometry(1.2, 1.2), new MeshBasicMaterial({ map: new CanvasTexture(c), transparent: true, toneMapped: false })));
    const glow = Object.assign(document.createElement('canvas'), { width: 128, height: 128 }), y = glow.getContext('2d'), r = y.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, 'rgba(255,235,190,.9)'); r.addColorStop(1, 'rgba(255,235,190,0)'); y.fillStyle = r; y.fillRect(0, 0, 128, 128);
    const halo = new Mesh(new PlaneGeometry(3.4, 3.4), new MeshBasicMaterial({ map: new CanvasTexture(glow), transparent: true, depthWrite: false, blending: AdditiveBlending, toneMapped: false }));
    halo.position.z = 0.02; g.add(halo);
    g.userData = { halo };
    return g;
}

/** Crater decal for a plaster wall hit: a dark bruise with a pale broken rim. */
export function craterTexture() {
    const c = Object.assign(document.createElement('canvas'), { width: 256, height: 256 }), x = c.getContext('2d');
    const r = x.createRadialGradient(128, 128, 10, 128, 128, 110);
    r.addColorStop(0, 'rgba(60,50,40,.85)'); r.addColorStop(0.45, 'rgba(120,110,95,.55)'); r.addColorStop(0.62, 'rgba(250,246,236,.7)'); r.addColorStop(1, 'rgba(250,246,236,0)');
    x.fillStyle = r; x.fillRect(0, 0, 256, 256);
    x.strokeStyle = 'rgba(50,42,34,.8)'; x.lineCap = 'round';
    for (let i = 0; i < 9; i++) {
        let px = 128, py = 128, a = Math.random() * 7, w = 4;
        x.beginPath(); x.moveTo(px, py);
        for (let k = 0; k < 6; k++) { a += (Math.random() - 0.5); px += Math.cos(a) * 18; py += Math.sin(a) * 18; x.lineWidth = w *= 0.8; x.lineTo(px, py); }
        x.stroke();
    }
    return new CanvasTexture(c);
}

/** A soft round sprite for dust and powder. */
export function puffTexture() {
    const c = Object.assign(document.createElement('canvas'), { width: 64, height: 64 }), x = c.getContext('2d'), r = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.5, 'rgba(255,255,255,.4)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    x.fillStyle = r; x.fillRect(0, 0, 64, 64);
    return new CanvasTexture(c);
}
