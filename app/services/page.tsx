import { Nav } from "@/components/Nav";
import { ServicesPageHero } from "@/components/ServicesPageHero";
import { ServicesDetail } from "@/components/ServicesDetail";
import { Packages } from "@/components/Packages";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Services — nanu",
  description:
    "Four disciplines, applied as one system — brand, web, video, and AI automations. Engagement models scoped around the decisions you actually need to make.",
};

export default function ServicesPage() {
  return (
    <main>
      <Nav />
      <ServicesPageHero />
      <ServicesDetail />
      <Packages />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
