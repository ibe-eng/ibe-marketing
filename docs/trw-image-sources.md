# TRW Design image migration — 2026-09-21

User-supplied addition: `ibe-building-coordination.webp` comes from the coordination model screenshot supplied in this conversation (`codex-clipboard-91b8804e-b57e-49ef-b3cb-091aed0c7eb9.png`). Converted to WebP at its original 2873 × 1926 resolution without cropping. Used in the Services hero with a full-resolution link; no project name or location inferred.

Reuses the existing Hero visual slot and Services portfolio grid. Six images were retrieved from the public TRW Design site at the user's request and locally optimized as WebP. No external image hotlinks, generated project imagery, invented client names, locations, or performance claims were added.

## Sources

All URLs below were exposed in the source site's image srcset. Source pages: https://trw-design.com/ and https://trw-design.com/services.

| Local image | Source URL | Source context | Output dimensions |
| --- | --- | --- | --- |
| trw-coordination-model.webp | https://onecdn.io/media/2ba84846-e702-4f40-a76f-b610e3b0dbff/xlg | Homepage model view | 960 × 1442 |
| trw-permit-set.webp | https://onecdn.io/media/bdddf5fb-3651-4592-b437-8e2daea79729/xlg | Services: Permit Sets | 1920 × 892 |
| trw-construction-set.webp | https://onecdn.io/media/4c17e5ed-d874-4826-9837-e1718d53c329/xlg | Services: For Construction Set | 1920 × 1003 |
| trw-coordinated-set.webp | https://onecdn.io/media/95c12289-c2b0-4866-a2a7-503b179beea4/xlg | Services: Fully Coordinated Set | 1920 × 1173 |
| trw-spooling.webp | https://onecdn.io/media/b4ae664d-f523-4eb5-a5bf-3a4fc11e74ad/xlg | Homepage: Fabrication & Spooling | 1200 × 799 |
| trw-ar.webp | https://onecdn.io/media/2d4e952f-59fd-4e31-b84f-556827cfa63e/xlg | Homepage: AR Jobsite Integration | 1200 × 800 |

The model and drawing excerpts retain their work-example context. The photographs retain their service-illustration context: the source does not identify the photographed jobsite, workers, photographer, or fabricated project. They are not captioned as named IBE projects or staff. About and Contact had no founder portrait to migrate.

Model/drawings use WebP quality 90; photographs use quality 85. Total: 1,142,390 bytes. Drawings are contained without cropping and link to their full-size local image. Explicit image dimensions reserve layout space; below-fold imagery is lazy loaded. The three previously generated concept assets were removed after replacing all uses. Their historical prompts remain in visual-cleanup-2026-09.md.

## Validation

Node 20 production build passes (nine routes). Home and Services checked at 320, 768, and 1440 px. Mobile/tablet checks found no horizontal overflow, broken loaded images, or offscreen headings/figures. Desktop gallery rendered all five images. The coordinated drawing link opened its 1920-pixel image. Preview screenshots saved outside the repository. This verifies the built preview; production deployment is separate.

── IBE PLAYBOOK ATTESTATION ──
playbook-rev: eco@01af80d
Scope pass: n/a — no new noun; existing image presentation reused
Registry: reused cap.branded-html-deliverable (brand reference)
Followed: repo CLAUDE.md, docs/design-tokens.md, existing Hero and portfolio grid.

## Layout follow-up — 2026-09-21

Compared the live TRW homepage again. Reused its content sequence: coordination rationale, three service offerings, a dark three-tier design comparison, estimating support, and outcomes. Existing IBE FAQ, affiliations, contact routes, Hero, and CTA remain. Source-page performance statistics were not imported as verified claims.

Removed the hero image's oversized bordered contain-box. Its link, image, and caption now follow the natural portrait width; simplified the caption. Services drawing previews now use their native proportions without artificial white gutters or outlines; photos retain a consistent crop. The source assets are unchanged. Home tier drawings retain full-size links.

Node 20 build passes. Home and Services checked at actual viewport widths 320, 768, and 1440: no horizontal overflow or offscreen headings/cards. Design-tier anchor and full-size drawing navigation verified. Desktop and phone layout screenshots reviewed.

## Screenshot references — 2026-09-21

Matched the user's supplied Home, design-tier, Services, and About references: centered hero copy, single project CTA, natural portrait image; padded charcoal tier cards with red badges and consistent cropped previews; estimating panel and contextual image; native details/summary service scopes; two-column About narrative with original community logos. Homepage previews link to uncropped full-size drawings. The previously approved marker stroke is retained.

Reused existing Astro shell, Hero, CTA, brand palette, local images, and the repository's native details/summary approach. No new domain concept or JavaScript dependency. Service scope text was adapted from the live TRW Services page; unverified coordination percentages and savings figures were not reproduced. About retains IBE rebrand and tool-development context without adding new licensing claims.

Additional image sources (observed on the old site):
- trw-ashrae.webp: https://onecdn.io/media/a838e760-e006-4033-a62d-15ebf8f0f740/lg — About community logo, 900 × 273.
- trw-ace.webp: https://onecdn.io/media/604769cd-a1d7-4962-b230-a7c60bd92891/lg — About community logo, 900 × 296.
- trw-coordination-context.webp: https://onecdn.io/media/f1d4b3d3-8ac8-4cfc-940b-2fcc211aa039/xlg — illustrative conflict scene, 900 × 900; not a documented project photo.
- trw-estimating.webp: https://onecdn.io/media/a5315f68-f00b-4ead-a7bb-943618c00a38/xlg — estimating concept illustration, 900 × 623; figures are illustrative, not a project estimate.

Validation: Node 20 build passes for all nine routes. Home, Services, About checked at actual 320, 768, and 1440 px viewport widths: no horizontal overflow, offscreen headings/cards, or broken loaded images. Construction and fully coordinated service panels open and close correctly. Desktop Home/About and mobile Services reviewed visually.
