import Button from "../../ui/Button";
import cta from "../../../data/home/cta";
export default function CTA() {
  return (
    <section className="bg-[var(--color-primary-dark)] py-24">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          {cta.eyebrow}
        </span>

        <h2 className="mt-5 text-4xl font-bold text-white lg:text-5xl">
          {cta.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          {cta.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to={cta.primaryButton.link} size="lg">
            {cta.primaryButton.text}
          </Button>

          <Button to={cta.secondaryButton.link} variant="secondary" size="lg">
            {cta.secondaryButton.text}
          </Button>
        </div>
      </div>
    </section>
  );
}
