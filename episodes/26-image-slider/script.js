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
slideViewer({
  images: [
    ["scene-1", "Mountain morning"],
    ["scene-2", "Coastal walk"],
    ["scene-3", "Desert evening"],
  ],
});
document.documentElement.dataset.lessonReady = "true";
