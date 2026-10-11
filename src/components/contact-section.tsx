import type { ReactNode } from "react";
import { Container, Eyebrow } from "./page-parts";
import { Button } from "./button";
import { ContactLink, PlaceholderNotice } from "./contact-link";
import Link from "next/link";
import { contactHref, legal, siteConfig } from "@/config/site";

type ContactSectionProps = {
  eyebrow?: string;
  title?: ReactNode;
  children?: ReactNode;
};

export function ContactSection({
  eyebrow = "Talk to us",
  title = "Talk to us for a short research conversation.",
  children,
}: ContactSectionProps) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      data-surface="deep"
      className="border-t border-line bg-bg text-fg"
    >
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              id="contact-title"
              className="mt-5 max-w-[20ch] text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-[-0.02em]"
            >
              {title}
            </h2>
            {children ?? (
              <p className="mt-5 max-w-prose text-muted">
                We are speaking with RTL, physical design and design engineering teams. We are not asking for design
                data.
              </p>
            )}
          </div>
          <div className="flex flex-col items-start gap-5 lg:col-span-5 lg:justify-end">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href={contactHref} external arrow>
                Email us
              </Button>
              {siteConfig.schedulingUrl ? (
                <Button href={siteConfig.schedulingUrl} external variant="secondary">
                  Pick a time
                </Button>
              ) : null}
            </div>
            <p className="text-sm text-muted">
              Or write to <ContactLink />
            </p>
            <PlaceholderNotice />
            <p className="max-w-prose text-sm text-muted">
              Please do not send confidential designs, RTL, netlists or proprietary verification artifacts to this
              address. We are not asking for them.
            </p>
            <p className="max-w-prose text-xs text-muted">
              If you email us, we receive your address and message.
              {legal.published ? (
                <>
                  {" "}
                  See the{" "}
                  <Link href="/privacy/" className="t-ui text-accent underline underline-offset-4 hover:decoration-2">
                    privacy notice
                  </Link>
                  .
                </>
              ) : null}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
