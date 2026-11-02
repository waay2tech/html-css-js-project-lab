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
const canvas = $("#scratch"),
  ctx = canvas.getContext("2d");
let drawing = false;
function reset() {
  const rect = canvas.getBoundingClientRect(),
    ratio = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#536e61";
  ctx.fillRect(0, 0, rect.width, rect.height);
  ctx.fillStyle = "#fff";
  ctx.font = "22px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Scratch here", rect.width / 2, rect.height / 2);
  canvas.hidden = false;
  say("Surface reset. Scratch or use Reveal message.");
}
function point(e) {
  const r = canvas.getBoundingClientRect();
  return [e.clientX - r.left, e.clientY - r.top];
}
canvas.addEventListener("pointerdown", (e) => {
  drawing = true;
  canvas.setPointerCapture(e.pointerId);
  ctx.beginPath();
  ctx.moveTo(...point(e));
});
canvas.addEventListener("pointermove", (e) => {
  if (!drawing) return;
  ctx.globalCompositeOperation = "destination-out";
  ctx.lineWidth = 48;
  ctx.lineCap = "round";
  ctx.lineTo(...point(e));
  ctx.stroke();
});
for (const event of ["pointerup", "pointercancel", "lostpointercapture"])
  canvas.addEventListener(event, () => (drawing = false));
$("#reveal").addEventListener("click", () => {
  canvas.hidden = true;
  say("Message revealed: Build your own card.");
});
$("#reset-scratch").addEventListener("click", () => {
  canvas.hidden = false;
  reset();
});
const observer = new ResizeObserver(() => {
  if (!canvas.hidden) reset();
});
observer.observe($("#scratch-wrap"));
listenCleanup(() => observer.disconnect());
reset();
document.documentElement.dataset.lessonReady = "true";
