import ContentSection from "../components/layout/ContentSection";
import PageHero from "../components/layout/PageHero";
import ContactForm from "../components/sections/contact/ContactForm";
import CTA from "../components/sections/CTA";
import ContactInfo from "../components/sections/contact/ContactInfo";

import contactPage from "../data/contact";

import servingImage from "../assets/images/contact/serving.webp"
import hero from "../assets/images/contact/hero.webp"

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow={contactPage.hero.eyebrow}
        title={contactPage.hero.title}
        description={contactPage.hero.description}
        image={hero}
      />

      <ContactInfo items={contactPage.info} />

      <ContactForm form={contactPage.form} />

      <ContentSection
        title={contactPage.serviceArea.title}
        content={[contactPage.serviceArea.description]}
        image={servingImage}
        imageAlt={contactPage.serviceArea.title}
        imagePosition="left"
      />

      <CTA
        eyebrow={contactPage.cta.eyebrow}
        title={contactPage.cta.title}
        description={contactPage.cta.description}
        primaryButton={contactPage.cta.primaryButton}
        secondaryButton={contactPage.cta.secondaryButton}
      />
    </main>
  );
}
