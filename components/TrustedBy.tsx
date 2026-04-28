import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

const SLOTS = [1, 2, 3, 4];

export function TrustedBy() {
  return (
    <section id="trusted" aria-labelledby="trusted-heading" className="bg-hueso">
      <div className="container-nanu py-24 sm:py-32">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionEyebrow>
              <span id="trusted-heading">Trusted by teams in</span>
            </SectionEyebrow>
          </div>
        </Reveal>

        <ul
          role="list"
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-x-10 lg:gap-x-16"
        >
          {SLOTS.map((n, idx) => (
            <Reveal key={n} delay={idx * 50}>
              <li
                aria-label={`Client logo ${n} — placeholder`}
                className="flex h-14 items-center justify-center rounded-sm bg-piedra/30 sm:h-16"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
