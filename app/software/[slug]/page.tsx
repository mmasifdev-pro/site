import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { css } from "@/lib/css";
import { SOFTWARE } from "@/lib/data";
import { findSoftware, absUrl, contactHref, og } from "@/lib/site";
import { Breadcrumb, FaqList, RelatedPills, H2, HeroButtons } from "@/components/ui";
import { SoftwareMockup } from "@/components/Mockups";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SOFTWARE.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = findSoftware(slug);
  if (!s) return {};
  return {
    title: s.name,
    description: s.intro,
    alternates: { canonical: `/software/${s.slug}` },
    openGraph: og({ title: `${s.name} | CareLineMD`, description: s.intro, url: `/software/${s.slug}` }),
  };
}

export default async function SoftwareDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = findSoftware(slug);
  if (!s) notFound();

  const related = SOFTWARE.filter((x) => x.slug !== s.slug).slice(0, 3).map((x) => ({ name: x.name, href: `/software/${x.slug}` }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: s.name,
        applicationCategory: "HealthApplication",
        operatingSystem: "Web",
        description: s.intro,
        offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
        publisher: { "@id": absUrl("/#organization") },
        url: absUrl(`/software/${s.slug}`),
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
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Software", href: "/software" }, { label: s.name }]} />
          <div className="clmd-hero-grid" style={css("display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;")}>
            <div>
              <h1 style={css("font-family:'Manrope',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:0 0 14px;")}>{s.h1}</h1>
              <p style={css("color:#B7C4D1;font-size:16px;line-height:1.6;margin:0 0 28px;")}>{s.intro}</p>
              <HeroButtons
                primary={{ label: "Request a Demo", href: contactHref("software") }}
                secondary={{ label: "Talk to an Expert", href: "/contact" }}
              />
            </div>
            <div className="clmd-hero-mock">
              <SoftwareMockup type={s.mockup} />
            </div>
          </div>
        </div>
      </section>

      <section style={css("max-width:1080px;margin:0 auto;padding:56px 32px;")}>
        <H2>Key capabilities</H2>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:56px;")}>
          {s.features.map((f, i) => (
            <div key={i} style={css("background:#fff;border:1px solid #E2E8ED;border-radius:13px;padding:22px;")}>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15.5px;color:#0A1F44;margin-bottom:8px;")}>{f.title}</div>
              <div style={css("font-size:14px;color:#5C6B7A;line-height:1.55;")}>{f.desc}</div>
            </div>
          ))}
        </div>

        <H2>Frequently asked questions</H2>
        <FaqList faq={s.faq} />

        <RelatedPills label="OTHER SOFTWARE" items={related} />
      </section>
    </main>
  );
}
