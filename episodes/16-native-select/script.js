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
const tracks = {
  html: "Semantic structure, links, images and labelled forms.",
  css: "Layout, fluid spacing, typography and mobile adaptation.",
  js: "DOM events, state, input validation and useful interactions.",
};
$("#track").addEventListener("change", () => {
  $("#track-copy").textContent =
    tracks[$("#track").value] || "Choose a track to see its focus.";
  say($("#track").value ? "Track selected." : "No track selected.");
});
document.documentElement.dataset.lessonReady = "true";
