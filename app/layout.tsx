import type { Metadata } from "next";
import "./globals.css";
import { SITE, absUrl } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "medical billing",
    "revenue cycle management",
    "RCM",
    "healthcare software",
    "EHR",
    "practice management system",
    "patient portal",
    "medical coding",
    "denial management",
    "healthcare credentialing",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  // Only the card type is set globally so each page's Open Graph title/description
  // drive the Twitter card (Twitter falls back to og:* when twitter:* is absent).
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "healthcare",
};

function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalBusiness"],
        "@id": absUrl("/#organization"),
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: "US",
        knowsAbout: [
          "Medical Billing",
          "Revenue Cycle Management",
          "Medical Coding",
          "Healthcare Software",
          "Electronic Health Records",
        ],
      },
      {
        "@type": "WebSite",
        "@id": absUrl("/#website"),
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": absUrl("/#organization") },
        inLanguage: "en-US",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <OrganizationJsonLd />
        <div style={{ minHeight: "100vh", background: "#F6F8FA", color: "#16232F" }}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
