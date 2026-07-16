import Card from "../ui/Card";

export default function ContentSection({
  title,
  content,
  image,
  imageAlt,
  imagePosition = "left",
}) {
  const imageColumn = (
    <Card className="overflow-hidden p-0">
      <div className="aspect-[4/5]">
        <img
          src={image}
          alt={imageAlt || title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </Card>
  );

  const textColumn = (
    <div>
      <h2 className="mb-6 text-3xl font-bold text-[var(--color-text)] lg:text-4xl">
        {title}
      </h2>

      <div className="space-y-6">
        {content.map((paragraph) => (
          <p
            key={paragraph}
            className="leading-8 text-[var(--color-text-muted)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {imagePosition === "left" ? (
          <>
            {imageColumn}
            {textColumn}
          </>
        ) : (
          <>
            {textColumn}
            {imageColumn}
          </>
        )}
      </div>
    </section>
  );
}
