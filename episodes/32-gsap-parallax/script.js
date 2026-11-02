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
    gsap.to("#near-layer", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#parallax",
        start: "top 85%",
        end: "bottom 15%",
        scrub: true,
      },
    });
  });
  listenCleanup(() => mm.revert());
  say(
    reduced.matches
      ? "Reduced motion: static scene."
      : "GSAP parallax ready. Scroll to explore.",
  );
} catch {
  say("Animation library unavailable. Static scene shown.");
}
document.documentElement.dataset.lessonReady = "true";
