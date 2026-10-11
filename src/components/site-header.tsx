import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { Button } from "./button";

/**
 * Sticky header. Phones: logo + Contact on the first row, tabs on a second row.
 * md and up: one row, tabs then Contact on the right. Height must match --nav-h in globals.css.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg">
      <div className="mx-auto flex max-w-page flex-wrap items-center justify-between px-4 sm:px-6 md:h-16 md:flex-nowrap lg:px-8">
        <div className="flex h-16 items-center md:h-auto">
          <Logo />
        </div>
        <nav
          aria-label="Primary"
          className="order-3 -mx-1 flex h-11 w-full items-center overflow-x-auto px-1 md:order-2 md:mx-0 md:ml-auto md:mr-6 md:h-auto md:w-auto md:overflow-visible md:px-0"
        >
          <NavLinks />
        </nav>
        <div className="order-2 md:order-3">
          <Button href="/#contact" className="px-4!">
            Contact
          </Button>
        </div>
      </div>
    </header>
  );
}
