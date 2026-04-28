"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset in ms — applied as transition-delay. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Wraps children in a div that fades + translates up when 20% of the
 * element is in view. Only fires once. CSS keyframes handle the
 * transition; @media (prefers-reduced-motion) disables it.
 */
export function Reveal({ children, delay = 0, className = "", style }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const composedStyle: CSSProperties | undefined =
    delay > 0 ? { ...style, transitionDelay: `${delay}ms` } : style;

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`.trim()}
      style={composedStyle}
    >
      {children}
    </div>
  );
}
