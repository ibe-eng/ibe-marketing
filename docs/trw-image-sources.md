# TRW Design image migration — 2026-09-21

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
