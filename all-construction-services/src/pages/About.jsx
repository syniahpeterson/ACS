import PageHero from "../components/layout/PageHero";
import ContentSection from "../components/layout/ContentSection";
import CTA from "../components/sections/CTA";

import aboutPage from "../data/about";

import committedSection from "../assets/images/about/committed.webp";
import whySection from "../assets/images/about/whyUs.webp";
import protectSection from "../assets/images/about/protect.webp";
import hero from "../assets/images/about/hero.webp";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        image={hero}
      />

      <ContentSection
        title={aboutPage.story.title}
        content={aboutPage.story.content}
        image={protectSection}
        imageAlt={aboutPage.story.title}
        imagePosition="left"
      />

      <ContentSection
        title={aboutPage.whyChooseUs.title}
        content={aboutPage.whyChooseUs.content}
        image={whySection}
        imageAlt={aboutPage.whyChooseUs.title}
        imagePosition="right"
      />

      <ContentSection
        title={aboutPage.commitment.title}
        content={aboutPage.commitment.content}
        image={committedSection}
        imageAlt={aboutPage.commitment.title}
        imagePosition="left"
      />

      <CTA
        eyebrow="Get Started"
        title={aboutPage.cta.title}
        description={aboutPage.cta.description}
        primaryButton={aboutPage.cta.primaryButton}
      />
    </main>
  );
}
