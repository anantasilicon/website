import Link from "next/link";
import { Logo } from "./logo";
import { ContactLink } from "./contact-link";
import { legal, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div className="max-w-prose space-y-3 text-sm text-muted">
          <Logo />
          <p>Early-stage company based in Austin, Texas.</p>
          {siteConfig.legalEntity ? <p>{siteConfig.legalEntity}</p> : null}
          <p>
            Contact: <ContactLink />
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 md:flex-col md:gap-1">
            <li>
              <Link
                href="/founders/"
                className="t-ui inline-flex min-h-11 items-center text-[0.9375rem] text-muted underline underline-offset-4 hover:text-accent"
              >
                Founders
              </Link>
            </li>
            {legal.published
              ? [
                  { href: "/privacy/", label: "Privacy notice" },
                  { href: "/terms/", label: "Terms" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="t-ui inline-flex min-h-11 items-center text-[0.9375rem] text-muted underline underline-offset-4 hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))
              : null}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
