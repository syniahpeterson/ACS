import about from "../../../data/home/about";
import Button from "../../ui/Button";
import SectionTitle from "../../ui/SectionTitle";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius)] border border-[var(--color-border)] bg-[var(--color-card)] shadow-[var(--shadow)]">
            <img
              src="https://placehold.co/700x850/1d232c/f3f4f6?text=About+Image"
              alt="About All Construction Services"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <SectionTitle
            eyebrow={about.eyebrow}
            title={about.title}
            align="left"
          />

          <p className="mb-6 leading-8 text-[var(--color-text-muted)]">
            {about.intro}
          </p>

          <h3 className="mb-4 text-2xl font-semibold text-[var(--color-text)]">
            {about.sectionTitle}
          </h3>

          <p className="mb-10 leading-8 text-[var(--color-text-muted)]">
            {about.description}
          </p>

          <Button to={about.button.link}>{about.button.text}</Button>
        </div>
      </div>
    </section>
  );
}
