# Demolition Boy

First-person, two-handed demolition in WebXR for Meta Quest 3: an axe in one hand, a hammer in the other, 90 seconds, and Demolition Boy's beautiful, sunlit classroom.

**Play:** open the GitHub Pages URL of this repo in the Quest browser and press *Enter the classroom*.

- **One tool at a time.** You start with the **axe** in your right hand. **Squeeze the grip** to swap to the **hammer** (or back), into whichever hand squeezed.
- The **axe** cleaves wood (desks, chairs) and drywall. Lead with the edge and hit square-on; a good chop bites in and sticks. Pull your hand away to wrench it free.
- The **hammer** smashes glass, pottery and plaster: windows, pots, vases, the lucky cat, the Principal's bust, the volcano, the walls.
- Swing speed at contact sets the damage, and so does follow-through. A tap dents, a committed swing sends debris flying.
- The first swing rings the school bell and starts the clock. Chain breaks for combos, use the right tool for a bonus, and break every material for variety. Time left is on the tape round the handle. After the final bell your report card floats up; swing hard to go again.

This is a static build: `index.html` + `demolitionboy.js` (Three.js bundled in, every texture and sound generated at load time). The source is in `src/`. The canonical source lives in the nxtwebxr.com repo under `src/demolitionboy/` (PR #2), with e2e tests.
