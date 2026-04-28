import { BookCallButton } from "./BookCallButton";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="bg-tinta text-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-44">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <Logo variant="onDark" size="text-4xl" />

            <h2
              id="cta-heading"
              className="mt-10 text-hueso font-bold leading-[1.05] tracking-[-0.04em] text-[clamp(2.5rem,6vw,4.5rem)]"
            >
              Marketing where others don't dare.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-[1.65] text-hueso/70 sm:text-lg">
              Book a discovery call. We listen first, then decide together if
              it's a fit.
            </p>

            <div className="mt-10">
              <BookCallButton variant="primary">
                Book a call <span aria-hidden="true">→</span>
              </BookCallButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
