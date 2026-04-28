import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    number: "01",
    title: "Understand",
    body:
      "We start where most agencies skip ahead — your product, your category, and the rules that shape how you can talk about it. Before we propose anything, we get specific about what the market is actually deciding.",
  },
  {
    number: "02",
    title: "Analyze",
    body:
      "We map the gap. Where the category is loud, where it's silent, what your audience already hears from competitors and what they don't. The output is a position you can own — not one you have to argue for.",
  },
  {
    number: "03",
    title: "Build",
    body:
      "Then we build. Strategy turned into messaging, sites, content, campaigns. Every piece traceable back to the analysis — no decoration, no filler.",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>How we work</SectionEyebrow>
          <h2
            id="how-heading"
            className="section-title-lg mt-6 text-tinta"
          >
            Three steps. No shortcuts.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:grid-cols-3 md:mt-20 lg:gap-x-16">
          {STEPS.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 50}>
              <article className="border-t border-tinta/[0.12] pt-8">
                <p className="text-caption uppercase text-electrico tracking-[0.12em]">
                  {step.number}
                </p>
                <h3 className="mt-4 text-tinta text-[1.5rem] font-semibold leading-[1.15] tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-[1.65] text-pizarra">
                  {step.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
