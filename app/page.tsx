import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { WhyNanu } from "@/components/WhyNanu";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustedBy />
      <WhatWeDo />
      <Services />
      <SelectedWork />
      <WhyNanu />
      <FinalCTA />
      <Footer />
    </main>
  );
}
