"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useBooking } from "./BookingProvider";

const PRIMARY_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#why" },
];

export function Nav() {
  const pathname = usePathname();
  const { open } = useBooking();

  return (
    <header className="sticky top-0 z-40 border-b border-tinta/[0.06] bg-hueso/80 backdrop-blur-md">
      <div className="container-nanu flex h-16 items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 sm:flex">
            {PRIMARY_LINKS.map((link) => {
              // Anchor links to home (contain '#') never carry an active
              // state — they're scroll targets, not destination pages.
              const isActive = !link.href.includes("#") && pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-electrico"
                        : "text-tinta/80 hover:text-electrico"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={open}
            className="inline-flex items-center gap-2 rounded-full bg-tinta px-4 py-2 text-sm font-medium text-hueso transition-colors duration-200 hover:bg-electrico focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
