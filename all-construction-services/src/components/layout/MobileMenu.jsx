import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation";

import Button from "../ui/Button";

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <div
      className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? "max-h-screen border-b border-white/10" : "max-h-0"
      }`}
    >
      <nav className="bg-[var(--color-surface)] px-6 py-6">
        <div className="flex flex-col gap-4">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `py-2 transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-text)]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Button to="/contact" onClick={() => setMobileMenuOpen(false)}>
            Free Estimate
          </Button>
        </div>
      </nav>
    </div>
  );
}
