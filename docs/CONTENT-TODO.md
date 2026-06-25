---
status: active
owner: "[IBE]"
last-reviewed: 2026-06-25
decision-log: ibe-decision-log/DECISIONS.md#ibe-marketing
---

# Content TODO — ibe-marketing go-live

The site is structurally complete and builds green. This tracks the real content/credentials
that code can't invent. Every outstanding item is wired with a clearly marked `TODO(Tyler)`
placeholder in the source, so nothing renders as a broken link.

## Filled this round (verified facts, not invented)

- **Founder bio** (`/about`) — expanded with verified facts: T.R.W. Design, LLC named as the
  practice behind IBE; coordinated multi-trade Revit work described; **ACE Mentor NH executive
  board / treasurer** role added (confirmed from Tyler's own email). PE intentionally **omitted**
  (see below).
- **Legal entity** — Privacy + Terms now state IBE is "a brand of T.R.W. Design, LLC."
- **Footer** — ACE line updated to "ACE Mentor NH — Treasurer."
- **Home social-proof band** — the "Your project here" placeholders were removed; it now shows
  true affiliations/capabilities (ASHRAE, ACE Mentor NH, Revit-native BIM, HVAC + Plumbing).

## Still needs you

- [ ] **PE license.** Deliberately not claimed anywhere — your notes show you were sitting the
  PE exam on 2026-06-08, so asserting "PE" publicly could be false. Once licensed, add it to the
  `/about` bio (there's a `TODO` there).
- [ ] **Legal review of Privacy + Terms.** Real baseline policies (PostHog, no-sale, NH law);
  honest but not counsel-reviewed.
- [ ] **LinkedIn URL.** Couldn't verify one — no link in your email signature and no company
  page found; a personal profile turned up in search but I won't publish an unconfirmed URL.
  Footer has a ready-to-enable link, commented out (`src/components/Footer.astro`) — paste the
  real URL and uncomment.
- [ ] **Real images** (can't be invented):
  - Integrat3D Studio screenshot — placeholder on `/toolbox`.
  - Founder portrait — placeholder on `/about`.
  - Portfolio project photos — placeholders on `/services` (captions are representative work
    types, not named clients; swap in real projects/photos when cleared to publish).
- [ ] **Real client/partner logos** for the home social-proof band, when cleared to publish.

## Optional enhancements

- [ ] **Inline contact form.** `/contact` uses a working mailto flow today. To add an inline
  form, drop a Formspree/Web3Forms endpoint into the staged `TODO` in `src/pages/contact.astro`.

## Deliberate decisions (not gaps — change only if intent changed)

- **`/toolbox` shows only Integrat3D Studio as "Live".** Other public-tier catalog tools (PDF
  Importer, Submittal-to-Family, SmartDocuments) are forced to "Coming soon" via the
  `LIVE_ON_MARKETING` allowlist in `src/pages/toolbox.astro` — intentional per the 2026-06-17
  walkthrough. Add an id to that set to advertise another tool as live.
- **Pricing is directional** (no dollar figures).
- **`/aec-os` is unlinked** from nav/footer ("save it, hide it") but still builds and is
  reachable by direct URL.
