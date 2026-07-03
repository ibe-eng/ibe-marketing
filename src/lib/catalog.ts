/**
 * Build-time bridge to the live IBE tool catalog.
 *
 * The toolbox publishes its tool registry (computed from
 * `ibe-toolbox/apps/web/src/lib/tools.ts`) at
 * `https://toolbox.ibe.engineering/api/tool-catalog`. This site renders its
 * tool tiles from that catalog at build time, so the marketing page is
 * structurally unable to drift from what's actually shipped — the same source
 * the desktop (AEC-OS native) surface consumes.
 *
 * If the fetch fails (offline build, toolbox deploy in flight), we fall back
 * to the last-known snapshot committed at `src/data/tool-catalog.fallback.json`.
 * A weekly scheduled deploy rebuilds the site so catalog changes propagate
 * even without a marketing commit.
 */
import fallback from '../data/tool-catalog.fallback.json';

export type ToolStatus = 'live' | 'coming-soon' | 'roadmap';
export type ToolTier = 'public' | 'team';

export interface CatalogTool {
  id: string;
  name: string;
  blurb: string;
  status: ToolStatus;
  tier: ToolTier;
  surfaces: string[];
  group: string;
  web: string | null;
  repo: string | null; // catalog emits null for tools without a repo yet (e.g. contam)
}

export interface ToolCatalog {
  version: string;
  generatedFrom: string;
  tools: CatalogTool[];
}

const CATALOG_URL = 'https://toolbox.ibe.engineering/api/tool-catalog';

export async function loadCatalog(): Promise<ToolCatalog> {
  try {
    const res = await fetch(CATALOG_URL, { signal: AbortSignal.timeout(10_000) });
    if (!res.ok) throw new Error(`tool-catalog responded ${res.status}`);
    const catalog = (await res.json()) as ToolCatalog;
    if (!Array.isArray(catalog.tools) || catalog.tools.length === 0) {
      throw new Error('tool-catalog returned no tools');
    }
    return catalog;
  } catch (err) {
    console.warn(`[catalog] live fetch failed (${String(err)}); using committed fallback`);
    return fallback as ToolCatalog;
  }
}

export const STATUS_LABELS: Record<ToolStatus, string> = {
  live: 'Live',
  'coming-soon': 'Coming soon',
  roadmap: 'On the roadmap',
};
