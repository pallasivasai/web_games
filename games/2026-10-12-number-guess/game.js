(() => {
  const status = document.querySelector("#status");
  const play = document.querySelector("#play");
  const start = document.querySelector("#start");
  const instructions = document.querySelector("#instructions");
  let timer = null;
  let score = 0;
  let active = false;
  const variant = 1;

  function reset() {
    clearInterval(timer);
    clearTimeout(timer);
    timer = null;
    active = false;
    score = 0;
    play.replaceChildren();
    start.disabled = false;
    start.textContent = "Start game";
  }
  function button(label, callback, className = "") {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = label;
    if (className) b.className = className;
    b.addEventListener("click", callback);
    play.appendChild(b);
    return b;
  }
  function beginGuess() {
    instructions.textContent = "Guess the hidden number from 1 to 20 in as few tries as possible.";
    const answer = Math.floor(Math.random() * 20) + 1;
    const input = document.createElement("input");
    input.type = "number"; input.min = "1"; input.max = "20"; input.placeholder = "1–20";
    input.setAttribute("aria-label", "Your guess");
    play.append(input);
    button("Guess", () => {
      const n = Number(input.value);
      if (!input.value || n < 1 || n > 20) { status.textContent = "Enter a number from 1 to 20."; return; }
      score++;
      if (n === answer) { status.textContent = "Correct! Guesses used: " + score; start.disabled = false; start.textContent = "Play again"; }
      else status.textContent = n < answer ? "Too low — try again!" : "Too high — try again!";
    });
    status.textContent = "Find the secret number.";
    start.disabled = true;
    start.textContent = "Game in progress";
    button("New round", () => { reset(); beginGuess(); });
  }
  function beginReaction() {
    instructions.textContent = "Wait for the panel to turn green, then click it as quickly as possible. Clicking early is a false start.";
    const target = document.createElement("button");
    target.textContent = "Wait for green…";
    target.style.minWidth = "190px";
    target.style.background = "#68748a";
    play.appendChild(target);
    start.disabled = true;
    start.textContent = "Wait…";
    active = true;
    timer = setTimeout(() => {
      if (!active) return;
      target.dataset.ready = "yes";
      target.textContent = "CLICK NOW!";
      target.style.background = "#16875a";
    }, 1200 + Math.random() * 2600);
    let started = 0;
    const waitWatcher = setInterval(() => {
      if (target.dataset.ready === "yes" && !started) started = performance.now();
      if (!active) clearInterval(waitWatcher);
    }, 10);
    target.addEventListener("click", () => {
      if (!active) return;
      if (target.dataset.ready !== "yes") {
        clearTimeout(timer); active = false; clearInterval(waitWatcher);
        status.textContent = "Too early! Press Start to try again.";
        start.disabled = false; start.textContent = "Try again"; return;
      }
      status.textContent = "Your reaction time: " + Math.round(performance.now() - started) + " ms";
      active = false; clearInterval(waitWatcher);
      start.disabled = false; start.textContent = "Try again";
    });
  }
  function beginCounter() {
    instructions.textContent = "Click as many times as you can in 10 seconds.";
    score = 0; let seconds = 10; active = true;
    status.textContent = "Score: 0 | Time: 10s";
    button("Click me!", () => { if (active) { score++; status.textContent = "Score: " + score + " | Time: " + seconds + "s"; } });
    start.disabled = true; start.textContent = "Playing…";
    timer = setInterval(() => {
      seconds--;
      if (seconds <= 0) { clearInterval(timer); active = false; status.textContent = "Time up! Final score: " + score; start.disabled = false; start.textContent = "Play again"; }
      else status.textContent = "Score: " + score + " | Time: " + seconds + "s";
    }, 1000);
  }
  function beginMemory() {
    instructions.textContent = "Watch the sequence, then repeat it by clicking the tiles in the same order.";
    const sequence = Array.from({length: 4}, () => Math.floor(Math.random() * 4));
    const symbols = ["●","▲","■","◆"];
    const tiles = [];
    sequence.forEach(() => {});
    for (let i = 0; i < 4; i++) tiles.push(button(symbols[i], () => {
      if (!active) return;
      if (i !== sequence[score]) { status.textContent = "Not quite — press Start to try another sequence."; active = false; start.disabled = false; start.textContent = "Play again"; return; }
      score++;
      if (score === sequence.length) { status.textContent = "Perfect memory! You matched all 4."; active = false; start.disabled = false; start.textContent = "Play again"; }
    }, "tile"));
    tiles.forEach(t => t.classList.add("tile"));
    status.textContent = "Memorize: " + sequence.map(n => symbols[n]).join(" ");
    start.disabled = true; start.textContent = "Sequence ready"; active = true; score = 0;
    timer = setTimeout(() => { if (active) status.textContent = "Now repeat the sequence."; }, 1800);
  }
  start.addEventListener("click", () => {
    reset();
    if (variant === 0) beginMemory();
    else if (variant === 1) beginGuess();
    else if (variant === 2) beginReaction();
    else beginCounter();
  });
  if (variant === 0) instructions.textContent = "Repeat the hidden sequence of four symbols.";
  else if (variant === 1) instructions.textContent = "Guess a secret number between 1 and 20.";
  else if (variant === 2) instructions.textContent = "Test your reaction speed.";
  else instructions.textContent = "Earn as many clicks as possible before time runs out.";
})();
