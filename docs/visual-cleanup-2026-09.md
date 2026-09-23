# Website visual cleanup — 2026-09-20

## Scope and reuse

Reviewed the live Home, Services, About, and Contact pages. Existing `RedOvalUnderline`, `Hero`, `CtaStrip`, base styles, and the Astro `Base` shell own the changes. Scope queries: capability registry (`marketing`, `brand`, `annotation`, `circle`), semantic-model README (`brand`, `marketing`), public `/api/tool-catalog`, decision log (`ibe-marketing`), and the marketing and Toolbox source trees. Existing components found; no new domain noun, engineering rule, tool, or shell. L1/L2/L3 unchanged; L4 extends the existing components. Canonical branding references `cap.branded-html-deliverable` and `docs/design-tokens.md`.

## Changes

- Fit red outlines inside reserved inline space, keep constant stroke weight, prevent circled words from wrapping, and reduce multiword circles to one word.
- Balance heading wraps, reduce minimum hero type for narrow screens, improve service-card spacing, align homepage card actions, improve affiliation contrast, and expose a keyboard focus ring for the mobile menu.
- Add a named visual slot to the existing Hero and a more compact homepage headline. Existing service description, SEO title, contact links, and analytics remain.
- Fill the homepage and Services panels with source imagery from TRW Design; see trw-image-sources.md for final assets and provenance.
- Replace the empty founder portrait box with a finished text identity block; no invented portrait.

## Historical concept-image provenance (superseded)

These three generated assets were replaced and removed on 2026-09-21 at the user's request to use TRW Design work and photos. The prompts below are retained as history only. Final imagery and validation are documented in trw-image-sources.md.

Generated with the built-in image generation tool at the user's explicit request. This request supersedes the older placeholder-only guidance in CLAUDE.md/PRD.md for these illustrations. These are conceptual renderings, not real projects, verified engineering details, or product screenshots. Original generations are retained outside the repository; web assets are 1536×1024 WebP, quality 82, with explicit dimensions and lazy loading below the fold. Combined image size: 424,220 bytes.

### public/images/building-systems.webp

Use case: stylized-concept. Create a premium editorial architectural visualization for Integrated Building Engineering's website. Wide landscape 3:2 composition. An elegant isolated isometric cutaway of a small contemporary two-story commercial building, white and pale concrete architecture, revealing a carefully organized overhead mechanical distribution zone: broad silver rectangular HVAC ducts, a few red and blue plumbing pipes running parallel on separated elevations with plausible right-angle turns and deliberate clearances. Minimal polished 3D architectural model, soft ambient studio light, warm off-white seamless background, precise crisp edges, restrained red accents, graphite structural frame. Building fills center 80 percent of frame, generous clear margin. Visually readable at small web card sizes. This is a conceptual editorial illustration, not a permit drawing or real completed project. No people, no text, no letters, no labels, no logos, no watermarks, no complex spaghetti pipework. Return a high quality image and local saved file path.

### public/images/service-coordination.webp

Use case: stylized-concept. Create one premium editorial engineering illustration for the IBE website, landscape 3:2. Isometric close-up of coordinated building services suspended beneath a pale concrete ceiling slab: a few crisp rectangular galvanized air ducts and parallel red and blue plumbing mains at deliberately separated elevations, orderly steel support trapezes, believable broad elbows. Cutaway studio model, not a photograph or real project. White and light-gray surfaces, charcoal details, restrained red and blue, seamless warm white background. Strong simple composition filling central 80 percent with margins, soft studio shadows, sophisticated architectural visualization, technically restrained, no crossing/intersecting solid objects. No people, no text, no labels, no logo, no watermark. An illustrative view of coordination, not an actual engineering design. Save the image locally and return its path.

### public/images/design-documentation.webp

Use case: stylized-concept. Premium architectural editorial still life for an engineering website, wide landscape 3:2. A clean white desk with a neatly layered set of large architectural floor-plan sheets drawn with fine graphite lines and restrained red coordination marks, beside a small elegant white cutaway building model with silver HVAC ducts and restrained red and blue services visible inside. Elevated three-quarter camera angle, close composition centered with generous edges, soft daylight studio illumination, subtle paper texture and shadows, white/gray/graphite/red palette matching a minimalist engineering brand. Sophisticated render, illustrative and not a photo of an actual project. No legible text, no title block names, no fake dimensions, no brands, no logos, no people, no watermark. Only a few well arranged objects. Save locally and return the image path.

## Verification

Production build passes on Node 20 (the deployment workflow's version), all nine routes generated. Node 24's local runtime initially printed a libuv shutdown assertion after build completion; repeated using Node 20 exited successfully. Six rendered pages (Home, Services, About, Contact, Toolbox, AEC-OS) checked at 320, 768, and 1440 px: no horizontal document overflow or offscreen headings, circles, or buttons. Mobile menu opens and exposes navigation. Services illustrations load after scrolling to their lazy-load region. No contact messages submitted. Physical Safari/phone testing and production deployment are not part of these local checks.

── IBE PLAYBOOK ATTESTATION ──
playbook-rev: eco@01af80d
Scope pass: ran — existing presentation components; no new domain noun
Registry: reused cap.branded-html-deliverable (canonical branding reference)
Followed: playbook scope pass and §4; repo CLAUDE.md and docs/design-tokens.md; explicit user request authorizes generated illustrations over older placeholder-only guidance.
