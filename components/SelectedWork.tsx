import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

type Project = {
  name: string;
  tag: string;
  /** Adds the eléctrico tech-forward signature to the mockup. */
  accent?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "Profit4Life",
    tag: "Trading academy · Brand & site",
  },
  {
    name: "Unitok",
    tag: "Tokenization platform · Marketing site",
    accent: true,
  },
];

function BrowserMockup({ project }: { project: Project }) {
  return (
    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-md border border-tinta/[0.12] bg-tinta shadow-sm transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl">
      {/* Browser titlebar */}
      <div className="flex h-7 items-center gap-2 border-b border-hueso/[0.08] bg-hueso/[0.04] px-3">
        <span className="h-2 w-2 rounded-full bg-hueso/30" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-hueso/30" aria-hidden="true" />
        <span className="h-2 w-2 rounded-full bg-hueso/30" aria-hidden="true" />
        <div
          className={`ml-3 h-3 w-full max-w-[180px] rounded-sm ${
            project.accent ? "bg-electrico/30" : "bg-hueso/10"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Content area */}
      <div className="absolute inset-0 top-7 flex flex-col items-center justify-center px-6 text-center">
        {project.accent && (
          <span
            aria-hidden="true"
            className="mb-6 block h-px w-[40px] bg-electrico"
          />
        )}
        <span className="text-hueso font-light leading-none tracking-[-0.03em] text-[clamp(1.75rem,4vw,3rem)]">
          {project.name}
        </span>
      </div>
    </div>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-28 sm:py-36 lg:py-40">
        <Reveal className="max-w-5xl">
          <SectionEyebrow>Selected work</SectionEyebrow>
          <h2
            id="work-heading"
            className="section-title-lg mt-6 text-tinta"
          >
            Recent engagements.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-[1.65] text-pizarra sm:text-lg">
            Selected projects we've shipped. The full list lives behind a
            conversation.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 md:mt-20 md:grid-cols-2 lg:gap-x-16">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 50}>
              <a
                href="#"
                aria-label={`${project.name} — ${project.tag}`}
                className="group block cursor-pointer focus-visible:outline-none"
              >
                <BrowserMockup project={project} />
                <div className="mt-5">
                  <h3 className="text-tinta text-[1.375rem] font-semibold leading-[1.2] tracking-[-0.02em]">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-pizarra">{project.tag}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
