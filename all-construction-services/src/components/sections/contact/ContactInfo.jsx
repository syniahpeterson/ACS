import Card from "../../ui/Card";

export default function ContactInfo({ items }) {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <Card
            key={item.title}
            className="flex min-h-[180px] flex-col justify-center p-8 text-center"
          >
            <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
              {item.title}
            </h3>

            {item.href ? (
              <a
                href={item.href}
                className="whitespace-pre-line text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
              >
                {item.value}
              </a>
            ) : (
              <p className="whitespace-pre-line text-[var(--color-text-muted)]">
                {item.value}
              </p>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
}
