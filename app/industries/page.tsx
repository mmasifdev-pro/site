import type { Metadata } from "next";
import Link from "next/link";
import { css } from "@/lib/css";
import { INDUSTRIES } from "@/lib/data";
import { og } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Industries — Specialty-Specific Medical Billing & Software",
  description:
    "Medical billing and healthcare software tuned to each specialty — primary care, cardiology, orthopedics, behavioral health, hospitals, radiology, dermatology, and more.",
  alternates: { canonical: "/industries" },
  openGraph: og({
    title: "Industries — Specialty-Specific Medical Billing & Software | theCareLineMD",
    description: "Every specialty has its own coding rules, payer quirks, and workflow. Here's how we adapt.",
    url: "/industries",
  }),
};

export default function IndustriesHubPage() {
  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:38px;font-weight:800;color:#fff;margin:0 0 14px;max-width:640px;")}>
            Billing &amp; software built around your specialty
          </h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:640px;line-height:1.6;margin:0;")}>
            Every specialty has its own coding rules, payer quirks, and workflow. Here&apos;s how we adapt.
          </p>
        </div>
      </section>

      <section style={css("max-width:1280px;margin:0 auto;padding:56px 32px 80px;")}>
        <div className="clmd-4col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px;")}>
          {INDUSTRIES.map((ind) => (
            <Link key={ind.slug} href={`/industries/${ind.slug}`} className="clmd-card-hover" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:14px;padding:24px;cursor:pointer;text-decoration:none;display:block;")}>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:16px;color:#0A1F44;margin-bottom:8px;")}>{ind.name}</div>
              <div style={css("font-size:13.5px;color:#5C6B7A;line-height:1.55;")}>{ind.summary}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
