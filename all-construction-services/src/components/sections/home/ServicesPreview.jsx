import { Link } from "react-router-dom";

import services from "../../../data/services";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

export default function ServicesPreview() {
  const featuredServices = services.filter((service) => service.featured);

  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title="Professional Environmental & Construction Services"
          description="We provide dependable environmental remediation and construction services for residential, commercial, industrial, and government clients."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredServices.map((service) => (
            <Card
              key={service.id}
              className="group overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[var(--color-background)]">
                <img
                  src="https://placehold.co/600x400/1d232c/f3f4f6?text=Service+Image"
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col p-8">
                <h3 className="text-2xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-grow leading-7 text-[var(--color-text-muted)]">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-8 inline-flex font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/services" size="lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
}
