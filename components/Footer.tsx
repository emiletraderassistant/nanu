import Link from "next/link";
import { Logo } from "./Logo";

const NAV_LINKS = [
  { label: "Selected work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "How we work", href: "/#how" },
  { label: "Why nanu", href: "/#why" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    /* 1px piedra hairline at the very top — separates the footer from
       the dark Final CTA without a harsh light/dark slam. */
    <footer className="border-t border-piedra bg-hueso">
      <div className="container-nanu pt-20 pb-10 sm:pt-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-x-24 lg:gap-x-32">
          <div>
            <Logo size="text-2xl" />
            <p className="mt-5 max-w-xs text-sm leading-[1.65] text-pizarra">
              Marketing for technical and regulated brands. Strategy first.
              Always.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Sitemap</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pizarra transition-colors duration-200 hover:text-electrico"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-tinta/[0.08] pt-6 text-xs text-pizarra sm:flex-row sm:items-center">
          <p>© {year} Nanu Group LLC. All rights reserved.</p>
          <p>Made with care, not shortcuts.</p>
        </div>
      </div>
    </footer>
  );
}
