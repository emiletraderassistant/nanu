"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

type Project = {
  name: string;
  tag: string;
  image: string;
  url: string;
};

const PROJECTS: Project[] = [
  {
    name: "Profit4Life",
    tag: "Trading academy · Brand & site",
    image: "/assets/mockups/profit4life.png",
    url: "https://academias.profit4lifevnzla.com/",
  },
  {
    name: "Unitok",
    tag: "Tokenization platform · Marketing site",
    image: "/assets/mockups/unitok.png",
    url: "https://emiletraderassistant.github.io/unitok-landing/",
  },
  {
    name: "Galmaveca",
    tag: "Oil & gas B2B · Brand & site",
    image: "/assets/mockups/galmaveca.png",
    url: "https://www.galmaveca.com/",
  },
  {
    name: "Cota Acabados",
    tag: "Premium coatings · Brand & site",
    image: "/assets/mockups/cota.png",
    url: "https://cotaacabados.com/",
  },
];

const EMBLA_OPTIONS = {
  align: "start",
  containScroll: "trimSnaps",
  duration: 30, // ~330ms — within the 300–400ms range requested
  skipSnaps: false,
} as const;

export function SelectedWork() {
  const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (idx: number) => emblaApi?.scrollTo(idx),
    [emblaApi]
  );

  // Subscribe to embla state — track current slide + nav availability
  useEffect(() => {
    if (!emblaApi) return;

    const sync = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    sync();
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);

    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  // Honor prefers-reduced-motion: re-init with 0 duration so snaps are instant
  useEffect(() => {
    if (!emblaApi || typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      emblaApi.reInit({
        ...EMBLA_OPTIONS,
        duration: mq.matches ? 0 : EMBLA_OPTIONS.duration,
      });
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [emblaApi]);

  // Keyboard nav: arrow keys when the carousel region has focus
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollNext();
    }
  };

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>Selected work</SectionEyebrow>
          <h2 id="work-heading" className="section-title-lg mt-6 text-tinta">
            Recent engagements.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.65] text-pizarra sm:text-lg">
            Selected projects we've shipped. The full list lives behind a
            conversation.
          </p>
        </Reveal>

        <Reveal className="mt-16 md:mt-20" delay={50}>
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected work"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-4 focus-visible:ring-offset-hueso"
          >
            {/* Embla viewport */}
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6 sm:-ml-8">
                {PROJECTS.map((project, idx) => (
                  <div
                    key={project.url}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${idx + 1} of ${PROJECTS.length}: ${project.name}`}
                    className="min-w-0 flex-[0_0_100%] pl-6 sm:pl-8 md:flex-[0_0_50%]"
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block focus-visible:outline-none"
                    >
                      <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md transition-all duration-200 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl">
                        <Image
                          src={project.image}
                          alt={`${project.name} — ${project.tag}`}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover"
                          priority={idx < 2}
                        />
                      </div>
                      <div className="mt-5">
                        <h3 className="text-tinta text-[1.125rem] font-semibold leading-tight tracking-[-0.02em] sm:text-[1.25rem]">
                          {project.name}
                        </h3>
                        <p className="mt-2 text-[0.8125rem] text-pizarra">
                          {project.tag}
                        </p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls — arrows flanking the indicator lines */}
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-label="Previous slide"
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-tinta bg-hueso text-tinta transition-colors duration-200 enabled:hover:text-electrico disabled:cursor-default disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M9 3l-4 4 4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <ul
                className="flex items-center gap-2"
                aria-label="Slide indicators"
              >
                {scrollSnaps.map((_, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => scrollTo(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      aria-current={selectedIndex === idx ? "true" : undefined}
                      className="block py-[7px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
                    >
                      <span
                        className={`block h-[2px] w-6 transition-colors duration-200 ${
                          selectedIndex === idx
                            ? "bg-electrico"
                            : "bg-pizarra/30"
                        }`}
                      />
                    </button>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-label="Next slide"
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-tinta bg-hueso text-tinta transition-colors duration-200 enabled:hover:text-electrico disabled:cursor-default disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electrico focus-visible:ring-offset-2 focus-visible:ring-offset-hueso"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
