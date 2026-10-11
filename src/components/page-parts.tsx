import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.08em] text-annotation">
      <span aria-hidden="true" className="h-px w-6 shrink-0 bg-current" />
      {children}
    </p>
  );
}

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  surface?: "paper" | "deep" | "ink";
  children?: ReactNode;
};

/** Hairline-separated band: index + eyebrow, H2, optional lede; content in the wider column. */
export function Section({ id, index, eyebrow, title, lede, surface, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      data-surface={surface}
      className="border-t border-line bg-bg text-fg"
    >
      <Container className="py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <header className="lg:col-span-5">
            <Eyebrow>
              {index} / {eyebrow}
            </Eyebrow>
            <h2
              id={`${id}-title`}
              className="mt-5 text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.12] tracking-[-0.015em]"
            >
              {title}
            </h2>
            {lede ? <p className="mt-5 max-w-prose text-muted">{lede}</p> : null}
          </header>
          {children ? <div className="lg:col-span-7">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
