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
$("#signin").addEventListener("submit", (e) => {
  e.preventDefault();
  if (!e.currentTarget.reportValidity()) return;
  say("Demo form is valid. No authentication request was made.");
  $("#password").value = "";
});
document.documentElement.dataset.lessonReady = "true";
