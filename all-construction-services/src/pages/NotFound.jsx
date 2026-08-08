import Seo from "../components/layout/Seo";
import seo from "../data/seo";
import PageHero from "../components/layout/PageHero";

import notFoundPage from "../data/notFound";

import notFoundImage from "../assets/images/not-found/not-found.webp";

export default function NotFound() {
  return (
    <main>
      <Seo title={seo.notFound.title} description={seo.notFound.description} />
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
