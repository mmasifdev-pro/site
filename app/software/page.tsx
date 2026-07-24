import type { Metadata } from "next";
import Link from "next/link";
import { css } from "@/lib/css";
import { SOFTWARE } from "@/lib/data";
import { og } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

export const metadata: Metadata = {
  title: "Healthcare Software — EHR, PMS, Patient Portal & CRM",
  description:
    "Modern healthcare software built to work together: EHR, practice management system (PMS), patient portal, and healthcare CRM. Run one, or run them all alongside our billing team.",
  alternates: { canonical: "/software" },
  openGraph: og({
    title: "Healthcare Software — EHR, PMS, Patient Portal & CRM | theCareLineMD",
    description: "EHR, PMS, patient portal, and CRM — run one, or run them all alongside our billing team.",
    url: "/software",
  }),
};

export default function SoftwareHubPage() {
  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Healthcare Software" }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:38px;font-weight:800;color:#fff;margin:0 0 14px;max-width:640px;")}>
            Healthcare software built to work together
          </h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:640px;line-height:1.6;margin:0;")}>
            EHR, PMS, patient portal, and CRM — run one, or run them all alongside our billing team.
          </p>
        </div>
      </section>

      <section style={css("max-width:1280px;margin:0 auto;padding:56px 32px 80px;")}>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(2,1fr);gap:20px;")}>
          {SOFTWARE.map((s) => (
            <Link key={s.slug} href={`/software/${s.slug}`} className="clmd-card-hover" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:16px;padding:28px;cursor:pointer;text-decoration:none;display:block;")}>
              <div style={css("width:42px;height:42px;border-radius:10px;background:#0A1F44;color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;margin-bottom:16px;")}>{s.initials}</div>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:19px;color:#0A1F44;margin-bottom:8px;")}>{s.name}</div>
              <div style={css("font-size:14.5px;color:#5C6B7A;line-height:1.6;margin-bottom:16px;")}>{s.tagline}</div>
              <div style={css("font-family:monospace;font-size:11.5px;color:#B0BAC3;")}>{s.path}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
