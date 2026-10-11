"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { siteConfig } from "@/config/site";

/**
 * Original mark: a straight reference stroke above a second stroke that dips and
 * returns — a trace that diverges and resynchronizes. Stroke-only, uses currentColor.
 */
export function LogoMark({ size = 22 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="miter"
    >
      <path d="M3 8H21" />
      <path d="M3 16H8L11 19H13L16 16H21" />
    </svg>
  );
}

/**
 * Home link. On the home page a plain link to "/" does not reliably scroll up and leaves any #hash
 * in the URL, so handle that case explicitly; from other pages it navigates normally.
 */
export function Logo() {
  const pathname = usePathname();

  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} — home`}
      className="t-ui inline-flex min-h-11 items-center gap-2.5 font-mono text-[0.9375rem] font-medium tracking-[0.14em] text-fg hover:text-accent"
    >
      <LogoMark />
      <span>{siteConfig.wordmark}</span>
    </Link>
  );
}
