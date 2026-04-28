import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

const QUESTIONS = [
  {
    q: "How long does an engagement typically last?",
    a: "Essential engagements run 6–10 weeks. Growth and Strategic engagements are ongoing, with quarterly reviews to recalibrate scope.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Yes. We're US-registered (Nanu Group LLC) and work in English and Spanish. Most engagements are remote-first.",
  },
  {
    q: "What industries do you work with?",
    a: "We focus on brands with technical, regulated, or complex products — fintech, blockchain, B2B industrial, and premium services. If your category requires explanation, we're a fit.",
  },
  {
    q: "What's the first step?",
    a: "A discovery call. We listen first, decide together if it's a fit. No deck, no pitch — just a real conversation about what you're trying to do.",
  },
  {
    q: "Do you offer one-off services or only retainers?",
    a: "Both, but most of our work happens inside ongoing engagements. One-off projects are accepted selectively when scope and fit are clear.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-hueso">
      <div className="container-nanu py-24 sm:py-32 lg:py-36">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2
            id="faq-heading"
            className="section-title-lg mt-6 text-tinta"
          >
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-14 max-w-3xl md:mt-16">
          {QUESTIONS.map((item, idx) => (
            <Reveal key={item.q} delay={idx * 30}>
              <details
                className={`group border-t border-tinta/[0.12] py-6 ${
                  idx === QUESTIONS.length - 1 ? "border-b" : ""
                }`}
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6">
                  <h3 className="text-tinta text-base font-medium leading-snug sm:text-lg">
                    {item.q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex-shrink-0 text-electrico transition-transform duration-300 ease-out group-open:rotate-45"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 1v14M1 8h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base leading-[1.65] text-pizarra">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
