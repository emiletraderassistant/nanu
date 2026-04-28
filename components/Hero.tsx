import { Button } from "./Button";
import { BookCallButton } from "./BookCallButton";
import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

/* ─────────────────────────────────────────────────────────────
 * Hero copy.
 * The active version is `copy`. To swap, replace the assignment
 * at the bottom of this block with COPY_ALT_A or COPY_ALT_B.
 * ───────────────────────────────────────────────────────────── */

const COPY_ACTIVE = {
  eyebrow: "Marketing agency",
  // Two short sentences, period kept in tinta (it's plain title text — only
  // the logo dot is ever eléctrico).
  title: "Strategy first. Always.",
  subhead:
    "For brands that take their category seriously — and want marketing that does the same.",
  primaryCta: "Book a call",
  secondaryCta: "See our work",
};

// ALT A — confrontational, names the reader's past
// const COPY_ALT_A = {
//   eyebrow: "Marketing for complex industries",
//   title: "The agencies you've worked with weren't ready for your product.",
//   subhead:
//     "We are. nanu builds marketing for fintech, blockchain, B2B industrial and premium construction — categories where shortcuts cost more than they save.",
//   primaryCta: "Book a call",
//   secondaryCta: "See our work",
// };

// ALT B — calmer, product-led framing
// const COPY_ALT_B = {
//   eyebrow: "Marketing for complex industries",
//   title: "Built for products that require explanation.",
//   subhead:
//     "We help technical and regulated brands communicate with the depth their category demands. From fintech to construction, we go where shortcuts don't work.",
//   primaryCta: "Book a call",
//   secondaryCta: "See our work",
// };

const copy = COPY_ACTIVE;

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden"
    >
      {/* Vertically centered content within the visible viewport (minus 4rem nav) */}
      <div className="container-nanu flex flex-1 items-center py-16">
        <Reveal className="w-full max-w-5xl">
          {/* Editorial signature: thin eléctrico hairline above the eyebrow */}
          <span aria-hidden="true" className="block h-px w-[60px] bg-electrico" />

          <div className="mt-8">
            <SectionEyebrow>{copy.eyebrow}</SectionEyebrow>
          </div>

          <h1
            id="hero-title"
            className="mt-6 font-bold text-tinta text-[clamp(4rem,8vw,7rem)] leading-[1.02] tracking-[-0.04em]"
          >
            {copy.title}
          </h1>

          <p className="mt-8 max-w-[520px] text-lg leading-[1.65] text-pizarra sm:text-xl">
            {copy.subhead}
          </p>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-4">
            <BookCallButton variant="primary">
              {copy.primaryCta} <span aria-hidden="true">→</span>
            </BookCallButton>
            <Button href="#work" variant="secondary">
              {copy.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="container-nanu">
        <div className="h-px w-full bg-tinta/[0.08]" />
      </div>
    </section>
  );
}
