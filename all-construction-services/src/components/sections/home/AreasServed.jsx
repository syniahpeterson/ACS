import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

import areasServed from "../../../data/home/areasServed";

export default function AreasServed() {
  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow={areasServed.eyebrow}
          title={areasServed.title}
          description={areasServed.description}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {areasServed.locations.map((location) => (
            <Card
              key={location}
              className="p-5 text-center transition-all duration-300 hover:border-[var(--color-primary)] hover:-translate-y-1"
            >
              <p className="font-medium text-[var(--color-text)]">{location}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
