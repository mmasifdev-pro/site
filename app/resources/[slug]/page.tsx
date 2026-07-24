import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { css } from "@/lib/css";
import { RESOURCES } from "@/lib/data";
import { findArticle, relatedServices, relatedSoftware, absUrl, og } from "@/lib/site";
import { Breadcrumb, RelatedPills } from "@/components/ui";

export function generateStaticParams() {
  return RESOURCES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/resources/${a.slug}` },
    openGraph: og({ type: "article", title: `${a.title} | CareLineMD`, description: a.excerpt, url: `/resources/${a.slug}` }),
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = findArticle(slug);
  if (!a) notFound();

  const related = [
    ...relatedServices(a.relatedSlugs.services || []).map((x) => ({ name: x.name, href: `/services/${x.slug}` })),
    ...relatedSoftware(a.relatedSlugs.software || []).map((x) => ({ name: x.name, href: `/software/${x.slug}` })),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    articleSection: a.category,
    author: { "@id": absUrl("/#organization") },
    publisher: { "@id": absUrl("/#organization") },
    mainEntityOfPage: absUrl(`/resources/${a.slug}`),
    inLanguage: "en-US",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={css("max-width:760px;margin:0 auto;padding:64px 32px 80px;")}>
        <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: a.title }]} />
        <div style={css("font-size:12px;font-weight:700;color:#0B8482;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:14px;")}>{a.category}</div>
        <h1 style={css("font-family:'Manrope',sans-serif;font-size:32px;font-weight:800;color:#0A1F44;margin:0 0 20px;line-height:1.2;")}>{a.title}</h1>
        <div style={css("display:flex;flex-direction:column;gap:16px;margin-bottom:44px;")}>
          {a.body.map((p, i) => (
            <p key={i} style={css("font-size:16px;line-height:1.75;color:#2B3A49;margin:0;")}>{p}</p>
          ))}
        </div>
        <RelatedPills label="RELATED SOLUTIONS" items={related} />
      </section>
    </main>
  );
}
