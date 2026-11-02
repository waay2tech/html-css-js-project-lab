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
const today = new Date();
const iso = [
  today.getFullYear(),
  String(today.getMonth() + 1).padStart(2, "0"),
  String(today.getDate()).padStart(2, "0"),
].join("-");
$("#birth").max = iso;
$("#age-form").addEventListener("submit", (e) => {
  e.preventDefault();
  try {
    $("#age").textContent = String(ageOn($("#birth").value, new Date()));
    say("Completed years as of your local date.");
  } catch (error) {
    $("#age").textContent = "—";
    say(error.message);
  }
});
document.documentElement.dataset.lessonReady = "true";
