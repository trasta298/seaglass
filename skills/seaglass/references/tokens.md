# Tokens

Values live only in `seaglass.css`; this file lists names and when to use them. Every color is defined with `light-dark()`, so one token works in both themes.

## Color

Every color is one of seven glass hues (plus `--shore` for the page) in one of a few roles. Never write a raw color; if a need isn't covered, pick a hue and a role and ask before adding a token.

### Hues

Each is a single OKLCH value; roles derive from it with relative color syntax, so light and dark keep the same relationships.

| Hue | Beach glass | Roles it plays |
|---|---|---|
| `--shore` | Sea mist | Page background |
| `--stone` | Grey glass | Text, neutral panes, shadows, milk glass |
| `--sea` | Sea green (the most common) | Water film, edges, success, focus, sea glass |
| `--aqua` | Aqua | Info and progress (shifted toward blue), avatar |
| `--amber` | Brown bottle glass | Warning, avatar |
| `--lavender` | Sun-purpled glass | Avatar only |
| `--cobalt` | Cobalt (rare) | Actions and selected state |
| `--coral` | Red (rarest) | Danger only |

### Roles

**Solid** — marks, status text, links. `--accent` (cobalt), `--success` (sea), `--warning` (amber), `--danger` (coral), `--info` (aqua), `--progress-c` (= info), `--focus` (= success). `--accent-fill` is the softer cobalt for filled controls (checked check/radio/switch, slider fill); `--on-accent` is the check mark and radio bead on it. Progress bars soften their fill the same way in light mode.

**Glass** — small floating pieces. Each sets `--tint` to one of these; `--ink` is computed from it.

| Token | Used by |
|---|---|
| `--glass-cobalt` | Primary buttons, pressed chips |
| `--glass-milk` | Default and secondary buttons, chips, inputs and selects (via `--field`), `.input-affix`, `.composer`, dropzone, toasts |
| `--glass-sea` | `.tabs`, tooltips (sea avatars use a stronger sea so they weigh the same as the other avatars) |
| `--glass-coral` | Danger buttons |
| `--glass-aqua`, `--glass-amber`, `--glass-lavender` | Avatars |
| `--glass-stone` | Avatar with no `data-glass` |
| `--field` | Input and select background: `--glass-milk` at 86% |

`--ink` keeps the glass's hue: a deep shade in light mode (navy on cobalt, green on sea, red-brown on coral) and a pale shade in dark mode. On tinted glass, text uses `--ink`, secondary text 82% of it, icons and placeholders 70%; never `--text-muted`. Ghost buttons take the ink of the glass they sit on, or `--text` on neutral panes. Don't put `--glass-*` on cards or other large panes.

**Neutral** — panes, text and light.

| Token | Use for |
|---|---|
| `--bg`, `--bg-image` | Page background (shoreline gradient). Set on `body` already. |
| `--text`, `--text-muted` | Body text, secondary text on neutral panes |
| `--surface`, `--surface-solid` | Cards (frosted / opaque) |
| `--surface-pop` | Menus, select picker, dialogs, sheets |
| `--surface-raised` | Raised white glass: current tab / nav item / page. Inside tabs it works like a segmented control: the raised piece and full-strength ink mark the selection |
| `--surface-2`, `--surface-2-solid` | Water film: hover on bare items, skeleton (solid for reduced transparency) |
| `--well`, `--well-shadow` | Recessed tracks: unchecked check/switch, slider rail, inline code, `kbd` |
| `--knob` | Glass bead: switch knob, slider thumb |
| `--border` | Edge light on glass |
| `--control-border` | Border of checkbox, radio, switch, `kbd`, empty mark |
| `--divider` | Hairlines between rows |
| `--sheen` | The wet sheen on hover and in skeletons |
| `--lens`, `--lens-fill` | Pressed lens state |
| `--shadow-c`, `--shadow-card`, `--shadow-pop`, `--scrim` | Depth and dialog backdrop |

`data-tone="success|warning|danger|info"` sets `--tone` for `.badge`, `.callout` and `.stat-delta` (any other value, e.g. `neutral`, falls back to `--text-muted`; a callout without a tone is info); `.menu-item[data-tone="danger"]` uses `--danger`.
`data-glass="aqua|sea|amber|lavender"` colors `.avatar`; no attribute means grey glass.

## Shape

| Token | Use for |
|---|---|
| `--r-card` | Cards, dialogs, dropzone, empty mark |
| `--r-menu` | Menus, select picker |
| `--r-btn` | Buttons, chips, tabs, nav items, pages, toasts |
| `--r-field` | Inputs, selects |
| `--r-badge` | Badges, tooltips |
| `--r-check` | Checkboxes |
| `--r-box` | Text boxes with even corners: callouts, code blocks |
| `--r-item` | Items inside menus and pickers, skeleton lines |

The `--r-*` pebble radii are point-symmetric; if you need a new size, keep the pattern `a b a b / c d c d`.

## Type

- `--font-body` (Zen Maru Gothic), `--font-code`
- `--fw-body`: 400 in light, 500 in dark (thin strokes lose contrast on dark glass)
- Sizes, small to large: `--fs-xs`, `--fs-s`, `--fs-ui` (controls, menus, callouts), `--fs-m` (body), `--fs-l`, `--fs-xl`, `--fs-2xl`, `--fs-3xl` (the last two fluid)
- Use `.amount` for money and counts (tabular figures, bold, no wrap)

## Space

`--space-1` … `--space-8`, a step scale from tight (inside controls) to section spacing.

Layout helpers take a local `--gap` and `--min` (not inherited): `.stack`, `.row` (`data-justify="between|end"`), `.grid` (`--min` column width).

## Motion

- `--dur` for color/opacity, `--dur-move` for movement
- `--ease` for most transitions, `--spring` for knobs, tab indicator and chevrons
- Texture: `--frost` (per theme), `--grain` / `--grain-o` (page grain overlay)
