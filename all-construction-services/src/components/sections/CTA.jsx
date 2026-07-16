import Button from "../ui/Button";

export default function CTA({
  eyebrow,
  title,
  description,
  primaryButton,
  secondaryButton,
}) {
  return (
    <section className="section-bg bg-[var(--color-primary-dark)] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            {eyebrow}
          </span>
        )}

        <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
          {title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          {primaryButton && (
            <Button to={primaryButton.link} size="lg">
              {primaryButton.text}
            </Button>
          )}

          {secondaryButton && (
            <Button to={secondaryButton.link} variant="secondary" size="lg">
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
