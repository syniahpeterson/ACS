import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import services from "../data/services";

import PageHero from "../components/layout/PageHero";
import ContentSection from "../components/layout/ContentSection";
import ServicesGrid from "../components/sections/services/ServicesGrid";
import CTA from "../components/sections/CTA";
import NotFound from "./NotFound";

export default function ServiceDetails() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <NotFound />;
  }

  return (
    <main>
      <Link
        to="/services"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-[var(--color-primary)] bg-[var(--color-background)] px-4 py-3 font-medium text-[var(--color-primary)] shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[var(--color-primary)] hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <PageHero
        eyebrow="Our Services"
        title={service.title}
        description={service.shortDescription}
        image={service.image || placeholderImage}
      />

      <ContentSection
        title={service.title}
        content={service.description}
        image={service.image || placeholderImage}
        imageAlt={service.title}
        imagePosition="right"
      />

      <CTA
        eyebrow="Free Estimates"
        title={`Need ${service.title}?`}
        description={`Whether you need ${service.title.toLowerCase()} for your home, business, or job site, our experienced team is ready to help. Contact All Construction Services LLC today to request your free estimate.`}
        primaryButton={{
          text: "Request a Free Estimate",
          link: "/contact",
        }}
        secondaryButton={{
          text: "View All Services",
          link: "/services",
        }}
      />

      <ServicesGrid
        eyebrow="More Services"
        title="Explore Our Other Services"
        description="We provide a complete range of environmental remediation, demolition, and specialty services."
        limit={3}
        currentService={service.slug}
      />
    </main>
  );
}
