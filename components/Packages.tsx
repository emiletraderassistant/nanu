"use client";

import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";
import { useBooking } from "./BookingProvider";

type Package = {
  name: string;
  tag: string;
  description: string;
  includes: string[];
  highlight?: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "Essential",
    tag: "For brands starting fresh",
    description:
      "A focused engagement to establish the foundation — brand, positioning, and the first surfaces where it lives. Best for new ventures or rebrands.",
    includes: [
      "Brand strategy & positioning",
      "Visual identity system",
      "Primary website or landing",
      "30-day handoff support",
    ],
  },
  {
    name: "Growth",
    tag: "For brands ready to scale",
    description:
      "An ongoing engagement built around growth surfaces — campaigns, content systems, and the marketing infrastructure that compounds over time.",
    includes: [
      "Everything in Essential, plus:",
      "Monthly content & messaging system",
      "Paid acquisition strategy & execution",
      "Analytics & reporting cadence",
      "Quarterly strategic reviews",
    ],
    highlight: true,
  },
  {
    name: "Strategic",
    tag: "For brands building long-term",
    description:
      "A retained partnership where we operate as your external strategy and brand team. Custom scope, dedicated capacity, deep integration with your team.",
    includes: [
      "Everything in Growth, plus:",
      "Embedded strategic partner role",
      "Cross-functional brand & marketing leadership",
      "AI automation & systems work",
      "Priority capacity and direct access",
    ],
  },
];

export function Packages() {
  const { open } = useBooking();

  return (
    <section
      id="packages"
      aria-labelledby="packages-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>Engagements</SectionEyebrow>
          <h2
            id="packages-heading"
            className="section-title-lg mt-6 text-tinta"
          >
            Three ways to engage.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.65] text-pizarra sm:text-lg">
            Most engagements fall into one of these shapes. The right fit
            depends on where you are — we'll figure that out in the call.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 lg:grid-cols-3 lg:gap-6">
          {PACKAGES.map((pkg, idx) => (
            <Reveal key={pkg.name} delay={idx * 50}>
              <article
                className={`relative flex h-full flex-col rounded-lg border p-8 sm:p-10 ${
                  pkg.highlight
                    ? "border-electrico/40 shadow-lg shadow-tinta/[0.06] lg:scale-[1.02]"
                    : "border-tinta/[0.12]"
                }`}
              >
                {pkg.highlight && (
                  <span className="eyebrow absolute -top-[0.6rem] left-8 bg-hueso px-3 py-0.5">
                    Most common
                  </span>
                )}

                <p className="text-caption uppercase tracking-[0.12em] text-pizarra">
                  {pkg.tag}
                </p>

                <h3 className="mt-3 text-tinta font-semibold tracking-[-0.02em] leading-[1.1] text-[1.875rem]">
                  {pkg.name}
                </h3>

                <p className="mt-4 text-base leading-[1.65] text-pizarra">
                  {pkg.description}
                </p>

                <p className="mt-8 text-caption uppercase tracking-[0.12em] text-pizarra">
                  Includes
                </p>
                <ul className="mt-4 space-y-3">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-tinta"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] inline-block h-1 w-1 flex-shrink-0 rounded-full bg-electrico"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <button
                    type="button"
                    onClick={open}
                    className="inline-flex items-center gap-2 text-sm font-medium text-electrico transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso rounded"
                  >
                    Request quote <span aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
