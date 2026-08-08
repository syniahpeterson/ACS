import hero from "../../../data/home/hero";
import Button from "../../ui/Button";

import heroImage from "../../../assets/images/home/hero.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-bg bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div>
          <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
            {hero.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to={hero.primaryButton.link}>
              {hero.primaryButton.text}
            </Button>

            <Button to={hero.secondaryButton.link} variant="secondary">
              {hero.secondaryButton.text}
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-3 border-t border-[var(--color-border)] pt-8 sm:gap-6">
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-[var(--color-primary)] sm:text-3xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-[var(--color-text-muted)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-lg)]">
            <img
              src={heroImage}
              alt="All Construction Services"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
