import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

import whyChooseUs from "../../data/whyChooseUs";

export default function WhyChooseUs() {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow={whyChooseUs.eyebrow}
          title={whyChooseUs.title}
          description={whyChooseUs.description}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {whyChooseUs.items.map((item) => (
            <Card key={item.title} className="p-8">
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-text)]">
                {item.title}
              </h3>

              <p className="leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
