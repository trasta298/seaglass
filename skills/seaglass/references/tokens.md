# Tokens

Values live only in `seaglass.css`; this file lists names and when to use them. Every color is defined with `light-dark()`, so one token works in both themes.

## Color

| Token | Use for |
|---|---|
| `--bg`, `--bg-image` | Page background (shoreline gradient). Set on `body` already. |
| `--surface` | Frosted glass: cards, buttons, toasts |
| `--surface-solid` | Opaque fallback of `--surface` |
| `--surface-pop` | Floating glass: menus, select picker, dialogs, sheets |
| `--surface-2` | Water film: hover on bare items, skeleton |
| `--track` | Sea-green glass behind tabs and segmented controls |
| `--surface-raised` | Raised white glass: current tab / nav item / page |
| `--well`, `--well-shadow` | Recessed tracks: unchecked check/switch, chip, slider rail |
| `--field` | Input background: pale sea-green glass, so fields read as their own material |
| `--knob` | Glass bead: switch knob, radio bead, slider thumb |
| `--lens` | Shadow stack for the pressed lens state |
| `--border` | Glass edge |
| `--control-border` | Border of form controls |
| `--divider` | Hairlines between rows |
| `--text`, `--text-muted` | Body text, secondary text |
| `--accent`, `--on-accent`, `--accent-edge` | Actions and selected control state only |
| `--danger`, `--on-danger` | Destructive actions, failures |
| `--success`, `--warning`, `--info` | Status (badges, callouts, stat deltas) via `data-tone` |
| `--progress-c` | Progress bars, spinners |
| `--focus`, `--focus-ring` | Focus indication (sea green) |
| `--tooltip-bg`, `--tooltip-fg` | Tooltips |
| `--scrim` | Dialog backdrop |
| `--shadow-c`, `--shadow-card`, `--shadow-pop` | Depth for cards and floating layers |

`data-tone="success|warning|danger|info"` sets `--tone` for `.badge`, `.callout`, `.stat-delta` and `.menu-item`.
`data-glass="aqua|olive|amber|lavender"` colors `.avatar`; no attribute means white glass.

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
