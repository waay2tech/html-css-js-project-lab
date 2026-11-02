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
let flipped = false;
$("#flip").setAttribute("aria-pressed", "false");
$("#flip").addEventListener("click", () => {
  flipped = !flipped;
  $("#flip-inner").classList.toggle("flipped", flipped);
  $("#front").setAttribute("aria-hidden", String(flipped));
  $("#front").inert = flipped;
  $("#back").setAttribute("aria-hidden", String(!flipped));
  $("#back").inert = !flipped;
  $("#flip").setAttribute("aria-pressed", String(flipped));
  $("#flip").textContent = flipped ? "Show front side" : "Show practice side";
  say(flipped ? "Practice side visible." : "Front side visible.");
});
document.documentElement.dataset.lessonReady = "true";
