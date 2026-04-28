"use client";

import type { ReactNode } from "react";
import { Button } from "./Button";
import { useBooking } from "./BookingProvider";

type Props = {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

export function BookCallButton({ variant = "primary", children, className }: Props) {
  const { open } = useBooking();
  return (
    <Button variant={variant} onClick={open} className={className}>
      {children}
    </Button>
  );
}
