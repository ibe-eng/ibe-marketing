// The one home for the "start a project" CTA target. Every "Talk to our engineers" /
// "Start your project" button points here; `cta` names where on the site it was clicked.
export const START_URL = 'https://toolbox.ibe.engineering/start';

export const startHref = (cta: string) => `${START_URL}?src=website&cta=${encodeURIComponent(cta)}`;

// The `data-cta` value for an href: its `cta` param when it points at START_URL, else undefined
// (Astro omits undefined attributes). Base.astro's delegated listener reports clicks on these.
export const ctaOf = (href?: string) =>
  href?.startsWith(START_URL) ? new URL(href).searchParams.get('cta') ?? undefined : undefined;
