export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    left: "text-left items-start",
    center: "text-center items-center",
  };

  return (
    <div className={`flex flex-col gap-4 max-w-3xl mb-12 ${alignment[align]}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="text-lg leading-8 text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
