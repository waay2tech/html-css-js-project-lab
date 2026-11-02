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
const select = $("#preference");
select.value = themeController.get();
select.addEventListener("change", () => {
  themeController.set(select.value);
  say(`${select.value} preference selected.`);
});
$("#theme").addEventListener("click", () => {
  select.value = themeController.get();
  say("Theme changed from the header.");
});
say("Current preference: " + select.value);
document.documentElement.dataset.lessonReady = "true";
