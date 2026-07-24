import { SERVICES, SOFTWARE, INDUSTRIES, RESOURCES } from "./data";

/**
 * Central site + SEO configuration. Override the public URL at build time with
 * NEXT_PUBLIC_SITE_URL (e.g. https://www.thecarelinemd.com) so canonical URLs,
 * the sitemap, and Open Graph tags all point at the real domain.
 */
export const SITE = {
  name: "CareLineMD",
  shortName: "CareLineMD",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thecarelinemd.com").replace(/\/$/, ""),
  description:
    "CareLineMD helps healthcare organizations get paid faster and run smarter with expert medical billing, revenue cycle management, and an EHR, PMS, and patient portal built to work together.",
  tagline: "Medical Billing, RCM & Healthcare Software",
  phone: "(800) 555-0182",
  email: "hello@thecarelinemd.com",
  locale: "en_US",
};

/** Absolute URL helper for a site-relative path. */
export function absUrl(path: string): string {
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Builds a complete Open Graph object. Next.js replaces (does not deep-merge)
 * the `openGraph` field per route, so every page must carry the shared fields
 * (siteName / type / locale) itself — this helper guarantees that.
 */
export function og(o: { title: string; description: string; url: string; type?: "website" | "article" }) {
  return {
    type: o.type ?? "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: o.url,
    title: o.title,
    description: o.description,
  };
}

// ---- Content lookups -------------------------------------------------------

export const findService = (slug: string) => SERVICES.find((s) => s.slug === slug);
export const findSoftware = (slug: string) => SOFTWARE.find((s) => s.slug === slug);
export const findIndustry = (slug: string) => INDUSTRIES.find((s) => s.slug === slug);
export const findArticle = (slug: string) => RESOURCES.find((s) => s.slug === slug);

/** Up to three related services (excludes the current slug when provided). */
export function relatedServices(slugs: string[]) {
  return SERVICES.filter((s) => slugs.includes(s.slug));
}
export function relatedSoftware(slugs: string[]) {
  return SOFTWARE.filter((s) => slugs.includes(s.slug));
}

/** Contact-path presets used by the CTA buttons across the site. */
export type ContactNeed = "billing" | "software" | "both";
export const contactHref = (need: ContactNeed) => `/contact?need=${need}`;
