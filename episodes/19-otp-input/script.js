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
const digits = $$(".otp input");
function distribute(text, start = 0) {
  const values = otpDigits(text);
  digits.slice(start).forEach((input, i) => (input.value = values[i] || ""));
  digits[Math.min(start + values.length, 5)].focus();
  say(
    digits.every((d) => /^[0-9]$/.test(d.value))
      ? "Six digits entered. Check format to continue."
      : "Complete all six digits.",
  );
}
digits.forEach((input, i) => {
  input.addEventListener("paste", (event) => {
    event.preventDefault();
    const text = event.clipboardData.getData("text");
    distribute(text, otpDigits(text).length === 6 ? 0 : i);
  });
  input.addEventListener("input", () => {
    const raw = otpDigits(input.value);
    if (raw.length > 1) {
      distribute(raw, i);
      return;
    }
    input.value = raw;
    if (raw && i < 5) digits[i + 1].focus();
    say("Input updated. Format check only.");
  });
  input.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && !input.value && i > 0) {
      digits[i - 1].focus();
    }
    if (e.key === "ArrowLeft" && i > 0) {
      e.preventDefault();
      digits[i - 1].focus();
    }
    if (e.key === "ArrowRight" && i < 5) {
      e.preventDefault();
      digits[i + 1].focus();
    }
  });
});
$("#otp-form").addEventListener("submit", (e) => {
  e.preventDefault();
  say(
    digits.every((d) => /^[0-9]$/.test(d.value))
      ? "Valid six-digit format. Not server-verified."
      : "Enter six digits.",
  );
});
$("#otp-form").addEventListener("reset", () => {
  say("Code cleared.");
  digits[0].focus();
});
document.documentElement.dataset.lessonReady = "true";
