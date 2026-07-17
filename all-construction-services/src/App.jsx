import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServicDetails from "./pages/ServiceDetails";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ScrollToTop from "./lib/scrollToTop";
import ServiceDetais from "./pages/ServiceDetails";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/services/:slug" element={<ServiceDetais />} />

          <Route path="/faq" element={<FAQ />} />

          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
