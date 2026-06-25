---
status: active
owner: "[IBE]"
last-reviewed: 2026-06-25
decision-log: ibe-decision-log/DECISIONS.md#ibe-marketing
---

# Content TODO — ibe-marketing go-live

These are the content gaps that need a human (Tyler) before, or shortly after, the public
launch of `ibe.engineering`. The site is structurally complete and builds green; everything
below is real content/credentials that code can't invent. Each item is wired with a clearly
marked `TODO(Tyler)` placeholder in the source so nothing renders as a broken link.

## Before go-live (recommended)

- [ ] **Legal review of Privacy + Terms.** `src/pages/privacy.astro` and `src/pages/terms.astro`
  now carry real baseline policies (PostHog disclosure, no-sale, NH governing law, site-use vs.
  engagement distinction). They were drafted to be honest and reasonable, **not** reviewed by
  counsel. Have a lawyer confirm before/just after launch. Update the "Last updated" date if edited.
- [ ] **Confirm PostHog disclosure matches reality.** Privacy policy states we use PostHog with a
  cross-subdomain cookie on `.ibe.engineering` and no ad trackers. Confirm that's still accurate.

## Content to supply (no broken links until then)

- [ ] **LinkedIn URL.** Footer has a ready-to-enable LinkedIn link, commented out
  (`src/components/Footer.astro`). Supply the company URL and uncomment.
- [ ] **Integrat3D Studio screenshot.** `/toolbox` has a labeled placeholder
  (`src/pages/toolbox.astro`). Drop a real screenshot into `public/images/` and reference it.
- [ ] **Portfolio / selected work.** `/services` has 3 placeholder project tiles
  (`src/pages/services.astro`). Replace with real project photos/case-study names when cleared
  to publish.
- [ ] **Founder portrait + PE/bio.** `/about` has a portrait placeholder and a `TODO` for PE
  license details + a fuller professional bio (`src/pages/about.astro`).
- [ ] **Social-proof band.** Home page band currently shows ASHRAE / ACE Mentor NH + two
  "Your project here" placeholders (`src/pages/index.astro`). Swap for real client/partner logos
  or named projects when cleared.

## Optional enhancements

- [ ] **Inline contact form.** `/contact` uses a mailto flow today (works at launch). To add an
  inline form, drop a Formspree/Web3Forms endpoint into the staged `TODO` in
  `src/pages/contact.astro`.

## Deliberate decisions (not gaps — change only if intent changed)

- **`/toolbox` shows only Integrat3D Studio as "Live".** The other public-tier catalog tools
  (PDF Importer, Submittal-to-Family, SmartDocuments) are forced to "Coming soon" via the
  `LIVE_ON_MARKETING` allowlist in `src/pages/toolbox.astro`, even though the live catalog marks
  them live. This is intentional per Tyler's 2026-06-17 walkthrough — only advertise what's
  self-serve-ready. Add an id to that set to advertise another tool as live.
- **Pricing is directional** (no dollar figures), per Tyler.
- **`/aec-os` is unlinked** from nav and footer ("save it, hide it") but still builds and is
  reachable by direct URL.
