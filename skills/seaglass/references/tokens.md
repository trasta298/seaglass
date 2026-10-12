# Tokens

Values live only in `seaglass.css`; this file lists names and when to use them. Every color is defined with `light-dark()`, so one token works in both themes.

## Color

| Token | Use for |
|---|---|
| `--bg`, `--bg-image` | Page background (shoreline gradient). Set on `body` already. |
| `--surface` | Neutral frosted glass: cards |
| `--surface-solid` | Opaque fallback of `--surface` |
| `--surface-pop` | Floating glass: menus, select picker, dialogs, sheets |
| `--surface-2` | Water film: hover on bare items, skeleton |
| `--surface-raised` | Raised white glass: current tab / nav item / page |
| `--well`, `--well-shadow` | Recessed tracks: unchecked check/switch, slider rail, inline code, `kbd` |
| `--field` | Input background: milky sea-green glass (from `--glass-milk`). Inputs float like the tabs, with no outline |
| `--knob` | Glass bead: switch knob, radio bead, slider thumb |
| `--lens` | Shadow stack for the pressed lens state |
| `--border` | Glass edge |
| `--control-border` | Border of checkbox, radio, switch, `kbd`, empty mark |
| `--divider` | Hairlines between rows |
| `--text`, `--text-muted` | Body text, secondary text |
| `--accent`, `--on-accent` | Selected state of small controls and links (checked check/radio/switch, slider fill, select checkmark, drag-over dropzone border); `--on-accent` is the check mark and radio bead on it |
| `--danger` | Failures and destructive text (invalid fields, danger menu items, callouts) |
| `--success`, `--warning`, `--info` | Status (badges, callouts, stat deltas) via `data-tone` |
| `--progress-c` | Progress bars, spinners |
| `--focus` | Focus outline for keyboard navigation (sea green) |
| `--scrim` | Dialog backdrop |
| `--shadow-c`, `--shadow-card`, `--shadow-pop` | Depth for cards and floating layers |

### Tinted glass

Floating controls are pieces of tinted glass. Each sets `--tint`; `--ink` (a deep shade of the tint) is computed for text on it.

| Token | Used by |
|---|---|
| `--glass-cobalt` | Primary buttons, pressed chips (the action color, as glass) |
| `--glass-milk` | Default and secondary buttons, chips, inputs and selects (via `--field`), `.input-affix`, `.composer`, dropzone, toasts |
| `--glass-sea` | `.tabs`, tooltips |
| `--glass-coral` | Danger buttons |

`--ink` keeps the glass's hue at low lightness (deep navy on cobalt, deep green on sea, deep red-brown on coral). On tinted glass, text uses `--ink`, secondary text 82% of it, icons and placeholders 70%; never `--text-muted`. Ghost buttons take the ink of the glass they sit on, or `--text` on neutral panes.

Don't put `--glass-*` on cards or other large panes; they stay neutral frosted glass.

`data-tone="success|warning|danger|info"` sets `--tone` for `.badge`, `.callout` and `.stat-delta`; `.menu-item[data-tone="danger"]` uses `--danger`.
`data-glass="aqua|olive|amber|lavender"` colors `.avatar`; no attribute means neutral grey glass.

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
- Sizes: `--fs-xs` 12, `--fs-s` 13, `--fs-m` 15 (body), `--fs-l` 18, `--fs-xl` 24, `--fs-2xl`, `--fs-3xl` (fluid)
- Use `.amount` for money and counts (tabular figures, bold, no wrap)

## Space

`--space-1` 4 · `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 24 · `--space-6` 32 · `--space-7` 48 · `--space-8` 72

Layout helpers take a local `--gap` (not inherited): `.stack`, `.row` (`data-justify="between|end"`), `.grid` (`--min` column width).

## Motion

- `--dur` .22s for color/opacity, `--dur-move` .5s for movement
- `--ease` for most transitions, `--spring` for knobs, tab indicator and chevrons
- Texture: `--frost` (per theme), `--grain` / `--grain-o` (page grain overlay)
