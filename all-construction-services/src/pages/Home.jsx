import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-16">
        <SectionTitle
          eyebrow="Reusable UI"
          title="Foundation Components"
          description="These components will be reused throughout the website without modification."
        />

        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="accent">Accent</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <Card className="p-8">
          <h3 className="mb-4 text-2xl font-semibold">Card Component</h3>

          <p className="text-[var(--color-text-muted)]">
            This is the reusable card that will be used throughout the project.
          </p>
        </Card>

        <div className="grid gap-6">
          <Input id="name" label="Full Name" placeholder="John Smith" />

          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="john@example.com"
          />

          <TextArea
            id="message"
            label="Message"
            placeholder="Tell us about your project..."
          />
        </div>
      </div>
    </main>
  );
}
