import Link from "next/link";
import { css } from "@/lib/css";
import { SERVICES, SOFTWARE, INDUSTRIES, RESOURCES } from "@/lib/data";
import { contactHref } from "@/lib/site";
import HomeDashboard from "@/components/HomeDashboard";

export default function HomePage() {
  const servicesHome = SERVICES.slice(0, 8);
  const resourcesHome = RESOURCES.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section style={css("max-width:1280px;margin:0 auto;padding:88px 32px 64px;")}>
        <div className="clmd-hero-grid" style={css("display:grid;grid-template-columns:1.05fr 0.95fr;gap:64px;align-items:center;")}>
          <div>
            <div style={css("display:inline-flex;align-items:center;gap:8px;background:#EAF6F5;color:#0B8482;font-weight:700;font-size:13px;letter-spacing:0.02em;padding:7px 14px;border-radius:999px;margin-bottom:22px;")}>
              MEDICAL BILLING · RCM · HEALTHCARE SOFTWARE
            </div>
            <h1 style={css("font-family:'Manrope',sans-serif;font-size:52px;line-height:1.08;font-weight:800;color:#0A1F44;letter-spacing:-0.02em;margin:0 0 22px;text-wrap:balance;")}>
              Get paid faster. Run your practice smarter.
            </h1>
            <p style={css("font-size:18px;line-height:1.6;color:#4C5C6C;max-width:520px;margin:0 0 34px;")}>
              theCareLineMD helps healthcare organizations improve revenue and modernize operations with expert medical billing &amp; revenue cycle management, paired with an EHR, PMS, and patient portal built to work together.
            </p>
            <div style={css("display:flex;flex-wrap:wrap;gap:14px;margin-bottom:36px;")}>
              <Link href="/contact" className="clmd-cta-primary" style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:15px;padding:15px 26px;border-radius:9px;text-decoration:none;")}>
                Get Started
              </Link>
              <Link href="/contact" style={css("background:#fff;border:1px solid #D7DEE5;color:#0A1F44;font:inherit;font-weight:700;font-size:15px;padding:15px 26px;border-radius:9px;text-decoration:none;")}>
                Book a Demo
              </Link>
              <Link href="/contact" style={css("color:#0A1F44;font:inherit;font-weight:600;font-size:15px;padding:15px 8px;text-decoration:underline;")}>
                Talk to a Healthcare Expert →
              </Link>
            </div>
            <div>
              <div style={css("font-size:12px;font-weight:700;letter-spacing:0.06em;color:#8A97A5;margin-bottom:12px;")}>
                TRUSTED BY PRACTICES ACROSS THE COUNTRY
              </div>
              <div style={css("display:flex;flex-wrap:wrap;gap:28px;align-items:center;")}>
                {["Summit Primary Care", "Bayview Ortho", "Cedar Behavioral Group", "Northfield Multi-Specialty"].map((n) => (
                  <div key={n} style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:17px;color:#B7C1CB;")}>{n}</div>
                ))}
              </div>
            </div>
          </div>
          <HomeDashboard />
        </div>
      </section>

      {/* Choose the path */}
      <section style={css("max-width:1280px;margin:0 auto;padding:24px 32px 80px;")}>
        <div style={css("text-align:center;margin-bottom:36px;")}>
          <h2 style={css("font-family:'Manrope',sans-serif;font-size:30px;font-weight:800;color:#0A1F44;margin:0 0 10px;")}>Choose the path that fits your organization</h2>
          <p style={css("color:#5C6B7A;font-size:16px;margin:0;")}>Billing services, healthcare software, or both — built to work together from day one.</p>
        </div>
        <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px;")}>
          <PathCard tag="MB" tagBg="#0A1F44" title="Medical Billing Services" body="Full-service billing, coding, and RCM handled by a dedicated team, from claims to appeals." href={contactHref("billing")} cta="I need Medical Billing →" />
          <div style={css("background:#0A1F44;border:1px solid #0A1F44;border-radius:16px;padding:30px;")}>
            <div style={css("width:46px;height:46px;border-radius:11px;background:#0EA5A6;color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:16px;margin-bottom:18px;")}>B+S</div>
            <h3 style={css("font-family:'Manrope',sans-serif;font-size:19px;font-weight:800;color:#fff;margin:0 0 8px;")}>Billing + Software</h3>
            <p style={css("color:#B7C4D1;font-size:14.5px;line-height:1.6;margin:0 0 20px;")}>Our RCM team backed by your own EHR, PMS, and patient portal — one partner, one data flow.</p>
            <Link href={contactHref("both")} className="clmd-cta-primary" style={css("display:block;text-align:center;background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:14px;padding:11px 18px;border-radius:8px;text-decoration:none;width:100%;box-sizing:border-box;")}>I need both →</Link>
          </div>
          <PathCard tag="SW" tagBg="#0A1F44" title="Healthcare Software" body="EHR, PMS, patient portal, and CRM — modern healthcare software you can run standalone." href={contactHref("software")} cta="I need Software →" />
        </div>
      </section>

      {/* Services */}
      <section style={css("background:#fff;border-top:1px solid #E2E8ED;border-bottom:1px solid #E2E8ED;padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <SectionHead title="Medical billing & RCM services" href="/services" linkLabel="View all services →" />
          <div className="clmd-4col" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:16px;")}>
            {servicesHome.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="clmd-card-hover-soft" style={css("border:1px solid #E2E8ED;border-radius:13px;padding:20px;cursor:pointer;text-decoration:none;")}>
                <div style={css("width:38px;height:38px;border-radius:9px;background:#EAF6F5;color:#0B8482;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:13px;margin-bottom:14px;")}>{s.initials}</div>
                <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#0A1F44;")}>{s.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Software */}
      <section style={css("padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <SectionHead title="Healthcare software built to work together" href="/software" linkLabel="View all software →" />
          <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:18px;")}>
            <SoftwareCard slug="ehr" title="EHR" subtitle="Electronic Health Records">
              <div style={css("background:#0A1F44;padding:14px;height:96px;display:flex;flex-direction:column;gap:5px;")}>
                <div style={css("height:8px;width:60%;background:#2B4B78;border-radius:3px;")} />
                <div style={css("height:8px;width:80%;background:#2B4B78;border-radius:3px;")} />
                <div style={css("height:8px;width:40%;background:#0EA5A6;border-radius:3px;")} />
              </div>
            </SoftwareCard>
            <SoftwareCard slug="pms" title="PMS" subtitle="Practice Management System">
              <div style={css("background:#F6F8FA;padding:14px;height:96px;display:grid;grid-template-columns:repeat(5,1fr);gap:3px;")}>
                {["#0EA5A6", "#E2E8ED", "#0A1F44", "#E2E8ED", "#E7A64C", "#E2E8ED", "#0A1F44", "#E2E8ED", "#0EA5A6", "#E2E8ED"].map((c, i) => (
                  <div key={i} style={css(`background:${c};border-radius:2px;`)} />
                ))}
              </div>
            </SoftwareCard>
            <SoftwareCard slug="patient-portal" title="Patient Portal" subtitle="Self-service for patients">
              <div style={css("background:#F6F8FA;padding:14px;height:96px;display:flex;justify-content:center;")}>
                <div style={css("width:52px;background:#0A1F44;border-radius:8px;padding:6px 5px;display:flex;flex-direction:column;gap:4px;")}>
                  <div style={css("height:6px;background:#0EA5A6;border-radius:2px;")} />
                  <div style={css("height:14px;background:#2B4B78;border-radius:2px;")} />
                  <div style={css("height:14px;background:#2B4B78;border-radius:2px;")} />
                </div>
              </div>
            </SoftwareCard>
            <SoftwareCard slug="healthcare-crm" title="Healthcare CRM" subtitle="Referrals & patient acquisition">
              <div style={css("background:#F6F8FA;padding:14px;height:96px;display:flex;gap:5px;")}>
                <div style={css("flex:1;background:#fff;border:1px solid #E2E8ED;border-radius:5px;")} />
                <div style={css("flex:1;background:#fff;border:1px solid #E2E8ED;border-radius:5px;")} />
                <div style={css("flex:1;background:#EAF6F5;border:1px solid #0EA5A6;border-radius:5px;")} />
              </div>
            </SoftwareCard>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section style={css("background:#0A1F44;padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <h2 style={css("font-family:'Manrope',sans-serif;font-size:26px;font-weight:800;color:#fff;margin:0 0 40px;text-align:center;")}>Outcomes practices see when we take over RCM</h2>
          <div className="clmd-4col" style={css("display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;")}>
            {[
              ["32%*", "Avg. denial rate reduction"],
              ["98.4%*", "Clean claim rate"],
              ["9 days*", "Avg. reduction in days-in-AR"],
              ["<24 hrs*", "Eligibility verification turnaround"],
            ].map(([v, l]) => (
              <div key={l}>
                <div style={css("font-family:'Manrope',sans-serif;font-size:38px;font-weight:800;color:#fff;")}>{v}</div>
                <div style={css("color:#93A5B8;font-size:14px;margin-top:6px;")}>{l}</div>
              </div>
            ))}
          </div>
          <div style={css("text-align:center;color:#6E85A0;font-size:12.5px;margin-top:28px;")}>
            *Based on aggregated client outcomes over a 12-month period. Individual results vary by practice size, specialty, and payer mix.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={css("padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <h2 style={css("font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;color:#0A1F44;margin:0 0 32px;text-align:center;")}>What our clients say</h2>
          <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:20px;")}>
            <Testimonial quote={'"Switching our billing to theCareLineMD cut our denial rate almost in half within two quarters. Their team caught issues our old vendor never flagged."'} name="Dr. Meera Anand" role="Summit Primary Care" />
            <Testimonial quote={'"Having our PMS and billing team on the same platform removed the back-and-forth entirely. Scheduling, claims, and payments finally talk to each other."'} name="James Ortega" role="Practice Administrator, Bayview Ortho" />
            <Testimonial quote={'"Our patients actually use the portal — appointment requests and bill pay dropped our front-desk call volume noticeably."'} name="Priya Chandrasekaran" role="Office Manager, Cedar Behavioral Group" />
          </div>
        </div>
      </section>

      {/* Security */}
      <section style={css("background:#fff;border-top:1px solid #E2E8ED;border-bottom:1px solid #E2E8ED;padding:72px 32px;")}>
        <div className="clmd-3col" style={css("max-width:1080px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;")}>
          <div>
            <h2 style={css("font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;color:#0A1F44;margin:0 0 16px;")}>Security &amp; compliance-minded by design</h2>
            <p style={css("color:#5C6B7A;font-size:15px;line-height:1.65;margin:0;")}>
              Our systems are built around the access controls, encryption practices, and audit logging that healthcare data handling requires. We work with practices to support their own HIPAA compliance obligations, including business associate agreements where applicable.
            </p>
          </div>
          <div style={css("display:flex;flex-direction:column;gap:10px;")}>
            {["Encryption in transit and at rest", "Role-based access controls", "Business Associate Agreements available"].map((t) => (
              <div key={t} style={css("display:flex;gap:12px;align-items:flex-start;background:#F6F8FA;border-radius:10px;padding:14px 16px;")}>
                <div style={css("width:8px;height:8px;border-radius:50%;background:#0EA5A6;margin-top:6px;flex-shrink:0;")} />
                <div style={css("font-size:14px;color:#2B3A49;")}>{t}</div>
              </div>
            ))}
            <div style={css("font-size:12.5px;color:#8A97A5;margin-top:4px;")}>[Add your verified certifications, audit reports, or compliance badges here]</div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={css("padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <div style={css("text-align:center;margin-bottom:28px;")}>
            <h2 style={css("font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;color:#0A1F44;margin:0 0 10px;")}>Built for every specialty</h2>
            <p style={css("color:#5C6B7A;font-size:15px;margin:0;")}>Billing and software workflows tuned to how each specialty actually operates.</p>
          </div>
          <div style={css("display:flex;flex-wrap:wrap;gap:10px;justify-content:center;")}>
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="clmd-pill" style={css("border:1px solid #E2E8ED;background:#fff;border-radius:999px;padding:10px 18px;font-size:14px;font-weight:600;color:#16232F;cursor:pointer;text-decoration:none;")}>
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section style={css("background:#fff;border-top:1px solid #E2E8ED;padding:72px 32px;")}>
        <div style={css("max-width:1280px;margin:0 auto;")}>
          <SectionHead title="From the resource center" href="/resources" linkLabel="View all resources →" />
          <div className="clmd-3col" style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:18px;")}>
            {resourcesHome.map((r) => (
              <Link key={r.slug} href={`/resources/${r.slug}`} className="clmd-card-hover" style={css("border:1px solid #E2E8ED;border-radius:14px;padding:22px;cursor:pointer;text-decoration:none;display:block;")}>
                <div style={css("font-size:12px;font-weight:700;color:#0B8482;text-transform:uppercase;letter-spacing:0.03em;margin-bottom:10px;")}>{r.category}</div>
                <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:16.5px;color:#0A1F44;margin-bottom:8px;line-height:1.35;")}>{r.title}</div>
                <div style={css("font-size:13.5px;color:#5C6B7A;line-height:1.5;")}>{r.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={css("padding:80px 32px;")}>
        <div style={css("max-width:820px;margin:0 auto;text-align:center;")}>
          <h2 style={css("font-family:'Manrope',sans-serif;font-size:32px;font-weight:800;color:#0A1F44;margin:0 0 14px;")}>Ready to see what&apos;s possible?</h2>
          <p style={css("color:#5C6B7A;font-size:16px;margin:0 0 30px;")}>Tell us where you need help — our team will follow up within one business day.</p>
          <div style={css("display:flex;gap:14px;justify-content:center;flex-wrap:wrap;")}>
            <Link href={contactHref("billing")} style={css("background:#0A1F44;border:none;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:14px 22px;border-radius:9px;text-decoration:none;")}>I need Medical Billing</Link>
            <Link href={contactHref("software")} style={css("background:#0A1F44;border:none;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:14px 22px;border-radius:9px;text-decoration:none;")}>I need Software</Link>
            <Link href={contactHref("both")} className="clmd-cta-primary" style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:14.5px;padding:14px 22px;border-radius:9px;text-decoration:none;")}>I need both</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHead({ title, href, linkLabel }: { title: string; href: string; linkLabel: string }) {
  return (
    <div style={css("display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:12px;")}>
      <h2 style={css("font-family:'Manrope',sans-serif;font-size:27px;font-weight:800;color:#0A1F44;margin:0;")}>{title}</h2>
      <Link href={href} style={css("font-weight:700;color:#0EA5A6;font-size:14.5px;text-decoration:none;")}>{linkLabel}</Link>
    </div>
  );
}

function PathCard({ tag, tagBg, title, body, href, cta }: { tag: string; tagBg: string; title: string; body: string; href: string; cta: string }) {
  return (
    <div style={css("background:#fff;border:1px solid #E2E8ED;border-radius:16px;padding:30px;")}>
      <div style={css(`width:46px;height:46px;border-radius:11px;background:${tagBg};color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Manrope',sans-serif;font-weight:800;font-size:16px;margin-bottom:18px;`)}>{tag}</div>
      <h3 style={css("font-family:'Manrope',sans-serif;font-size:19px;font-weight:800;color:#0A1F44;margin:0 0 8px;")}>{title}</h3>
      <p style={css("color:#5C6B7A;font-size:14.5px;line-height:1.6;margin:0 0 20px;")}>{body}</p>
      <Link href={href} style={css("display:block;text-align:center;background:none;border:1px solid #D7DEE5;color:#0A1F44;font:inherit;font-weight:700;font-size:14px;padding:11px 18px;border-radius:8px;text-decoration:none;width:100%;box-sizing:border-box;")}>{cta}</Link>
    </div>
  );
}

function SoftwareCard({ slug, title, subtitle, children }: { slug: string; title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <Link href={`/software/${slug}`} className="clmd-card-hover" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:14px;overflow:hidden;cursor:pointer;text-decoration:none;display:block;")}>
      {children}
      <div style={css("padding:16px;")}>
        <div style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:15px;color:#0A1F44;margin-bottom:4px;")}>{title}</div>
        <div style={css("font-size:13px;color:#5C6B7A;")}>{subtitle}</div>
      </div>
    </Link>
  );
}

function Testimonial({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div style={css("background:#fff;border:1px solid #E2E8ED;border-radius:14px;padding:26px;")}>
      <p style={css("font-size:15px;line-height:1.6;color:#2B3A49;margin:0 0 18px;")}>{quote}</p>
      <div style={css("font-weight:700;color:#0A1F44;font-size:14px;")}>{name}</div>
      <div style={css("font-size:13px;color:#8A97A5;")}>{role}</div>
    </div>
  );
}
