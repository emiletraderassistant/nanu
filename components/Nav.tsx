"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { useBooking } from "./BookingProvider";

const PRIMARY_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#why" },
];

/* Close animation duration must match the .nanu-modal-out keyframe in globals.css */
const CLOSE_DURATION_MS = 220;

export function Nav() {
  const pathname = usePathname();
  const { open: openBooking } = useBooking();

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
    }, CLOSE_DURATION_MS);
  };

  // Mobile "Contact" — close menu, then open the booking modal once the
  // overlay has fully animated out so the two transitions don't fight.
  const handleMobileContact = () => {
    setMenuClosing(true);
    setTimeout(() => {
      setMenuOpen(false);
      setMenuClosing(false);
      openBooking();
    }, CLOSE_DURATION_MS);
  };

  // Esc closes the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Body scroll lock while open
  useEffect(() => {
    if (!menuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  // Focus the close button when the menu opens (accessibility)
  useEffect(() => {
    if (menuOpen && !menuClosing) closeButtonRef.current?.focus();
  }, [menuOpen, menuClosing]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-tinta/[0.06] bg-hueso/80 backdrop-blur-md">
        <div className="container-nanu flex h-16 items-center justify-between">
          <Logo />

          {/* Desktop nav — visible from md: up */}
          <nav
            aria-label="Primary"
            className="hidden items-center gap-8 md:flex"
          >
            <ul className="flex items-center gap-8">
              {PRIMARY_LINKS.map((link) => {
                const isActive =
                  !link.href.includes("#") && pathname === link.href;
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
              onClick={openBooking}
              className="inline-flex items-center gap-2 rounded-full bg-tinta px-4 py-2 text-sm font-medium text-hueso transition-colors duration-200 hover:bg-electrico focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
            >
              Contact
            </button>
          </nav>

          {/* Mobile hamburger — visible below md: */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center text-tinta md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso rounded"
          >
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M1 1h20M1 7h20M1 13h20"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`fixed inset-0 z-50 flex flex-col bg-hueso md:hidden ${
            menuClosing ? "nanu-modal-out" : "nanu-modal-in"
          }`}
        >
          {/* Top bar — mirrors the nav header */}
          <div className="container-nanu flex h-16 flex-shrink-0 items-center justify-between border-b border-tinta/[0.06]">
            <Logo />
            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeMenu}
              aria-label="Close menu"
              className="inline-flex h-10 w-10 items-center justify-center text-tinta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso rounded"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 3l14 14M17 3L3 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Menu body */}
          <div className="container-nanu flex flex-1 flex-col py-12">
            <nav aria-label="Mobile primary">
              <ul className="flex flex-col gap-6">
                {PRIMARY_LINKS.map((link) => {
                  const isActive =
                    !link.href.includes("#") && pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block font-semibold leading-[1.1] tracking-[-0.02em] text-[clamp(2rem,7vw,2.5rem)] transition-colors duration-200 ${
                          isActive ? "text-electrico" : "text-tinta"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contact CTA pinned to bottom */}
            <div className="mt-auto pt-12">
              <button
                type="button"
                onClick={handleMobileContact}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-electrico px-6 py-4 text-base font-medium text-hueso transition-colors duration-200 hover:bg-tinta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
              >
                Contact <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
