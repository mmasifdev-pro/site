import Link from "next/link";
import { css } from "@/lib/css";
import { SERVICES, SOFTWARE, INDUSTRIES } from "@/lib/data";

const colHead = "font-size:12px;font-weight:700;color:#4E6280;letter-spacing:0.04em;margin-bottom:14px;";
const colList = "display:flex;flex-direction:column;gap:10px;";
const footLink = "font-size:13.5px;color:#B7C4D1;cursor:pointer;text-decoration:none;";

export default function Footer() {
  return (
    <footer style={css("background:#081733;padding:64px 32px 28px;")}>
      <div style={css("max-width:1280px;margin:0 auto;")}>
        <div className="clmd-footer-cols" style={css("display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr 1fr;gap:32px;margin-bottom:48px;")}>
          <div>
            <div style={css("display:flex;align-items:center;gap:9px;margin-bottom:14px;")}>
              <img src="/logo.svg" alt="CareLineMD logo" style={css("width:32px;height:32px;display:block;")} />
              <span style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:16px;color:#fff;")}>CareLineMD</span>
            </div>
            <p style={css("font-size:13.5px;color:#7C8CA0;line-height:1.6;max-width:260px;margin:0;")}>
              Medical billing, revenue cycle management, and healthcare software for modern practices.
            </p>
          </div>

          <div>
            <div style={css(colHead)}>SERVICES</div>
            <div style={css(colList)}>
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="clmd-footer-link" style={css(footLink)}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={css(colHead)}>SOFTWARE</div>
            <div style={css(colList)}>
              {SOFTWARE.map((s) => (
                <Link key={s.slug} href={`/software/${s.slug}`} className="clmd-footer-link" style={css(footLink)}>
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div style={css(colHead)}>INDUSTRIES</div>
            <div style={css(colList)}>
              {INDUSTRIES.slice(0, 6).map((s) => (
                <Link key={s.slug} href={`/industries/${s.slug}`} className="clmd-footer-link" style={css(footLink)}>
                  {s.name}
                </Link>
              ))}
              <Link href="/industries" style={css("font-size:13.5px;color:#0EA5A6;cursor:pointer;font-weight:600;text-decoration:none;")}>
                View all →
              </Link>
            </div>
          </div>

          <div>
            <div style={css(colHead)}>COMPANY</div>
            <div style={css(colList)}>
              <Link href="/resources" className="clmd-footer-link" style={css(footLink)}>Resources</Link>
              <Link href="/about" className="clmd-footer-link" style={css(footLink)}>About Us</Link>
              <Link href="/contact" className="clmd-footer-link" style={css(footLink)}>Contact</Link>
            </div>
          </div>
        </div>

        <div style={css("border-top:1px solid #17284A;padding-top:22px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;")}>
          <div style={css("font-size:12.5px;color:#5A6C85;")}>© 2026 CareLineMD. All rights reserved.</div>
          <div style={css("display:flex;gap:20px;font-size:12.5px;color:#5A6C85;")}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Accessibility</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
