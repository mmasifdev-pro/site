import { css } from "@/lib/css";

function Stat({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div style={css("background:#F6F8FA;border-radius:10px;padding:12px;")}>
      <div style={css("font-size:11px;color:#8A97A5;font-weight:600;margin-bottom:4px;")}>{label}</div>
      <div style={css("font-family:'Manrope',sans-serif;font-size:22px;font-weight:800;color:#0A1F44;")}>{value}</div>
      <div style={css("font-size:11px;color:#1FA971;font-weight:700;")}>{delta}</div>
    </div>
  );
}

function Claim({ who, status, color }: { who: string; status: string; color: string }) {
  return (
    <div style={css("display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:#F6F8FA;border-radius:8px;font-size:12.5px;")}>
      <span style={css("color:#16232F;font-weight:600;")}>{who}</span>
      <span style={css(`color:${color};font-weight:700;`)}>{status}</span>
    </div>
  );
}

/** The "Revenue Cycle Overview" hero dashboard mock. */
export default function HomeDashboard() {
  return (
    <div className="clmd-hero-mock" style={css("background:#fff;border:1px solid #E2E8ED;border-radius:20px;box-shadow:0 30px 70px rgba(10,31,68,0.14);padding:26px;")}>
      <div style={css("display:flex;align-items:center;justify-content:space-between;margin-bottom:18px;")}>
        <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#0A1F44;")}>Revenue Cycle Overview</div>
        <div style={css("display:flex;align-items:center;gap:6px;font-size:12px;color:#1FA971;font-weight:600;")}>
          <span style={css("width:7px;height:7px;border-radius:50%;background:#1FA971;display:inline-block;")} />
          Live
        </div>
      </div>

      <div style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px;")}>
        <Stat label="DAYS IN AR" value="28.4" delta="↓ 6.2 vs last qtr" />
        <Stat label="CLEAN CLAIM RATE" value="98.4%" delta="↑ 1.1 pts" />
        <Stat label="DENIAL RATE" value="4.1%" delta="↓ 2.3 pts" />
      </div>

      <div style={css("display:grid;grid-template-columns:1.3fr 1fr;gap:14px;margin-bottom:16px;")}>
        <div style={css("background:#F6F8FA;border-radius:10px;padding:14px;")}>
          <div style={css("font-size:11px;color:#8A97A5;font-weight:600;margin-bottom:8px;")}>COLLECTIONS ($K)</div>
          <svg viewBox="0 0 220 80" style={{ width: "100%", height: "70px" }} role="img" aria-label="Collections trend, increasing">
            <polyline points="0,60 35,52 70,55 105,38 140,30 175,18 220,10" fill="none" stroke="#0EA5A6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points="0,60 35,52 70,55 105,38 140,30 175,18 220,10 220,80 0,80" fill="#0EA5A6" opacity="0.08" stroke="none" />
          </svg>
        </div>
        <div style={css("background:#F6F8FA;border-radius:10px;padding:14px;display:flex;flex-direction:column;align-items:center;")}>
          <div style={css("font-size:11px;color:#8A97A5;font-weight:600;margin-bottom:8px;align-self:flex-start;")}>CLAIM STATUS</div>
          <div style={css("width:70px;height:70px;border-radius:50%;background:conic-gradient(#1FA971 0% 78%, #E7A64C 78% 92%, #D8546B 92% 100%);")} />
        </div>
      </div>

      <div style={css("display:flex;flex-direction:column;gap:6px;")}>
        <div style={css("font-size:11px;color:#8A97A5;font-weight:600;")}>RECENT CLAIMS</div>
        <Claim who="Patient J.M. · Aetna" status="Paid" color="#1FA971" />
        <Claim who="Patient R.T. · Cigna" status="Pending" color="#E7A64C" />
        <Claim who="Patient K.S. · UHC" status="Denied" color="#D8546B" />
      </div>
    </div>
  );
}
