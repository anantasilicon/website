import type { Metadata } from "next";
import { Container, Eyebrow } from "@/components/page-parts";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Founders",
  description: "Ananta is founded by two engineering students at The University of Texas at Austin, based in Austin, Texas.",
};

const facts = [
  { label: "Where", value: "Austin, Texas" },
  { label: "Who", value: "Two engineering students at The University of Texas at Austin" },
  { label: "Stage", value: "Early. Learning from the engineers who do this work." },
];

export default function FoundersPage() {
  return (
    <>
      <section aria-labelledby="founders-title" data-surface="deep" className="bg-bg text-fg">
        <Container className="py-16 md:py-24 lg:py-32">
          <Eyebrow>Founders</Eyebrow>
          <h1
            id="founders-title"
            className="mt-6 max-w-[16ch] text-[clamp(2.5rem,6.4vw,4.75rem)] leading-[1.03] tracking-[-0.03em]"
          >
            Two engineers, building in Austin.
          </h1>
          <p className="mt-8 max-w-[48ch] text-lg text-muted md:text-xl">
            Ananta is founded by two engineering students at The University of Texas at Austin. We want to make
            post-ECO resynchronization less manual, and we are starting by listening to the people who do it.
          </p>
        </Container>
      </section>

      <section aria-label="At a glance" className="border-t border-line bg-bg text-fg">
        <Container className="py-12 md:py-16">
          <dl className="grid grid-cols-1 gap-0 md:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="border-t border-line py-6 md:pr-8">
                <dt className="font-mono text-xs uppercase tracking-[0.08em] text-annotation">{f.label}</dt>
                <dd className="mt-2 text-lg leading-snug">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <ContactSection />
    </>
  );
}
