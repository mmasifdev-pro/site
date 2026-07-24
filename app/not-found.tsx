import Link from "next/link";
import { css } from "@/lib/css";

export default function NotFound() {
  return (
    <main style={css("max-width:720px;margin:0 auto;padding:96px 32px;text-align:center;")}>
      <div style={css("font-family:'Manrope',sans-serif;font-size:64px;font-weight:800;color:#0A1F44;")}>404</div>
      <h1 style={css("font-family:'Manrope',sans-serif;font-size:24px;font-weight:800;color:#0A1F44;margin:8px 0 12px;")}>Page not found</h1>
      <p style={css("color:#5C6B7A;font-size:16px;margin:0 0 28px;")}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" className="clmd-cta-primary" style={css("display:inline-block;background:#0EA5A6;border:none;color:#fff;font-weight:700;font-size:15px;padding:14px 26px;border-radius:9px;text-decoration:none;")}>
        Back to home
      </Link>
    </main>
  );
}
