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
const topics = [
  "HTML semantics",
  "CSS Grid",
  "CSS Flexbox",
  "JavaScript events",
  "JavaScript arrays",
  "Canvas drawing",
];
function filter() {
  const query = $("#search").value.trim().toLowerCase();
  const matches = topics.filter((t) => t.toLowerCase().includes(query));
  $("#topics").replaceChildren(...matches.map((t) => new Option(t, t)));
  $("#topics").selectedIndex = -1;
  $("#selected-topic").textContent = "—";
  $("#topics").disabled = !matches.length;
  say(
    matches.length
      ? `${matches.length} matching topics. Use the list to select.`
      : "No topics match. Try CSS or JavaScript.",
  );
}
$("#search").addEventListener("input", filter);
$("#search").addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" && !$("#topics").disabled) {
    e.preventDefault();
    $("#topics").focus();
    $("#topics").selectedIndex = 0;
    $("#selected-topic").textContent = $("#topics").value;
  }
});
$("#topics").addEventListener("change", () => {
  $("#selected-topic").textContent = $("#topics").value;
  say("Topic selected.");
});
filter();
document.documentElement.dataset.lessonReady = "true";
