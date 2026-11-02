# Validation — 2 November 2026

## Completed

- 40 ordered episode folders generated with source, local assets, lesson notes and credits. The gallery has 40 working episode links.
- 8 Node test groups passed, covering temperature boundary/round trips, choice parsing, Unicode counts, birthday and leap-day boundaries, invalid dates, delayed timer ticks, OTP normalization and computed cart totals.
- Static repository check passed: 40 entries, required files, local HTML links/assets, JavaScript syntax, module paths, no duplicate HTML IDs and no inline event handlers in the lesson pages.
- All 40 lessons loaded in the Chromium-based in-app browser. Every lesson reached its ready state and every rendered image loaded.
- All 40 were measured in 390px, 768px and 1440px same-origin frames: 120 width checks, no horizontal document overflow. Results: `qa/layout-metrics.json`.
- Actual interactions were exercised across the curriculum: product bag, recipe scaling, mobile menu, tooltip Escape, save button, skeleton completion, colour preview, theme selection, counter, conversion validation, randomizer, radio rating, dropdown filtering, tab keyboard navigation, progress boundaries, native select, sign-in validation, password visibility, six-digit OTP paste, age, clock format, timer controls, weather, galleries/sliders, pause controls, focusable depth card, flip accessibility, tilt toggle, scratch reveal/reset, audio play/pause, brief dialog and cart calculations. Observations: `qa/interaction-results.json`.
- Episode 24 returned a live Open-Meteo response for Chennai, and the offline sample was separately checked.
- GSAP/ScrollTrigger initialized locally in 32–33. PageDown changed the actual foreground/zoom transform; see `qa/scroll-evidence.json`.
- Episode 35’s local library initialized a WebGL canvas. Stop reloaded the lesson and released that canvas. The initial immediate read in the multi-frame log happened before the asynchronous library load; the later standalone check is the completed result.
- Swiper initialized locally in 40. Its Next control changed the active featured product. Adding a laptop and notebook computed ₹50,290; removing the laptop left ₹390.
- Theme selection survived a standalone reload. Mobile dark-theme screenshot included.
- Representative final desktop/mobile screenshots were opened and reviewed. A sign-in illustration overflow was corrected; the final content fits inside its sheet. Long capstone headlines were shortened.
- Source hashes of all 104 inspected original entry-folder code files still match the pre-build audit. See `qa/source-preservation.json`.
- Design skill source lint: 0 failures. Date/time zero-padding warnings are legitimate formatting; the collection-wide em-dash warning includes missing-value placeholders and separators across 40 apps.
- Source formatting completed with Prettier 3.6.2. Vendored libraries, notices and QA evidence were excluded from formatting.

## Scope and limits

This is a browser smoke/interaction review, not exhaustive cross-browser, assistive-technology or production-security certification. Width measurements used embedded browser viewports; standalone screenshots cover representative lessons. Firefox, Safari and physical phones were not tested. Reduced-motion/coarse-pointer branches were reviewed in source but not explicitly emulated in this session. Keyboard interactions were sampled rather than exhaustively audited for every control.

The audio file is a generated 12-second WAV and actual Play/Pause UI was exercised. One browser DOM inspection serialized the media duration as null; it is not used as proof of exact playback duration. The multi-frame harness also logged an unattributed MutationObserver error; it did not reproduce in the separately opened lesson/gallery tab. No app failure was observed from that message, but its origin was not conclusively established.

Original archive code and unknown-rights photographs/audio are excluded from this distribution. Concept provenance and available archive notices remain. Pinned vendor/font licenses govern those files separately from the MIT license for the new teaching code. `threejs-toys` declares ISC in its original package metadata; no standalone license text ships upstream, so the package metadata and an explicit license-reference notice are retained.

This report describes the code validation completed on 2 November 2026, before source publication. Subsequent repository publishing is recorded in STATUS.md. The earlier Episode 01 video package remains separate. No additional video production or live-site deployment is implied.
