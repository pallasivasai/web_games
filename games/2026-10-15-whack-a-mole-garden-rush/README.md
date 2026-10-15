# Whack-a-Mole: Garden Rush

A quick arcade game built with plain HTML, CSS, and JavaScript.

## Objective
Score as many points as possible in a 30-second round by tapping moles before they disappear.

## How to play
1. Open `index.html` in any modern browser.
2. Select **Start game**.
3. Click or tap the hole containing a mole before it hides.
4. Look for the rare golden mole for bonus points.
5. When time runs out, review your score and choose **Play again**.

## Rules
- Regular mole: **+1 point**.
- Golden mole: **+3 points**; it appears occasionally.
- Clicking an empty hole: **−1 point**, but the score cannot go below zero.
- Moles hide after a short time, and their appearance speeds up as your score rises.
- Your best score is saved locally when browser storage is available.
- **Restart round** resets the current score and timer. **Reset best** clears the saved record.

## Controls
- Mouse: click a hole.
- Touch: tap a hole.
- Keyboard: use Tab to focus a hole, then press Enter or Space.

## Files
- `index.html` — game structure.
- `style.css` — responsive layout and visual states.
- `game.js` — timer, target movement, scoring, restart, and best-score logic.

No installation, build tools, libraries, or network requests are required.
