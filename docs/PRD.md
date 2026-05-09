# IBE Marketing Site — PRD

**Domain:** ibe.engineering
**Repo:** github.com/ibe-eng/ibe-marketing
**Stack:** Astro static + GitHub Pages
**Scope:** 2 pages — `/` and `/toolbox`
**Author:** Claude Code, working from `CLAUDE.md` and Tyler's alignment answers (2026-05-02)

---

## 1. Problem Statement

Integrated Building Engineering (IBE) replaces TRW Design. The new site has to do two jobs the current trw-design.com B12 build does not:

1. Position IBE as **services + product** — the same engineering team now sells engineering work *and* a paid hub of pro-grade self-serve tools at `toolbox.ibe.engineering` (the **IBE Toolbox**).
2. Welcome a second audience — small-scale builders, remodelers, kitchen-and-bath designers, DIY-pros — without alienating the AEC firms who are still the core services buyer.

The cost of getting this wrong: services leads dry up if the site reads as a SaaS product page; Toolbox sign-ups stall if the site reads as a boutique consultancy. The site has to do both, on one screen, in two CTAs.

## 2. Goals

| # | Goal | How we'll know |
|---|---|---|
| G1 | Visitor can identify what IBE does within 5 seconds of landing | Hero headline + sub names both halves (engineering + Toolbox) |
| G2 | Two parallel CTAs above the fold — one for each audience | "Talk to our engineers" (services) + "Open Toolbox" (product, primary red) |
| G3 | Site is faster than trw-design.com on every Core Web Vital | Lighthouse Performance ≥ 95, LCP < 1.5s on 4G |
| G4 | Brand reads as IBE, not TRW, end-to-end | No "TRW" strings anywhere; logo, palette, wordmark consistent |
| G5 | Tyler can swap copy/images without a developer | Content lives in obvious places (`.astro` files, `public/images/`), no CMS required |

## 3. Non-Goals

| # | Non-goal | Why |
|---|---|---|
| NG1 | User accounts, login, or any auth UI | Lives on `toolbox.ibe.engineering`, separate repo |
| NG2 | Pricing page or billing of any kind | Toolbox pricing is unsettled; premature to publish |
| NG3 | Blog, case studies, CMS | No content velocity to justify the surface area |
| NG4 | Custom contact form with backend | GitHub Pages is static; `mailto:` is enough until volume justifies more |
| NG5 | Dark mode, animations beyond hover | Out of scope per CLAUDE.md; brand is already strong without motion |
| NG6 | AI-generated stock photography | Banned by brand; placeholders until Tyler delivers real BIM/Revit imagery |
| NG7 | Third-party widgets (chat, analytics, cookie banner) | Defer until needed; preserves zero-JS posture |

## 4. Audiences & Positioning

### Primary: AEC pros
Engineering firms, GCs, BIM coordinators running coordinated builds. They buy **engineering services** (HVAC, plumbing, BIM coordination, design estimating) and use **select Toolbox tools** to accelerate their own workflows.

### Secondary: small-scale builders & DIY-pros
Remodelers, kitchen-and-bath designers, residential builders, real-estate stagers. They cannot justify a full design team and won't learn Revit. They buy **the Toolbox** for permit-ready floor plans, framing plans, and Revit-ready outputs on demand.

### Positioning line
> **Engineered building design — and the tools to do it yourself.**
> Building engineering services for AEC firms. On-demand pro-grade tools for everyone else.

The wordmark itself does work here: **INTEGRAT3D** = Integrated + 3D, which carries the "coordination & 3D modeling" meaning visually. The "Integrated AI-assisted tools" meaning is carried in copy.

## 5. User Stories

### As an AEC pro evaluating IBE for a coordinated build
- I want to see real engineering deliverables (BIM, clash detection, design estimates) so I trust this isn't a SaaS-first company that does engineering as a side hustle.
- I want a fast path to talk to a human, so I can scope a project without filling out a form.
- I want to see credibility signals (ASHRAE, ACE Mentor) so I know this is a serious firm.

### As a small-scale builder who needs a permit-ready plan
- I want to see what the Toolbox produces (floor plans, framing plans, PDF sets, Revit bundles) so I know it solves my problem.
- I want a one-click path into the Toolbox so I'm not stuck in a marketing funnel.
- I want copy that doesn't assume I know what "BIM-LOD 350" means.

### As Tyler maintaining the site
- I want to swap the logo, hero copy, or service tiles by editing one file each.
- I want the build to deploy automatically on push to `main`.
- I want clearly-marked placeholders for imagery I haven't delivered yet.

## 6. Page Structure

### Page 1 — `/` (home)

| # | Section | Purpose | Content direction |
|---|---|---|---|
| 1 | **Header** | Nav + primary CTA always visible | Logo (white-red horiz on black bar), nav (Services • Toolbox • Contact), red "Open Toolbox" button right-aligned |
| 2 | **Hero** | 5-second positioning | Discipline tag · two-line headline with red oval underline on the operative word · supporting paragraph naming both audiences · two CTAs (red "Open Toolbox" primary, ghost "Talk to engineers" secondary) |
| 3 | **Problem stats** | Make the cost of bad coordination concrete | 3 large numbers + one-line captions: **$50K+ cost on $1M projects**, **5–15% schedule loss**, **3rd Toolbox stat** (proposal: "Hours to a permit-ready plan, not weeks") |
| 4 | **What we do** | The services-vs-product split, made concrete | 3 tiles: **Engineering Services** (BIM, coordination, design estimating) · **IBE Toolbox** (Floor Plan Builder live, more coming) · **Custom Integrations** (Revit MCP, project-specific automation) |
| 5 | **Why it works** | Outcomes, mixed across both legs | 4–6 outcome tiles: clash detection, faster schedules, coordinated 3D, permit-ready outputs, no Revit learning curve, used live in sales calls |
| 6 | **Founder block** | Trust + mission | Portrait placeholder · 3–4 sentence story · ASHRAE board + ACE Mentor of NH credibility line |
| 7 | **Closing CTA strip** | Last-chance conversion | "Plan Well. Build Well." tagline · same two CTAs · subtle red oval echo |
| 8 | **Footer** | Contact + legal | `info@ibe.engineering` · `(603) 521-2604` · NH service area · Privacy · Terms · "© 2026 Integrated Building Engineering" |

### Page 2 — `/toolbox`

| # | Section | Purpose | Content direction |
|---|---|---|---|
| 1 | Header | (same as home) | |
| 2 | **Toolbox hero** | Position the Toolbox specifically | "**IBE Toolbox** — pro-grade building tools, on demand. For AEC firms and small-scale builders alike." · single primary CTA "Open Toolbox" |
| 3 | **Tool tiles** | What's inside | 5 tiles: **Floor Plan Builder** (live), **Project Builder** (coming soon), **PDF Floor Plan Importer** (coming soon), **CONTAM Automation** (later), **Submittal-to-Family** (later). Each: name, status pill, 1-line outcome, what-it-produces line |
| 4 | **How it works** | Reduce activation anxiety | 3 numbered steps: (1) sign in, (2) start a project in any tool, (3) export plans / models / Revit bundles |
| 5 | **Pricing teaser** | Don't promise what's not built | "Pay per export, per project, or subscription — pricing finalizing. Open the Toolbox to see current options." |
| 6 | **CTA strip** | Same red strip as home | "Open the Toolbox" |
| 7 | Footer | (same as home) | |

## 7. Component Inventory

Built once, used on both pages:

| Component | Used on | Notes |
|---|---|---|
| `Base.astro` (layout) | All pages | Wraps every page; injects `<head>`, header, footer |
| `Header.astro` | All pages | Black bar, white-red horiz logo, nav, red CTA button |
| `Footer.astro` | All pages | Email, phone, NH service area, Privacy/Terms, copyright |
| `Hero.astro` | `/`, `/toolbox` | Slot-driven so each page passes its own headline + sub + CTAs |
| `RedOvalUnderline.astro` | Hero, closing CTA | Inline SVG, hand-drawn feel, scales with the word it underlines |
| `StatPanel.astro` | `/` | 3-up grid of large red numbers + caption |
| `Tile.astro` | What-we-do, tools, outcomes | Variant prop: `service \| tool \| outcome`. Status pill optional |
| `CtaStrip.astro` | Both pages | Closing-strip variant of dual-CTA pattern |
| `Button.astro` | Throughout | Variants: `primary` (red filled), `secondary` (ghost) |

## 8. Design Tokens

Lives in `src/styles/tokens.css`. All values are CSS custom properties on `:root`.

```css
:root {
  /* Color */
  --color-bg:           #FFFFFF;
  --color-ink:          #111111;
  --color-ink-muted:    #555555;
  --color-rule:         #E5E5E5;
  --color-surface-dark: #000000;   /* header bar */
  --color-surface-alt:  #F7F7F7;   /* problem-stats panel bg */
  --color-accent:       #FF0000;   /* primary red */
  --color-accent-ink:   #FFFFFF;

  /* Type — Onest, all weights from Google Fonts */
  --font-sans: 'Onest', system-ui, -apple-system, Segoe UI, sans-serif;
  --fw-regular: 400;
  --fw-medium:  500;
  --fw-bold:    700;

  --fs-hero:   clamp(2.5rem, 6vw, 4.5rem);
  --fs-h2:     clamp(1.75rem, 3vw, 2.5rem);
  --fs-h3:     1.25rem;
  --fs-body:   1rem;
  --fs-small:  0.875rem;
  --fs-stat:   clamp(2.5rem, 5vw, 4rem);

  --lh-tight:  1.1;
  --lh-snug:   1.3;
  --lh-body:   1.6;

  /* Space — 4px base */
  --s-1: 0.25rem;
  --s-2: 0.5rem;
  --s-3: 0.75rem;
  --s-4: 1rem;
  --s-6: 1.5rem;
  --s-8: 2rem;
  --s-12: 3rem;
  --s-16: 4rem;
  --s-24: 6rem;

  /* Layout */
  --container-max: 1180px;
  --gutter: clamp(1rem, 4vw, 2rem);

  /* Radius / motion */
  --radius-sm: 4px;
  --radius-md: 8px;
  --transition-fast: 150ms ease-out;
}
```

## 9. Folder Structure (target after build)

```
ibe-marketing/
  CLAUDE.md
  docs/
    PRD.md                      ← this file
    brand.md
    design-tokens.md
    reference-trw.md
  src/
    pages/
      index.astro
      toolbox.astro
    layouts/
      Base.astro
    components/
      Header.astro
      Footer.astro
      Hero.astro
      RedOvalUnderline.astro
      StatPanel.astro
      Tile.astro
      CtaStrip.astro
      Button.astro
    styles/
      tokens.css
      base.css
  public/
    CNAME                       ← contains "ibe.engineering"
    favicon.svg                 ← derived from ibe mark
    images/
      ibe_logo_horiz_black_red.png   ✓ already in place
      ibe_logo_horiz_white_red.png   ✓ already in place
      ibe_logo_vert_black_red.png    ✓ already in place
      ibe_logo_vert_white_red.png    ✓ already in place
  .github/
    workflows/
      deploy.yml
  astro.config.mjs
  package.json
  .gitignore
```

## 10. Requirements

### P0 — Must ship

- **R1** Astro project scaffolded with config for apex + custom-domain build (no base path).
- **R2** `Base.astro` layout wrapping every page with shared header + footer.
- **R3** `/` rendered with all 8 sections from §6 above, populated with real copy (placeholders only for imagery).
- **R4** `/toolbox` rendered with all 7 sections from §6 above.
- **R5** Onest loaded from Google Fonts, preconnected and `font-display: swap`.
- **R6** Design tokens file loaded once via `Base.astro`.
- **R7** Red oval underline rendered as inline SVG, sits behind the operative word in the hero.
- **R8** Logo files referenced from `public/images/` (white-red horiz on black header, black-red horiz wherever a light bg hosts the logo).
- **R9** Header CTA "Open Toolbox" links to `https://toolbox.ibe.engineering`.
- **R10** Secondary CTA "Talk to our engineers" is a `mailto:info@ibe.engineering` link with a sensible default subject (`?subject=Project%20inquiry`).
- **R11** Phone number `(603) 521-2604` is a `tel:` link in the footer.
- **R12** Footer includes credibility line: "ASHRAE board member · ACE Mentor of New Hampshire".
- **R13** Footer includes Privacy and Terms links — placeholder pages or `# TODO` anchors flagged in the PR.
- **R14** `public/CNAME` contains `ibe.engineering`.
- **R15** `.github/workflows/deploy.yml` builds and deploys Astro to GitHub Pages on push to `main`.
- **R16** Lighthouse Performance ≥ 95, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95 on both pages.
- **R17** No console errors. No 404s on any in-site link.
- **R18** Mobile breakpoints work cleanly down to 360px wide.
- **R19** All imagery placeholders are clearly labeled with what should go there (e.g., `<!-- IMAGE: isometric render — pipe coordination -->`).

### P1 — Nice to have

- **P1.1** `Privacy.astro` and `Terms.astro` stub pages with a "policy in progress" notice + email contact (instead of `# TODO` anchors).
- **P1.2** A subtle red-oval echo behind the closing CTA tagline.
- **P1.3** Open Graph + Twitter Card meta tags using the IBE logo + a generated 1200×630 social card.
- **P1.4** Sitemap (`sitemap.xml`) generated by Astro's official integration.
- **P1.5** `robots.txt` allowing all, with a sitemap reference.

### P2 — Future considerations (design for, don't build)

- **P2.1** A real lead form on `/` once volume justifies a backend or Formspree budget.
- **P2.2** A `case-studies/` collection if Tyler decides to publish project writeups.
- **P2.3** A subtle entry-animation on the hero (only after real imagery is in place).
- **P2.4** Localization scaffolding (currently English-only).

## 11. Acceptance Criteria

**Functional**
- [ ] Both pages render with no console errors at `localhost:4321`.
- [ ] Every nav link resolves (Services anchor on `/`, `/toolbox`, Contact = mailto).
- [ ] "Open Toolbox" buttons (header + hero + closing strip) all link to `https://toolbox.ibe.engineering`.
- [ ] "Talk to our engineers" CTA opens default mail client with `info@ibe.engineering` and a prefilled subject.
- [ ] Footer email/phone are real links, not plain text.
- [ ] Logo renders correctly in header (white-red on black) and at correct aspect ratio.

**Visual**
- [ ] Hero word with red oval underline renders crisply at every viewport width down to 360px.
- [ ] Red CTA buttons are exactly `--color-accent` (#FF0000), not browser default red.
- [ ] No font flash — Onest preloaded, fallback metrics-matched.
- [ ] Stat panel uses `--fs-stat` + red color and remains readable at mobile widths.

**Performance / a11y**
- [ ] Lighthouse mobile: Performance ≥ 95 on both pages.
- [ ] All interactive elements keyboard-reachable in a sensible tab order.
- [ ] Color contrast passes WCAG AA on every text/background pair.
- [ ] All `<img>` tags have meaningful `alt` (or `alt=""` for decorative).

**Deploy**
- [ ] Push to `main` triggers the deploy workflow and the workflow succeeds.
- [ ] After DNS propagates, `https://ibe.engineering` and `https://www.ibe.engineering` both serve the site (www → apex 301).

## 12. Deploy & DNS

### Build / deploy
- GitHub Actions workflow uses Astro's official `withastro/action` (or vanilla `actions/upload-pages-artifact` + `actions/deploy-pages`).
- `site` in `astro.config.mjs` set to `https://ibe.engineering` (no `base`, served at root).
- `public/CNAME` contains `ibe.engineering` so GitHub Pages keeps the custom-domain binding across rebuilds.

### DNS records Tyler will need to add at the registrar
For the apex `ibe.engineering`, four `A` records to GitHub Pages:
```
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```
And four `AAAA` records (IPv6):
```
AAAA  @  2606:50c0:8000::153
AAAA  @  2606:50c0:8001::153
AAAA  @  2606:50c0:8002::153
AAAA  @  2606:50c0:8003::153
```
For `www.ibe.engineering` redirect:
```
CNAME  www  ibe-eng.github.io
```
For the future Toolbox subdomain (separate `ibe-app` repo on Vercel — not configured by this repo, but Tyler should add it now):
```
CNAME  app  cname.vercel-dns.com
```

After DNS propagates, in the GitHub Pages settings: enforce HTTPS.

## 13. Open Questions

| # | Question | Owner | Blocking? |
|---|---|---|---|
| OQ1 | Final wording of the third problem stat — is "Hours to a permit-ready plan, not weeks" the right Toolbox angle, or should it lean further into a real number? | Tyler | No — stub now, refine before launch |
| OQ2 | Founder portrait — do we have a shot, or ship with a labeled placeholder? | Tyler | No — ship with placeholder |
| OQ3 | Is the "Custom Integrations" tile a real productized offering, or aspirational? Answer affects copy specificity. | Tyler | No — write generically until clarified |
| OQ4 | Privacy / Terms — is there an existing TRW version to port, or do we draft net-new? | Tyler | No — placeholder pages on launch |
| OQ5 | Is there a tagline preference — "Plan Well. Build Well." (TRW carryover) or something IBE-native? | Tyler | No — use TRW carryover until told otherwise |

## 14. Timeline

This is a 2-page brochure with no auth, no backend, no CMS. The realistic shape:

| Phase | Work | Gate |
|---|---|---|
| 1 | Scaffold Astro + tokens + layout + header/footer | Local dev works |
| 2 | `/` built with all 8 sections, real copy, placeholder imagery | Localhost review with Tyler |
| 3 | `/toolbox` built with all 7 sections | Localhost review with Tyler |
| 4 | GitHub Actions deploy + CNAME + Lighthouse pass | First push to `main`, deployed at `*.github.io` URL |
| 5 | DNS cutover — Tyler adds records, GH Pages binds custom domain | Live at `ibe.engineering` |
| 6 | Real imagery swap (post-launch) | Tyler delivers; replaced via PRs |

No hard external deadline noted. Phases 1–4 land in a single working session. Phase 5 is gated on Tyler's registrar action.

---
