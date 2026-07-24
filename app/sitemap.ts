import type { MetadataRoute } from "next";
import { SERVICES, SOFTWARE, INDUSTRIES, RESOURCES } from "@/lib/data";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absUrl("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/software"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: absUrl("/industries"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absUrl("/resources"), lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: absUrl("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: absUrl("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
  ];

  const dynamic: MetadataRoute.Sitemap = [
    ...SERVICES.map((s) => ({ url: absUrl(`/services/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...SOFTWARE.map((s) => ({ url: absUrl(`/software/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...INDUSTRIES.map((s) => ({ url: absUrl(`/industries/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...RESOURCES.map((s) => ({ url: absUrl(`/resources/${s.slug}`), lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
  ];

  return [...staticRoutes, ...dynamic];
}
