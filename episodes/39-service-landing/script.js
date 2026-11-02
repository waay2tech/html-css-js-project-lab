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
$("#preview-brief").addEventListener("click", () => {
  const text = $("#brief-text").value.trim();
  if (!text) {
    say("Write a short brief first.");
    $("#brief-text").focus();
    return;
  }
  $("#brief-preview").textContent = text;
  $("#brief-dialog").showModal();
});
document.documentElement.dataset.lessonReady = "true";
