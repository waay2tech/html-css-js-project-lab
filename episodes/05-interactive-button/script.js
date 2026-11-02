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
let saved = false;
$("#save").addEventListener("click", () => {
  saved = !saved;
  $("#save").textContent = saved ? "Saved — undo" : "Save this lesson";
  $("#save").setAttribute("aria-pressed", String(saved));
  say(
    saved ? "Lesson saved for this visit." : "Lesson removed from saved list.",
  );
});
document.documentElement.dataset.lessonReady = "true";
