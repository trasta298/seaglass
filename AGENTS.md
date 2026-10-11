# Seaglass repo

This repo is the source of the Seaglass design system. Apps consume it; agents building those apps load `skills/seaglass/`.

## Files

- `seaglass.css` — the single source of truth for tokens and components. Edit here first.
- `seaglass.js` — only behaviors CSS can't do: tab indicator, range fill, switch/checkbox motion replay.
- `catalog.html` — every component in every state, plus a sample screen. Must render from `seaglass.css` + `seaglass.js` alone; its inline `<style>` is page chrome only.
- `skills/seaglass/` — the agent-facing skill. `SKILL.md` holds the rules; `references/` holds markup and token names.
- `docs/screenshots/` — README images, captured from `catalog.html`.

## When changing the system

- Any change to a class, attribute or token must be reflected in `catalog.html` and in `skills/seaglass/references/` in the same commit. Token values are never copied into the docs; they name tokens only.
- Check every change against the four rules in `skills/seaglass/SKILL.md` (frosted glass, tumbled corners, rarity is importance, touch makes it wet).
- Verify both themes. Render the catalog headless in light and dark and look at the result:
  `google-chrome --headless=new --screenshot=out.png --window-size=1280,2000 --blink-settings=preferredColorScheme=1 file://$PWD/catalog.html` (`=0` for dark).
- Keep `prefers-reduced-motion` and `prefers-reduced-transparency` fallbacks working when adding motion or blur.
- No build step, no dependencies. Plain CSS and vanilla JS.
