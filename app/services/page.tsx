import type { Metadata } from "next";
import Link from "next/link";
import { css } from "@/lib/css";
import { SERVICES } from "@/lib/data";
import { og } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Medical Billing & Revenue Cycle Management Services",
  description:
    "End-to-end medical billing and RCM services — eligibility verification, coding, claims processing, denial management, AR, and credentialing — run by a dedicated healthcare billing team.",
  alternates: { canonical: "/services" },
  openGraph: og({
    title: "Medical Billing & Revenue Cycle Management Services | CareLineMD",
    description:
      "End-to-end billing support — from eligibility checks to appeals — so your team can focus on patients, not paperwork.",
    url: "/services",
  }),
};

export default function ServicesHubPage() {
  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medical Billing Services" }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:38px;font-weight:800;color:#fff;margin:0 0 14px;max-width:640px;")}>
            Medical billing &amp; revenue cycle management services
          </h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:640px;line-height:1.6;margin:0;")}>
            End-to-end billing support — from eligibility checks to appeals — so your team can focus on patients, not paperwork.
          </p>
        </div>
      </section>

      <section style={css("max-width:1280px;margin:0 auto;padding:56px 32px 80px;")}>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px;")}>
          {SERVICES.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="clmd-card-hover" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:14px;padding:26px;cursor:pointer;text-decoration:none;display:block;")}>
              <div style={css("width:40px;height:40px;border-radius:10px;background:#EAF6F5;color:#0B8482;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;margin-bottom:16px;")}>{s.initials}</div>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:17px;color:#0A1F44;margin-bottom:8px;")}>{s.name}</div>
              <div style={css("font-size:14px;color:#5C6B7A;line-height:1.55;margin-bottom:14px;")}>{s.tagline}</div>
              <div style={css("font-family:monospace;font-size:11.5px;color:#B0BAC3;")}>{s.path}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
