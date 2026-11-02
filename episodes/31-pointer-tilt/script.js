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
let enabled = true,
  frame = 0;
const card = $("#tilt"),
  fine = matchMedia("(pointer:fine)");
function reset() {
  cancelAnimationFrame(frame);
  card.style.setProperty("--rx", "0deg");
  card.style.setProperty("--ry", "0deg");
}
card.addEventListener("pointermove", (event) => {
  if (
    !enabled ||
    reduced.matches ||
    !fine.matches ||
    event.pointerType === "touch"
  )
    return;
  const rect = card.getBoundingClientRect(),
    x = (event.clientX - rect.left) / rect.width - 0.5,
    y = (event.clientY - rect.top) / rect.height - 0.5;
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(() => {
    card.style.setProperty("--rx", `${-y * 12}deg`);
    card.style.setProperty("--ry", `${x * 12}deg`);
  });
});
card.addEventListener("pointerleave", reset);
$("#tilt-toggle").addEventListener("click", () => {
  enabled = !enabled;
  reset();
  $("#tilt-toggle").textContent = enabled ? "Disable tilt" : "Enable tilt";
  say(enabled ? "Tilt enabled for a fine pointer." : "Tilt disabled.");
});
reduced.addEventListener("change", reset);
listenCleanup(reset);
document.documentElement.dataset.lessonReady = "true";
