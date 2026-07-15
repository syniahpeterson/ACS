export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-[var(--radius)]
        border
        border-[var(--color-border)]
        bg-[var(--color-card)]
        shadow-[var(--shadow)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}
