# Number Guess

A small number-logic game built with plain HTML, CSS, and JavaScript. It works offline and needs no installation, libraries, or build tools.

## Objective

Find the randomly chosen whole number from **1 to 20** using as few valid guesses as possible.

## How to play

1. Open `index.html` in a modern browser.
2. Select **Start game**.
3. Enter a whole number from 1 to 20 and press **Enter** or select **Guess**.
4. Use the hint to decide whether your next guess should be higher or lower.
5. When you find the answer, the round ends and you can choose **Play again** or **New round**.

## Rules

- A new secret integer is selected for each round.
- Only whole numbers from 1 through 20 are accepted.
- Valid guesses count as attempts; blank, out-of-range, and non-integer values do not count.
- The game responds with **Too low** or **Too high** until the answer is found.
- After a correct guess, the input and **Guess** button are disabled to prevent extra attempts.
- There is no timer. Aim to solve each round in fewer guesses.

## Controls

- **Keyboard:** Type a guess and press **Enter** to submit it. Use **Tab** to move between controls.
- **Mouse or touch:** Select **Guess**, **New round**, or **Play again**.

## Files

- `index.html` — page structure and game entry point.
- `style.css` — responsive layout and button/input styling.
- `game.js` — secret-number generation, input validation, hints, attempt counting, restart, and win state.

No external assets, network requests, or APIs are used.