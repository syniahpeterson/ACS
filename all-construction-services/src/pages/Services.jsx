import PageHero from "../components/layout/PageHero";
import ContentSection from "../components/layout/ContentSection";
import ServicesGrid from "../components/sections/services/ServicesGrid";
import CTA from "../components/sections/CTA";

import servicesPage from "../data/services/index";
import whyChooseUs from "../data/home/whyChooseUs";

import whyUsImage from "../assets/images/services/whyChooseUs.webp"
import CESImage from "../assets/images/services/ces.webp"
import hero from "../assets/images/services/hero.webp"

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow={servicesPage.hero.eyebrow}
        title={servicesPage.hero.title}
        description={servicesPage.hero.description}
        image={hero}
      />

      <ContentSection
        title={servicesPage.intro.title}
        content={servicesPage.intro.content}
        image={CESImage}
        imageAlt={servicesPage.intro.title}
      />

      <ServicesGrid
        eyebrow={servicesPage.grid.eyebrow}
        title={servicesPage.grid.title}
        description={servicesPage.grid.description}
      />

      <ContentSection
        title={servicesPage.whyChooseUs.title}
        content={servicesPage.whyChooseUs.content}
        image={whyUsImage}
        imageAlt={servicesPage.whyChooseUs.title}
        imagePosition="left"
      />

      <CTA
        eyebrow={servicesPage.cta.eyebrow}
        title={servicesPage.cta.title}
        description={servicesPage.cta.description}
        primaryButton={servicesPage.cta.primaryButton}
        secondaryButton={servicesPage.cta.secondaryButton}
      />
    </main>
  );
}
