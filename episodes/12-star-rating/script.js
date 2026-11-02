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
$$("input[name=rating]").forEach((input) =>
  input.addEventListener("change", () =>
    say(`You selected ${input.value} out of 5.`),
  ),
);
$("#clear").addEventListener("click", () => {
  $$("input[name=rating]").forEach((input) => (input.checked = false));
  say("No rating selected.");
});
document.documentElement.dataset.lessonReady = "true";
