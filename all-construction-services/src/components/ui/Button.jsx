import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",

  secondary:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-white/5",

  accent: "bg-[var(--color-accent)] text-black hover:brightness-110",

  ghost: "text-[var(--color-text)] hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",

  md: "px-6 py-3 text-base",

  lg: "px-8 py-4 text-lg",
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
    transition-all
    duration-200
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
