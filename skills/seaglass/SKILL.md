---
name: seaglass
description: Build or change web UI with the Seaglass design system (frosted, tumbled sea-glass look, pure CSS classes, no UI library). Use whenever a project loads seaglass.css or asks for Seaglass styling — writing pages, components, forms, dialogs, or reviewing UI for consistency.
---

# Seaglass

Seaglass is a plain-CSS design system: tokens and component classes live in `seaglass.css`, three small behaviors live in `seaglass.js`. You write semantic HTML with these classes and attributes. Do not add a UI library, Tailwind, or per-component CSS that restates what a class already does.

## Setup in a page

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;500;700&display=swap">
<link rel="stylesheet" href="seaglass.css">
<script src="seaglass.js" defer></script>
```

- Theme follows the OS. Force it with `<html data-theme="light">` or `data-theme="dark"`; remove the attribute to go back to auto.
- `seaglass.js` wires up `.tabs` indicators, `.range` fill and the switch/checkbox motion on load. If your framework renders `.tabs` or `.range` later, call `seaglass.init(rootElement)` after mounting.

## The four rules

Every decision should be explainable by one of these. When a request conflicts with them, follow the request and say which rule it bends.

1. **Surfaces are frosted glass.** Cards, buttons, inputs, menus, dialogs and toasts blur what is behind them and carry a fine frost texture. While nothing is touched, draw no highlights or reflections; only edges may glow faintly.
2. **Corners are tumbled pebbles.** Radii are slightly uneven but point-symmetric (top-left = bottom-right). Use the `--r-*` tokens; never write a single plain radius on a glass element. Boxes that hold running text (`.callout`, code blocks) use even corners (`--r-box`) for readability.
3. **Rarity is importance.** Common beach colors (grey, white, sea green) are for surfaces and dividers; every color is a hue in a role (see `references/tokens.md`). Rare cobalt is only for actions and selected control state: the primary button and pressed chips are cobalt glass (`--glass-cobalt`), and `--accent` marks checked checks/switches, slider fill, the select checkmark, a drag-over dropzone and links. The rarest, red (`--danger`), is only for destructive actions and failures. Location/selection in navigation (current tab, nav item, page) uses raised white glass (`--surface-raised`), not cobalt. Progress bars and standalone spinners use `--progress-c`; a loading button's spinner follows its ink. Focus uses sea green (`--focus`).
4. **Touch makes it wet.** Hover makes glass clearer with a wet sheen; where there is no glass, a thin water film (`--surface-2`) appears. While pressed, knobs, beads and checks become a clear lens. Buttons sink 1px instead of scaling.

## Choosing components

| Need | Use |
|---|---|
| Group content | `.card` (one level; don't nest cards) |
| Main action | `.btn[data-variant="primary"]` — at most one per view area |
| Other actions | `secondary` (default weight), `ghost` (low emphasis, toolbars), `danger` (destructive only) |
| Icon-only action | `.btn[data-icon]` + `aria-label` + `data-tooltip` |
| Overflow actions | `.menu[popover]` anchored to a button |
| Filter toggles / removable tags | `.chip[aria-pressed]` / `.chip` with `button[data-remove]` |
| Text input | `.field` > `label` + `.input` (+ `.hint`); `.input-affix` for prefix/icon |
| Quick entry pinned to the screen | `.composer` (one per screen) |
| Pick one of few (≤5) | `.check` radios; segmented view switch → `.tabs` |
| Pick one of many | `select.input` |
| On/off that applies immediately | `.switch` |
| Several independent options | `.check` checkboxes |
| Number in a range | `input.range` |
| Status label | `.badge[data-tone]` |
| Person | `.avatar[data-glass]` |
| Inline message | `.callout[data-tone]` |
| Confirmation | `dialog.dialog` |
| Longer editing | `dialog.sheet` |
| Result of an action | `.toast` (with undo where possible) |
| Nothing to show | `.empty` with one primary action |
| Rows of items | `.list` (with `.meta`); tabular data → `.table` in `.table-scroll` |
| Label–value pairs, key numbers | `.kv`; `.stat` |
| App navigation | `.nav` (side), `.breadcrumb`, `.pagination` |
| Expandable detail | `details.accordion` |
| Waiting | `.progress` (known or unknown length), `.spinner`, `.skeleton` |
| Separating groups inside a card | `.divider` |
| Code | `pre.code` |

Full markup for every component, with states: `references/components.md`. Token names and when to use each: `references/tokens.md`. The live catalog is `catalog.html` in the Seaglass repo; open it or screenshot it when unsure how something should look. Classes defined in the catalog's inline `<style>` (`.app-grid`, `.transfer`, `.swatch` …) are page chrome, not part of the system.

## Don'ts

- Don't write raw colors, radii, shadows or durations; use tokens. If a token is missing, ask before inventing one.
- Don't use cobalt for decoration, headings, icons, avatars, or "current location". Don't use red for anything that isn't destructive or a failure.
- Don't use `--success`/`--warning`/`--danger`/`--info` to tell people apart; avatars use `data-glass` (glass tints, never the solid status tokens).
- Don't add glossy gradients, glows or reflections on resting elements.
- Tinted glass (`--glass-*`) is only for small floating pieces: buttons, chips, tabs, inputs, the input bar, the dropzone, tooltips, toasts, avatars. Cards, menus, dialogs and sheets stay neutral. Text and icons on tinted glass use `--ink`, not `--text`/`--text-muted`.
- Don't scale buttons on press, and don't add bouncy motion to things the user didn't touch. Motion answers an action.
- Don't remove focus styles. Don't override `.input:focus` with a cobalt ring.
- Don't nest frosted cards inside frosted cards; inside a card use `.divider`, `.list`, `.kv`, or `.callout`.
- Respect `prefers-reduced-motion` and `prefers-reduced-transparency`; `seaglass.css` already handles both, so don't override them.

## Writing UI copy

Match the app's language (Japanese apps: 「支出を追加」, not 「送信」). Name actions by what happens and keep the same verb in the toast (「支出を追加しました」). Errors say what went wrong and how to fix it, without apologizing.
