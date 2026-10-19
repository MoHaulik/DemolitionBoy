# Demolition Boy

First-person, two-handed demolition in WebXR for Meta Quest 3: an axe in one hand, a hammer in the other, 90 seconds, and Demolition Boy's beautiful, sunlit classroom.

**Play:** open the GitHub Pages URL of this repo in the Quest browser and press *Enter the classroom*.

- **Works with bare hands** (Quest hand tracking) or controllers.
- **Walk** by swinging your free arm (the one without a tool), like in Goats: swing to go, look where you want to go. With controllers the left stick walks too.
- **One tool at a time.** You start with the **axe** in your right hand. **Tap** (pinch your fingers, or pull the trigger) to swap to the **hammer** and back, into whichever hand tapped.
- **Everything breaks**: walls through to outside, the blackboard, every window pane, desks and chairs (shove them, topple them, take them apart), shelves, the lectern. Rapier physics and Voronoi fracture around each blow.
- The **axe** (a firefighter's pick-head axe) cleaves wood. Lead with the edge and hit square-on; a good chop bites in and sticks. Pull your hand away to wrench it free.
- The **sledgehammer** smashes glass, pottery and plaster: windows, pots, vases, the lucky cat, the Principal's bust, the volcano, the walls.
- Swing speed at contact sets the damage, and so does follow-through. A tap dents, a committed swing sends debris flying.
- The first swing rings the school bell and starts the clock. Chain breaks for combos, use the right tool for a bonus, and break every material for variety. Time left is on the tape round the handle. After the final bell your report card floats up; swing hard to go again.

This is a static build: `index.html` + `demolitionboy.js` + `fracture.worker.js` (Three.js bundled in, every texture and sound generated at load time). The source is in `src/`. The canonical source lives in the nxtwebxr.com repo under `src/demolitionboy/` (PR #2), with e2e tests.
