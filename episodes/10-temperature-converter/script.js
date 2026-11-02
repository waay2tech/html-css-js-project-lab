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
$("#converter").addEventListener("submit", (event) => {
  event.preventDefault();
  const raw = $("#temperature").value.trim();
  try {
    if (!raw) throw new Error("Enter a temperature first.");
    const unit = $("#unit").value;
    const value = convertTemperature(Number(raw), unit);
    $("#converted").textContent =
      `${Number(value.toFixed(2))} °${unit === "C" ? "F" : "C"}`;
    say("Converted.");
  } catch (error) {
    $("#converted").textContent = "—";
    say(error.message);
  }
});
document.documentElement.dataset.lessonReady = "true";
