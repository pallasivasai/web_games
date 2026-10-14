# Reaction Timer

A five-round reflex challenge built with plain HTML, CSS, and JavaScript.

## Objective

Record the lowest average reaction time by tapping only after the panel turns green.

## How to play

1. Open `index.html` in a modern browser.
2. Select **Start challenge**.
3. Each round begins with an amber panel. Wait a random 1.5–4 seconds for it to turn green.
4. Tap/click the panel as soon as it turns green. Tapping while it is amber is a false start and counts as a missed round.
5. Complete all five rounds. Your average includes only valid reaction times.
6. Select **Play again** to try to beat your best average.

## Rules

- A challenge contains five rounds.
- Each valid reaction is measured in milliseconds using the browser's high-resolution timer.
- A false start records a miss for that round; it does not add a reaction time to the average.
- Lower average reaction time is better.
- The best average is saved in this browser with local storage when storage is available.
- If every round is a false start, the game reports that no valid reactions were recorded.

## Controls

- Mouse: click the panel after it turns green.
- Touch: tap the panel after it turns green.
- Keyboard: focus the panel and press Enter or Space after it turns green; use the Start challenge button to begin.

## Files

- `index.html` — complete game markup, styling, and JavaScript logic.

No dependencies, build tools, or network requests are required.
