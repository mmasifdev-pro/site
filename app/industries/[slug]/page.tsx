import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { css } from "@/lib/css";
import { INDUSTRIES } from "@/lib/data";
import { findIndustry, relatedServices, contactHref, og } from "@/lib/site";
import { Breadcrumb, RelatedPills } from "@/components/ui";

export function generateStaticParams() {
  return INDUSTRIES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) return {};
  const title = `Medical Billing & Software for ${ind.name}`;
  return {
    title,
    description: ind.summary,
    alternates: { canonical: `/industries/${ind.slug}` },
    openGraph: og({ title: `${title} | CareLineMD`, description: ind.summary, url: `/industries/${ind.slug}` }),
  };
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ind = findIndustry(slug);
  if (!ind) notFound();

  const related = relatedServices(["medical-billing", "revenue-cycle-management", "denial-management"]).map((x) => ({
    name: x.name,
    href: `/services/${x.slug}`,
  }));

  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1080px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: ind.name }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:0 0 14px;max-width:660px;")}>
            Medical billing &amp; software for {ind.name}
          </h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:640px;line-height:1.6;margin:0 0 28px;")}>{ind.summary}</p>
          <Link href={contactHref("billing")} className="clmd-cta-primary" style={css("display:inline-block;background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:13px 22px;border-radius:9px;text-decoration:none;")}>
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <section style={css("max-width:1080px;margin:0 auto;padding:56px 32px;")}>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-bottom:48px;")}>
          <div>
            <h2 style={css("font-family:'Manrope',sans-serif;font-size:18px;font-weight:800;color:#0A1F44;margin:0 0 16px;")}>Common challenges</h2>
            <div style={css("display:flex;flex-direction:column;gap:10px;")}>
              {ind.challenges.map((c, i) => (
                <div key={i} style={css("background:#fff;border:1px solid #E2E8ED;border-radius:10px;padding:14px 16px;font-size:14px;color:#2B3A49;")}>{c}</div>
              ))}
            </div>
          </div>
          <div>
            <h2 style={css("font-family:'Manrope',sans-serif;font-size:18px;font-weight:800;color:#0A1F44;margin:0 0 16px;")}>How we help</h2>
            <div style={css("display:flex;flex-direction:column;gap:10px;")}>
              {ind.solutions.map((c, i) => (
                <div key={i} style={css("background:#EAF6F5;border-radius:10px;padding:14px 16px;font-size:14px;color:#0A3B3A;")}>{c}</div>
              ))}
            </div>
          </div>
        </div>

        <RelatedPills label="RELEVANT SERVICES" items={related} />
      </section>
    </main>
  );
}
