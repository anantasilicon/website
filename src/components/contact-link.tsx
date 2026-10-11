import type { ReactNode } from "react";
import { contactHref, contactIsPlaceholder, siteConfig } from "@/config/site";

/** Visible marker for any founder/legal input that has not been supplied yet. */
export function Pending({ children }: { children: ReactNode }) {
  return (
    <span className="inline border border-dashed border-annotation px-1.5 py-0.5 font-mono text-xs text-annotation">
      [FOUNDER INPUT: {children}]
    </span>
  );
}

/** Block notice shown while the contact address is still the development placeholder. */
export function PlaceholderNotice({ className = "" }: { className?: string }) {
  if (!contactIsPlaceholder) return null;
  return (
    <span
      role="note"
      className={`block border border-dashed border-annotation px-3 py-2 font-mono text-xs leading-relaxed text-annotation ${className}`}
    >
      DEV PLACEHOLDER — not a working address. Set <code>contactEmail</code> in{" "}
      <code>src/config/site.ts</code> before launch.
    </span>
  );
}

export function ContactLink({ address = siteConfig.contactEmail }: { address?: string }) {
  return (
    <>
      <a
        href={address === siteConfig.contactEmail ? contactHref : `mailto:${address}`}
        className="t-ui break-all text-accent underline underline-offset-4 decoration-1 hover:decoration-2"
      >
        {address}
      </a>
      {contactIsPlaceholder && address === siteConfig.contactEmail ? (
        <span className="font-mono text-xs text-annotation"> (dev placeholder)</span>
      ) : null}
    </>
  );
}
