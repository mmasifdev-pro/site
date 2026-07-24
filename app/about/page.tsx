import type { Metadata } from "next";
import { css } from "@/lib/css";
import { og } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description:
    "CareLineMD is a technology and revenue-cycle partner for healthcare organizations, combining hands-on billing expertise with modern software.",
  alternates: { canonical: "/about" },
  openGraph: og({
    title: "About | CareLineMD",
    description: "A technology and revenue-cycle partner for healthcare organizations.",
    url: "/about",
  }),
};

const LEADERS = [
  { initials: "SC", bg: "#0A1F44", name: "Sarah Coleman", role: "Chief Executive Officer" },
  { initials: "DP", bg: "#0EA5A6", name: "David Park", role: "Chief Product Officer" },
  { initials: "RN", bg: "#0A1F44", name: "Renee Nakamura", role: "VP, Revenue Cycle Operations" },
  { initials: "TA", bg: "#0EA5A6", name: "Tomás Alvarez", role: "VP, Engineering" },
];

const STATS = [
  ["12+", "Years in healthcare billing"],
  ["220+", "Practices served"],
  ["18", "Specialties supported"],
  ["32", "States with active clients"],
];

export default function AboutPage() {
  return (
    <main>
      <section style={css("background:#0A1F44;padding:64px 32px 56px;")}>
        <div style={css("max-width:1080px;margin:0 auto;")}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <h1 style={css("font-family:'Manrope',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:0 0 14px;max-width:600px;")}>
            A technology and revenue-cycle partner for healthcare organizations
          </h1>
          <p style={css("color:#B7C4D1;font-size:16px;max-width:600px;line-height:1.6;margin:0;")}>
            We combine hands-on billing expertise with modern software so practices can spend less time on admin and more time on care.
          </p>
        </div>
      </section>

      <section style={css("max-width:1080px;margin:0 auto;padding:56px 32px;")}>
        <div className="clmd-4col" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:64px;")}>
          {STATS.map(([v, l]) => (
            <div key={l} style={css("text-align:center;")}>
              <div style={css("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;color:#0A1F44;")}>{v}</div>
              <div style={css("font-size:13.5px;color:#5C6B7A;margin-top:4px;")}>{l}</div>
            </div>
          ))}
        </div>
        <div style={css("font-size:12px;color:#8A97A5;text-align:center;margin-top:-44px;margin-bottom:64px;")}>
          Illustrative figures — replace with your verified company data.
        </div>

        <h2 style={css("font-family:'Manrope',sans-serif;font-size:23px;font-weight:800;color:#0A1F44;margin:0 0 24px;")}>Leadership</h2>
        <div className="clmd-4col" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:56px;")}>
          {LEADERS.map((p) => (
            <div key={p.name}>
              <div style={css(`width:100%;aspect-ratio:1;border-radius:12px;background:${p.bg};color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:22px;margin-bottom:12px;`)}>{p.initials}</div>
              <div style={css("font-weight:700;color:#0A1F44;font-size:14.5px;")}>{p.name}</div>
              <div style={css("font-size:13px;color:#8A97A5;")}>{p.role}</div>
            </div>
          ))}
        </div>

        <div style={css("background:#F6F8FA;border-radius:16px;padding:32px;")}>
          <h2 style={css("font-family:'Manrope',sans-serif;font-size:19px;font-weight:800;color:#0A1F44;margin:0 0 12px;")}>Security &amp; compliance</h2>
          <p style={css("font-size:14.5px;color:#5C6B7A;line-height:1.65;margin:0;")}>
            We design our processes and systems around the safeguards healthcare data requires — access controls, encryption, and audit trails — and support client HIPAA obligations through Business Associate Agreements. [Add verified certifications, SOC reports, or compliance documentation here once available.]
          </p>
        </div>
      </section>
    </main>
  );
}
