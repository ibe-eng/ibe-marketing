# IBE Design Tokens

| Field | Value |
| --- | --- |
| Date | 2026-05-24 |
| Status | Canonical source-of-truth for IBE brand tokens |
| Audience | Any IBE repo that needs color / typography / spacing values |
| Scope | Tokens shared across the marketing site, the daemon UIs (capture tray + dictation overlay), the Toolbox web hub, and future products |

## Why This Doc Exists

Brand tokens (colors, fonts, spacing) were being copy-pasted into every
repo that needed them. Two problems followed:

1. When the brand evolved, downstream repos drifted because nobody
   knew where the canonical values lived.
2. New repos copied an existing repo's snapshot, perpetuating
   whichever drift was already in flight.

This document is the canonical source. The marketing site's
`src/styles/tokens.css` is the runtime form of the same values. Every
other repo points back at this doc.

## Color Tokens

### Primary brand

| Token | Hex | RGBA | Usage |
| --- | --- | --- | --- |
| `ibe-red` | `#ff0000` | `(255, 0, 0, 255)` | The brand red. Used on the wordmark's "3D" accent, recording indicators, primary CTAs, the relay-down banner, and any other "this is IBE" affordance. |
| `ibe-red-soft` | `rgba(255, 0, 0, 0.08)` | — | Background tint behind selected items, mention chips, etc. |
| `ibe-white` | `#ffffff` | — | Text on dark surfaces and inside the red accent. |
| `ibe-ink` | `#111111` | — | Primary text on white in the marketing site. |
| `ibe-ink-muted` | `#555555` | — | Secondary text on white. |
| `ibe-rule` | `#e5e5e5` | — | Hairline rules / dividers on white. |

### Dark surfaces (daemon UIs)

These tokens describe the dark theme used by the IBE Capture daemon's
tray + overlay surfaces. The marketing site does not use them today.

| Token | Hex | Usage |
| --- | --- | --- |
| `ibe-bg` | `#0f1419` | Near-black with a navy hint. Background for the dictation overlay + save dialog + recording indicator. |
| `ibe-surface` | `#1a2128` | Slightly lighter dark. Inputs, cards inside the dark surface. |
| `ibe-border` | `#2a3340` | Subtle border for inputs and chips inside the dark surface. |
| `ibe-fg` | `#ffffff` | Text on dark surfaces. |
| `ibe-tail` | `#6c7a89` | Muted slate for placeholders + secondary text on dark. |
| `ibe-commit` | `#10b981` | Emerald flash on successful commit (paste accepted, save successful). |

### Marketing-site light surfaces

| Token | Hex | Usage |
| --- | --- | --- |
| `ibe-surface-alt` | `#f7f7f7` | Light card / section background on the marketing site. |
| `ibe-surface-dark` | `#000000` | Marketing-site dark-surface accent (full black, distinct from `ibe-bg`). |

## Typography

### Type family

| Token | Value | Notes |
| --- | --- | --- |
| `ibe-font-sans` | `Onest, system-ui, -apple-system, 'Segoe UI', sans-serif` | Onest is the real brand face (Google Fonts). Segoe UI Variable is the daemon UIs' fallback because Tk on Windows can't load custom `.ttf` without ImageFont plumbing. |
| `ibe-font-tk-fallback` | `Segoe UI Variable` (or `Segoe UI`) | Daemon-side Tk fonts. Use the variable form first; Tk silently falls back to non-variable Segoe UI on older Windows. |

### Weights

| Token | Value |
| --- | --- |
| `ibe-fw-regular` | `400` |
| `ibe-fw-medium` | `500` |
| `ibe-fw-bold` | `700` |

### Sizes (marketing)

| Token | Value |
| --- | --- |
| `ibe-fs-hero` | `clamp(2.5rem, 6vw, 4.5rem)` |
| `ibe-fs-h2` | `clamp(1.75rem, 3vw, 2.5rem)` |
| `ibe-fs-h3` | `1.25rem` |
| `ibe-fs-body` | `1rem` |
| `ibe-fs-small` | `0.875rem` |
| `ibe-fs-stat` | `clamp(2.5rem, 5vw, 4rem)` |

### Line height

| Token | Value |
| --- | --- |
| `ibe-lh-tight` | `1.1` |
| `ibe-lh-snug` | `1.3` |
| `ibe-lh-body` | `1.6` |

## Spacing (4px base)

| Token | Value |
| --- | --- |
| `ibe-s-1` | `0.25rem` (4px) |
| `ibe-s-2` | `0.5rem` (8px) |
| `ibe-s-3` | `0.75rem` (12px) |
| `ibe-s-4` | `1rem` (16px) |
| `ibe-s-6` | `1.5rem` (24px) |
| `ibe-s-8` | `2rem` (32px) |
| `ibe-s-12` | `3rem` (48px) |
| `ibe-s-16` | `4rem` (64px) |
| `ibe-s-24` | `6rem` (96px) |

## Layout

| Token | Value |
| --- | --- |
| `ibe-container-max` | `1180px` |
| `ibe-gutter` | `clamp(1rem, 4vw, 2rem)` |

## Radius and Motion

| Token | Value |
| --- | --- |
| `ibe-radius-sm` | `4px` |
| `ibe-radius-md` | `8px` |
| `ibe-transition-fast` | `150ms ease-out` |

## Logo / Asset References

The IBE horizontal wordmark lives at `ibe-marketing/public/ibe-logo-horiz.png`.
The daemon UIs vendor a copy at
`ibe-capture/src/ibe_capture/dictate/assets/ibe_logo_horiz.png`. Keep
those two files in sync; the marketing one is the source.

The caveman mark and 10 animated help SVGs live in `ibe-toolbox/public`.

## Runtime Forms

This markdown is the source of truth. The runtime forms are:

| Repo | File | Purpose |
| --- | --- | --- |
| `ibe-marketing` | `src/styles/tokens.css` | CSS custom properties for the marketing site. |
| `ibe-capture` | `src/ibe_capture/brand.py` | Python constants for the daemon UIs (Tk overlays, tray icon, save dialog). |
| `ibe-toolbox` | (TBD — likely a `packages/ui-tokens` package) | TypeScript / CSS tokens for the web hub. |

When a token here changes, update the runtime forms in the same commit.
Drift between this doc and the runtime forms is a brand bug.

## Resolved Drift

As of 2026-05-24 the canonical IBE red is `#ff0000`. The marketing
site's `tokens.css` already uses this value. The daemon UIs
(`ibe-capture/src/ibe_capture/brand.py`) were previously on `#e3242b`
and have been flipped to match.

When a new repo needs the brand red, it pulls from this doc — there is
only one value.

## How To Consume This Doc From Another Repo

Add a header at the top of the consuming repo's README:

```markdown
## Brand Tokens

This repo's brand tokens (colors / fonts / spacing) mirror the
canonical IBE design-tokens doc at:

  C:/src/ibe-marketing/docs/design-tokens.md

(or https://github.com/ibe-eng/ibe-marketing/blob/main/docs/design-tokens.md
once published). If a token here disagrees with that doc, the doc wins
— please open a PR there first, then update this repo in the same
change.
```

Then point the runtime form (`brand.py`, `tokens.css`, etc.) at the
exact hex values listed in this doc.
