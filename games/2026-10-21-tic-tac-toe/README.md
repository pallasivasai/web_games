# Tic-Tac-Toe Tactics

A responsive, offline-friendly strategy game built with plain HTML, CSS, and JavaScript.

## Objective

Win a round by placing three of your marks in a horizontal, vertical, or diagonal line. Play against an unbeatable minimax CPU or switch to local two-player mode.

## How to play

1. Open `index.html` in a modern browser. No installation or internet connection is needed.
2. Choose **Challenge the CPU** or **Two players** from the mode menu.
3. Select any empty square to place your mark. In CPU mode, you play as **X** and the computer responds as **O**.
4. In two-player mode, players take turns placing X and O.
5. Make three in a row to win. If all nine squares are filled without a winning line, the round is a draw.
6. Choose **New round** to keep the match score and play again, or **Reset match** to clear the score. Changing modes also starts a fresh match.

## Rules and features

- A square can only be used once per round.
- A round ends immediately when a player gets three in a row or the board fills.
- The scoreboard tracks X wins, O wins, and draws across rounds.
- The CPU uses minimax search, so it will not lose when played correctly; a perfect game can end in a draw.
- The board is usable with mouse, touch, and keyboard focus/activation. Status changes are announced to assistive technology.
- Responsive layout, reduced-motion support, and no external assets, libraries, APIs, or build tools.

## Files

- `index.html` — complete game, styling, CPU logic, scoreboard, and controls.

## Reset controls

- **New round:** clear the board but preserve the match score.
- **Reset match:** clear the board and all scores.
