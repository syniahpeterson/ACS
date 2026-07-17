import PageHero from "../components/layout/PageHero";

import notFoundPage from "../data/notFound";

const placeholderImage = "/images/placeholder-service.webp";

export default function NotFound() {
  return (
    <main>
      <PageHero
        eyebrow={notFoundPage.hero.eyebrow}
        title={notFoundPage.hero.title}
        description={notFoundPage.hero.description}
        image={placeholderImage}
        primaryButton={notFoundPage.primaryButton}
        secondaryButton={notFoundPage.secondaryButton}
      />
    </main>
  );
}
