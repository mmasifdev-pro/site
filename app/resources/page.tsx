import type { Metadata } from "next";
import Link from "next/link";
import { css } from "@/lib/css";
import { RESOURCES } from "@/lib/data";
import { og } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Resources — Billing & Healthcare Software Guides",
  description:
    "Guides, glossary, and research on medical billing, revenue cycle management, and healthcare software — practical references for practice staff.",
  alternates: { canonical: "/resources" },
  openGraph: og({
    title: "Resources — Billing & Healthcare Software Guides | CareLineMD",
    description: "Guides, glossary & research on billing and healthcare software.",
    url: "/resources",
  }),
};

export default function ResourcesHubPage() {
  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources" }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:38px;font-weight:800;color:#fff;margin:0 0 14px;max-width:640px;")}>
            Guides, glossary &amp; research on billing and healthcare software
          </h1>
        </div>
      </section>

      <section style={css("max-width:1280px;margin:0 auto;padding:56px 32px 80px;")}>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px;")}>
          {RESOURCES.map((r) => (
            <Link key={r.slug} href={`/resources/${r.slug}`} className="clmd-card-hover" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:14px;padding:24px;cursor:pointer;text-decoration:none;display:block;")}>
              <div style={css("font-size:12px;font-weight:700;color:#0B8482;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:10px;")}>{r.category}</div>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:17px;color:#0A1F44;margin-bottom:8px;line-height:1.35;")}>{r.title}</div>
              <div style={css("font-size:14px;color:#5C6B7A;line-height:1.55;")}>{r.excerpt}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
