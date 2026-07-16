import { Link } from "react-router-dom";

import company from "../../data/company";
import navigation from "../../data/navigation";
import services from "../../data/services";

import Button from "../ui/Button";

export default function Footer() {
  const featuredServices = services.slice(0, 5);

  return (
    <footer className="border-t border-white/10 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link to="/">
              <img
                src={company.logos.horizontal}
                alt={company.name}
                className="mb-6 h-14 w-auto"
              />
            </Link>

            <p className="mb-6 leading-7 text-[var(--color-text-muted)]">
              {company.tagline}
            </p>

            <p className="text-sm leading-7 text-[var(--color-text-muted)]">
              Professional asbestos removal, testing, demolition, lead
              abatement, mold remediation, and environmental services throughout
              Chester, Pennsylvania and the surrounding communities.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
              Services
            </h3>

            <ul className="space-y-4">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}

              <li className="pt-2">
                <Link
                  to="/services"
                  className="font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">
              Contact
            </h3>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-sm uppercase tracking-wide text-[var(--color-text-muted)]">
                  Phone
                </p>

                <a
                  href={company.contact.phoneLink}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {company.contact.phone}
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wide text-[var(--color-text-muted)]">
                  Email
                </p>

                <a
                  href={company.contact.emailLink}
                  className="transition-colors hover:text-[var(--color-primary)]"
                >
                  {company.contact.email}
                </a>
              </div>

              <div>
                <p className="mb-1 text-sm uppercase tracking-wide text-[var(--color-text-muted)]">
                  Location
                </p>

                <p className="text-[var(--color-text-muted)]">
                  {company.location.city}, {company.location.state}
                </p>

                <p className="text-[var(--color-text-muted)]">
                  {company.location.serviceRadius}
                </p>
              </div>

              <div className="pt-2">
                <Button to="/contact" className="w-full">
                  Free Estimate
                </Button>
              </div>

              {company.social.google && (
                <a
                  href={company.social.google}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)]"
                >
                  Google Business →
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Hours */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <h3 className="mb-8 text-center text-xl font-semibold text-[var(--color-text)]">
            Business Hours
          </h3>

          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {company.hours.map((day) => (
              <div
                key={day.day}
                className="flex items-center justify-between rounded-[var(--radius)] border border-white/5 bg-[var(--color-card)] px-5 py-4"
              >
                <span>{day.day}</span>

                <span className="text-[var(--color-text-muted)]">
                  {day.hours}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
