import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] hover:shadow-[var(--shadow)]",

  secondary:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-border-hover)] hover:bg-white/5",

  accent:
    "bg-[var(--color-accent)] text-black shadow-[var(--shadow-sm)] hover:-translate-y-0.5 hover:bg-[var(--color-accent-hover)] hover:shadow-[var(--shadow)]",

  ghost: "text-[var(--color-text)] hover:bg-white/5",
};

const sizes = {
  sm: "h-10 px-4 text-sm",

  md: "h-11 px-6 text-base",

  lg: "h-12 px-8 text-lg",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
}) {
  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-[var(--radius)]
    font-semibold
    whitespace-nowrap
    transition-all
    duration-300
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--color-primary)]
    focus:ring-offset-2
    focus:ring-offset-[var(--color-background)]
    disabled:pointer-events-none
    disabled:opacity-50
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
