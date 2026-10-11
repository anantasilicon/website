import { LegalDocument, legalMetadata } from "@/components/legal-document";

// Routed only when `legal.published` is true or in `next dev` (see pageExtensions in next.config.ts).
export const metadata = legalMetadata("privacy");

export default function Page() {
  return <LegalDocument slug="privacy" />;
}
