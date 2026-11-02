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
const menu = $("#menu"),
  links = $("#menu-links");
function close() {
  links.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  links.classList.toggle("open", open);
});
links.addEventListener("click", close);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    close();
    menu.focus();
  }
});
document.documentElement.dataset.lessonReady = "true";
