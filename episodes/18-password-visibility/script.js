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
const input = $("#password"),
  toggle = $("#visibility");
toggle.setAttribute("aria-pressed", "false");
toggle.addEventListener("click", () => {
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  toggle.textContent = show ? "Hide password" : "Show password";
  toggle.setAttribute("aria-pressed", String(show));
  say(show ? "Password visible." : "Password hidden.");
});
document.documentElement.dataset.lessonReady = "true";
