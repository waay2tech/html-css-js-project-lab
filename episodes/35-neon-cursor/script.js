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
let active = false;
const zone = $("#cursor-zone");
$("#stop-effect").disabled = true;
$("#start-effect").addEventListener("click", async () => {
  if (active) return;
  if (reduced.matches || !matchMedia("(pointer:fine)").matches) {
    say("Static view: reduced motion or a coarse pointer is active.");
    return;
  }
  $("#start-effect").disabled = true;
  try {
    const { neonCursor } = await import("./vendor/threejs-toys.js");
    neonCursor({
      el: zone,
      shaderPoints: 8,
      curvePoints: 40,
      curveLerp: 0.5,
      radius1: 4,
      radius2: 12,
      velocityTreshold: 10,
      sleepRadiusX: 0,
      sleepRadiusY: 0,
      sleepTimeCoefX: 0,
      sleepTimeCoefY: 0,
    });
    active = true;
    $("#stop-effect").disabled = false;
    say("Neon effect running. Use Stop effect to release the page resources.");
  } catch {
    say(
      "WebGL or the library is unavailable. Static pointer area remains usable.",
    );
    $("#start-effect").disabled = false;
  }
});
function stop() {
  if (active) location.reload();
}
$("#stop-effect").addEventListener("click", stop);
reduced.addEventListener("change", () => {
  if (reduced.matches) stop();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stop();
});
document.documentElement.dataset.lessonReady = "true";
