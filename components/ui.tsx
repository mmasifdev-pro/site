import Link from "next/link";
import { css } from "@/lib/css";

export type Crumb = { label: string; href?: string };

/** Breadcrumb row. Use color "dark" on navy heroes, "light" on white pages. */
export function Breadcrumb({ items, tone = "dark" }: { items: Crumb[]; tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "#93A5B8" : "#8A97A5";
  return (
    <div style={css(`font-size:13px;color:${color};margin-bottom:14px;`)}>
      {items.map((c, i) => (
        <span key={i}>
          {c.href ? (
            <Link href={c.href} style={css(`color:${color};text-decoration:none;`)}>
              {c.label}
            </Link>
          ) : (
            <span>{c.label}</span>
          )}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </div>
  );
}

/** The monospace URL line shown under breadcrumbs on hub/detail heroes. */
export function UrlLine({ path }: { path: string }) {
  return (
    <div style={css("font-family:monospace;font-size:12.5px;color:#5E7999;margin-bottom:16px;")}>
      carelinemd.com{path}
    </div>
  );
}

export type Pill = { name: string; href: string };

/** A labeled row of pill links (Related services, Other software, etc.). */
export function RelatedPills({ label, items }: { label: string; items: Pill[] }) {
  if (!items.length) return null;
  return (
    <div style={css("border-top:1px solid #E2E8ED;padding-top:28px;")}>
      <div style={css("font-size:13px;font-weight:700;color:#8A97A5;margin-bottom:14px;")}>{label}</div>
      <div style={css("display:flex;gap:12px;flex-wrap:wrap;")}>
        {items.map((p) => (
          <Link key={p.href} href={p.href} className="clmd-pill" style={css("border:1px solid #E2E8ED;border-radius:999px;padding:9px 16px;font-size:13.5px;font-weight:600;color:#16232F;cursor:pointer;text-decoration:none;")}>
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Feature card grid used on service/software detail pages. */
export function FeatureGrid({ features }: { features: { title: string; desc: string }[] }) {
  return (
    <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-bottom:56px;")}>
      {features.map((f, i) => (
        <div key={i} style={css("background:#fff;border:1px solid #E2E8ED;border-radius:13px;padding:22px;")}>
          <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15.5px;color:#0A1F44;margin-bottom:8px;")}>{f.title}</div>
          <div style={css("font-size:14px;color:#5C6B7A;line-height:1.55;")}>{f.desc}</div>
        </div>
      ))}
    </div>
  );
}

/** FAQ accordion-less list (matches the design's static Q/A cards). */
export function FaqList({ faq }: { faq: { q: string; a: string }[] }) {
  return (
    <div style={css("display:flex;flex-direction:column;gap:12px;margin-bottom:56px;")}>
      {faq.map((qa, i) => (
        <div key={i} style={css("background:#fff;border:1px solid #E2E8ED;border-radius:12px;padding:20px 22px;")}>
          <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#0A1F44;margin-bottom:8px;")}>{qa.q}</div>
          <div style={css("font-size:14px;color:#5C6B7A;line-height:1.6;")}>{qa.a}</div>
        </div>
      ))}
    </div>
  );
}

export function H2({ children, style }: { children: React.ReactNode; style?: string }) {
  return (
    <h2 style={css("font-family:'Manrope',sans-serif;font-size:23px;font-weight:800;color:#0A1F44;margin:0 0 20px;" + (style || ""))}>
      {children}
    </h2>
  );
}

/** Primary/secondary hero CTA buttons (navy hero variant). */
export function HeroButtons({ primary, secondary }: { primary?: { label: string; href: string }; secondary?: { label: string; href: string } }) {
  return (
    <div style={css("display:flex;gap:12px;flex-wrap:wrap;")}>
      {primary && (
        <Link href={primary.href} className="clmd-cta-primary" style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:13px 22px;border-radius:9px;cursor:pointer;text-decoration:none;")}>
          {primary.label}
        </Link>
      )}
      {secondary && (
        <Link href={secondary.href} style={css("background:none;border:1px solid #375474;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:13px 22px;border-radius:9px;cursor:pointer;text-decoration:none;")}>
          {secondary.label}
        </Link>
      )}
    </div>
  );
}
