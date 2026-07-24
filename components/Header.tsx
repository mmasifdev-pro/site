"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { css } from "@/lib/css";
import { SERVICES, SOFTWARE, INDUSTRIES } from "@/lib/data";

type Menu = "services" | "software" | "industries" | null;

const menuPanel =
  "position:absolute;top:48px;left:0;background:#fff;border:1px solid #E2E8ED;border-radius:12px;box-shadow:0 16px 40px rgba(10,31,68,0.14);padding:10px;z-index:60;";
const menuItem =
  "display:block;padding:9px 12px;border-radius:8px;cursor:pointer;font-size:14px;color:#16232F;text-decoration:none;";
const menuAll =
  "display:block;padding:9px 12px;border-radius:8px;cursor:pointer;font-size:14px;font-weight:600;color:#0EA5A6;text-decoration:none;";
const navBtn =
  "background:none;border:none;font:inherit;font-size:15px;font-weight:600;color:#16232F;padding:10px 14px;border-radius:8px;cursor:pointer;";
const navLink =
  "font-size:15px;font-weight:600;color:#16232F;padding:10px 14px;border-radius:8px;cursor:pointer;text-decoration:none;";

export default function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const toggle = (m: Exclude<Menu, null>) => setMenu((cur) => (cur === m ? null : m));
  const closeAll = () => {
    setMenu(null);
    setMobile(false);
  };

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenu(null);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") closeAll();
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  return (
    <header style={css("position:sticky;top:0;z-index:50;background:#FFFFFF;border-bottom:1px solid #E2E8ED;")}>
      <div style={css("max-width:1280px;margin:0 auto;padding:0 32px;display:flex;align-items:center;justify-content:space-between;height:78px;")}>
        <Link href="/" onClick={closeAll} style={css("display:flex;align-items:center;gap:10px;text-decoration:none;")}>
          <img
            src="/logo.svg"
            alt="CareLineMD logo"
            style={css("width:40px;height:40px;display:block;")}
          />
          <span style={css("font-family:'Manrope',sans-serif;font-weight:800;font-size:19px;letter-spacing:-0.02em;color:#0A1F44;")}>
            theCareLineMD
          </span>
        </Link>

        <nav ref={navRef} className="clmd-desktop-nav" style={css("display:flex;align-items:center;gap:6px;position:relative;")}>
          <MenuGroup
            label="Services"
            open={menu === "services"}
            onToggle={() => toggle("services")}
            width={300}
            items={SERVICES.map((s) => ({ name: s.name, href: `/services/${s.slug}` }))}
            allHref="/services"
            allLabel="View all billing services →"
            onNavigate={closeAll}
          />
          <MenuGroup
            label="Software"
            open={menu === "software"}
            onToggle={() => toggle("software")}
            width={260}
            items={SOFTWARE.map((s) => ({ name: s.name, href: `/software/${s.slug}` }))}
            allHref="/software"
            allLabel="View all software →"
            onNavigate={closeAll}
          />
          <MenuGroup
            label="Industries"
            open={menu === "industries"}
            onToggle={() => toggle("industries")}
            width={280}
            items={INDUSTRIES.map((s) => ({ name: s.name, href: `/industries/${s.slug}` }))}
            allHref="/industries"
            allLabel="View all industries →"
            onNavigate={closeAll}
          />
          <Link href="/resources" className="clmd-navitem" style={css(navLink)} onClick={closeAll}>
            Resources
          </Link>
          <Link href="/about" className="clmd-navitem" style={css(navLink)} onClick={closeAll}>
            About
          </Link>
        </nav>

        <div className="clmd-desktop-cta" style={css("display:flex;align-items:center;gap:10px;")}>
          <Link href="/contact" style={css("background:none;border:1px solid #D7DEE5;color:#16232F;font:inherit;font-weight:600;font-size:14px;padding:10px 18px;border-radius:8px;cursor:pointer;text-decoration:none;")}>
            Book a Demo
          </Link>
          <Link href="/contact" className="clmd-cta-primary" style={css("background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:14px;padding:11px 20px;border-radius:8px;cursor:pointer;text-decoration:none;")}>
            Get Started
          </Link>
        </div>

        <button
          className="clmd-hamburger"
          aria-label="Toggle menu"
          aria-expanded={mobile}
          onClick={() => setMobile((v) => !v)}
          style={css("display:none;background:none;border:1px solid #E2E8ED;border-radius:8px;width:40px;height:40px;align-items:center;justify-content:center;cursor:pointer;")}
        >
          <div style={css("width:18px;")}>
            <div style={css("height:2px;background:#16232F;margin-bottom:4px;")} />
            <div style={css("height:2px;background:#16232F;margin-bottom:4px;")} />
            <div style={css("height:2px;background:#16232F;")} />
          </div>
        </button>
      </div>

      {mobile && (
        <div style={css("border-top:1px solid #E2E8ED;padding:16px 24px;display:flex;flex-direction:column;gap:4px;")}>
          <MobileLink href="/services" onClick={closeAll}>Medical Billing Services</MobileLink>
          <MobileLink href="/software" onClick={closeAll}>Healthcare Software</MobileLink>
          <MobileLink href="/industries" onClick={closeAll}>Industries</MobileLink>
          <MobileLink href="/resources" onClick={closeAll}>Resources</MobileLink>
          <MobileLink href="/about" onClick={closeAll}>About</MobileLink>
          <Link href="/contact" onClick={closeAll} style={css("margin-top:8px;background:#0EA5A6;border:none;color:#fff;font:inherit;font-weight:700;font-size:15px;padding:14px;border-radius:8px;cursor:pointer;text-align:center;text-decoration:none;")}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}

function MenuGroup({
  label,
  open,
  onToggle,
  width,
  items,
  allHref,
  allLabel,
  onNavigate,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  width: number;
  items: { name: string; href: string }[];
  allHref: string;
  allLabel: string;
  onNavigate: () => void;
}) {
  return (
    <div style={css("position:relative;")}>
      <button className="clmd-navitem" onClick={onToggle} aria-expanded={open} style={css(navBtn)}>
        {label}
      </button>
      {open && (
        <div style={{ ...css(menuPanel), width }}>
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="clmd-menuitem" style={css(menuItem)} onClick={onNavigate}>
              {it.name}
            </Link>
          ))}
          <div style={css("height:1px;background:#E2E8ED;margin:8px 4px;")} />
          <Link href={allHref} style={css(menuAll)} onClick={onNavigate}>
            {allLabel}
          </Link>
        </div>
      )}
    </div>
  );
}

function MobileLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} onClick={onClick} style={css("padding:12px 8px;font-weight:700;color:#0A1F44;cursor:pointer;text-decoration:none;")}>
      {children}
    </Link>
  );
}
