import type { CSSProperties } from "react";

/**
 * Converts a plain CSS declaration string (e.g. "background:#fff;padding:12px;")
 * into a React style object. This lets us reuse the original design's exact
 * inline-style strings verbatim, so the port stays pixel-faithful without
 * hand-translating every rule to camelCase.
 */
const cache = new Map<string, CSSProperties>();

export function css(decl: string): CSSProperties {
  const hit = cache.get(decl);
  if (hit) return hit;

  const style: Record<string, string> = {};
  for (const part of decl.split(";")) {
    const i = part.indexOf(":");
    if (i === -1) continue;
    const prop = part.slice(0, i).trim();
    const value = part.slice(i + 1).trim();
    if (!prop || !value) continue;

    // Preserve CSS custom properties (--foo) as-is; camelCase everything else.
    const key = prop.startsWith("--")
      ? prop
      : prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
    style[key] = value;
  }

  const frozen = style as CSSProperties;
  cache.set(decl, frozen);
  return frozen;
}
