"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          organization,
          message,
          need: path,
        }),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Unable to submit the form.");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setOrganization("");
      setMessage("");
      window.scrollTo(0, 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                <input id="name" required type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Jamie Rivera" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="email">Work email</label>
                <input id="email" required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="jamie@practice.com" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="org">Organization</label>
                <input id="org" type="text" value={organization} onChange={(event) => setOrganization(event.target.value)} placeholder="Practice or hospital name" style={input} />
              </div>
              <div>
                <label style={label} htmlFor="msg">What can we help with?</label>
                <textarea id="msg" rows={4} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="A brief note on your billing or software needs" style={css("width:100%;box-sizing:border-box;border:1px solid #D7DEE5;border-radius:9px;padding:12px 14px;font:inherit;font-size:14.5px;resize:vertical;")} />
              </div>
              {error ? <div style={css("color:#B91C1C;font-size:14px;margin-top:-4px;")}>{error}</div> : null}
              <button type="submit" className="clmd-cta-primary" disabled={isSubmitting} style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:15px;padding:14px;border-radius:9px;cursor:pointer;margin-top:6px;opacity:" + (isSubmitting ? "0.7" : "1") + ";")}>
                {isSubmitting ? "Sending…" : "Request Consultation"}
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
