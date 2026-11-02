# Episode 27 — Responsive carousel

Responsive media, optional autoplay, pause on focus/hover and background cleanup.

## Run

From the repository root run `npm start` (Node 22+; no install needed), then open `http://127.0.0.1:8770/episodes/27-responsive-carousel/`. Alternatively run `python -m http.server 8770 --bind 127.0.0.1` from the root. Serve over HTTP: ES modules do not reliably run by double-clicking a file.

Each episode keeps its runtime source, illustration assets and required vendor files locally. Previous/next and portfolio links expect the full repository layout.

## Read the code

- `index.html`: semantic content and labelled controls.
- `style.css`: responsive layout, light/dark tokens, keyboard focus and motion preference.
- `script.js`: this lesson’s behavior; read this after the markup.
- `common.js`: theme and small shared helpers, copied locally for portability.
- `logic.js`: pure functions for edge cases; shared tests live at repository root.

## Practice and verification

Start autoplay; Pause; focus a control to pause rotation. Check reduced-motion preference.

Tanglish: First result-ai run panni paarunga. HTML structure, CSS layout, JavaScript state nu separate-aa understand pannunga. Oru value maathi, expected result-oda compare pannunga.

## Boundaries

Autoplay is opt-in and disabled by reduced-motion preference. Uses native state rather than an unnecessary carousel dependency here.

Every visible contact, account, reward, price and weather state is a demo unless explicitly identified as a live provider response. See `CREDITS.md`. Video preparation is deferred until the core code review is complete.
