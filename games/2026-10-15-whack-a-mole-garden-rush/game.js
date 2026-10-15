(() => {
  const holes = [...document.querySelectorAll(".hole")];
  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");
  const bestEl = document.getElementById("best");
  const statusEl = document.getElementById("status");
  const startBtn = document.getElementById("start");
  let score = 0, time = 30, best = 0, target = -1;
  let golden = false, running = false, last = -1, tick = null, spawn = null;
  try { best = Number(localStorage.getItem("gardenRushBest")) || 0; } catch (_) {}

  function saveBest() {
    try { localStorage.setItem("gardenRushBest", String(best)); } catch (_) {}
  }
  function render() {
    scoreEl.textContent = score;
    timeEl.textContent = time;
    bestEl.textContent = best;
    holes.forEach((hole, i) => {
      const active = running && i === target;
      hole.disabled = !running;
      hole.textContent = active ? (golden ? "✨" : "🐹") : "·";
      hole.classList.toggle("active", active && !golden);
      hole.classList.toggle("golden", active && golden);
      hole.setAttribute("aria-label", active
        ? "Hole " + (i + 1) + (golden ? ", golden mole, 3 points" : ", mole, 1 point")
        : "Hole " + (i + 1) + ", empty");
    });
  }
  function clearTimers() {
    if (tick !== null) clearInterval(tick);
    if (spawn !== null) clearTimeout(spawn);
    tick = spawn = null;
  }
  function endGame() {
    running = false;
    target = -1;
    clearTimers();
    if (score > best) {
      best = score;
      saveBest();
      statusEl.textContent = "Time! New personal best: " + score + " points!";
    } else {
      statusEl.textContent = "Time's up! Score: " + score + ". Best: " + best + ". Play again?";
    }
    startBtn.textContent = "Play again";
    render();
  }
  function showNextMole() {
    if (!running) return;
    spawn = setTimeout(() => {
      if (!running) return;
      let next = Math.floor(Math.random() * holes.length);
      if (next === last) next = (next + 1 + Math.floor(Math.random() * 8)) % holes.length;
      last = next;
      target = next;
      golden = Math.random() < 0.12;
      render();
    }, Math.max(360, 920 - score * 16));
  }
  function hitHole(index) {
    if (!running) return;
    if (index === target) {
      const points = golden ? 3 : 1;
      score += points;
      target = -1;
      statusEl.textContent = (golden ? "Golden mole! " : "Nice hit! ") + "+" + points;
      if (spawn !== null) clearTimeout(spawn);
      spawn = null;
      render();
      showNextMole();
    } else {
      score = Math.max(0, score - 1);
      statusEl.textContent = "Miss! One point lost.";
      render();
    }
  }
  function startGame() {
    clearTimers();
    score = 0; time = 30; target = -1; golden = false; last = -1; running = true;
    startBtn.textContent = "Restart round";
    statusEl.textContent = "Ready! Tap a mole when it appears.";
    render();
    showNextMole();
    tick = setInterval(() => {
      time -= 1;
      if (time <= 0) { time = 0; endGame(); }
      else render();
    }, 1000);
  }
  holes.forEach((hole, index) => hole.addEventListener("click", () => hitHole(index)));
  startBtn.addEventListener("click", startGame);
  document.getElementById("reset").addEventListener("click", () => {
    best = 0; saveBest(); render();
    statusEl.textContent = "Best score reset.";
  });
  render();
})();
