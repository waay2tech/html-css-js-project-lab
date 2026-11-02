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
const audio = $("#audio");
audio.volume = 0.4;
const time = (n) =>
  `${Math.floor((n || 0) / 60)}:${String(Math.floor((n || 0) % 60)).padStart(2, "0")}`;
function sync() {
  const duration = Number.isFinite(audio.duration) ? audio.duration : 12;
  $("#seek").max = duration;
  $("#seek").value = audio.currentTime;
  $("#time").textContent = `${time(audio.currentTime)} / ${time(duration)}`;
  $("#play").textContent = audio.paused ? "Play" : "Pause";
}
$("#play").addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      say("Playback could not start. Try the native audio controls.");
    }
  } else audio.pause();
});
$("#restart").addEventListener("click", () => {
  audio.currentTime = 0;
  sync();
});
$("#seek").addEventListener("input", () => {
  if (Number.isFinite(audio.duration))
    audio.currentTime = Number($("#seek").value);
});
$("#volume").addEventListener(
  "input",
  () => (audio.volume = Number($("#volume").value)),
);
["timeupdate", "loadedmetadata", "play", "pause", "ended"].forEach((event) =>
  audio.addEventListener(event, () => {
    sync();
    if (event === "play") say("Playing original practice tones.");
    if (event === "pause") say("Paused.");
    if (event === "ended") say("Track complete.");
  }),
);
audio.addEventListener("error", () => say("Audio file could not be loaded."));
listenCleanup(() => audio.pause());
sync();
document.documentElement.dataset.lessonReady = "true";
