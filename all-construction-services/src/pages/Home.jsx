import Hero from "../components/sections/home/Hero";
import AboutPreview from "../components/sections/home/AboutPreview";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import Process from "../components/sections/home/Process";
import Certifications from "../components/sections/home/Certifications";
import CTA from "../components/sections/CTA";
import AreasServed from "../components/sections/home/AreasServed";
import FAQPreview from "../components/sections/home/FAQPreview";
import ServicesGrid from "../components/sections/services/ServicesGrid";

import cta from "../data/home/cta";
import homeServices from "../data/home/services";

export default function Home() {
  return (
    <>
      <Hero />

      <ServicesGrid
        eyebrow={homeServices.eyebrow}
        title={homeServices.title}
        description={homeServices.description}
        limit={homeServices.limit}
        showButton={homeServices.showButton}
      />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
      <Certifications />
      <AreasServed />
      <FAQPreview />
      <CTA
        eyebrow={cta.eyebrow}
        title={cta.title}
        description={cta.description}
        primaryButton={cta.primaryButton}
        secondaryButton={cta.secondaryButton}
      />
    </>
  );
}
