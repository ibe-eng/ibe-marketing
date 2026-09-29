// The one home for where the "start a project" CTAs go. `cta` names where on the site it was
// clicked, and Base.astro's delegated listener reports it as PostHog `cta_clicked`.
export const TOOLBOX_URL = 'https://toolbox.ibe.engineering';

const withSrc = (path: string, cta: string) =>
  `${TOOLBOX_URL}${path}?src=website&cta=${encodeURIComponent(cta)}`;

// Every "Talk to our engineers" / "Start your project" button: the public booking page.
export const startHref = (cta: string) => withSrc('/b', cta);

// "More options" (contact page): the toolbox /start ladder — book, leave a number, record a
// walkthrough, or upload files.
export const moreHref = (cta: string) => withSrc('/start', cta);

// The `data-cta` value for an href: its `cta` param when it is one of the links above, else
// undefined (Astro omits undefined attributes).
export const ctaOf = (href?: string) =>
  href?.startsWith(`${TOOLBOX_URL}/`) && href.includes('src=website')
    ? new URL(href).searchParams.get('cta') ?? undefined
    : undefined;
