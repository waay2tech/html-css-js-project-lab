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
const ingredients = [
  ["bread slices", 2],
  ["g tomatoes", 200],
  ["tsp olive oil", 1],
];
function render() {
  const servings = Number($("#servings").value);
  $("#servings-label").textContent = `${servings} servings`;
  $("#ingredients").replaceChildren(
    ...ingredients.map(([name, amount]) => {
      const li = document.createElement("li");
      li.textContent = `${(amount * servings) / 2} ${name}`;
      return li;
    }),
  );
}
$("#servings").addEventListener("change", render);
render();
document.documentElement.dataset.lessonReady = "true";
