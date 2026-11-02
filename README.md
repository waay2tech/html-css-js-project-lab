# HTML CSS JS Project Lab — Waay2tech

**College Code to Portfolio: 40 focused frontend projects.**

Learn semantic HTML, modern CSS and vanilla JavaScript by building small, working interfaces. Start with a product card and progress through forms, dates, API states, animation, Canvas and complete frontend capstones.

[YouTube channel](https://www.youtube.com/@Waay2tech) · [Download all source code](https://github.com/waay2tech/html-css-js-project-lab/archive/refs/heads/main.zip) · [Validation report](VALIDATION.md)

## Start here

1. Download this repository or clone it:

   ```sh
   git clone https://github.com/waay2tech/html-css-js-project-lab.git
   cd html-css-js-project-lab
   ```

2. With Node 22 or newer, run:

   ```sh
   npm start
   ```

3. Open **http://127.0.0.1:8770/** and choose a lesson.

No `npm install`, framework, build step or external CDN is needed. Python alternative: `python -m http.server 8770 --bind 127.0.0.1`. Use HTTP rather than double-clicking an HTML file: the lessons use ES modules.

Libraries, fonts, illustrations and the practice audio are local. Only Episode 24’s live weather request needs internet; it also includes a labelled offline sample.

## The learning path

Each source link opens the complete episode folder. Read its README, run the demo and change one thing at a time. Previous/next links work when you keep the repository structure together.

### Layout foundations

| Episode | Source code | What you practise |
| --- | --- | --- |
| 01 | [Everyday laptop](episodes/01-product-card/) | Semantic article, Grid layout, spacing and a small stateful enhancement. |
| 02 | [Tomato toast](episodes/02-recipe-card/) | Semantic recipe, native details, responsive Grid and scaled quantities. |
| 03 | [Project navigation](episodes/03-responsive-navigation/) | Navigation landmarks, native anchors, Flexbox and a keyboard-friendly mobile disclosure. |
| 04 | [Social tooltips](episodes/04-accessible-tooltips/) | Positioned tooltip, accessible name and description, focus and Escape behavior. |
| 05 | [Button feedback](episodes/05-interactive-button/) | Readable native button states instead of glass and low-contrast effects. |
| 06 | [Loading skeleton](episodes/06-loading-skeleton/) | Loading state, aria-busy, finite skeleton animation and completed state. |

### JavaScript essentials

| Episode | Source code | What you practise |
| --- | --- | --- |
| 07 | [Colour studio](episodes/07-colour-picker/) | Input events, validated hex values, live style updates and clipboard error fallback. |
| 08 | [Theme preferences](episodes/08-theme-preferences/) | CSS variables, system preference and safe localStorage persistence. |
| 09 | [Character counter](episodes/09-character-counter/) | Unicode-aware code-point count, empty input, progress and over-limit feedback. |
| 10 | [Temperature converter](episodes/10-temperature-converter/) | Pure conversion function, numeric parsing and absolute-zero validation. |
| 11 | [Pick a practice task](episodes/11-random-choice/) | Split, trim, filter, array indexing and random choice. |
| 12 | [Rate this lesson](episodes/12-star-rating/) | Native radio group with explicit labels, selected state and clear action. |

### Controls and form UX

| Episode | Source code | What you practise |
| --- | --- | --- |
| 13 | [Find a topic](episodes/13-searchable-dropdown/) | Filtering into a native listbox; keyboard support without inventing an incomplete ARIA combobox. |
| 14 | [Learning tabs](episodes/14-accessible-tabs/) | Tab semantics, roving tabindex and one active panel. |
| 15 | [Learning progress](episodes/15-step-progress/) | State boundaries, progress and disabled controls. |
| 16 | [Choose your track](episodes/16-native-select/) | Replace an old jQuery custom select with a styled native select. |
| 17 | [Sign-in interface](episodes/17-sign-in-interface/) | Labels, autocomplete, native validation and honest form behavior. |
| 18 | [Password visibility](episodes/18-password-visibility/) | Input type toggle, pressed state and clear accessible labels. |
| 19 | [Code input](episodes/19-otp-input/) | Numeric input filtering, paste distribution, focus, backspace and format-only validation. |

### Useful JavaScript apps

| Episode | Source code | What you practise |
| --- | --- | --- |
| 20 | [Age calculator](episodes/20-age-calculator/) | Local date parsing, valid calendar dates, future rejection and birthday boundaries. |
| 21 | [World clock](episodes/21-digital-clock/) | Intl date/time formatting, time zones and deriving display from Date. |
| 22 | [Focus timer](episodes/22-pomodoro-timer/) | Start/pause/reset state and deadline-based countdown. |
| 23 | [Weather preview](episodes/23-weather-ui/) | Weather layout and consistent rendering from an explicitly static dataset. |
| 24 | [Live weather](episodes/24-live-weather/) | Fetch, geocoding, abort/timeout, validation, loading/error and offline sample states. |

### Galleries and motion

| Episode | Source code | What you practise |
| --- | --- | --- |
| 25 | [Expand the view](episodes/25-expandable-gallery/) | Flex expansion, real button controls and touch/keyboard alternatives to hover. |
| 26 | [Frame by frame](episodes/26-image-slider/) | Single active index, next/previous wrapping and captions. |
| 27 | [Responsive carousel](episodes/27-responsive-carousel/) | Responsive media, optional autoplay, pause on focus/hover and background cleanup. |
| 28 | [Motion timing](episodes/28-ring-loader/) | Keyframes, animation duration, play-state and reduced motion. |
| 29 | [CSS depth](episodes/29-css-3d-card/) | CSS perspective and transform-style with focus and reduced-motion alternatives. |
| 30 | [Two sides of a card](episodes/30-flip-card/) | 3D backface, persistent click trigger and inactive-face accessibility. |

### Advanced interactions

| Episode | Source code | What you practise |
| --- | --- | --- |
| 31 | [Pointer tilt](episodes/31-pointer-tilt/) | Normalized pointer coordinates, bounded transforms and requestAnimationFrame cleanup. |
| 32 | [Scroll through layers](episodes/32-gsap-parallax/) | Pinned local GSAP/ScrollTrigger, bounded scroll mapping and matchMedia cleanup. |
| 33 | [Zoom on scroll](episodes/33-gsap-scroll-zoom/) | ScrollTrigger boundaries, from/to values, overflow crop and refresh behavior. |
| 34 | [Stack your learning](episodes/34-scroll-card-stack/) | CSS view-timeline enhancement, sticky fallback, readable DOM order and reduced motion. |
| 35 | [Neon pointer lab](episodes/35-neon-cursor/) | Local ES modules, threejs-toys neonCursor, WebGL capability failure and user control. |
| 36 | [Scratch to reveal](episodes/36-canvas-scratch/) | HiDPI canvas, local pointer coordinates, capture/cancel and keyboard reveal/reset. |

### Media and capstones

| Episode | Source code | What you practise |
| --- | --- | --- |
| 37 | [Focus audio](episodes/37-music-player/) | Media play promises, real playback state, seeking, volume and native controls. |
| 38 | [College code, rebuilt.](episodes/38-project-portfolio/) | Portfolio with real runnable project links, responsive composition and honest evidence. |
| 39 | [Less admin. More teaching.](episodes/39-service-landing/) | Responsive service page, anchor navigation and native accessible dialog. |
| 40 | [Tools for your desk.](episodes/40-storefront/) | Integrated product grid, filtering, sorting, computed cart total, dialog and local Swiper integration. |

## Inside each episode

```text
index.html       Semantic content and labelled controls
style.css        Responsive layout, theme tokens and focus states
script.js        The lesson’s interactions
common.js        Local theme and interface helpers
logic.js         Pure functions for reusable edge-case handling
assets/          Original illustrations, local font and any media
README.md        Run instructions, practice tasks and limits
CREDITS.md       Archive provenance and license notices
```

Selected advanced lessons also include `vendor/` with pinned library files and their notices. This is frontend learning code: sign-in and OTP lessons do not authenticate; scratch interactions have no real prizes; the storefront has no payments or checkout backend. Sample prices/data are labelled.

## Run the checks

```sh
npm test
npm run check
```

The validation report records the automated checks, browser interactions, viewport measurements and remaining test limits. Browser checks are not a full cross-browser or accessibility certification.

## Attribution and reuse

This series contains **new teaching implementations of concepts from a mixed-provenance college archive**. Historical examples are not claimed as entirely original Waay2tech work. The old archive and unknown-rights photos/audio are not redistributed here. Each episode retains its detected provenance and available notices; see [SOURCE-MAP.json](SOURCE-MAP.json) and the episode credits.

New Waay2tech implementation code, original vector illustrations and synthesized practice audio are covered by [MIT](LICENSE). Fonts and vendored libraries keep their own licenses. GSAP’s standard license and all third-party notices remain applicable; the root MIT license does not replace them. [Pinned dependencies](DEPENDENCIES.json).

## Tamil / Tanglish learning support

**Oru project. Oru clear concept. Oru portfolio upgrade.**

First demo-ai run pannunga. HTML structure, CSS layout, JavaScript state nu separate-aa understand pannunga. Oru value maathi expected result-oda compare pannunga. Lesson README-la practice checks irukku; source-ai share pannumbodhu credits/license files-aiyum retain pannunga.

Video preparation follows the final source review. Follow [Waay2tech on YouTube](https://www.youtube.com/@Waay2tech) for published lessons; this repository does not imply that all 40 videos are already available.

## Contributions

For a bug report, include the episode folder, browser, steps, expected result and actual result. Keep examples beginner-readable, retain attribution, and check mobile/keyboard behavior after changes. Please use invented demo values in form screenshots, never real passwords or OTPs.
