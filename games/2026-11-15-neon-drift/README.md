# Neon Drift — Lane Survival

A fast, five-lane survival arcade game built with plain HTML, CSS, and JavaScript. Open `index.html` in a modern browser; it works offline and needs no installation, libraries, external assets, or build tools.

## Objective

Stay in the neon track for as long as possible. Dodge incoming pink blocks, collect cyan energy orbs for bonus points, and pick up a gold shield to survive one collision.

## How to play

1. Open `index.html` in a modern browser.
2. Select **Start run**.
3. Move left or right between the five lanes to avoid the falling blocks.
4. Collect cyan orbs whenever it is safe to do so. Each orb adds 10 points.
5. Collect a gold shield. It automatically absorbs the next block that reaches your lane.
6. Survive as long as possible. The game ends when a block hits your lane while you have no shield.
7. Select **Play again** or **Restart run** to begin a fresh attempt.

## Rules and scoring

- You begin in the center lane with no shield.
- Each second survived adds **1 point**.
- Each cyan energy orb adds **10 points**.
- Pink blocks end the run on contact unless a shield is active.
- A shield absorbs exactly one block collision and is then consumed.
- Only one shield can be held at a time; collecting another while shielded is converted into an energy orb.
- The difficulty increases every 15 seconds: objects move faster and spawn more frequently.
- The best score is saved in this browser using local storage when available. If storage is blocked, the game remains playable but the record will not persist.

## Controls

- **Keyboard:** Arrow Left / Arrow Right or **A / D** to change lanes. Press **Space** to pause or resume.
- **Mouse:** Use the on-screen left and right arrow buttons.
- **Touch:** Use the on-screen arrows or swipe left/right across the playfield.
- **Pause:** Freeze the current run and resume when ready.
- **Restart run:** Start a new run with a reset score, timer, lane, and items.

## Accessibility and compatibility

- Responsive layout with large touch targets.
- Keyboard-operable buttons and visible focus indicators.
- The playfield is labelled and game status is announced through a live region.
- Reduced-motion preferences are respected.
- No network requests, external APIs, packages, or build steps are used.

## Files

- `index.html` — complete game layout, responsive styling, controls, lane movement, obstacle spawning, collision handling, scoring, pause/restart, and best-score storage.
