export const $ = (selector, root = document) => root.querySelector(selector);
export const $$ = (selector, root = document) => [
  ...root.querySelectorAll(selector),
];
export const say = (text, id = "#status") => {
  const el = $(id);
  if (el) el.textContent = text;
};
export const reduced = matchMedia("(prefers-reduced-motion: reduce)");
export const formatMoney = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
export function theme() {
  const button = $("#theme");
  const key = "waay2tech-lab-theme";
  let preference = "system";
  try {
    preference = localStorage.getItem(key) || "system";
  } catch {}
  const system = matchMedia("(prefers-color-scheme: dark)");
  function apply() {
    const dark =
      preference === "dark" || (preference === "system" && system.matches);
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    button.textContent = dark ? "Light theme" : "Dark theme";
    button.setAttribute(
      "aria-label",
      `Switch to ${dark ? "light" : "dark"} theme`,
    );
  }
  function set(value) {
    preference = value;
    try {
      localStorage.setItem(key, value);
    } catch {}
    apply();
  }
  button.addEventListener("click", () =>
    set(document.documentElement.dataset.theme === "dark" ? "light" : "dark"),
  );
  system.addEventListener("change", apply);
  apply();
  return { set, get: () => preference };
}
export const themeController = theme();
document.documentElement.dataset.ready = "true";
export function listenCleanup(fn) {
  addEventListener("pagehide", fn, { once: true });
}
export function slideViewer({ images, autoplay = false }) {
  let index = 0,
    timer = null,
    playing = false;
  const image = $("#slide-image"),
    caption = $("#slide-caption");
  function render() {
    image.src = `./assets/${images[index][0]}.svg`;
    image.alt = images[index][1];
    caption.textContent = `${index + 1} / ${images.length} — ${images[index][1]}`;
  }
  function move(delta) {
    index = (index + delta + images.length) % images.length;
    render();
  }
  $("#previous").addEventListener("click", () => move(-1));
  $("#next").addEventListener("click", () => move(1));
  function stop() {
    clearInterval(timer);
    timer = null;
  }
  function start() {
    stop();
    if (playing && !document.hidden && !reduced.matches)
      timer = setInterval(() => move(1), 4000);
  }
  const toggle = $("#autoplay");
  if (toggle) {
    toggle.addEventListener("click", () => {
      playing = !playing;
      toggle.textContent = playing ? "Pause autoplay" : "Start autoplay";
      toggle.setAttribute("aria-pressed", String(playing));
      start();
    });
    const stage = $("#viewer");
    stage.addEventListener("mouseenter", stop);
    stage.addEventListener("mouseleave", start);
    stage.addEventListener("focusin", stop);
    stage.addEventListener("focusout", (event) => {
      if (!stage.contains(event.relatedTarget)) start();
    });
    document.addEventListener("visibilitychange", start);
    reduced.addEventListener("change", start);
  }
  listenCleanup(stop);
  render();
  return { move };
}
