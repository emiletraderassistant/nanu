import { SectionEyebrow } from "./SectionEyebrow";
import { Reveal } from "./Reveal";

type Client = {
  src: string;
  alt: string;
};

const CLIENTS: Client[] = [
  { src: "/assets/logos/profit4life.png", alt: "Profit4Life" },
  { src: "/assets/logos/unitok.png", alt: "Unitok" },
  { src: "/assets/logos/galmaveca.png", alt: "Galmaveca" },
  { src: "/assets/logos/cota.png", alt: "Cota" },
];

function LogoItem({
  client,
  decorative = false,
}: {
  client: Client;
  decorative?: boolean;
}) {
  return (
    <li
      className="flex flex-shrink-0 items-center"
      aria-hidden={decorative || undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={client.src}
        alt={decorative ? "" : client.alt}
        className="logo-monochrome h-[42px] w-auto select-none"
        draggable={false}
      />
    </li>
  );
}

export function TrustedBy() {
  return (
    <section
      id="trusted"
      aria-labelledby="trusted-heading"
      className="bg-hueso"
    >
      <div className="container-nanu py-16">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <SectionEyebrow>
              <span id="trusted-heading">Trusted by teams in</span>
            </SectionEyebrow>
          </div>
        </Reveal>

        <div className="marquee mt-10">
          <ul role="list" className="marquee-track">
            {/* Original set — read by assistive tech */}
            {CLIENTS.map((client) => (
              <LogoItem key={client.alt} client={client} />
            ))}
            {/* Duplicate set — purely visual, hidden from AT */}
            {CLIENTS.map((client) => (
              <LogoItem
                key={`dup-${client.alt}`}
                client={client}
                decorative
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
