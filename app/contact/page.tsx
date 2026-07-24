import type { Metadata } from "next";
import { Suspense } from "react";
import { og } from "@/lib/site";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Request a Consultation or Demo",
  description:
    "Tell us what you need — medical billing, healthcare software, or both. Our team follows up within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: og({
    title: "Contact | CareLineMD",
    description: "Request a billing consultation or software demo. We follow up within one business day.",
    url: "/contact",
  }),
};

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
