import Link from "next/link";
import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    title: "Brand strategy & positioning",
    body:
      "Define what your brand stands for, what it shouldn't say, and where it wins.",
  },
  {
    title: "Website & digital presence",
    body:
      "Sites built around the decisions buyers actually make — copy, design, and structure as one system.",
  },
  {
    title: "Content & messaging systems",
    body:
      "Voice applied with consistency across email, social, sales, and product. Authority that compounds.",
  },
  {
    title: "Growth & acquisition",
    body:
      "Once positioning is right, we scale. Paid, organic, partnerships — channels chosen, not chased.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>What we do</SectionEyebrow>
          <h2
            id="services-heading"
            className="section-title-lg mt-6 text-tinta"
          >
            Four ways we build.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.65] text-pizarra sm:text-lg">
            Most agencies sell deliverables. We sell decisions made earlier
            in the process — when there's still time to get them right.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:mt-20 md:grid-cols-2 lg:gap-x-20">
          {SERVICES.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 50}>
              <article className="group relative border-t border-tinta/[0.12] pt-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-px left-0 h-px w-0 bg-electrico transition-[width] duration-300 ease-out group-hover:w-full"
                />
                <h3 className="text-tinta text-[1.625rem] font-semibold leading-[1.15] tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-[1.65] text-pizarra">
                  {service.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex justify-center" delay={150}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-electrico transition-opacity duration-200 hover:opacity-80"
          >
            See all services <span aria-hidden="true">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
