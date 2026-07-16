import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

import faqPreview from "../../../data/home/faqPreview";

export default function FAQPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionTitle
          eyebrow={faqPreview.eyebrow}
          title={faqPreview.title}
          description={faqPreview.description}
        />

        <div className="space-y-6">
          {faqPreview.faqs.map((faq) => (
            <Card key={faq.question} className="p-8">
              <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
                {faq.question}
              </h3>

              <p className="leading-7 text-[var(--color-text-muted)]">
                {faq.answer}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to={faqPreview.button.link}>{faqPreview.button.text}</Button>
        </div>
      </div>
    </section>
  );
}
