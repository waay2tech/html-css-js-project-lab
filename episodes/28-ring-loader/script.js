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
$("#speed").addEventListener("input", () => {
  $("#ring").style.setProperty("--duration", $("#speed").value + "s");
  $("#speed-value").textContent = $("#speed").value + " seconds";
  say("Timing updated.");
});
$("#pause").addEventListener("click", () => {
  const paused = $("#ring").classList.toggle("paused");
  $("#pause").textContent = paused ? "Resume animation" : "Pause animation";
  say(paused ? "Animation paused." : "Animation running.");
});
if (reduced.matches) say("Reduced motion: static ring.");
document.documentElement.dataset.lessonReady = "true";
