// Fracturing off the main thread: Voronoi cells around the impact (three-pinata), so a break never costs a VR frame.
// In: a closed mesh in its own space and how to break it. Out: fragments, each re-centred, with the index where
// its inside (newly cut) faces start.
import { BufferAttribute, BufferGeometry, MeshBasicMaterial, Vector3 } from 'three';
import { DestructibleMesh, FractureOptions } from '@dgreenheck/three-pinata';

console.log = () => {};   // the library narrates the odd degenerate cell; nothing is wrong
const outside = new MeshBasicMaterial(), inside = new MeshBasicMaterial();
const vec = (a) => a && new Vector3(a[0], a[1], a[2]);

self.onmessage = ({ data: d }) => {
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(d.position, 3));
    g.setAttribute('normal', new BufferAttribute(d.normal, 3));
    g.setAttribute('uv', new BufferAttribute(d.uv, 2));
    g.setIndex(new BufferAttribute(d.index, 1));
    const seeds = d.seeds && Array.from({ length: d.seeds.length / 3 }, (_, i) => new Vector3(d.seeds[i * 3], d.seeds[i * 3 + 1], d.seeds[i * 3 + 2]));
    let fragments = [];
    try {
        fragments = new DestructibleMesh(g, outside, inside).fracture(new FractureOptions({
            fragmentCount: d.count,
            voronoiOptions: { mode: d.mode, seedPoints: seeds, impactPoint: vec(d.impact), impactRadius: d.radius, projectionNormal: vec(d.normalDir) },
        }));
    } catch (error) { /* a degenerate request: the piece just falls whole */ }
    const out = [], transfer = new Set();
    for (const f of fragments) {
        const fg = f.geometry;
        if (!fg.index || fg.index.count < 12) continue;
        const piece = {
            position: fg.attributes.position.array, normal: fg.attributes.normal.array, uv: fg.attributes.uv.array,
            index: fg.index.array, inside: fg.groups[1]?.start ?? fg.index.count, center: f.position.toArray(),
        };
        out.push(piece);
        for (const a of [piece.position, piece.normal, piece.uv, piece.index]) transfer.add(a.buffer);
    }
    self.postMessage({ id: d.id, fragments: out }, [...transfer]);
};
