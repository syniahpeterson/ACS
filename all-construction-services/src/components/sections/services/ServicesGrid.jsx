import { Link } from "react-router-dom";

import services from "../../../data/services";

import Card from "../../ui/Card";
import Button from "../../ui/Button";
import SectionTitle from "../../ui/SectionTitle";

export default function ServicesGrid({
  eyebrow,
  title,
  description,
  limit,
  showButton = false,
}) {
  const displayedServices = limit
    ? services.filter((service) => service.featured).slice(0, limit)
    : services;
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || description) && (
          <SectionTitle
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        )}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {displayedServices.map((service) => (
            <Card key={service.slug} className="overflow-hidden p-0">
              {/* Image */}
              <div className="aspect-[3/2] bg-[var(--color-card)]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col p-6">
                <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mb-6 flex-1 leading-7 text-[var(--color-text-muted)]">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {showButton && (
          <div className="mt-12 text-center">
            <Button to="/services">View All Services</Button>
          </div>
        )}
      </div>
    </section>
  );
}
