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
const tabs = $$("[role=tab]"),
  panels = $$("[role=tabpanel]");
function select(index, focus = false) {
  tabs.forEach((t, i) => {
    t.setAttribute("aria-selected", String(i === index));
    t.tabIndex = i === index ? 0 : -1;
    panels[i].hidden = i !== index;
  });
  if (focus) tabs[index].focus();
}
tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(i));
  tab.addEventListener("keydown", (e) => {
    const keys = {
      ArrowRight: (i + 1) % tabs.length,
      ArrowLeft: (i - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      select(keys[e.key], true);
    }
  });
});
document.documentElement.dataset.lessonReady = "true";
