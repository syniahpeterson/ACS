import Hero from "../components/sections/home/Hero";
import ServicesPreview from "../components/sections/home/ServicesPreview";
import AboutPreview from "../components/sections/home/AboutPreview";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import Process from "../components/sections/home/Process";
import Certifications from "../components/sections/home/Certifications";
import CTA from "../components/sections/home/CTA";
import AreasServed from "../components/sections/home/AreasServed";
import FAQPreview from "../components/sections/home/FAQPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
      <Certifications />
      <AreasServed />
      <FAQPreview />
      <CTA />
    </>
  );
}
