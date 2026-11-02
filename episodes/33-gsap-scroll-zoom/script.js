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
try {
  const gsap = window.gsap,
    ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  const mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    gsap.fromTo(
      "#zoom-frame img",
      { scale: 1 },
      {
        scale: 1.35,
        ease: "none",
        scrollTrigger: {
          trigger: "#zoom-frame",
          start: "top 85%",
          end: "bottom 15%",
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  });
  listenCleanup(() => mm.revert());
  say(
    reduced.matches
      ? "Reduced motion: static image."
      : "GSAP scroll zoom ready.",
  );
} catch {
  say("Animation library unavailable. Static illustration shown.");
}
document.documentElement.dataset.lessonReady = "true";
