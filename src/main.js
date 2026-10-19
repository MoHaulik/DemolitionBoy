// Demolition Boy's classroom. Empty. Mostly. Read the notes, mind the desk that looks back,
// and whatever you do, do not push the plunger on the teacher's desk.
import {
    ACESFilmicToneMapping, AudioListener, BackSide, Mesh, MeshBasicMaterial, SphereGeometry, BufferGeometry, Color, DirectionalLight, Float32BufferAttribute, Group, HemisphereLight,
    Line, LineBasicMaterial, PCFShadowMap, PerspectiveCamera, PMREMGenerator, Points, PointsMaterial, Quaternion, Raycaster, Scene,
    Vector2, Vector3, WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildLight, buildRoom, D, H, SUN, W } from './room.js';
import { chalkLine, FONTS, hasGlyphs } from './paint.js';
import { createGame } from './game.js';
import { createPhysics } from './physics.js';
import { createDestruction } from './destruction.js';
import { createStory } from './story.js';

const params = new URLSearchParams(location.search);
const button = document.getElementById('enter');
const fonts = ['600 40px "Caveat"', '40px "Permanent Marker"', '700 40px "Cabin Sketch"', '40px "Special Elite"'].map((f) => document.fonts.load(f));
fonts.push(document.fonts.load('40px "Yuji Syuku"', '壊すな'));
await Promise.race([Promise.allSettled(fonts), new Promise((resolve) => setTimeout(resolve, 3500))]);

const renderer = new WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = Number(params.get('exposure')) || 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;
renderer.shadowMap.autoUpdate = false;   // the room does not move; the shadows are drawn once
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');
renderer.xr.setFoveation(0.6);
document.body.prepend(renderer.domElement);

const scene = new Scene(), rig = new Group(), camera = new PerspectiveCamera(70, innerWidth / innerHeight, 0.03, 80);
scene.background = new Color(0xe9efe6);
scene.environment = new PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = params.has('sunonly') ? 0 : 0.22;
camera.position.y = Number(params.get('y') ?? 1.6);
camera.rotation.order = 'YXZ';
camera.rotation.set(Number(params.get('pitch') ?? -0.08), Number(params.get('yaw') ?? 0), 0);
rig.position.set(Number(params.get('x') ?? 0.4), 0, Number(params.get('z') ?? 3.9));
rig.add(camera);
scene.add(rig);

const room = buildRoom(scene, { cjk: hasGlyphs('壊', FONTS.brush) });
const light = buildLight(scene);
const physics = await createPhysics();   // every wall, pane and desk is a body now
const destruction = createDestruction({ scene, physics, room });
const sun = new DirectionalLight(0xffd9a6, 7);
sun.position.copy(SUN).multiplyScalar(14);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -7, right: 7, top: 7, bottom: -7, near: 2, far: 30 });
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.025;
sun.shadow.radius = 3;
scene.add(sun, sun.target);
const skylight = new DirectionalLight(0xcfdcf2, 1.1);   // the bright sky through the windows: soft, from the left, no shadow
skylight.position.set(-10, 2.5, 1);
const bounce = new HemisphereLight(0xc9d6ea, 0x6a4024, 0.22);
if (!params.has('sunonly')) scene.add(skylight, bounce);   // ground colour: the sunlit floor bouncing warmth up
renderer.shadowMap.needsUpdate = true;

// Sound: everything synthesised. Cicadas outside, a clock ticking the wrong way, and consequences.
let audio = null;
function startAudio() {
    if (audio) return audio.ctx.resume();
    const listener = new AudioListener(), ctx = listener.context, out = listener.getInput();
    camera.add(listener);
    // Everything ends in a master filter (it muffles as he falls asleep, and in slow motion), with a room reverb on a send.
    const master = new BiquadFilterNode(ctx, { type: 'lowpass', frequency: 18000, Q: 0.5 });
    master.connect(ctx.destination);
    listener.gain.disconnect(); listener.gain.connect(master);
    const ir = ctx.createBuffer(2, ctx.sampleRate * 2.2, ctx.sampleRate);   // a wooden room: a short, bright, decaying tail
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3.2) * (i < ctx.sampleRate * 0.012 ? 0 : 1); }
    const reverb = new ConvolverNode(ctx, { buffer: ir }), wet = new GainNode(ctx, { gain: 0.28 });
    reverb.connect(wet).connect(master);
    const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate), data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    const at = (x, y, z) => { const p = new PannerNode(ctx, { panningModel: 'HRTF', refDistance: 1.5, positionX: x, positionY: y, positionZ: z }); p.connect(out); return p; };
    const burst = (dest, { dur = 0.3, type = 'lowpass', freq = 800, to = freq, gain = 0.5, q = 0.7 } = {}) => {
        const t = ctx.currentTime, src = new AudioBufferSourceNode(ctx, { buffer: noise, loop: true }), f = new BiquadFilterNode(ctx, { type, frequency: freq, Q: q }), g = new GainNode(ctx, { gain });
        f.frequency.exponentialRampToValueAtTime(to, t + dur);
        g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(f).connect(g).connect(dest); src.start(t, Math.random()); src.stop(t + dur + 0.05);
    };
    const tone = (dest, { from, to, dur, gain = 0.3, type = 'sine' }) => {
        const t = ctx.currentTime, o = new OscillatorNode(ctx, { type, frequency: from }), g = new GainNode(ctx, { gain });
        o.frequency.exponentialRampToValueAtTime(to, t + dur);
        g.gain.setValueAtTime(gain, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        o.connect(g).connect(dest); o.start(t); o.stop(t + dur + 0.05);
    };
    // Cicadas: high noise, pulsed fast, swelling slowly, from the windows.
    const cicadas = at(-W / 2 - 3, 2.5, 0), pulse = new GainNode(ctx, { gain: 0 }), swell = new GainNode(ctx, { gain: 0.05 });
    const hiss = new AudioBufferSourceNode(ctx, { buffer: noise, loop: true });
    const hush = new GainNode(ctx, { gain: 1 });   // the cicadas go quiet when the swinging starts
    hiss.connect(new BiquadFilterNode(ctx, { type: 'bandpass', frequency: 5200, Q: 3 })).connect(pulse).connect(swell).connect(hush).connect(cicadas);
    const lfo = new OscillatorNode(ctx, { type: 'square', frequency: 38 }), depth = new GainNode(ctx, { gain: 0.5 });
    lfo.connect(depth).connect(pulse.gain); pulse.gain.value = 0.5;
    const slow = new OscillatorNode(ctx, { frequency: 0.07 }), slowDepth = new GainNode(ctx, { gain: 0.035 });
    slow.connect(slowDepth).connect(swell.gain);
    hiss.start(); lfo.start(); slow.start();
    const clock = at(1.55, 2.68, -D / 2), desk = at(0.12, 1.3, -3.78), ceiling = at(2.2, H, 1.5), lair = at(room.lair.x, 0.6, room.lair.z);
    audio = {
        ctx, hush, out, master, reverb, tickGain: 0.25,
        scratch: () => burst(desk, { dur: 0.05 + Math.random() * 0.05, type: 'bandpass', freq: 2400 + Math.random() * 1500, gain: 0.12, q: 5 }),
        whistle: () => { tone(out, { from: 500, to: 1500, dur: 0.35, gain: 0.07, type: 'sine' }); setTimeout(() => tone(out, { from: 1500, to: 1400, dur: 0.25, gain: 0.05, type: 'triangle' }), 330); },
        tick: (odd) => burst(clock, { dur: 0.04, type: 'highpass', freq: odd ? 3000 : 2200, gain: audio.tickGain }),
        click: () => burst(desk, { dur: 0.06, type: 'highpass', freq: 1800, gain: 0.6 }),
        pfft: () => { burst(desk, { dur: 0.7, type: 'bandpass', freq: 1400, to: 300, gain: 0.5, q: 2 }); tone(desk, { from: 700, to: 180, dur: 0.6, gain: 0.08, type: 'triangle' }); },
        boom: () => { burst(desk, { dur: 2.6, freq: 600, to: 40, gain: 1.6 }); tone(desk, { from: 90, to: 28, dur: 2.2, gain: 0.9 }); burst(ceiling, { dur: 1.4, type: 'highpass', freq: 3000, to: 900, gain: 0.25 }); },
        clatter: () => { for (let k = 0; k < 4; k++) setTimeout(() => burst(desk, { dur: 0.09, type: 'bandpass', freq: 900 + Math.random() * 900, gain: 0.5, q: 4 }), k * 70 + Math.random() * 40); },
        giggle: () => { for (let k = 0; k < 5; k++) setTimeout(() => tone(lair, { from: 520 + k * 25, to: 380, dur: 0.09, gain: 0.05, type: 'triangle' }), k * 95); },
    };
}

// Particles: confetti for disappointment, plaster dust for consequences.
const MAX = 600, pos = new Float32Array(MAX * 3), col = new Float32Array(MAX * 3), vel = new Float32Array(MAX * 3), life = new Float32Array(MAX);
const bits = new BufferGeometry();
bits.setAttribute('position', new Float32BufferAttribute(pos, 3));
bits.setAttribute('color', new Float32BufferAttribute(col, 3));
const particles = new Points(bits, new PointsMaterial({ size: 0.012, vertexColors: true, transparent: true, depthWrite: false }));
particles.frustumCulled = false;
scene.add(particles);
let next = 0;
function spawn(n, origin, spread, speed, colors, up = 1) {
    for (let k = 0; k < n; k++, next = (next + 1) % MAX) {
        pos.set([origin.x + (Math.random() - 0.5) * spread.x, origin.y + (Math.random() - 0.5) * spread.y, origin.z + (Math.random() - 0.5) * spread.z], next * 3);
        vel.set([(Math.random() - 0.5) * speed, Math.random() * speed * up, (Math.random() - 0.5) * speed], next * 3);
        col.set(new Color(colors[k % colors.length]).toArray(), next * 3);
        life[next] = 2 + Math.random() * 2;
    }
}
const CONFETTI = [0xff4d6d, 0xffd23f, 0x3ec1d3, 0x8ac926, 0xb388eb], PLASTER = [0xcfc8b8, 0xb9b1a0, 0xe4ded0];

// The plunger, and the board's escalating opinion of you.
const LINES = ['WHO PUSHED THE PLUNGER?', 'IT IS NOT CONNECTED TO ANYTHING.', 'IT IS NOW CONNECTED TO SOMETHING.', 'FINE. DETENTION. YOU TOO, VISITOR.',
    'STOP.', 'I AM CALLING YOUR MOTHER.', 'SHE ASKED "WHICH ONE?"', 'IT IS NOW CONNECTED TO EVERYTHING.', 'WE ARE ALL IN DETENTION NOW.'];
const state = { pushes: 0, explosions: 0, pressedAt: -9, armed: true, fallen: 0, lampSpin: 0, lampAngle: 0, flicker: 0, flipAt: -9, eyesHidden: 0 };
const anims = [];
const ease = (f) => anims.push({ start: performance.now() / 1000, ...f });
function write(text) {
    const g = room.statusCanvas.getContext('2d');
    g.clearRect(0, 0, room.statusCanvas.width, room.statusCanvas.height);
    g.drawImage(chalkLine(text), 0, 0);
    room.status.material.map.needsUpdate = true;
}
const handleTop = new Vector3();
function push() {
    const now = performance.now() / 1000;
    if (now - state.pressedAt < 1.2) return;
    state.pressedAt = now;
    state.pushes++;
    startAudio();
    audio.click();
    ease({ dur: 0.5, run: (f) => { room.handle.position.y = 0.21 - 0.1 * Math.sin(Math.min(1, f * 2) * Math.PI / 2) * (f < 0.6 ? 1 : 1 - (f - 0.6) / 0.4); } });
    write(LINES[Math.min(state.pushes, LINES.length) - 1]);
    room.handle.getWorldPosition(handleTop);
    if (state.pushes % 3 === 0) return setTimeout(explode, 900);   // a beat of silence first. Comedy is timing. So is demolition.
    audio.pfft();
    spawn(40, handleTop, new Vector3(0.05, 0.02, 0.05), 0.9, CONFETTI);
}
function explode() {
    state.explosions++;
    audio.boom();
    state.flicker = 1.6;
    state.lampSpin += 2.4;
    state.flipAt = performance.now() / 1000;
    spawn(260, new Vector3(2.2, H - 0.05, 1.5), new Vector3(2.6, 0.02, 2.2), 0.15, PLASTER, -1);
    spawn(80, handleTop, new Vector3(0.1, 0.05, 0.1), 2.2, CONFETTI);
    const scroll = room.scrolls[state.fallen++];
    if (scroll) {
        const y0 = scroll.position.y;
        setTimeout(() => ease({ dur: 0.8, run: (f) => { scroll.position.y = y0 - (y0 - 0.19) * f * f; scroll.rotation.x = -Math.PI / 2 * f * f; scroll.position.z = -D / 2 + 0.04 + 0.08 * f; }, done: () => audio.clatter() }), 350);
    }
}

// The look. Morten's room as built is an even, sunny afternoon (?look=built). The game plays it as a film frame:
// one hard warm sun, the fills pulled down and cooled so the shadows go deep and blue, and the beams carry the shot.
// The real class (the story, waking up) is the opposite: no sun, an overcast sky, fluorescent tubes, everything flat.
const LOOKS = {
    built: { sun: 7, sky: 1.1, bounce: 0.22, env: 0.22, exposure: 1.05, haze: 1, skyColor: 0xcfdcf2 },
    film: { sun: 10, sky: 0.34, bounce: 0.09, env: 0.07, exposure: 1.0, haze: 1.5, skyColor: 0x7f98d6 },
    boring: { sun: 0, sky: 1.0, bounce: 0.8, env: 0.65, haze: 0.45, skyColor: 0xdfe5ec },
};
// Over the ninety seconds the sun goes down: gold, then orange, then red at the bell.
const SUNSET = [new Color(0xffd9a6), new Color(0xffa060), new Color(0xff7040)], TINTS = [new Color(1, 0.86, 0.62), new Color(1, 0.66, 0.4), new Color(1, 0.52, 0.3)];
const ramp = (stops, f, out) => { const x = Math.min(0.999, Math.max(0, f)) * (stops.length - 1), i = Math.floor(x); return out.copy(stops[i]).lerp(stops[i + 1], x - i); };
const GREY = new Color(0x8c9298), WHITE = new Color(0xffffff), sunColor = new Color(), tintColor = new Color();
const builtLook = params.get('look') === 'built';
const look = { ...(builtLook ? LOOKS.built : LOOKS.film), fill: 1 };   // fill: how much of the fill light is let in (0..1), animated by the opening and the end
skylight.color.set(look.skyColor);
let wasBoring = null;
function applyLook(target, dt) {
    const boring = !!target.boring, k = boring !== wasBoring ? 1 : 1 - Math.exp(-dt * 1.5);   // between the class and the dream: a cut, behind closed eyes
    wasBoring = boring;
    const base = boring ? LOOKS.boring : look;
    look.fill += ((boring ? 1 : target.fill) - look.fill) * k;
    sun.intensity += ((boring ? 0 : target.sun) - sun.intensity) * k;
    skylight.intensity += (base.sky * look.fill - skylight.intensity) * k;
    bounce.intensity += (base.bounce * look.fill - bounce.intensity) * k;
    if (!params.has('sunonly')) scene.environmentIntensity += (base.env * look.fill - scene.environmentIntensity) * k;
    light.haze.value += ((boring ? LOOKS.boring.haze : target.haze) - light.haze.value) * k;
    light.day.value += ((boring ? 0 : 1) - light.day.value) * k;
    skylight.color.lerp(new Color(base.skyColor), k);
    sun.color.lerp(target.sunColor ?? SUNSET[0], k);
    light.tint.value.lerp(target.tint ?? TINTS[0], k);
    for (const o of room.outside) o.material.color.lerp(boring ? GREY : WHITE, k);
}
if (!params.has('exposure')) renderer.toneMappingExposure = look.exposure;

// When something heavy goes, the building knows: the lamp on its one wire swings, plaster sifts down from the ceiling.
const shake = (point, e) => {
    state.lampSpin += 1.6 * e;
    spawn(Math.round(20 + 50 * e), new Vector3(point.x, H - 0.05, point.z), new Vector3(1.6, 0.02, 1.6), 0.12, PLASTER, -1);
};
const game = createGame({ scene, renderer, rig, camera, room, physics, destruction, light, shake, audio: () => audio, say: write, flip: () => { state.flipAt = performance.now() / 1000; } });
const story = createStory({ scene, camera, rig, room, audio: () => audio, write, params });

// The desk that looks back: blinks now and then, and hides if you stare.
function updateEyes(t, head) {
    const eyes = room.eyes, toEyes = eyes.position.clone().sub(head), dist = toEyes.length();
    const gaze = camera.getWorldDirection(new Vector3()).dot(toEyes.normalize());
    if (dist < 1.4 && gaze > 0.93 && t > state.eyesHidden) { state.eyesHidden = t + 5; audio?.giggle(); }
    const hidden = t < state.eyesHidden, blink = Math.sin(t * 1.3) > 0.985 || Math.sin(t * 0.37 + 2) > 0.995;
    eyes.scale.y += ((hidden || blink ? 0.02 : 1) - eyes.scale.y) * (hidden ? 0.5 : 0.35);
    eyes.position.x = room.lair.x + 0.2 + Math.sin(t * 0.21) * 0.25;   // it moves about in there
}

// Inputs: rays for pointing, fingertips and controllers for poking.
const controllers = [0, 1].map((i) => {
    const c = renderer.xr.getController(i);
    c.add(new Line(new BufferGeometry().setFromPoints([new Vector3(), new Vector3(0, 0, -0.4)]), new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })));
    c.addEventListener('select', () => {
        if (game.state.phase === 'story') return story.skip();   // a tap in the class: straight to the heavy eyes
        if (game.state.phase === 'awake' && story.state.mode === 'awake') return dream(true);   // with the report card: back under
        if (pointsAtPlunger(c)) push();
    });
    rig.add(c);
    const grip = renderer.xr.getControllerGrip(i), hand = renderer.xr.getHand(i);
    rig.add(grip, hand);
    return { c, grip, hand };
});
const ray = new Raycaster();
function pointsAtPlunger(from) {
    from.updateMatrixWorld(true);   // 'select' can arrive before this frame's pose has reached the matrix
    ray.ray.origin.setFromMatrixPosition(from.matrixWorld);
    ray.ray.direction.set(0, 0, -1).applyQuaternion(from.getWorldQuaternion(new Quaternion()));
    return ray.intersectObject(room.plunger, true).length > 0;
}
const tip = new Vector3();
function poked() {
    room.handle.getWorldPosition(handleTop);
    for (const { grip, hand } of controllers) {
        const finger = hand.joints?.['index-finger-tip'];
        const p = finger?.visible ? finger.getWorldPosition(tip) : grip.visible ? grip.getWorldPosition(tip) : null;
        if (p && Math.hypot(p.x - handleTop.x, p.z - handleTop.z) < 0.09 && p.y < handleTop.y + 0.02 && p.y > handleTop.y - 0.12) return true;
    }
    return false;
}
renderer.domElement.addEventListener('pointermove', (e) => {
    if (!e.buttons) return;
    camera.rotation.y += e.movementX * 0.004;
    camera.rotation.x = Math.min(1.4, Math.max(-1.4, camera.rotation.x + e.movementY * 0.004));
});
renderer.domElement.addEventListener('click', (e) => {
    startAudio();
    ray.setFromCamera(new Vector2(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1), camera);
    if (ray.intersectObject(room.plunger, true).length) push();
});
const keys = new Set();
addEventListener('keydown', (e) => keys.add(e.key.toLowerCase()));
addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

// The opening: black, then the room fades up on the held, beautiful frame (sun and beams, almost no fill),
// the board writes the title in chalk one letter at a time, and only then do the tools turn up.
const veil = new Mesh(new SphereGeometry(0.3, 16, 8), new MeshBasicMaterial({ color: 0x000000, side: BackSide, transparent: true, depthTest: false, depthWrite: false }));
veil.renderOrder = 999; veil.visible = false; camera.add(veil);
const intro = { at: -1, written: 0, lastPhase: null };
const TITLE = 'DEMOLITION BOY', CUE = 'LESSON 2: DEMOLITION. SWING TO START.';
// The real class first, then the dream. The second time round, the class is brief.
function dream(short) {
    game.state.phase = 'story';
    if (params.get('story') === 'skip') { story.hide(); return beginOpening(); }
    let seen = false;
    try { seen = localStorage.getItem('demolitionboy_story') === '1'; } catch {}
    story.enter({ short: short || seen }, () => { try { localStorage.setItem('demolitionboy_story', '1'); } catch {} beginOpening(); });
}
function beginOpening() {
    if (game.state.phase !== 'intro') game.reset();   // a second visit starts clean
    intro.at = performance.now() / 1000; intro.written = 0;
    game.state.phase = 'intro';
    veil.visible = true; veil.material.opacity = 1;
    write('');
}
function opening(t) {
    if (intro.at < 0) return;
    const age = t - intro.at;
    veil.material.opacity = 1 - Math.min(1, Math.max(0, (age - 0.8) / 3.7)) ** 1.6;   // black, then a slow fade up
    veil.visible = veil.material.opacity > 0.002;
    const letters = Math.min(TITLE.length, Math.floor(Math.max(0, age - 4.2) / 0.16));   // chalk, letter by letter
    if (letters > intro.written) { intro.written = letters; write(TITLE.slice(0, letters)); audio?.scratch(); }
    if (age > 9.5 && game.state.phase === 'intro') {   // the held moment ends with a silly whistle, and the tools are in your hands
        game.state.phase = 'ready';
        audio?.whistle();
        write(CUE);
        intro.at = -1;
    }
}

const head = new Vector3(), forward = new Vector3(), side = new Vector3(), UP = new Vector3(0, 1, 0);
let then = performance.now(), turned = false, lastTick = 0;
renderer.setAnimationLoop((now) => {
    const t = performance.now() / 1000, dt = Math.min(0.05, (now - then) / 1000);
    then = now;
    light.time.value = t;
    camera.getWorldPosition(head);

    // Walk: left stick (or WASD), right stick snap-turns; stay inside the room.
    const move = new Vector2(+keys.has('d') - +keys.has('a'), +keys.has('s') - +keys.has('w'));
    for (const source of renderer.xr.getSession()?.inputSources ?? []) {
        const axes = source.gamepad?.axes;
        if (!axes || axes.length < 4) continue;
        if (source.handedness === 'left') move.set(axes[2], axes[3]);
        else if (Math.abs(axes[2]) > 0.7 && !turned) {
            const angle = -Math.sign(axes[2]) * Math.PI / 6;
            rig.position.sub(head).applyAxisAngle(UP, angle).add(head);
            rig.rotation.y += angle;
            turned = true;
        } else if (Math.abs(axes[2]) < 0.3) turned = false;
    }
    if (move.lengthSq() > 0.01) {
        const offX = head.x - rig.position.x, offZ = head.z - rig.position.z;
        camera.getWorldDirection(forward).setY(0).normalize();
        side.crossVectors(forward, UP);
        rig.position.addScaledVector(forward, -move.y * dt * 1.3).addScaledVector(side, move.x * dt * 1.3);
        rig.position.x = Math.min(W / 2 - 0.35, Math.max(-W / 2 + 0.35, rig.position.x + offX)) - offX;
        rig.position.z = Math.min(D / 2 - 0.35, Math.max(-D / 2 + 0.9, rig.position.z + offZ)) - offZ;
    }

    // The plunger: poke it or point at it and pinch. Re-arms when you let go.
    const touching = renderer.xr.isPresenting && poked();
    if (touching && state.armed) { state.armed = false; push(); }
    if (!touching) state.armed = true;

    // Animations, the lamp on its one wire, the flicker, the counter that flips from 0 to 0.
    for (let i = anims.length - 1; i >= 0; i--) {
        const a = anims[i], f = Math.min(1, (t - a.start) / a.dur);
        a.run(f);
        if (f === 1) { anims.splice(i, 1); a.done?.(); }
    }
    state.lampSpin += (-state.lampAngle * 9 - state.lampSpin * 0.9) * dt;
    state.lampAngle += state.lampSpin * dt;
    room.crooked.g.rotation.z = -0.62 + state.lampAngle * 0.35 + Math.sin(t * 0.8) * 0.012;
    state.flicker = Math.max(0, state.flicker - dt);
    const buzzing = state.flicker > 0 ? Math.random() > 0.5 : Math.sin(t * 0.5) > 0.97 && Math.random() > 0.6;
    room.crooked.tubes.emissiveIntensity = story.state.boring ? (buzzing ? 0.3 : 1.8) : buzzing ? 2.2 : 0.05;   // on in the real class (and still buzzing)
    const flip = Math.min(1, (t - state.flipAt) / 0.6);
    room.flip.rotation.x = flip < 1 ? -flip * Math.PI * 2 : 0;
    updateEyes(t, head);
    story.update(t, dt);
    game.update(t, dt);
    opening(t, dt);
    const phase = game.state.phase;
    // The end of the dream: the bell, the slow motion, a held shot of the wreckage in the last of the sun; then a blink,
    // and he's at his desk. The room is whole. Everyone is looking at him.
    if (phase === 'over' && !intro.waking && t > game.state.finishedAt + 4.6) {
        intro.waking = true;
        story.wake(game.tools[0].mesh, () => game.backToClass(), () => game.showReport());
    }
    if (phase !== 'over') intro.waking = false;
    const progress = phase === 'play' ? 1 - Math.max(0, game.state.endsAt - t) / 90 : phase === 'over' ? 1 : 0;
    applyLook({
        boring: !builtLook && story.state.boring,
        fill: builtLook ? 1 : intro.at >= 0 ? 0.3 : phase === 'over' ? 0.45 : 1,   // the held moment and the end are nearly all sun
        sun: builtLook ? LOOKS.built.sun : phase === 'over' ? 12 : look.sun + progress * 2,
        haze: builtLook ? 1 : (phase === 'intro' ? 1.9 : phase === 'over' ? 2.4 : look.haze) + game.state.dust,
        sunColor: ramp(SUNSET, progress, sunColor), tint: ramp(TINTS, progress, tintColor),
    }, dt);
    if (audio && phase !== intro.lastPhase) {
        intro.lastPhase = phase;
        const hushTo = phase === 'play' ? 0.05 : story.state.boring || phase === 'story' || phase === 'awake' ? 0.08 : 1;   // windows shut in class; in the dream they fall silent for the demolition
        audio.hush.gain.setTargetAtTime(hushTo, audio.ctx.currentTime, phase === 'play' ? 0.3 : 1.5);
    }
    if (audio) audio.tickGain = story.state.boring ? 0.6 : 0.25;   // in class, the clock is very loud

    // The clock runs backwards. It is the only honest clock in the building.
    const d = new Date(), sec = d.getSeconds() + d.getMilliseconds() / 1000;
    room.hands.second.rotation.z = sec / 60 * Math.PI * 2;
    room.hands.minute.rotation.z = (d.getMinutes() + sec / 60) / 60 * Math.PI * 2;
    room.hands.hour.rotation.z = ((d.getHours() % 12) + d.getMinutes() / 60) / 12 * Math.PI * 2;
    if (audio && Math.floor(sec) !== lastTick) { lastTick = Math.floor(sec); audio.tick(lastTick % 2); }

    // Particles: fall, flutter, fade.
    for (let i = 0; i < MAX; i++) {
        if (life[i] <= 0) continue;
        life[i] -= dt;
        const o = i * 3;
        vel[o + 1] -= 1.6 * dt; vel[o] *= 0.985; vel[o + 2] *= 0.985;
        vel[o + 1] = Math.max(vel[o + 1], -0.45);   // paper and plaster dust drift, not plummet
        pos[o] += (vel[o] + Math.sin(t * 7 + i) * 0.05) * dt; pos[o + 1] += vel[o + 1] * dt; pos[o + 2] += vel[o + 2] * dt;
        if (pos[o + 1] < 0.005) { pos[o + 1] = 0.005; vel[o] = vel[o + 2] = 0; }
        if (life[i] <= 0) pos[o + 1] = -10;
    }
    bits.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
});

// Enter: the session is requested inside the tap.
const xr = await navigator.xr?.isSessionSupported('immersive-vr').catch(() => false);
button.disabled = !xr;
button.textContent = xr ? 'Enter the classroom' : 'Open on a headset to step in';
document.body.classList.add('ready');
button.addEventListener('click', async () => {
    startAudio();
    const session = await navigator.xr.requestSession('immersive-vr', { optionalFeatures: ['local-floor', 'hand-tracking'] });
    await renderer.xr.setSession(session);
    dream(false);
    document.body.classList.add('immersive');
    session.addEventListener('end', () => document.body.classList.remove('immersive'));
});
Object.assign(globalThis, { classroom: { renderer, scene, camera, rig, room, state, push, game, physics, destruction, story, light, sun } });   // for the console and tests
