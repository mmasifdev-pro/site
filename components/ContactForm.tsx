"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { css } from "@/lib/css";
import { SITE } from "@/lib/site";
import { Breadcrumb } from "@/components/ui";

type Path = "billing" | "software" | "both";
const LABEL: Record<Path, string> = {
  billing: "Medical Billing",
  software: "Healthcare Software",
  both: "Billing + Software",
};

export default function ContactForm() {
  const params = useSearchParams();
  const initial = (params.get("need") as Path) || "both";
  const [path, setPath] = useState<Path>(["billing", "software", "both"].includes(initial) ? initial : "both");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo(0, 0);
  };

  const pathBtn = (active: boolean) =>
    css(
      "border-radius:9px;padding:12px 18px;font:inherit;font-weight:700;font-size:13.5px;cursor:pointer;" +
        (active ? "background:#0EA5A6;color:#fff;border:none;" : "background:none;border:1px solid #D7DEE5;color:#16232F;")
    );

  const input = css("width:100%;box-sizing:border-box;border:1px solid #D7DEE5;border-radius:9px;padding:12px 14px;font:inherit;font-size:14.5px;");
  const label = css("font-size:13px;font-weight:600;color:#2B3A49;display:block;margin-bottom:6px;");

  return (
    <section style={css("max-width:1080px;margin:0 auto;padding:64px 32px 88px;")}>
      <Breadcrumb tone="light" items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <h1 style={css("font-family:'Manrope',sans-serif;font-size:32px;font-weight:800;color:#0A1F44;margin:0 0 12px;")}>Let&apos;s find the right fit</h1>
      <p style={css("color:#5C6B7A;font-size:15.5px;margin:0 0 32px;max-width:560px;")}>
        Tell us what you need — our team follows up within one business day.
      </p>

      {submitted ? (
        <div style={css("background:#EAF6F5;border:1px solid #0EA5A6;border-radius:14px;padding:36px;text-align:center;max-width:560px;")}>
          <div style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:19px;color:#0A1F44;margin-bottom:8px;")}>Thanks — request received.</div>
          <div style={css("font-size:14.5px;color:#2B3A49;")}>
            A member of our team will reach out shortly to talk through your {LABEL[path]} needs.
          </div>
        </div>
      ) : (
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:1.3fr 1fr;gap:48px;")}>
          <div>
            <div style={css("font-size:13px;font-weight:700;color:#8A97A5;margin-bottom:12px;")}>WHAT DO YOU NEED?</div>
            <div style={css("display:flex;gap:10px;margin-bottom:28px;flex-wrap:wrap;")}>
              <button type="button" onClick={() => setPath("billing")} style={pathBtn(path === "billing")}>Medical Billing</button>
              <button type="button" onClick={() => setPath("software")} style={pathBtn(path === "software")}>Healthcare Software</button>
              <button type="button" onClick={() => setPath("both")} style={pathBtn(path === "both")}>Both</button>
            </div>
            <form onSubmit={onSubmit} style={css("display:flex;flex-direction:column;gap:14px;")}>
              <div>
                <label style={label} htmlFor="name">Full name</label>
                <input id="name" required type="text" placeholder="Jamie Rivera" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="email">Work email</label>
                <input id="email" required type="email" placeholder="jamie@practice.com" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="org">Organization</label>
                <input id="org" type="text" placeholder="Practice or hospital name" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="msg">What can we help with?</label>
                <textarea id="msg" rows={4} placeholder="A brief note on your billing or software needs" style={css("width:100%;box-sizing:border-box;border:1px solid #D7DEE5;border-radius:9px;padding:12px 14px;font:inherit;font-size:14.5px;resize:vertical;")} />
              </div>
              <button type="submit" className="clmd-cta-primary" style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:15px;padding:14px;border-radius:9px;cursor:pointer;margin-top:6px;")}>
                Request Consultation
              </button>
            </form>
          </div>

          <div>
            <div style={css("background:#F6F8FA;border-radius:14px;padding:24px;margin-bottom:16px;")}>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#0A1F44;margin-bottom:14px;")}>What happens next</div>
              <div style={css("display:flex;flex-direction:column;gap:12px;")}>
                {[
                  "We review your practice details and goals",
                  "A healthcare specialist reaches out within one business day",
                  "We map out a billing assessment or software demo",
                ].map((t, i) => (
                  <div key={i} style={css("display:flex;gap:10px;font-size:13.5px;color:#2B3A49;")}>
                    <span style={css("font-weight:800;color:#0EA5A6;")}>{i + 1}.</span>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div style={css("background:#0A1F44;border-radius:14px;padding:24px;")}>
              <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#fff;margin-bottom:10px;")}>Prefer to talk now?</div>
              <div style={css("font-size:13.5px;color:#B7C4D1;line-height:1.6;")}>
                Call {SITE.phone} or email {SITE.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
