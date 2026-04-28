import Link from "next/link";

type LogoProps = {
  /** When on a dark/eléctrico background, the dot flips to hueso. */
  variant?: "default" | "onDark";
  className?: string;
  /** Tailwind text size token. Defaults to text-xl. */
  size?: string;
};

export function Logo({ variant = "default", className = "", size = "text-xl" }: LogoProps) {
  const wordColor = variant === "onDark" ? "text-hueso" : "text-tinta";
  const dotColor = variant === "onDark" ? "text-hueso" : "text-electrico";

  return (
    <Link
      href="/"
      aria-label="nanu — home"
      className={`inline-flex items-baseline font-bold tracking-logo ${size} ${wordColor} ${className}`}
    >
      <span>nanu</span>
      <span className={`logo-dot-pulse ${dotColor}`} aria-hidden="true">
        .
      </span>
    </Link>
  );
}
