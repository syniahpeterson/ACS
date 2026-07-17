import PageHero from "../components/layout/PageHero";
import Accordion from "../components/ui/Accordion";
import CTA from "../components/sections/CTA";

import faqPage from "../data/faq";

const placeholderImage = "/images/placeholder-service.webp";

export default function FAQ() {
  return (
    <main>
      <PageHero
        eyebrow={faqPage.hero.eyebrow}
        title={faqPage.hero.title}
        description={faqPage.hero.description}
        image={placeholderImage}
      />

      <section className="bg-[var(--color-background)] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Accordion items={faqPage.faqs} />
        </div>
      </section>

      <CTA
        eyebrow={faqPage.cta.eyebrow}
        title={faqPage.cta.title}
        description={faqPage.cta.description}
        primaryButton={faqPage.cta.primaryButton}
        secondaryButton={faqPage.cta.secondaryButton}
      />
    </main>
  );
}
