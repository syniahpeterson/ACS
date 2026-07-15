import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import AboutPreview from "../components/sections/AboutPreview";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Process from "../components/sections/Process";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <WhyChooseUs />
      <Process />
    </>
  );
}
