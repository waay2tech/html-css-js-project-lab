import {
  $,
  $$,
  say,
  reduced,
  formatMoney,
  themeController,
  slideViewer,
  listenCleanup,
} from "./common.js";
import {
  convertTemperature,
  choices,
  countCharacters,
  ageOn,
  remainingMs,
  otpDigits,
  cartTotal,
} from "./logic.js";
let duration = 25 * 60000;
const state = { remaining: duration, deadline: 0, running: false };
function render() {
  const ms = remainingMs(state, Date.now());
  const seconds = Math.ceil(ms / 1000);
  $("#timer").textContent =
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  if (state.running && ms === 0) {
    state.running = false;
    state.remaining = 0;
    say("Session complete. Take a short break.");
  }
  $("#start").textContent = state.running
    ? "Pause"
    : state.remaining === 0
      ? "Start again"
      : "Start";
}
$("#start").addEventListener("click", () => {
  if (state.running) {
    state.remaining = remainingMs(state, Date.now());
    state.running = false;
    say("Paused.");
  } else {
    if (state.remaining === 0) state.remaining = duration;
    state.deadline = Date.now() + state.remaining;
    state.running = true;
    say("Focus session running.");
  }
  render();
});
function reset() {
  state.running = false;
  state.remaining = duration;
  render();
  say("Timer reset.");
}
$("#reset").addEventListener("click", reset);
$("#apply").addEventListener("click", () => {
  const raw = $("#minutes").value,
    minutes = Number(raw);
  if (!raw || !Number.isInteger(minutes) || minutes < 1 || minutes > 120) {
    say("Choose a whole number from 1 to 120 minutes.");
    return;
  }
  duration = minutes * 60000;
  reset();
});
const interval = setInterval(render, 200);
document.addEventListener("visibilitychange", render);
listenCleanup(() => clearInterval(interval));
render();
document.documentElement.dataset.lessonReady = "true";
