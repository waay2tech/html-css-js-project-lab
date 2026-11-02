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
say(
  CSS.supports("animation-timeline", "view()")
    ? "CSS view timeline supported; scroll enhancement enabled."
    : "View timeline unavailable; sticky card fallback enabled.",
);
document.documentElement.dataset.lessonReady = "true";
