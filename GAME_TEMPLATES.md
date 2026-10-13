# Browser Game Template Library 🎮

This library contains 14 reusable **game concepts** for the daily browser-game project. They are gameplay templates, not just visual themes. Build each as a standalone game using plain HTML, CSS, and JavaScript. Every generated game must have its own dated folder and a `README.md` with objective, rules, controls, and instructions.

## The 14 game templates

| # | Template | Core gameplay | Useful mechanics |
|---:|---|---|---|
| 1 | Catch the Dot | Click a moving target before time runs out | Timer, score, target movement |
| 2 | Memory Match | Find matching pairs of cards | Flip cards, move counter, matched state |
| 3 | Number Guess | Guess a hidden number from higher/lower hints | Input validation, attempt counter |
| 4 | Reaction Timer | Click when a signal changes; measure reaction time | Random wait, false-start handling, best score |
| 5 | Click Counter Challenge | Click as many times as possible in a short round | Countdown, score, restart |
| 6 | Word Scramble Sprint | Unscramble shuffled words before the timer ends | Hints, word bank, streak |
| 7 | Simon Sequence | Repeat an increasingly long color/sound sequence | Sequence playback, input validation, levels |
| 8 | Tic-Tac-Toe | Play a 3×3 grid against another player or a simple CPU | Win detection, draw detection, reset |
| 9 | Rock Paper Scissors | Choose a move and play against the computer | Random opponent move, score tracking |
| 10 | Whack-a-Mole | Hit appearing targets while avoiding empty clicks | Spawn timing, countdown, hit counter |
| 11 | Sliding Puzzle | Arrange numbered tiles into the correct order | Valid moves, shuffle, move counter |
| 12 | Math Dash | Solve quick arithmetic questions before time runs out | Difficulty ramp, streak, answer feedback |
| 13 | Maze Escape | Navigate a small maze to reach the exit | Keyboard controls, walls, timer or steps |
| 14 | Dodge the Blocks | Move a player to avoid falling obstacles | Keyboard/touch controls, collision detection, survival score |

## Rules for daily use

1. Inspect existing game folders and the root README before selecting a template.
2. Avoid repeating a previously shipped game. A template can be reused only when the actual mechanics and player experience are meaningfully different; prefer an unused template first.
3. Keep the game simple, playable, responsive, and accessible. Support keyboard controls where sensible and touch-friendly controls on small screens.
4. Use only HTML, CSS, and JavaScript; no framework, build step, or external API is required.
5. Every game folder must include `index.html` and `README.md`. CSS and JavaScript can be separate files when that improves clarity.
6. Validate the rules, restart flow, scoring, and game-over state before committing.
7. Make a meaningful change on the default branch using the connected GitHub account; do not create an empty commit just to color the contribution graph.
