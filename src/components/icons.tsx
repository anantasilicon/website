type IconProps = { className?: string };

/** Inline SVG icons: one family, 1.5px stroke, decorative by default (aria-hidden). */
export function ArrowRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      className={className}
    >
      <path d="M2 8h11M9 4l4 4-4 4" />
    </svg>
  );
}
