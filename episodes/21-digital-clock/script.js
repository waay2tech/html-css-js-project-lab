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
let hour12 = true;
function render() {
  const now = new Date(),
    zone = $("#timezone").value;
  $("#clock").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12,
  }).format(now);
  $("#clock").dateTime = now.toISOString();
  $("#date").textContent = new Intl.DateTimeFormat("en-GB", {
    timeZone: zone,
    dateStyle: "full",
  }).format(now);
}
$("#timezone").addEventListener("change", render);
$("#format").addEventListener("click", () => {
  hour12 = !hour12;
  $("#format").textContent = hour12 ? "Use 24-hour time" : "Use 12-hour time";
  render();
});
const timer = setInterval(render, 1000);
document.addEventListener("visibilitychange", render);
listenCleanup(() => clearInterval(timer));
render();
document.documentElement.dataset.lessonReady = "true";
