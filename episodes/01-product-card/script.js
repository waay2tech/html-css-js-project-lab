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
let inBag = false;
$("#bag").addEventListener("click", () => {
  inBag = !inBag;
  $("#bag").textContent = inBag ? "Remove from demo bag" : "Add to demo bag";
  say(
    inBag ? "Everyday laptop added. 1 item in demo bag." : "Demo bag is empty.",
  );
});
document.documentElement.dataset.lessonReady = "true";
