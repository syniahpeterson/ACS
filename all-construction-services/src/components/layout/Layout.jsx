import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main id="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
