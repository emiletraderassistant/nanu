import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

export function ServicesPageHero() {
  return (
    <section
      aria-labelledby="services-page-title"
      className="bg-hueso"
    >
      <div className="container-nanu pt-28 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        <Reveal className="max-w-5xl">
          {/* Editorial signature, mirrors home hero */}
          <span aria-hidden="true" className="block h-px w-[60px] bg-electrico" />

          <div className="mt-8">
            <SectionEyebrow>Services</SectionEyebrow>
          </div>

          <h1
            id="services-page-title"
            className="mt-6 font-semibold text-tinta leading-[1.05] tracking-[-0.04em] text-[clamp(3.5rem,7vw,6rem)]"
          >
            What we build.
          </h1>

          <p className="mt-8 max-w-2xl text-pizarra leading-[1.65] text-lg sm:text-xl">
            Four disciplines, applied as one system. Each engagement is scoped
            around the decisions you actually need to make — not around what's
            easy to deliver.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
