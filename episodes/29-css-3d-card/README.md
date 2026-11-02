# Episode 29 — CSS depth

CSS perspective and transform-style with focus and reduced-motion alternatives.

## Run

From the repository root run `npm start` (Node 22+; no install needed), then open `http://127.0.0.1:8770/episodes/29-css-3d-card/`. Alternatively run `python -m http.server 8770 --bind 127.0.0.1` from the root. Serve over HTTP: ES modules do not reliably run by double-clicking a file.

Each episode keeps its runtime source, illustration assets and required vendor files locally. Previous/next and portfolio links expect the full repository layout.

## Read the code

- `index.html`: semantic content and labelled controls.
- `style.css`: responsive layout, light/dark tokens, keyboard focus and motion preference.
- `script.js`: this lesson’s behavior; read this after the markup.
- `common.js`: theme and small shared helpers, copied locally for portability.
- `logic.js`: pure functions for edge cases; shared tests live at repository root.

## Practice and verification

Focus and hover the card; verify content is readable without hover.

Tanglish: First result-ai run panni paarunga. HTML structure, CSS layout, JavaScript state nu separate-aa understand pannunga. Oru value maathi, expected result-oda compare pannunga.

## Boundaries

The 3D effect is CSS-only; common theme switch uses JavaScript.

Every visible contact, account, reward, price and weather state is a demo unless explicitly identified as a live provider response. See `CREDITS.md`. Video preparation is deferred until the core code review is complete.
