import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import company from "../../data/company";
import navigation from "../../data/navigation";

import Button from "../ui/Button";

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[var(--color-background)]/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={company.logos.icon}
            alt={`${company.name} Logo`}
            className="h-12 w-12 flex-shrink-0 lg:h-14 lg:w-14"
          />

          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-lg font-bold tracking-wide text-[var(--color-text)] lg:text-xl">
              {company.branding.line1}
            </span>

            <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-primary)] lg:text-base">
              {company.branding.line2}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Primary Navigation"
        >
          {navigation.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <span
                  className={`relative flex items-center py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[var(--color-accent)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}

          <Button to="/contact" size="sm" className="ml-2">
            Free Estimate
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-12 w-12 flex-col items-center justify-center rounded-[var(--radius)] border border-[var(--color-border)] transition-all duration-300 hover:border-[var(--color-primary)] hover:bg-white/5 lg:hidden"
        >
          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`my-1 block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />

          <span
            className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </header>
  );
}
