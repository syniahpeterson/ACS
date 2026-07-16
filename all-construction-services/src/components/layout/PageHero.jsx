import Button from "../ui/Button";

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className="section-bg bg-[var(--color-background)] py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Content */}
        <div>
          {eyebrow && (
            <span className="inline-flex rounded-full border border-[var(--color-border)] bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              {eyebrow}
            </span>
          )}

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
              {description}
            </p>
          )}

          {(primaryButton || secondaryButton) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryButton && (
                <Button to={primaryButton.link}>{primaryButton.text}</Button>
              )}

              {secondaryButton && (
                <Button to={secondaryButton.link} variant="secondary">
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Image */}
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow-lg)]">
            <img
              src={image}
              alt={title}
              loading="eager"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
