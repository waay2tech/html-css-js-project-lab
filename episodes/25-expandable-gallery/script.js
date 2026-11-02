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
const panels = $$(".gallery-panel");
panels.forEach((panel, index) =>
  panel.addEventListener("click", () => {
    panels.forEach((p, i) =>
      p.setAttribute("aria-expanded", String(i === index)),
    );
    $("#gallery-description").textContent =
      panel.textContent.trim() + " expanded.";
  }),
);
document.documentElement.dataset.lessonReady = "true";
