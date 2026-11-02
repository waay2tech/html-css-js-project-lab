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
$$(".tip-button").forEach((button) => {
  const tip = $("#" + button.getAttribute("aria-describedby"));
  button.addEventListener("focus", () => tip.classList.remove("dismissed"));
  button.addEventListener("mouseenter", () =>
    tip.classList.remove("dismissed"),
  );
  button.addEventListener("click", () =>
    say(
      button.getAttribute("aria-label") +
        " selected. Add your real profile link when adapting.",
    ),
  );
  button.addEventListener("keydown", (e) => {
    if (e.key === "Escape") tip.classList.add("dismissed");
  });
});
document.documentElement.dataset.lessonReady = "true";
