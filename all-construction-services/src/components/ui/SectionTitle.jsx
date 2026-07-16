export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignment = {
    left: "items-start text-left",
    center: "items-center text-center",
  };

  return (
    <div className={`mb-16 flex max-w-3xl flex-col gap-4 ${alignment[align]}`}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-text)] md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
