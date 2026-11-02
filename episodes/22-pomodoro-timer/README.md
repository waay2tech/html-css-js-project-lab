# Episode 22 — Focus timer

Start/pause/reset state and deadline-based countdown.

## Run

From the repository root run `npm start` (Node 22+; no install needed), then open `http://127.0.0.1:8770/episodes/22-pomodoro-timer/`. Alternatively run `python -m http.server 8770 --bind 127.0.0.1` from the root. Serve over HTTP: ES modules do not reliably run by double-clicking a file.

Each episode keeps its runtime source, illustration assets and required vendor files locally. Previous/next and portfolio links expect the full repository layout.

## Read the code

- `index.html`: semantic content and labelled controls.
- `style.css`: responsive layout, light/dark tokens, keyboard focus and motion preference.
- `script.js`: this lesson’s behavior; read this after the markup.
- `common.js`: theme and small shared helpers, copied locally for portability.
- `logic.js`: pure functions for edge cases; shared tests live at repository root.

## Practice and verification

Apply 1 minute, Start, Pause, Resume, Reset; reject 0/121/fractional minutes.

Tanglish: First result-ai run panni paarunga. HTML structure, CSS layout, JavaScript state nu separate-aa understand pannunga. Oru value maathi, expected result-oda compare pannunga.

## Boundaries

Timer is for a single open page; closing or reloading resets it. No notification or background service.

Every visible contact, account, reward, price and weather state is a demo unless explicitly identified as a live provider response. See `CREDITS.md`. Video preparation is deferred until the core code review is complete.
