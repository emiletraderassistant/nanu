"use client";

import { Reveal } from "./Reveal";
import { useBooking } from "./BookingProvider";

type Service = {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Brand & graphic design",
    description:
      "The visual system that carries your brand into every surface. Logos, identity, collateral, presentations, and the rules that keep them consistent as the team grows.",
    deliverables: [
      "Logo design and brand identity systems",
      "Visual guidelines and brand manuals",
      "Marketing collateral (decks, one-pagers, social templates)",
      "Print and editorial design",
    ],
  },
  {
    number: "02",
    title: "Web design & development",
    description:
      "Sites built around what your buyers actually decide on. Copy, design, structure, and code handled as one product — not stitched together by separate vendors.",
    deliverables: [
      "Marketing sites and landing pages",
      "Web apps and product sites",
      "Frontend development (Next.js, React)",
      "Performance optimization and SEO foundations",
    ],
  },
  {
    number: "03",
    title: "Video editing & motion",
    description:
      "Video as a strategic asset, not filler content. We edit for clarity first — every cut, transition, and graphic chosen because it earns the next second of attention.",
    deliverables: [
      "Brand and product films",
      "Social-first short-form editing",
      "Motion graphics and animated explainers",
      "Podcast and interview post-production",
    ],
  },
  {
    number: "04",
    title: "AI automations",
    description:
      "Workflows that remove the manual work between strategy and execution. We build the systems behind the work, not just the deliverables.",
    deliverables: [
      "Custom GPTs and AI agents for marketing teams",
      "Content automation pipelines",
      "CRM and lifecycle workflow integrations",
      "Lead enrichment and qualification systems",
    ],
  },
];

export function ServicesDetail() {
  const { open } = useBooking();

  return (
    <section
      id="services-detail"
      aria-label="Service detail"
      className="bg-hueso"
    >
      <div className="container-nanu pb-24 sm:pb-32 lg:pb-36">
        <ul role="list">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.number} delay={idx * 50}>
              <li
                className={`grid grid-cols-1 gap-y-8 border-t border-pizarra/30 py-14 md:grid-cols-12 md:gap-x-12 md:py-20 ${
                  idx === SERVICES.length - 1 ? "border-b" : ""
                }`}
              >
                {/* Left 40% (5 of 12 cols) */}
                <div className="md:col-span-5">
                  <p className="text-electrico font-semibold leading-none tracking-[-0.02em] text-[clamp(2.75rem,5vw,4rem)]">
                    {service.number}
                  </p>
                  <h2 className="mt-6 text-tinta font-semibold leading-[1.1] tracking-[-0.03em] text-[clamp(1.75rem,3vw,2.25rem)]">
                    {service.title}
                  </h2>
                </div>

                {/* Right 60% (7 of 12 cols) */}
                <div className="md:col-span-7 md:max-w-2xl">
                  <p className="text-base leading-[1.65] text-pizarra sm:text-lg">
                    {service.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-tinta sm:text-base"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.6em] inline-block h-1 w-1 flex-shrink-0 rounded-full bg-electrico"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={open}
                    className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-electrico transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso rounded"
                  >
                    Discuss this <span aria-hidden="true">→</span>
                  </button>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
