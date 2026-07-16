import PageHero from "../components/layout/PageHero";

import aboutPage from "../data/about";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow={aboutPage.hero.eyebrow}
        title={aboutPage.hero.title}
        description={aboutPage.hero.description}
        image="https://placehold.co/700x850/1d232c/f3f4f6?text=About+Image"
      />
    </main>
  );
}
