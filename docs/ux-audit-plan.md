---
status: active
owner: "[IBE]"
last-reviewed: 2026-06-25
decision-log: ibe-decision-log/DECISIONS.md#ibe-marketing
---

# UX-audit remediation plan — ibe-marketing

## Context

A UX/UX-consistency audit of `ibe.engineering` (June 2026) produced two rounds of fixes,
originally on a branch `ux-audit-fixes`. That branch was never pushed to GitHub and was lost
(not present in any clone, worktree, stash, or the remote as of 2026-06-25). This plan and the
work alongside it are a **faithful rebuild from the decision-log record** of those two rounds,
landed on a fresh `ux-audit-fixes` branch off `main` (which was still at the June-9 pre-audit
state, PR #13).

Scope is the **marketing repo only**. App-side items (real login/sign-up UX, in-product tool
entry, the SmartDocuments product blurb, the AEC-OS desktop binary/download, in-app pricing)
are handed off to `ibe-toolbox`.

## What shipped in this rebuild

**Consistency spine**
- One CTA vocabulary everywhere: **"Open the Toolbox"** → the app
  (`toolbox.ibe.engineering/toolbox`); **"Talk to our engineers"** → services (mailto). Removed
  all "Login" / "Create account" / "Sign in" CTAs (these also violated the repo's own rule).
- One shared card system (`.card` primitive in `base.css`); red-oval signature is hero-only.
- Active-nav `aria-current="page"`; `prefers-reduced-motion` honored; `:focus-visible` retained.

**Tokens** (synced to canonical `docs/design-tokens.md`)
- `--color-rule` `#e5e5e5 → #d4d4d4` (card/column borders were invisible).
- `--color-surface-alt` `#f7f7f7 → #ebebeb` (white→gray section transition was invisible).
- Added missing `--s-5` / `--s-10` (services/about referenced them → margins silently collapsed).

**Header** — dropped AEC-OS from nav (page kept, unlinked); single "Open the Toolbox" CTA;
Contact repointed to `/contact`; logo alt text consistency fix.

**Footer** — added an "Explore" nav column; single tagline; Legal column (Privacy/Terms);
LinkedIn staged (commented) pending a real URL.

**Pages**
- **Home** — closing CTA fixed to "Open the Toolbox"; routing cards link to `/services` & `/toolbox`
  with explicit affordance; social-proof band (placeholder).
- **/toolbox** — reframed: only Integrat3D Studio "Live" (allowlist override of catalog), others
  "Coming soon"; removed AEC-OS team-tier + Roadmap (fixed overflow); added the "missing 20%"
  vision section + a pricing section ("Pay per project — only when you export", directional);
  2-up tools grid; "Open in Toolbox" deep link on the live tool; screenshot placeholder;
  higher-level FAQ (AEC-OS Q dropped); enriched SmartDocuments blurb.
- **/services** — broken capabilities-PDF link → mailto; added a "Selected work" portfolio
  placeholder section.
- **/aec-os** — softened the present-tense native-desktop claim; added a tier-comparison table;
  fixed CTAs. Page is unlinked from nav/footer but still builds.
- **/about** (new) — founder Tyler Wilson, ASHRAE/ACE; red oval on "engineers"; dropped
  "coordination platform" phrasing; PE + full bio left as TODO.
- **/contact** (new) — real contact details + mailto contact flow (Formspree staged as TODO).

**Policies** — `/privacy` and `/terms` rewritten from "in progress" stubs into real baseline
policies (PostHog / no-sale / NH governing law). Pending legal review — see `CONTENT-TODO.md`.

**Catalog** — committed fallback (`src/data/tool-catalog.fallback.json`) refreshed from the live
`toolbox.ibe.engineering/api/tool-catalog` (added SmartDocuments + IBE Focus).

## Verification

- `astro build` green — 8 pages.
- No console errors; all internal links return 200 (no 404s); active-nav verified; `/toolbox`
  status override verified (only Integrat3D Studio "Live").

## Next

- Tyler supplies content per [`CONTENT-TODO.md`](CONTENT-TODO.md); legal review of policies.
- App-side audit items remain owed to `ibe-toolbox`.
- Merge to `main` → GitHub Pages auto-deploys (go-live).
