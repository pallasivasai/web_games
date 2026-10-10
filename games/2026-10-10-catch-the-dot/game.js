(() => {
  const scoreEl = document.querySelector("#score");
  const timeEl = document.querySelector("#time");
  const bestEl = document.querySelector("#best");
  const startBtn = document.querySelector("#start");
  const dot = document.querySelector("#dot");
  const arena = document.querySelector("#arena");
  const hint = document.querySelector("#hint");
  const message = document.querySelector("#message");
  let score = 0;
  let timeLeft = 30;
  let timer = null;
  let playing = false;
  let best = Number(localStorage.getItem("catchDotBest") || 0);
  bestEl.textContent = best;

  function moveDot() {
    const maxX = Math.max(0, arena.clientWidth - dot.offsetWidth);
    const maxY = Math.max(0, arena.clientHeight - dot.offsetHeight);
    dot.style.left = Math.round(Math.random() * maxX) + "px";
    dot.style.top = Math.round(Math.random() * maxY) + "px";
  }

  function endGame() {
    playing = false;
    clearInterval(timer);
    timer = null;
    dot.hidden = true;
    hint.hidden = false;
    hint.textContent = "Time's up! Your score: " + score;
    message.textContent = "Play again whenever you're ready.";
    startBtn.textContent = "Play again";
    startBtn.disabled = false;
  }

  startBtn.addEventListener("click", () => {
    if (playing) return;
    score = 0;
    timeLeft = 30;
    playing = true;
    scoreEl.textContent = score;
    timeEl.textContent = timeLeft;
    startBtn.textContent = "Playing…";
    startBtn.disabled = true;
    message.textContent = "Go! Click the dot!";
    hint.hidden = true;
    dot.hidden = false;
    moveDot();
    clearInterval(timer);
    timer = setInterval(() => {
      timeLeft -= 1;
      timeEl.textContent = timeLeft;
      if (timeLeft <= 0) endGame();
    }, 1000);
  });

  dot.addEventListener("click", () => {
    if (!playing) return;
    score += 1;
    scoreEl.textContent = score;
    if (score > best) {
      best = score;
      bestEl.textContent = best;
      localStorage.setItem("catchDotBest", String(best));
    }
    moveDot();
  });

  window.addEventListener("resize", () => { if (playing) moveDot(); });
})();