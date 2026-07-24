import { css } from "@/lib/css";

/** Decorative product mockups shown on software detail pages. */
export function SoftwareMockup({ type }: { type: string }) {
  if (type === "ehr") return <EhrMock />;
  if (type === "pms") return <PmsMock />;
  if (type === "portal") return <PortalMock />;
  if (type === "crm") return <CrmMock />;
  return null;
}

function EhrMock() {
  return (
    <div style={css("background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,0.3);")}>
      <div style={css("background:#EDF0F3;padding:9px 12px;display:flex;gap:6px;")}>
        <div style={css("width:9px;height:9px;border-radius:50%;background:#D8546B;")} />
        <div style={css("width:9px;height:9px;border-radius:50%;background:#E7A64C;")} />
        <div style={css("width:9px;height:9px;border-radius:50%;background:#1FA971;")} />
      </div>
      <div style={css("display:flex;height:230px;")}>
        <div style={css("width:100px;background:#F6F8FA;border-right:1px solid #E2E8ED;padding:10px;display:flex;flex-direction:column;gap:8px;")}>
          <div style={css("height:7px;width:70%;background:#D7DEE5;border-radius:2px;")} />
          <div style={css("height:26px;background:#0EA5A6;border-radius:5px;")} />
          <div style={css("height:26px;background:#fff;border:1px solid #E2E8ED;border-radius:5px;")} />
          <div style={css("height:26px;background:#fff;border:1px solid #E2E8ED;border-radius:5px;")} />
        </div>
        <div style={css("flex:1;padding:14px;display:flex;flex-direction:column;gap:9px;")}>
          <div style={css("height:9px;width:50%;background:#0A1F44;border-radius:2px;")} />
          <div style={css("height:7px;width:85%;background:#E2E8ED;border-radius:2px;")} />
          <div style={css("height:7px;width:70%;background:#E2E8ED;border-radius:2px;")} />
          <div style={css("display:flex;gap:8px;margin-top:6px;")}>
            <div style={css("flex:1;height:44px;background:#F6F8FA;border-radius:6px;")} />
            <div style={css("flex:1;height:44px;background:#F6F8FA;border-radius:6px;")} />
          </div>
          <div style={css("height:7px;width:60%;background:#E2E8ED;border-radius:2px;margin-top:6px;")} />
          <div style={css("height:7px;width:75%;background:#E2E8ED;border-radius:2px;")} />
        </div>
      </div>
    </div>
  );
}

function PmsMock() {
  const cell = (bg: string, h: number) => css(`background:${bg};border-radius:5px;height:${h}px;`);
  const row1: [string, number][] = [["#0EA5A6", 30], ["#E2E8ED", 30], ["#0A1F44", 30], ["#E2E8ED", 30], ["#E7A64C", 30]];
  const row2: [string, number][] = [["#E2E8ED", 44], ["#0A1F44", 44], ["#E2E8ED", 44], ["#0EA5A6", 44], ["#E2E8ED", 44]];
  const row3: [string, number][] = [["#E2E8ED", 36], ["#E2E8ED", 36], ["#E7A64C", 36], ["#E2E8ED", 36], ["#0A1F44", 36]];
  return (
    <div style={css("background:#fff;border-radius:14px;padding:18px;box-shadow:0 24px 60px rgba(0,0,0,0.3);")}>
      <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:13px;color:#0A1F44;margin-bottom:12px;")}>Week of July 20</div>
      <div style={css("display:grid;grid-template-columns:repeat(5,1fr);gap:6px;")}>
        {[...row1, ...row2, ...row3].map(([bg, h], i) => (
          <div key={i} style={cell(bg, h)} />
        ))}
      </div>
    </div>
  );
}

function PortalMock() {
  return (
    <div style={css("display:flex;justify-content:center;")}>
      <div style={css("width:210px;background:#0A1F44;border-radius:28px;padding:14px 12px;box-shadow:0 24px 60px rgba(0,0,0,0.3);")}>
        <div style={css("background:#fff;border-radius:16px;padding:16px;min-height:280px;display:flex;flex-direction:column;gap:12px;")}>
          <div style={css("font-size:12px;color:#8A97A5;")}>Good afternoon,</div>
          <div style={css("font-family:'Manrope',sans-serif;font-weight:700;font-size:15px;color:#0A1F44;margin-top:-8px;")}>Jordan Lee</div>
          <div style={css("background:#EAF6F5;border-radius:10px;padding:12px;")}>
            <div style={css("font-size:11px;color:#0B8482;font-weight:700;")}>UPCOMING VISIT</div>
            <div style={css("font-size:13px;color:#0A1F44;font-weight:600;margin-top:4px;")}>Dr. Patel · Aug 4, 10:30 AM</div>
          </div>
          <div style={css("background:#F6F8FA;border-radius:10px;padding:12px;")}>
            <div style={css("font-size:11px;color:#8A97A5;font-weight:700;")}>MESSAGES</div>
            <div style={css("font-size:13px;color:#16232F;margin-top:4px;")}>2 new from care team</div>
          </div>
          <div style={css("background:#0EA5A6;border:none;color:#fff;font-weight:700;font-size:13px;padding:10px;border-radius:8px;margin-top:auto;text-align:center;")}>Pay Bill</div>
        </div>
      </div>
    </div>
  );
}

function CrmMock() {
  return (
    <div style={css("background:#fff;border-radius:14px;padding:18px;box-shadow:0 24px 60px rgba(0,0,0,0.3);")}>
      <div style={css("display:grid;grid-template-columns:repeat(3,1fr);gap:10px;")}>
        <div>
          <div style={css("font-size:11px;font-weight:700;color:#8A97A5;margin-bottom:8px;")}>NEW LEAD</div>
          <div style={css("background:#F6F8FA;border-radius:7px;padding:9px;font-size:12px;margin-bottom:6px;")}>Dr. Kim — referral</div>
          <div style={css("background:#F6F8FA;border-radius:7px;padding:9px;font-size:12px;")}>Riverside Clinic</div>
        </div>
        <div>
          <div style={css("font-size:11px;font-weight:700;color:#8A97A5;margin-bottom:8px;")}>QUALIFIED</div>
          <div style={css("background:#F6F8FA;border-radius:7px;padding:9px;font-size:12px;")}>Oakview Health</div>
        </div>
        <div>
          <div style={css("font-size:11px;font-weight:700;color:#8A97A5;margin-bottom:8px;")}>WON</div>
          <div style={css("background:#EAF6F5;border:1px solid #0EA5A6;border-radius:7px;padding:9px;font-size:12px;")}>Northfield Group</div>
        </div>
      </div>
    </div>
  );
}
