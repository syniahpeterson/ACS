import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

import certifications from "../../../data/home/certifications";

export default function Certifications() {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow={certifications.eyebrow}
          title={certifications.title}
          description={certifications.description}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {certifications.items.map((item) => (
            <Card
              key={item}
              className="flex min-h-[120px] items-center justify-center p-6 text-center transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="text-lg font-semibold text-[var(--color-text)]">
                {item}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
