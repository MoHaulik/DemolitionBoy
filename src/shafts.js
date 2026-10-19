// Light through the holes: when a wall is broken through to outside, a shaft of daylight streams in, and it thickens
// with the dust in the air. Through the window wall it is the sun itself, along the sun; elsewhere it is the bright sky,
// falling in and down. Two crossed sheets, additive, soft at the edges, fading along their length, dust drifting in them.
import { AdditiveBlending, Color, DoubleSide, Group, Mesh, PlaneGeometry, ShaderMaterial, Vector3 } from 'three';

const MAX = 14;

export function createShafts(scene, light) {
    const sheet = new PlaneGeometry(1, 1, 1, 8);
    const p = sheet.attributes.position;
    for (let i = 0; i < p.count; i++) p.setX(i, p.getX(i) * (1 + (p.getY(i) + 0.5) * 0.7));   // light spreads as it goes
    sheet.translate(0, 0.5, 0);
    const shafts = [];

    function material(color) {
        return new ShaderMaterial({
            uniforms: { haze: light.haze, time: light.time, color: { value: new Color(color) }, strength: { value: 0 } },
            transparent: true, depthWrite: false, blending: AdditiveBlending, side: DoubleSide,
            vertexShader: 'varying vec2 vUv; varying vec3 vW; void main() { vUv = uv; vec4 w = modelMatrix * vec4(position, 1.); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }',
            fragmentShader: `uniform float haze; uniform float time; uniform vec3 color; uniform float strength; varying vec2 vUv; varying vec3 vW;
                void main() {
                    float across = 1. - smoothstep(.12, .5, abs(vUv.x - .5));
                    float along = pow(1. - vUv.y, 1.7) * smoothstep(0., .04, vUv.y);
                    float dust = .7 + .3 * sin(vW.y * 11. + time * .6) * sin(vW.x * 7. + vW.z * 5. - time * .4);
                    float near = smoothstep(.25, 1., distance(vW, cameraPosition));
                    gl_FragColor = vec4(color * across * along * dust * near * strength * (.5 + .35 * haze) * .32, 1.);
                }`,
        });
    }

    /** A hole at `at`, opening inwards along `inward` (unit), about `size` across. Sun-side holes follow the sun. */
    function open(at, inward, size, sun) {
        const near = shafts.find((s) => s.at.distanceTo(at) < 0.65);
        if (near) { near.target = Math.min(2, near.target + 0.4); near.group.scale.x = near.group.scale.z = Math.min(1.6, near.group.scale.x + 0.15); return near; }
        if (shafts.length >= MAX) { const weakest = shafts.reduce((a, b) => (a.target < b.target ? a : b)); weakest.target = Math.min(2, weakest.target + 0.3); return weakest; }
        const dir = sun ? sun.clone().negate() : inward.clone().add(new Vector3(0, -0.35, 0)).normalize();
        const m = material(sun ? 0xffd9a6 : 0xd9e6ff), group = new Group();
        for (const turn of [0, Math.PI / 2]) { const s = new Mesh(sheet, m); s.rotation.y = turn; s.frustumCulled = false; group.add(s); }
        group.position.copy(at);
        group.quaternion.setFromUnitVectors(new Vector3(0, 1, 0), dir);
        group.scale.set(size * 1.3, sun ? 5.5 : 4.5, size * 1.3);
        scene.add(group);
        const shaft = { at: at.clone(), group, m, target: 1, sun: !!sun };
        shafts.push(shaft);
        return shaft;
    }
    function update(dt, tint) {
        for (const s of shafts) {
            const u = s.m.uniforms;
            u.strength.value += (s.target - u.strength.value) * Math.min(1, dt * 2.5);   // it pours in
            if (s.sun && tint) u.color.value.copy(tint);
        }
    }
    function clear() { for (const s of shafts.splice(0)) { scene.remove(s.group); s.m.dispose(); } }
    return { open, update, clear, shafts };
}
