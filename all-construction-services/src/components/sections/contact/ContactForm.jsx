import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";

export default function ContactForm({ form }) {
  const renderField = (field) => {
    const commonProps = {
      id: field.id,
      name: field.name,
      label: field.label,
      placeholder: field.placeholder,
      required: field.required,
      autoComplete: field.autoComplete,
    };

    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return <Input key={field.id} {...commonProps} type={field.type} />;

      case "select":
        return (
          <Select key={field.id} {...commonProps} options={field.options} />
        );

      case "textarea":
        return <TextArea key={field.id} {...commonProps} rows={field.rows} />;

      default:
        return null;
    }
  };

  const halfWidthFields = form.fields.filter((field) =>
    ["text", "email", "tel"].includes(field.type),
  );

  const fullWidthFields = form.fields.filter((field) =>
    ["select", "textarea"].includes(field.type),
  );

  return (
    <section className="bg-[var(--color-background)] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[var(--shadow-lg)] lg:p-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-text)]">
              {form.title}
            </h2>

            <p className="mt-4 text-[var(--color-text-muted)]">
              {form.description}
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {halfWidthFields.map(renderField)}
            </div>

            {fullWidthFields.map(renderField)}

            <Button type="submit" size="lg">
              {form.submitText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
