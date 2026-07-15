import company from "../../data/company";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-surface)]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-4 px-6 py-12 text-center">
        <img
          src={company.logos.horizontal}
          alt={company.name}
          className="h-12 w-auto"
        />

        <p className="text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
