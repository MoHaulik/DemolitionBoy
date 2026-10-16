// Every surface and every joke in the classroom is painted here at load time: no image files.
import { CanvasTexture, RepeatWrapping, SRGBColorSpace } from 'three';

export const FONTS = { hand: '"Caveat", "Comic Sans MS", cursive', marker: '"Permanent Marker", "Impact", sans-serif', chalk: '"Cabin Sketch", "Chalkboard SE", "Comic Sans MS", cursive', type: '"Special Elite", "Courier New", monospace', brush: '"Yuji Syuku", serif', sign: '"Arial Black", "Helvetica Neue", Arial, sans-serif' };

const surface = (w, h) => { const c = Object.assign(document.createElement('canvas'), { width: w, height: h }); return [c, c.getContext('2d')]; };
export function texture(c, srgb = true) {
    const t = new CanvasTexture(c);
    t.wrapS = t.wrapT = RepeatWrapping;
    t.anisotropy = 8;
    if (srgb) t.colorSpace = SRGBColorSpace;
    return t;
}
const hash = (x, y) => { const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453; return s - Math.floor(s); };
function noise(x, y) {
    const ix = Math.floor(x), iy = Math.floor(y);
    let fx = x - ix, fy = y - iy;
    fx = fx * fx * (3 - 2 * fx); fy = fy * fy * (3 - 2 * fy);
    const a = hash(ix, iy), b = hash(ix + 1, iy), c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
    return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
}
function pixels(w, h, shade) {
    const [c, g] = surface(w, h), img = g.createImageData(w, h), d = img.data;
    for (let y = 0, i = 0; y < h; y++) for (let x = 0; x < w; x++, i += 4) {
        const [r, gr, b] = shade(x / w, y / h, x, y);
        d[i] = r; d[i + 1] = gr; d[i + 2] = b; d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    return [c, g];
}

/** Planks across u, grain along v; one texture tile = one metre. */
export function wood({ planks = 5, base = [120, 78, 45], spread = 0.16, rings = 150, joints = 1.3, seed = 1, size = 512, seams = true } = {}) {
    return texture(pixels(size, size, (u, v, x, y) => {
        const p = Math.floor(u * planks), f = u * planks - p, along = v + hash(p, seed) * 3;
        const joint = seams && (along * joints + hash(p, seed + 7)) % 1 < 0.006;
        const warp = noise(f * 1.5 + p * 13, along * 2.5) * 0.22 + noise(f * 4 + p, along * 9) * 0.03;
        const grain = Math.sin((f + warp) * rings), fibre = noise(f * 70 + p * 7, along * 1.2), pore = hash(x, Math.floor(y / 5)) * 0.05;
        const knot = Math.max(0, 1 - Math.hypot((f - hash(p, seed + 3)) * 3, ((along * 2) % 1 - 0.5) * 1.2) * 4) * (hash(p, seed + 5) > 0.75);
        let k = (1 + (hash(p, seed + 1) - 0.5) * 2 * spread) * (0.84 + 0.07 * grain + 0.1 * (fibre - 0.5) - pore - knot * 0.3);
        if (seams && (f < 0.012 || f > 0.988 || joint)) k *= 0.42;
        return base.map((c) => c * k);
    })[0]);
}

export function plaster() {
    return texture(pixels(512, 512, (u, v, x, y) => {
        const k = 0.93 + 0.05 * noise(u * 9, v * 9) + 0.03 * noise(u * 40, v * 40) + (hash(x, y) - 0.5) * 0.03;
        return [236 * k, 232 * k, 222 * k];
    })[0]);
}

/** Chalk: draw onto a layer, punch grain out of it, lay it on the board. */
function chalk(g, w, h, draw) {
    const [c, l] = surface(w, h);
    l.fillStyle = l.strokeStyle = 'rgba(240,240,232,.92)';
    l.lineCap = l.lineJoin = 'round';
    draw(l);
    l.globalCompositeOperation = 'destination-out';
    for (let i = 0; i < w * h / 9; i++) { l.globalAlpha = Math.random() * 0.8; l.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 2, 1); }
    g.drawImage(c, 0, 0);
}
const wobble = (l, pts, width) => {   // a hand-drawn chalk stroke
    l.lineWidth = width;
    l.beginPath();
    pts.forEach(([x, y], i) => l[i ? 'lineTo' : 'moveTo'](x + Math.random() * 3, y + Math.random() * 3));
    l.stroke();
};

export function blackboard() {
    const W = 2048, H = 660, [c, g] = surface(W, H);
    g.fillStyle = '#18231d'; g.fillRect(0, 0, W, H);
    for (let i = 0; i < 260; i++) {   // the ghosts of a thousand erased lessons
        g.strokeStyle = `rgba(200,210,200,${Math.random() * 0.035})`; g.lineWidth = 30 + Math.random() * 80;
        g.beginPath(); g.arc(Math.random() * W, Math.random() * H, 60 + Math.random() * 260, Math.random() * 6, Math.random() * 6); g.stroke();
    }
    chalk(g, W, H, (l) => {
        l.font = `700 44px ${FONTS.chalk}`; l.fillText('Tuesday (again)', 60, 70);
        l.font = `700 76px ${FONTS.chalk}`; l.fillText('TODAY: STRUCTURAL INTEGRITY', 60, 165);
        wobble(l, [[60, 185], [1060, 180]], 5);
        l.font = `700 46px ${FONTS.chalk}`;
        ['1. Walls hold up the ceiling.', '2. The ceiling holds up the 2nd floor.', '3. The 2nd floor holds up the principal.', '4. Do you see where this is going, D.B.?']
            .forEach((line, i) => l.fillText(line, 80, 260 + i * 66));
        l.font = `700 36px ${FONTS.chalk}`;
        l.fillText('Pop quiz: how many walls does this room have?', 80, 560);
        l.fillText('(answer may change before the bell)', 120, 604);
        l.save(); l.translate(1000, 615); l.rotate(-0.08); l.font = `28px ${FONTS.hand}`; l.fillText('4 for now ;)', 0, 0); l.restore();
        // A diagram: a school, a stick figure, a box with a plunger, and a firm NO.
        const bx = 1290, by = 540;
        wobble(l, [[bx, by], [bx, by - 230], [bx + 300, by - 230], [bx + 300, by]], 6);
        wobble(l, [[bx - 20, by - 225], [bx + 150, by - 330], [bx + 320, by - 225]], 6);
        for (let r = 0; r < 2; r++) for (let k = 0; k < 3; k++) l.strokeRect(bx + 30 + k * 90, by - 200 + r * 85, 50, 50);
        wobble(l, [[bx + 160, by - 330], [bx + 190, by - 250], [bx + 150, by - 170], [bx + 200, by - 60], [bx + 170, by]], 4);   // the crack
        const sx = bx + 470;
        l.beginPath(); l.arc(sx, by - 150, 22, 0, 7); l.stroke();
        wobble(l, [[sx, by - 128], [sx, by - 60], [sx - 25, by]], 5); wobble(l, [[sx, by - 60], [sx + 25, by]], 5);
        wobble(l, [[sx, by - 110], [sx + 55, by - 90]], 5);
        l.strokeRect(sx + 50, by - 70, 70, 70); wobble(l, [[sx + 85, by - 70], [sx + 85, by - 120]], 5); wobble(l, [[sx + 60, by - 120], [sx + 110, by - 120]], 7);
        for (let k = 0; k < 3; k++) { l.lineWidth = 6; l.beginPath(); l.ellipse(sx + 30, by - 90, 150 + k * 9, 130 + k * 7, k * 0.2, 0, 7); l.stroke(); }
        l.font = `700 90px ${FONTS.chalk}`; l.fillText('NO.', sx + 150, by - 230);
        // The tally of detentions, boxed.
        l.font = `700 42px ${FONTS.chalk}`; l.fillText('DEMOLITION BOY: STAY AFTER CLASS', 1170, 80);
        l.strokeRect(1150, 30, 820, 70);
    });
    return texture(c);
}

/** One line of fresh chalk, for the board to answer back. */
export function chalkLine(text) {
    const W = 1600, H = 150, [c, g] = surface(W, H);
    if (text) chalk(g, W, H, (l) => {
        let size = 88;
        do l.font = `700 ${size -= 4}px ${FONTS.chalk}`; while (l.measureText(text).width > W - 40);
        l.fillText(text, 20, 105);
    });
    return c;
}

function wrap(g, text, maxWidth) {
    const lines = [];
    for (const para of text.split('\n')) {
        let line = '';
        for (const word of para.split(' ')) {
            const next = line ? `${line} ${word}` : word;
            if (g.measureText(next).width > maxWidth && line) { lines.push(line); line = word; } else line = next;
        }
        lines.push(line);
    }
    return lines;
}
const STICKY = { yellow: '#f7e26b', pink: '#f6a6c1', blue: '#9fd4f2', green: '#b8e68a', orange: '#f8b26a' };

/** A sticky note in a hurried hand. */
export function sticky(text, color = 'yellow', size = 46) {
    const [c, g] = surface(512, 512);
    const shade = g.createLinearGradient(0, 0, 0, 512);
    shade.addColorStop(0, 'rgba(90,70,20,0)'); shade.addColorStop(1, 'rgba(90,70,20,.2)');
    g.fillStyle = STICKY[color]; g.fillRect(0, 0, 512, 512);
    g.fillStyle = shade; g.fillRect(0, 0, 512, 512);
    g.fillStyle = 'rgba(0,0,0,.06)'; g.fillRect(0, 0, 512, 70);   // the glue strip
    g.fillStyle = '#1d2433'; g.font = `600 ${size}px ${FONTS.hand}`;
    g.translate(256, 0); g.rotate((Math.random() - 0.5) * 0.06);
    const lines = wrap(g, text, 440);
    lines.forEach((line, i) => { g.textAlign = 'center'; g.fillText(line, 0, 256 - (lines.length - 1) * size * 0.55 + i * size * 1.1 + size * 0.35); });
    return texture(c);
}

/** A typed letter on school stationery. */
export function letter(title, body) {
    const [c, g] = surface(768, 1024);
    g.fillStyle = '#f4efe2'; g.fillRect(0, 0, 768, 1024);
    g.fillStyle = '#7a1f1f'; g.font = `700 30px ${FONTS.sign}`; g.fillText(title, 60, 90);
    g.fillRect(60, 108, 648, 4);
    g.fillStyle = '#2a2622'; g.font = `27px ${FONTS.type}`;
    wrap(g, body, 640).forEach((line, i) => g.fillText(line, 60, 170 + i * 40));
    g.strokeStyle = 'rgba(120,60,20,.35)'; g.lineWidth = 7; g.beginPath(); g.arc(560, 880, 70, 0, 7); g.stroke();   // coffee ring, naturally
    return texture(c);
}

/** A hanging scroll: big brush characters, the English underneath. Falls back to English if no CJK font. */
export function scroll(kanji, english, cjk) {
    const [c, g] = surface(256, 768);
    g.fillStyle = '#3b3328'; g.fillRect(0, 0, 256, 768);
    g.fillStyle = '#efe7d3'; g.fillRect(18, 60, 220, 640);
    g.fillStyle = '#16120e'; g.textAlign = 'center';
    if (cjk) {
        const size = Math.min(130, 520 / kanji.length);
        g.font = `${size}px ${FONTS.brush}`;
        [...kanji].forEach((ch, i) => g.fillText(ch, 128, 90 + size * 0.95 + i * size * 1.02));
    }
    g.font = `600 ${cjk ? 26 : 36}px ${FONTS.hand}`;
    const lines = wrap(g, english, 190);
    lines.forEach((line, i) => g.fillText(line, 128, (cjk ? 690 - (lines.length - 1) * 28 : 380 - lines.length * 20) + i * (cjk ? 28 : 42)));
    return texture(c);
}

/** Printed signage: header bar, big bold words. */
export function sign(header, body, { bg = '#f5f2ea', bar = '#c0262d', ink = '#1b1b1b', w = 1024, h = 512, size = 70, foot = '' } = {}) {
    const [c, g] = surface(w, h);
    g.fillStyle = bg; g.fillRect(0, 0, w, h);
    g.fillStyle = bar; g.fillRect(0, 0, w, h * 0.26);
    g.fillStyle = '#fff'; g.textAlign = 'center'; g.font = `900 ${h * 0.14}px ${FONTS.sign}`; g.fillText(header, w / 2, h * 0.18);
    g.fillStyle = ink; g.font = `900 ${size}px ${FONTS.sign}`;
    wrap(g, body, w * 0.86).forEach((line, i) => g.fillText(line, w / 2, h * 0.45 + i * size * 1.15));
    if (foot) { g.font = `600 ${h * 0.08}px ${FONTS.hand}`; g.textAlign = 'right'; g.fillText(foot, w * 0.95, h * 0.93); }
    return texture(c);
}

/** A note passed in class: ruled paper, two people's handwriting taking turns. */
export function passedNote(lines) {
    const [c, g] = surface(512, 640);
    g.fillStyle = '#fbfaf4'; g.fillRect(0, 0, 512, 640);
    g.strokeStyle = 'rgba(70,110,200,.35)'; g.lineWidth = 2;
    for (let y = 70; y < 640; y += 48) { g.beginPath(); g.moveTo(0, y); g.lineTo(512, y); g.stroke(); }
    g.strokeStyle = 'rgba(220,60,60,.4)'; g.beginPath(); g.moveTo(60, 0); g.lineTo(60, 640); g.stroke();
    lines.forEach((line, i) => {
        g.fillStyle = i % 2 ? '#2b3fa0' : '#202020';
        g.font = i % 2 ? `700 40px ${FONTS.marker}` : `600 44px ${FONTS.hand}`;
        g.fillText(line, i % 2 ? 110 : 80, 112 + i * 96);
    });
    return texture(c);
}

/** Two eyes in the dark, for whatever lives in that desk. */
export function eyes() {
    const [c, g] = surface(256, 128);
    for (const x of [72, 184]) {
        const r = g.createRadialGradient(x, 64, 0, x, 64, 46);
        r.addColorStop(0, 'rgba(255,250,170,1)'); r.addColorStop(0.35, 'rgba(210,240,80,.9)'); r.addColorStop(1, 'rgba(120,200,40,0)');
        g.fillStyle = r; g.beginPath(); g.ellipse(x, 64, 46, 34, 0, 0, 7); g.fill();
        g.fillStyle = '#050505'; g.beginPath(); g.ellipse(x + 4, 64, 6, 24, 0, 0, 7); g.fill();
    }
    return texture(c);
}

/** A flip-card digit. */
export function digit(text) {
    const [c, g] = surface(128, 192);
    g.fillStyle = '#121212'; g.fillRect(0, 0, 128, 192);
    g.fillStyle = '#fafafa'; g.textAlign = 'center'; g.font = `900 150px ${FONTS.sign}`; g.fillText(text, 64, 150);
    g.fillStyle = 'rgba(0,0,0,.6)'; g.fillRect(0, 94, 128, 4);
    return texture(c);
}

export function clockFace() {
    const [c, g] = surface(512, 512);
    g.fillStyle = '#f7f5ee'; g.beginPath(); g.arc(256, 256, 250, 0, 7); g.fill();
    g.fillStyle = '#222'; g.textAlign = 'center'; g.font = `700 52px ${FONTS.sign}`;
    for (let k = 1; k <= 12; k++) { const a = (12 - k) / 12 * Math.PI * 2; g.fillText(String(k), 256 - Math.sin(a) * 190, 274 - Math.cos(a) * 190); }   // numbered the other way round
    g.font = `500 28px ${FONTS.hand}`; g.fillStyle = '#b02020'; g.fillText('detention ends: never', 256, 360);
    return texture(c);
}

/** Soft dark blobs and burn marks, alpha only. */
/** Cracks running out from under whatever is covering the hole. */
export function cracks() {
    const [c, g] = surface(1024, 1024);
    g.strokeStyle = 'rgba(40,34,28,.85)'; g.lineCap = 'round';
    for (let i = 0; i < 16; i++) {
        let x = 512, y = 512, a = i / 16 * Math.PI * 2 + Math.random() * 0.3, w = 6;
        g.beginPath(); g.moveTo(x, y);
        for (let k = 0, n = 6 + Math.random() * 8; k < n; k++) { a += (Math.random() - 0.5) * 0.9; x += Math.cos(a) * 34; y += Math.sin(a) * 34; g.lineWidth = w *= 0.86; g.lineTo(x, y); }
        g.stroke();
    }
    return texture(c);
}
export function blob(inner = 0.55) {
    const [c, g] = surface(128, 128), r = g.createRadialGradient(64, 64, 0, 64, 64, 64);
    r.addColorStop(0, `rgba(0,0,0,${inner})`); r.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = r; g.fillRect(0, 0, 128, 128);
    return texture(c);
}
export function glow() {
    const [c, g] = surface(256, 256), r = g.createRadialGradient(128, 128, 30, 128, 128, 128);
    r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = r; g.fillRect(0, 0, 256, 256);
    return texture(c);
}
export function gradientStrip() {
    const [c, g] = surface(4, 128), r = g.createLinearGradient(0, 0, 0, 128);
    r.addColorStop(0, 'rgba(0,0,0,.5)'); r.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = r; g.fillRect(0, 0, 4, 128);
    return texture(c);
}
export function scorch(carving = '') {
    const [c, g] = surface(512, 512);
    for (let i = 0; i < 70; i++) {   // soot streaks flaring out from the centre
        const a = Math.random() * Math.PI * 2, len = 120 + Math.random() * 130, r = g.createLinearGradient(256, 256, 256 + Math.cos(a) * len, 256 + Math.sin(a) * len);
        r.addColorStop(0, 'rgba(15,10,6,.5)'); r.addColorStop(1, 'rgba(15,10,6,0)');
        g.strokeStyle = r; g.lineWidth = 10 + Math.random() * 30;
        g.beginPath(); g.moveTo(256, 256); g.lineTo(256 + Math.cos(a) * len, 256 + Math.sin(a) * len); g.stroke();
    }
    const core = g.createRadialGradient(256, 256, 0, 256, 256, 120);
    core.addColorStop(0, 'rgba(8,5,3,.95)'); core.addColorStop(0.6, 'rgba(25,14,6,.7)'); core.addColorStop(1, 'rgba(25,14,6,0)');
    g.fillStyle = core; g.fillRect(0, 0, 512, 512);
    if (carving) {   // carved into the wood: dark groove, light lip
        g.font = `700 54px ${FONTS.marker}`; g.textAlign = 'center';
        g.fillStyle = 'rgba(255,230,190,.35)'; g.fillText(carving, 258, 452);
        g.fillStyle = 'rgba(40,22,10,.85)'; g.fillText(carving, 256, 450);
    }
    return texture(c);
}

/** What is outside: an overexposed summer, trees and sky. */
export function outside() {
    const [c, g] = surface(1024, 512), sky = g.createLinearGradient(0, 0, 0, 512);
    sky.addColorStop(0, '#b9d3ea'); sky.addColorStop(0.55, '#eef3f3'); sky.addColorStop(1, '#f6f7f0');
    g.fillStyle = sky; g.fillRect(0, 0, 1024, 512);
    g.filter = 'blur(8px)';
    for (let i = 0; i < 140; i++) {   // summer trees, blown out by the sun the way a camera would see them
        const x = Math.random() * 1024, y = 330 + Math.random() * 200, r = 25 + Math.random() * 70;
        g.fillStyle = `hsla(${80 + Math.random() * 30}, ${18 + Math.random() * 20}%, ${58 + Math.random() * 25}%, .9)`;
        g.beginPath(); g.arc(x, y - r * 0.3, r, 0, 7); g.fill();
    }
    return texture(c);
}

/** Is there a font for these characters? Compares them against a glyph no font has. */
export function hasGlyphs(text, family) {
    const [, g] = surface(64, 64), draw = (t) => { g.clearRect(0, 0, 64, 64); g.font = `48px ${family}`; g.fillText(t, 4, 52); return g.getImageData(0, 0, 64, 64).data.join(); };
    return draw(text[0]) !== draw('￿');
}
