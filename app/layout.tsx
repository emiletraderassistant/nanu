import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/components/BookingProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nanu — Marketing for complex industries",
  description:
    "A digital marketing agency specialized in fintech, blockchain, B2B industrial, and premium construction. Strategy, not shortcuts.",
  metadataBase: new URL("https://nanugroup.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
