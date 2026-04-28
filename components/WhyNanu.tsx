import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

const VALUES = [
  {
    number: "01",
    title: "Depth over breadth",
    body:
      "We don't take work outside our four categories. Generalists start over with every brief — we don't.",
  },
  {
    number: "02",
    title: "Understand before proposing",
    body:
      "Before strategy, we learn your product, your category, and the rules that shape what you can say. The first deliverable is comprehension, not slides.",
  },
  {
    number: "03",
    title: "Complexity is the edge",
    body:
      "Where competitors avoid technical or regulated categories, we go in. The harder it is to explain, the more value clear messaging creates.",
  },
  {
    number: "04",
    title: "Not for everyone",
    body:
      "We're selective about who we work with — and we expect the same from you. Fit beats volume on both sides of the contract.",
  },
  {
    number: "05",
    title: "Strategy with craft",
    body:
      "Thinking and execution are the same job. A clean position renders into a clean site, a clear message, a campaign that holds together.",
  },
];

export function WhyNanu() {
  return (
    <section
      id="why"
      aria-labelledby="why-heading"
      className="bg-tinta text-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>Why nanu</SectionEyebrow>
          <h2
            id="why-heading"
            className="section-title-lg mt-6 text-hueso"
          >
            Five things we don't compromise on.
          </h2>
        </Reveal>

        <ul role="list" className="mt-16 md:mt-20">
          {VALUES.map((value, idx) => (
            <Reveal key={value.number} delay={idx * 50}>
              <li
                className={`grid grid-cols-1 gap-y-4 border-t border-hueso/[0.12] py-10 md:grid-cols-12 md:gap-x-10 md:py-12 ${
                  idx === VALUES.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="md:col-span-3">
                  <p className="text-electrico font-semibold tracking-[-0.02em] text-[2.5rem] leading-none sm:text-[3rem]">
                    {value.number}
                  </p>
                </div>
                <div className="md:col-span-9 md:max-w-2xl">
                  <h3 className="text-hueso text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em] sm:text-[1.5rem]">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-base leading-[1.65] text-hueso/65">
                    {value.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
