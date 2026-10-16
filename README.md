# Demolition Boy

First-person, two-handed demolition in WebXR for Meta Quest 3: an axe in one hand, a hammer in the other, 90 seconds, and Demolition Boy's beautiful, sunlit classroom.

**Play:** open the GitHub Pages URL of this repo in the Quest browser and press *Enter the classroom*.

- **Axe** (first controller) cleaves wood: desks and chairs. Lead with the edge and hit square-on; a good chop into a desk bites in and sticks. Pull your hand away to wrench it free.
- **Hammer** (second controller) smashes glass: the windows.
- Swing speed at contact sets the damage, and so does follow-through. A tap dents, a committed swing sends debris flying.
- The first swing rings the school bell and starts the clock. Chain breaks for combos and use the right tool for a bonus. After the final bell, swing hard to go again.

This is a static build: `index.html` + `demolitionboy.js` (Three.js bundled in, every texture and sound generated at load time). The source is in `src/`. The canonical source lives in the nxtwebxr.com repo under `src/demolitionboy/` (PR #2), with e2e tests.
