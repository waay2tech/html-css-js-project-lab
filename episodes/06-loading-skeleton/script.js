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
let timeout;
$("#load").addEventListener("click", () => {
  clearTimeout(timeout);
  const box = $("#preview");
  box.setAttribute("aria-busy", "true");
  box.replaceChildren();
  const skeleton = document.createElement("div");
  skeleton.setAttribute("aria-hidden", "true");
  skeleton.innerHTML =
    '<div class="skeleton image"></div><div class="skeleton line"></div><div class="skeleton line" style="width:65%"></div>';
  box.append(skeleton);
  $("#load").disabled = true;
  say("Loading sample preview…");
  timeout = setTimeout(() => {
    box.innerHTML =
      '<img class="art" src="./assets/scene-1.svg" alt="Original mountain illustration" width="800" height="600"><h3>Build your first layout</h3><p>A local sample, ready to explore.</p>';
    box.setAttribute("aria-busy", "false");
    $("#load").disabled = false;
    say("Sample preview loaded.");
  }, 1100);
});
listenCleanup(() => clearTimeout(timeout));
document.documentElement.dataset.lessonReady = "true";
