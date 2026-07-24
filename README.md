# theCareLineMD — Website

Marketing website for theCareLineMD (medical billing, RCM, and healthcare software), built with **Next.js 15 (App Router) + React 19 + TypeScript**. Server-rendered, SEO-optimized, and statically prerendered.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

## Configuration

Set your production domain so canonical URLs, the sitemap, robots, and Open Graph tags are correct:

```bash
cp .env.example .env.local
# edit NEXT_PUBLIC_SITE_URL=https://www.thecarelinemd.com
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/services`, `/services/[slug]` | Billing/RCM services hub + 9 detail pages |
| `/software`, `/software/[slug]` | Software hub + 4 product pages (EHR, PMS, Patient Portal, CRM) |
| `/industries`, `/industries/[slug]` | Industries hub + 9 specialty pages |
| `/resources`, `/resources/[slug]` | Resource center + 6 articles |
| `/about`, `/contact` | About and contact (with query-preselected path: `/contact?need=billing`) |

All detail pages are prerendered at build time via `generateStaticParams`.

## SEO

- **Per-page metadata** — unique `<title>`, meta description, and canonical URL on every route (`generateMetadata`).
- **Open Graph + Twitter** cards site-wide, with a title template (`%s | theCareLineMD`).
- **Structured data (JSON-LD)** — `Organization`/`MedicalBusiness` + `WebSite` in the layout; `Service`, `SoftwareApplication`, `FAQPage`, and `Article` on the relevant detail pages.
- **`sitemap.xml`** and **`robots.txt`** generated automatically (`app/sitemap.ts`, `app/robots.ts`).
- Semantic HTML with real `<a>` links (crawlable), a single `<h1>` per page, and a proper `not-found` page.

## Deployment

**Vercel (recommended):** import the repo, set `NEXT_PUBLIC_SITE_URL`, deploy. Zero extra config.

**Any Node host:** `npm run build && npm start`.

**Static hosts** (Netlify, S3, nginx, GitHub Pages): add `output: "export"` to `next.config.mjs`, run `npm run build`, and serve the generated `out/` directory. All content is static, so export works fully — the contact form is client-side only.

## Content

All marketing copy and the content model live in [`lib/data.ts`](lib/data.ts) (services, software, industries, resources). Ported verbatim from the original design; edit there to update copy.

## Notes before going live

- Replace the illustrative stats and bracketed `[Add ...]` placeholders (About page, home security section) with verified figures and real compliance documentation.
- The contact form currently only shows a client-side confirmation — wire `components/ContactForm.tsx` `onSubmit` to your CRM/endpoint.
- Set real values in `lib/site.ts` (phone, email) if they differ.
