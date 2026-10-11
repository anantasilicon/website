/**
 * Hero art: a reference line and a second line that splits away and rejoins — the brand mark,
 * drawn large. Purely abstract and decorative (aria-hidden); it carries no product detail.
 */
export function HeroLines() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className="block h-20 w-full md:h-24 lg:h-28"
      fill="none"
    >
      <path d="M0 50H1440" stroke="var(--line-strong)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      <path
        d="M0 70H480M960 70H1440"
        stroke="var(--line-strong)"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <path
        className="trace-draw"
        d="M480 70L560 130H880L960 70"
        stroke="var(--accent)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
