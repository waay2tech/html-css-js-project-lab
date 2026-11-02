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
const input = $("#message");
input.addEventListener("input", () => {
  const count = countCharacters(input.value);
  $("#count").textContent = `${count} / 140`;
  $("#count-progress").value = Math.min(count, 140);
  input.setAttribute("aria-invalid", String(count > 140));
  say(
    count > 140
      ? `${count - 140} over the limit.`
      : `${140 - count} remaining.`,
  );
});
document.documentElement.dataset.lessonReady = "true";
