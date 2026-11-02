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
const samples = {
  Chennai: [31, "Partly cloudy", 68, 12],
  Bengaluru: [24, "Cloudy", 74, 9],
  Delhi: [29, "Clear sky", 42, 8],
};
$("#city").addEventListener("change", () => {
  const city = $("#city").value,
    [temp, condition, humidity, wind] = samples[city];
  $("#weather-place").textContent = city;
  $("#weather-temp").textContent = `${temp}°C`;
  $("#weather-condition").textContent = condition;
  $("#humidity").textContent = `Humidity ${humidity}%`;
  $("#wind").textContent = `Wind ${wind} km/h`;
  say("Showing illustrative sample data for " + city + ".");
});
document.documentElement.dataset.lessonReady = "true";
