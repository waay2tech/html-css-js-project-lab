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
const steps = [
  ["Plan", "Name the learner problem and the expected result."],
  ["Structure", "Use semantic HTML with labels and meaningful headings."],
  ["Style", "Apply spacing, a responsive layout and readable contrast."],
  ["Review", "Test mobile, keyboard and empty or invalid states."],
];
let current = 0;
function render() {
  steps.forEach((_, i) => {
    const item = $("#step-" + i);
    if (i === current) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
    item.dataset.complete = String(i < current);
  });
  $("#step-title").textContent = steps[current][0];
  $("#step-copy").textContent = steps[current][1];
  $("#progress").value = current + 1;
  $("#previous").disabled = current === 0;
  $("#next").disabled = current === steps.length - 1;
  say(`Milestone ${current + 1} of ${steps.length}`);
}
$("#previous").addEventListener("click", () => {
  if (current > 0) {
    current--;
    render();
  }
});
$("#next").addEventListener("click", () => {
  if (current < steps.length - 1) {
    current++;
    render();
  }
});
render();
document.documentElement.dataset.lessonReady = "true";
