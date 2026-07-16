import PageHero from "../components/layout/PageHero";
import CTA from "../components/sections/CTA";
import ServicesGrid from "../components/sections/services/ServicesGrid";

import servicesPage from "../data/services/index";

import cta from "../data/home/cta";

const placeholderImage =
  "https://placehold.co/700x850/1d232c/f3f4f6?text=Service+Image";

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
        image={placeholderImage}
      />

      <ServicesGrid
        eyebrow="Our Services"
        title="Complete List of Services"
        description="Browse our environmental remediation, demolition, and specialty services."
      />

      <CTA
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryButton={cta.primaryButton}
        secondaryButton={cta.secondaryButton}
      />
    </main>
  );
}
