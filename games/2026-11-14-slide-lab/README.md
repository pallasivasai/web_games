# Slide Lab — Number Shift Puzzle

A responsive sliding-number puzzle built with plain HTML, CSS, and JavaScript. It runs locally in a modern browser and needs no installation, network requests, external APIs, or build tools.

## Objective

Arrange the numbered tiles in ascending order, leaving the empty space in the bottom-right corner. Complete the puzzle in as few moves and as little time as possible.

## How to play

1. Open \`index.html\` in a modern browser.
2. Choose a **3 × 3 (Easy)**, **4 × 4 (Classic)**, or **5 × 5 (Expert)** board.
3. Select **Start puzzle** to start the timer.
4. Move a numbered tile into the adjacent empty space until the board reads from 1 upward, with the empty space last.
5. Use **Undo move** to reverse your most recent move; the timer continues.
6. Choose **Restart puzzle** to reset the current scramble, or **New puzzle** to generate another one.

## Rules

- Only tiles directly above, below, left, or right of the empty space can move. Diagonal moves are not allowed.
- Each successful tile movement counts as one move.
- The puzzle ends when every tile is in its numbered position and the empty space is last.
- Best results are stored separately for each board size. Fewer moves is better; a faster time breaks a tie.
- Every scramble is produced by a sequence of legal moves starting from the solved board, so every generated puzzle is solvable.
- If local storage is unavailable, the game still works; the best result simply will not persist.

## Controls

- **Mouse/touch:** Click or tap a tile beside the empty space.
- **Keyboard:** Arrow keys or **W A S D** move the empty space in the chosen direction.
- **Undo:** Select **Undo move** to restore the previous board state.
- **Restart:** Select **Restart puzzle** to replay the same scramble.
- **New puzzle:** Select **New puzzle** or change the board size.

## Accessibility and compatibility

- Responsive layout for desktop and mobile.
- Visible keyboard focus, touch-friendly controls, and a live status announcement.
- Reduced-motion preferences are respected.
- No external assets, dependencies, APIs, or build tools are used.

## Files

- \`index.html\` — complete game markup, responsive styling, solvable shuffle generation, legal-move checks, timer, undo, win detection, and local best records.
