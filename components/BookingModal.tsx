"use client";

import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────────────────────
 * Calendly URL — replace once the real account is configured.
 * Recommended event setup is documented at the bottom of the
 * agent's response in chat.
 * ───────────────────────────────────────────────────────────── */
const CALENDLY_URL = "https://calendly.com/nanugroupmarketing/30min";
const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function BookingModal({ isOpen, onClose }: Props) {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Mount the Calendly inline widget when the modal opens
  useEffect(() => {
    if (!isOpen) return;

    const mount = () => {
      if (!widgetRef.current || !window.Calendly) return;
      widgetRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: widgetRef.current,
      });
    };

    if (window.Calendly) {
      mount();
      return;
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );
    if (existing) {
      existing.addEventListener("load", mount, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = mount;
    document.body.appendChild(script);
  }, [isOpen]);

  // Focus the dialog when it opens
  useEffect(() => {
    if (isOpen) dialogRef.current?.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-tinta/70 px-4 py-6 backdrop-blur-sm sm:px-6 nanu-fade-in"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-title"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[900px] overflow-hidden rounded-2xl bg-hueso shadow-2xl outline-none nanu-modal-in"
      >
        <div className="flex items-center justify-between px-6 pt-5 sm:px-8">
          <p id="booking-title" className="eyebrow">
            Book a call
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking"
            className="-mr-2 inline-flex h-9 w-9 items-center justify-center rounded-full text-tinta/70 transition-colors hover:bg-tinta/[0.06] hover:text-tinta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M3 3l10 10M13 3L3 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div
          ref={widgetRef}
          className="calendly-inline-widget"
          style={{ minWidth: "320px", height: "min(80vh, 720px)" }}
          data-url={CALENDLY_URL}
        />
      </div>
    </div>
  );
}
