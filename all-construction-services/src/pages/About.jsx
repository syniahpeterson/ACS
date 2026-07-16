import PageHero from "../components/layout/PageHero";
import ContentSection from "../components/layout/ContentSection";
import CTA from "../components/sections/CTA";

import aboutPage from "../data/about";

const placeholderImage =
  "https://placehold.co/700x850/1d232c/f3f4f6?text=About+Image";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        image={placeholderImage}
      />

      <ContentSection
        title={aboutPage.story.title}
        content={aboutPage.story.content}
        image={placeholderImage}
        imageAlt={aboutPage.story.title}
        imagePosition="left"
      />

      <ContentSection
        title={aboutPage.whyChooseUs.title}
        content={aboutPage.whyChooseUs.content}
        image={placeholderImage}
        imageAlt={aboutPage.whyChooseUs.title}
        imagePosition="right"
      />

      <ContentSection
        title={aboutPage.commitment.title}
        content={aboutPage.commitment.content}
        image={placeholderImage}
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
