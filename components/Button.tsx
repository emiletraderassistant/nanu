import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type CommonProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type LinkProps = CommonProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButtonProps = CommonProps & {
  href?: never;
  onClick: () => void;
};

type ButtonProps = LinkProps | ButtonAsButtonProps;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso";

const variants: Record<Variant, string> = {
  primary: "bg-electrico text-hueso hover:bg-tinta",
  secondary:
    "border border-tinta/15 text-tinta hover:border-tinta hover:bg-tinta hover:text-hueso",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("onClick" in props && props.onClick) {
    return (
      <button type="button" onClick={props.onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <Link href={props.href!} className={classes}>
      {children}
    </Link>
  );
}
