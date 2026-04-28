type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Caption-style label that introduces a section.
 * Always rendered in eléctrico per brand rules.
 */
export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}
