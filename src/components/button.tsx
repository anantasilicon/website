import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "./icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

const base =
  "t-ui inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-control px-5 py-2.5 text-[0.9375rem] font-medium";

const variants = {
  primary:
    "bg-accent-fill text-on-accent-fill hover:bg-accent-fill-hover border border-transparent",
  secondary: "border border-line-strong text-fg hover:border-accent hover:text-accent",
};

/** Link styled as a button. `external` is for mailto: and other non-route hrefs. */
export function Button({ href, children, variant = "primary", arrow, external, className = "" }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow ? <ArrowRight /> : null}
    </>
  );
  return external ? (
    <a href={href} className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
