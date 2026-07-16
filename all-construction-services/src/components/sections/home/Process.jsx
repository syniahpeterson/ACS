import process from "../../../data/home/process";

import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

export default function Process() {
  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Process"
          title="A Simple Process From Start to Finish"
          description="We make every project straightforward by following a proven process that keeps safety, communication, and quality at the center of every job."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {process.map((step) => (
            <Card key={step.step} className="flex h-full flex-col p-8">
              <span className="mb-6 text-5xl font-bold text-[var(--color-primary)]">
                {step.step}
              </span>

              <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
                {step.title}
              </h3>

              <p className="leading-7 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
