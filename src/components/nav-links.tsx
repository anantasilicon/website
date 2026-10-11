"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/site";

/** In-page and page tabs. Only real pages get aria-current; anchors have no persistent "current" state. */
export function NavLinks() {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-x-5 md:gap-x-6">
      {navLinks.map(({ href, label }) => {
        const isPage = !href.startsWith("/#");
        const current = isPage && pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              aria-current={current ? "page" : undefined}
              className={`t-ui inline-flex min-h-11 items-center whitespace-nowrap text-[0.9375rem] underline-offset-[10px] hover:text-accent ${
                current ? "text-fg underline decoration-1" : "text-muted"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
