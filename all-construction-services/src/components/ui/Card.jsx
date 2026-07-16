export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-[var(--radius)]
        border
        border-[var(--color-border)]
        bg-[var(--color-card)]
        shadow-[var(--shadow-sm)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--color-border-hover)]
        hover:shadow-[var(--shadow)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
