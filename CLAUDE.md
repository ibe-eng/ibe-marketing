# IBE Marketing Site — Project Briefing

> Routing/context file Claude Code reads first when working in this folder.

## What this project is

A small, fast marketing website for **Integrated Building Engineering (IBE)** at the domain `ibe.engineering`. Replaces the existing `trw-design.com` site (built on B12) with a leaner, faster, GitHub-Pages-hosted site that points visitors to two things:

1. The engineering services IBE offers (the core of what TRW Design has been doing).
2. **IBE Toolbox** — a paid hub of professional building-design tools at `toolbox.ibe.engineering`. Floor Plan Builder is the first tool live; more land over time (Project Builder, PDF importer, CONTAM, Revit submittal automation).

Scope is intentionally tight: **one or two pages**. Everything dynamic (logins, paid tools, user projects, the Toolbox itself) lives on the `toolbox.ibe.engineering` subdomain — do not build any of that here.

## The "Integrated" in IBE has dual meaning now

This site needs to communicate both meanings without picking one over the other:

1. **Integrated coordination & 3D modeling** — the original engineering services side. HVAC, plumbing, BIM coordination, design estimating.
2. **Integrated AI-assisted tools** — the new Toolbox side. Pro-grade floor plans, framing plans, Revit-ready outputs, on demand.

## Stack

- **Framework:** Astro (static, zero-JS by default, easy GitHub Pages deploy). If Astro feels heavy for ~2 pages, plain HTML + CSS is also acceptable. No React Router, no SPA framework.
- **Styling:** plain CSS with custom properties for design tokens. Tailwind is fine if Claude Code prefers it but optional.
- **Hosting:** GitHub Pages, served from `main` branch via GitHub Actions deploy.
- **Domain:** `ibe.engineering` (apex). DNS will be configured separately; the build must work at the apex with no base path.
- **Forms:** no server-side form processing on GitHub Pages. Use a `mailto:info@ibe.engineering` link or a Formspree/Web3Forms embed. Do not build a custom form backend.

## Folder structure

```
ibe-marketing/
  CLAUDE.md                  ← this file
  docs/
    brand.md                 ← brand voice, copy guidance
    design-tokens.md         ← colors, type, spacing
    reference-trw.md         ← what to carry over from trw-design.com
  src/
    pages/
      index.astro            ← home
      app.astro              ← optional: "what's in the app" page
    components/              ← shared components
    layouts/
      Base.astro             ← header + footer wrapper
    styles/
      tokens.css             ← design tokens
      base.css               ← reset, typography, layout primitives
  public/
    favicon.svg
    images/
  .github/
    workflows/
      deploy.yml             ← GitHub Pages deploy action
  .gitignore
  astro.config.mjs
  package.json
```

## Brand identity (carried over from trw-design.com)

- **Primary palette:** black `#000000` header, white `#FFFFFF` body, red `#FF0000` for CTAs and emphasis. Neutral grays for body text and dividers.
- **Typeface:** Onest (Google Fonts) for everything — headings and body. Weights 400, 500, 700.
- **Signature element:** hand-drawn red oval underline on a key word in the hero (e.g., "Design", "Engineered", or "Build"). Implement as inline SVG so it scales and stays crisp.
- **Tone:** confident, technical, no-nonsense. Short sentences. Outcome-led. Avoid marketing fluff.
- **Photography:** prefer real BIM / Revit screenshots, isometric renderings, or clean line drawings over AI-generated construction stock photos. Tyler will provide images later — leave clearly-marked placeholders.

## Positioning shift from TRW Design → IBE Engineering

TRW Design currently sells **services only** (HVAC/plumbing engineering, BIM coordination, design estimating). IBE is **services + a tool hub (the Toolbox)** — the same engineering team now offers a self-serve set of tools for builders who want pro-grade outputs without hiring a full design team or learning Revit.

The site needs to communicate both legs without burying either. Suggested split:

- Hero: positioning line covering both ("Engineered building design + the tools to do it yourself").
- Two parallel CTAs: "Talk to our engineers" (services) + "Open the Toolbox" (product). The Toolbox CTA is the primary, on-brand red button.

## Audience

The marketing site should explicitly welcome two overlapping groups, with **pros first**:

- **AEC pros** — engineering firms, GCs, BIM coordinators running coordinated builds. They use both the engineering services and select Toolbox tools.
- **Small-scale builders, remodelers, real-estate / kitchen-and-bath designers, and DIY-pros** — anyone who needs a permit-ready floor plan, framing plan, or 3D model without becoming a CAD operator. The Toolbox is built for them too.

Copy should not assume the reader is an engineer. Avoid jargon-heavy lines like "BIM-LOD 350 deliverables" in the hero or service tiles; save that for the deeper engineering-services blurb.

## Content to carry from TRW Design (full inventory in `docs/reference-trw.md`)

**Keep:**
- Problem-stats panel ($50K+ cost / $1M project, 5–15% schedule loss) — high-impact and scannable.
- Three-tile services grid (Permit / For Construction / Fully Coordinated) — but compress to a single tile with a "tiers available" line.
- Founder/mission paragraph — compress to 3–4 sentences.
- ASHRAE / ACE Mentor of NH involvement — keep as a credibility line in the footer or about block.
- "Plan Well. Build Well." style tagline.
- Email `info@ibe.engineering` (will replace `info@trw-design.com`) and phone `(603) 521-2604`.
- Privacy policy and Terms of Service links in footer.

**Drop:**
- The deep three-tier writeup page.
- The "Coming Soon" services page in its current form.
- The long About narrative.
- The multi-section project submission form (replace with a `mailto:` or Formspree embed).
- Pricing page placeholder.
- AI-generated construction stock photos.

## Page outline — Page 1 (`/`)

1. **Header:** logo (left), nav (Services • Toolbox • Contact), red "Open Toolbox" button (right).
2. **Hero:** discipline tag ("Building engineering + on-demand tools"), bold two-line headline with red oval underline on the operative word, supporting paragraph that names both audiences (pros + small builders), two CTAs side by side.
3. **Problem stats panel:** three large numbers with one-line captions (carry over from TRW: $50K+/$1M, 5–15% schedule loss, plus one new stat that fits the Toolbox angle if available).
4. **What we do:** 3 tiles —
   - **Engineering services** (coordination, BIM, design estimating) — for firms running full builds.
   - **IBE Toolbox** (Floor Plan Builder live, Project Builder + more coming) — for self-serve pros and small builders.
   - **Custom integrations** (Revit MCP, project-specific automation) — for clients who want IBE's tooling adapted to their workflow.
5. **Why it works:** 4–6 outcome tiles. Mix engineering outcomes (clash detection, faster schedules, coordinated 3D) with Toolbox outcomes (permit-ready outputs, no Revit learning curve, used live in sales calls).
6. **Founder block:** small portrait placeholder, 3–4 sentence story, ASHRAE + ACE Mentor credibility line.
7. **Closing CTA strip:** "Plan Well. Build Well." tagline + dual CTAs again ("Talk to our engineers" / "Open Toolbox").
8. **Footer:** email, phone, NH service area, social if any, privacy/terms links, copyright "© 2026 Integrated Building Engineering."

## Page outline — Page 2 (`/toolbox`, optional, recommended now)

Drop this page if everything fits on the home page. If kept, this is a brochure for the Toolbox specifically:

1. Header (same).
2. Hero: "**IBE Toolbox** — pro-grade building tools, on demand. For AEC firms and small-scale builders alike."
3. **Tool tiles** — one per tool:
   - **Floor Plan Builder** (live) — sketch a floor plan, get 3D preview, framing plan, PDF set, and a Revit-ready bundle.
   - **Project Builder** (coming soon) — set up structured projects that other tools attach to.
   - **PDF Floor Plan Importer** (coming soon) — drop in an existing PDF, get a parsed model back.
   - **CONTAM Automation** (later) — smoke-control modeling for high-rise residential.
   - **Submittal-to-Family** (later) — manufacturer PDF → Revit family workflow.
   - More tiles can be marked "more tools landing as we prove them in our own workflow."
4. **How it works** strip: 3 numbered steps — (1) sign in, (2) start a project in any tool, (3) export plans / models / Revit bundles.
5. **Pricing teaser:** "pay per export, per project, or subscription — TBD" placeholder until app billing is decided.
6. CTA: "Open the Toolbox".
7. Footer (same).

## Out of scope (do NOT build)

- User accounts, login flows, sign-up forms.
- Payment processing or pricing tables that connect to Stripe.
- The floor plan editor itself, or any preview of it.
- A blog, case studies, or CMS.
- A dark mode toggle.
- Animations beyond simple hover states.

## Deployment

- Repo: `github.com/ibe-eng/ibe-marketing` (under the existing IBE engineering org).
- Build via GitHub Actions on push to `main`. The `.github/workflows/deploy.yml` action uses Astro's official GitHub Pages action (or vanilla static deploy if no Astro).
- Custom domain: `ibe.engineering` apex. The `public/CNAME` file should contain `ibe.engineering`.
- The `toolbox.ibe.engineering` subdomain (the IBE Toolbox) is owned by the separate `ibe-toolbox` repo on Vercel — this repo does not configure it.

## Already settled (do NOT re-ask Tyler)

- **GitHub org:** `ibe-eng`. Repo will be `github.com/ibe-eng/ibe-marketing`.
- **DNS:** Tyler has registrar credentials for `ibe.engineering`. After deploy, give him the exact DNS records to add (GH Pages apex A/AAAA records, plus a separate `toolbox` CNAME pointing at Vercel for the IBE Toolbox subdomain).
- **Logo:** Tyler has an IBE logo file ready. Ask him for the file path before the first build, then drop it into `public/images/`. SVG preferred; PNG/JPG acceptable. Use it in the header and as the basis for the favicon.
- **Hub name:** the paid hub at `toolbox.ibe.engineering` is branded **IBE Toolbox**. CTAs across the marketing site say "Open Toolbox" or "Open the Toolbox" — never "Launch the app", "Sign in", or "Floor Plan Builder" (Floor Plan Builder is one tool inside the Toolbox, not the product).
- **Audience:** pros first, but explicitly welcome small-scale builders / DIY-pros. Copy should not assume the reader is an engineer.

## Alignment questions Claude Code should ask before generating

Ask these in a single batch, then wait for answers before producing the PRD:

1. Astro vs. plain HTML/CSS — strong preference?
2. One page or two? (If two, what goes on `/toolbox` vs the home page hero block?)
3. Photography direction: do you have real BIM/Revit screenshots ready, or should we ship with empty placeholder boxes labeled by intent (e.g., "isometric render — pipe coordination")?
4. Form handling: `mailto:` link, Formspree, or no form at all (just email + phone)?
5. Social links to include in the footer? (LinkedIn? GitHub `ibe-eng` org?)
6. Should the footer credibility line ("ASHRAE board, ACE Mentor of NH") survive the move, or is that being de-emphasized for IBE?
7. Confirm the domain is the apex `ibe.engineering` (no `www.` redirect needed).

## Constraints / things to avoid

- Do not introduce a JavaScript framework heavier than Astro.
- Do not add analytics, cookie banners, or third-party widgets without asking.
- Do not link to placeholder URLs that 404 — every link must either resolve or be a clearly labeled `# TODO` anchor.
- Do not generate AI stock photos. Use clean SVG illustrations or labeled placeholder rectangles instead.
- Keep this `CLAUDE.md` short. Detailed brand and design-token info goes in `docs/brand.md` and `docs/design-tokens.md` so this file stays cheap to read on every prompt.
