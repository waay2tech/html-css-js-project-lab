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
let controller;
let requestId = 0;
function show({ name, temp, humidity, wind, code, time }, mode) {
  $("#weather-place").textContent = name;
  $("#weather-temp").textContent = `${temp}°C`;
  $("#humidity").textContent = `Humidity ${humidity}%`;
  $("#wind").textContent = `Wind ${wind} km/h`;
  $("#weather-condition").textContent =
    code === 0
      ? "Clear sky"
      : code <= 3
        ? "Cloudy"
        : code >= 51
          ? "Rain or snow possible"
          : "Low visibility";
  $("#weather-mode").textContent =
    mode + (time ? ` · Provider time ${time}` : "");
}
async function getJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Provider returned ${response.status}.`);
  return response.json();
}
$("#weather-search").addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = $("#query").value.trim();
  if (city.length < 2) {
    say("Enter at least two characters.");
    return;
  }
  controller?.abort();
  controller = new AbortController();
  const current = ++requestId;
  $("#fetch-weather").disabled = true;
  say("Loading location and current weather…");
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const geo = await getJson(
      "https://geocoding-api.open-meteo.com/v1/search?" +
        new URLSearchParams({
          name: city,
          count: "1",
          language: "en",
          format: "json",
        }),
      controller.signal,
    );
    if (!geo.results?.length)
      throw new Error("No city found. Try a nearby city.");
    const place = geo.results[0];
    const data = await getJson(
      "https://api.open-meteo.com/v1/forecast?" +
        new URLSearchParams({
          latitude: place.latitude,
          longitude: place.longitude,
          current:
            "temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m",
          timezone: "auto",
        }),
      controller.signal,
    );
    if (current !== requestId) return;
    const c = data.current;
    if (
      !c ||
      !Number.isFinite(c.temperature_2m) ||
      !Number.isFinite(c.relative_humidity_2m) ||
      !Number.isFinite(c.wind_speed_10m) ||
      !Number.isFinite(c.weather_code)
    )
      throw new Error("Weather data is incomplete. Try again.");
    show(
      {
        name: `${place.name}, ${place.country_code}`,
        temp: c.temperature_2m,
        humidity: c.relative_humidity_2m,
        wind: c.wind_speed_10m,
        code: c.weather_code,
        time: c.time,
      },
      "Live provider response",
    );
    say("Weather updated.");
  } catch (error) {
    if (current === requestId)
      say(
        error.name === "AbortError"
          ? "Request cancelled or timed out. Retry or show the offline sample."
          : `${error.message} Retry or show the offline sample.`,
      );
  } finally {
    clearTimeout(timeout);
    if (current === requestId) $("#fetch-weather").disabled = false;
  }
});
$("#sample").addEventListener("click", () => {
  controller?.abort();
  requestId++;
  $("#fetch-weather").disabled = false;
  show(
    { name: "Chennai", temp: 31, humidity: 68, wind: 12, code: 2 },
    "Offline sample — not live weather",
  );
  say("Offline sample loaded.");
});
listenCleanup(() => controller?.abort());
document.documentElement.dataset.lessonReady = "true";
