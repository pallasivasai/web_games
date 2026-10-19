# Math Dash

A 60-second arithmetic sprint built with plain HTML, CSS, and JavaScript. It runs locally in a modern browser without libraries, build tools, network requests, or external APIs.

## Objective

Solve as many arithmetic questions as possible before the 60-second timer reaches zero. Build a streak to earn bonus points and advance through four difficulty levels.

## Rules and scoring

- Correct answer: **+10 points**, plus a streak bonus of **+2 per consecutive correct answer**, capped at +10 bonus points.
- Incorrect answer: **−2 points** and the streak resets.
- Skip: **−1 point** and the streak resets.
- Score never drops below zero.
- Every five correct answers unlocks the next difficulty level. The game tops out at Level 4.
- The round ends when the timer reaches zero. Final score and answer accuracy are shown.
- Best score is saved in this browser with local storage when available.

## Controls

- **Keyboard:** Type a whole-number answer and press **Enter** to submit.
- **Mouse or touch:** Tap **Answer** to submit or **Skip** to move on with a one-point penalty.
- **Restart round:** During a round, choose **Restart round** to reset the score and timer.
- **Play again:** After time runs out, choose **Play again** to start a fresh 60-second round.

## Accessibility and compatibility

- Responsive layout for desktop and mobile.
- Answer input uses a numeric mobile keyboard where supported.
- Buttons are keyboard-focusable, and round feedback is announced through a live region.
- Reduced-motion preferences are respected.
- No external assets, dependencies, or internet connection are required after the file is available.

## Files

- `index.html` — complete game layout, styling, arithmetic generation, scoring, timer, restart, and best-score logic.
