import PageHero from "../components/layout/PageHero";

import notFoundPage from "../data/notFound";

import notFoundImage from "../assets/images/not-found/not-found.webp"

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow={notFoundPage.hero.eyebrow}
        title={notFoundPage.hero.title}
        description={notFoundPage.hero.description}
        image={notFoundImage}
        primaryButton={notFoundPage.primaryButton}
        secondaryButton={notFoundPage.secondaryButton}
      />
    </main>
  );
}
