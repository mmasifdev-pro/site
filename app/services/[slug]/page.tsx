import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { css } from "@/lib/css";
import { SERVICES } from "@/lib/data";
import { findService, absUrl, contactHref, og } from "@/lib/site";
import { Breadcrumb, FeatureGrid, FaqList, RelatedPills, H2, HeroButtons } from "@/components/ui";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = findService(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.intro,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: og({ title: `${s.name} | theCareLineMD`, description: s.intro, url: `/services/${s.slug}` }),
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = findService(slug);
  if (!s) notFound();

  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3).map((x) => ({ name: x.name, href: `/services/${x.slug}` }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: s.name,
        description: s.intro,
        serviceType: s.name,
        provider: { "@id": absUrl("/#organization") },
        areaServed: "US",
        url: absUrl(`/services/${s.slug}`),
      },
      s.faq.length
        ? {
            "@type": "FAQPage",
            mainEntity: s.faq.map((qa) => ({
              "@type": "Question",
              name: qa.q,
              acceptedAnswer: { "@type": "Answer", text: qa.a },
            })),
          }
        : null,
    ].filter(Boolean),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1080px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: s.name }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:0 0 14px;max-width:660px;")}>{s.h1}</h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:640px;line-height:1.6;margin:0 0 28px;")}>{s.intro}</p>
          <HeroButtons
            primary={{ label: "Get a Free Consultation", href: contactHref("billing") }}
            secondary={{ label: "Talk to an Expert", href: "/contact" }}
          />
        </div>
      </section>

      <section style={css("max-width:1080px;margin:0 auto;padding:56px 32px;")}>
        <H2>What&apos;s included</H2>
        <FeatureGrid features={s.features} />

        {s.hasMetrics && s.metrics.length > 0 && (
          <div style={css("background:#F6F8FA;border-radius:16px;padding:32px;margin-bottom:56px;display:grid;grid-template-columns:repeat(2,1fr);gap:24px;")}>
            {s.metrics.map((m, i) => (
              <div key={i}>
                <div style={css("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;color:#0A1F44;")}>{m.value}</div>
                <div style={css("font-size:14px;color:#5C6B7A;margin-top:4px;")}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <H2>Frequently asked questions</H2>
        <FaqList faq={s.faq} />

        <RelatedPills label="RELATED" items={related} />
      </section>
    </main>
  );
}
