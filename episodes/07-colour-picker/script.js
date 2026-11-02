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
function paint(hex) {
  $("#swatch").style.backgroundColor = hex;
  $("#colour").value = hex;
  $("#hex").value = hex;
  say(`Preview: ${hex.toUpperCase()}`);
}
$("#colour").addEventListener("input", (e) => paint(e.target.value));
$("#hex").addEventListener("input", (e) => {
  if (/^#[0-9a-f]{6}$/i.test(e.target.value)) {
    paint(e.target.value);
  } else say("Enter a six-digit hex colour, for example #176d68.");
});
$("#copy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText($("#colour").value);
    say("Hex copied.");
  } catch {
    say("Copy unavailable. Select the hex value and copy it manually.");
    $("#hex").select();
  }
});
paint("#176d68");
document.documentElement.dataset.lessonReady = "true";
