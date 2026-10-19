// Rigid bodies for the classroom: Rapier (WebAssembly), stepped at a fixed rate, synced onto three.js objects.
import RAPIER from '@dimforge/rapier3d-compat';

export const STEP = 1 / 72;

export async function createPhysics() {
    await RAPIER.init();
    const world = new RAPIER.World({ x: 0, y: -9.81, z: 0 });
    world.timestep = STEP;
    const events = new RAPIER.EventQueue(true);
    const links = new Map();   // body handle -> { body, object, sync }
    let accumulator = 0;

    // The floor, the teacher's platform and the ceiling never break; everything else brings its own collider.
    const fixed = (hx, hy, hz, x, y, z) => world.createCollider(RAPIER.ColliderDesc.cuboid(hx, hy, hz).setTranslation(x, y, z).setFriction(0.8));
    fixed(30, 0.5, 30, 0, -0.5, 0);
    fixed(3.3, 0.08, 0.75, 0, 0.08, -4.05);
    fixed(5, 0.05, 5.2, 0, 3.35, 0);

    return {
        RAPIER, world,
        /** Keep `object` on `body`; `sync(object)` runs after each move (an instanced mesh writes its matrix there). */
        link(body, object, sync) { links.set(body.handle, { body, object, sync }); },
        unlink(body) { links.delete(body.handle); },
        remove(body) { links.delete(body.handle); world.removeRigidBody(body); },
        step(dt, onForce) {
            accumulator = Math.min(accumulator + dt, STEP * 3);   // never more than three steps a frame: a hitch slows the world, it doesn't explode it
            let stepped = false;
            while (accumulator >= STEP) { world.step(events); accumulator -= STEP; stepped = true; }
            if (stepped && onForce) events.drainContactForceEvents(onForce);
            let moving = 0;
            for (const { body, object, sync } of links.values()) {
                if (body.isSleeping() || !body.isDynamic()) continue;
                moving++;
                const t = body.translation(), r = body.rotation();
                object.position.set(t.x, t.y, t.z);
                object.quaternion.set(r.x, r.y, r.z, r.w);
                sync?.(object);
            }
            return moving;
        },
    };
}
