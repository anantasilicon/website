import Link from "next/link";
import { Container, Eyebrow } from "@/components/page-parts";
import { Button } from "@/components/button";
import { HeroLines } from "@/components/hero-lines";
import { ContactSection } from "@/components/contact-section";

const audience = [
  { team: "RTL design", body: "Engineers who own the RTL." },
  { team: "Physical design", body: "Teams who implement changes late in the flow." },
  { team: "Design engineering", body: "Other teams carrying a design through to tapeout." },
];

export default function Home() {
  return (
    <>
      <section
        aria-labelledby="hero-title"
        data-surface="deep"
        className="flex flex-col justify-between bg-bg text-fg md:min-h-[calc(100dvh-4rem)]"
      >
        <Container className="pt-14 md:pt-20 lg:pt-24">
          <Eyebrow>Post-ECO RTL resynchronization</Eyebrow>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(2.5rem,6.4vw,5.75rem)] leading-[1.02] tracking-[-0.035em]"
          >
            Less time investigating.
            <br />
            <span className="text-muted">More time engineering.</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-lg text-muted md:text-xl">
            Ananta is developing tools to help design teams bring RTL back in line with the netlist after engineering
            change orders, and move toward tapeout with greater confidence.
          </p>
          <div className="mt-8">
            <Button href="#contact" external arrow>
              Talk to the founders
            </Button>
          </div>
        </Container>
        <div className="mt-12 pb-8 md:mt-14">
          <HeroLines />
        </div>
      </section>

      <section id="problem" aria-labelledby="problem-title" data-surface="paper" className="border-t border-line bg-bg text-fg">
        <Container className="grid grid-cols-1 gap-10 py-16 md:py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-5">
            <Eyebrow>The problem</Eyebrow>
            <h2
              id="problem-title"
              className="mt-5 max-w-[16ch] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.12] tracking-[-0.015em]"
            >
              After an ECO, the RTL falls behind.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="max-w-[42ch] text-xl leading-snug md:text-2xl">
              Late engineering changes land in the netlist. Not all of them make it back into the RTL. Finding the
              ones that did not, and repairing the RTL to match, is manual work that pulls skilled engineers away from
              building, close to tapeout.
            </p>
            <p className="mt-6 max-w-prose text-muted">
              We are building tools to help design teams find those changes and resynchronize the RTL.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="audience"
        aria-labelledby="audience-title"
        data-surface="ink"
        className="border-t border-line bg-bg text-fg"
      >
        <Container className="py-16 md:py-24">
          <Eyebrow>Who it&rsquo;s for</Eyebrow>
          <h2
            id="audience-title"
            className="mt-5 max-w-[24ch] text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.12] tracking-[-0.015em]"
          >
            Built for the teams that own the design.
          </h2>
          <ul className="mt-10 grid grid-cols-1 md:grid-cols-3">
            {audience.map((a, i) => (
              <li key={a.team} className="border-t border-line py-6 md:pr-8">
                <p className="font-mono text-xs tracking-[0.08em] text-annotation">
                  <span className="sr-only">Team </span>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-xl leading-snug">{a.team}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{a.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactSection eyebrow="Early development" title="Early development, and we would like to hear from you.">
        <div className="mt-5 max-w-prose space-y-4 text-muted">
          <p>
            Ananta is at an early stage. We have not validated it on production designs and we are not claiming
            results. We are speaking with practitioners to understand where post-ECO resynchronization really hurts.
          </p>
          <p>
            If that is your world, we would value a short conversation. We are not asking for design data.
          </p>
          <p>
            We are two engineering students at The University of Texas at Austin, building in Austin, Texas.{" "}
            <Link
              href="/founders/"
              className="t-ui text-accent underline underline-offset-4 decoration-1 hover:decoration-2"
            >
              About the founders
            </Link>
            .
          </p>
        </div>
      </ContactSection>
    </>
  );
}
