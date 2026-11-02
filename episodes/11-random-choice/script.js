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
$("#pick").addEventListener("click", () => {
  const options = choices($("#options").value);
  if (options.length < 2) {
    $("#choice").textContent = "—";
    say("Add at least two non-empty options.");
    return;
  }
  $("#choice").textContent =
    options[Math.floor(Math.random() * options.length)];
  say(`Picked from ${options.length} options.`);
});
document.documentElement.dataset.lessonReady = "true";
