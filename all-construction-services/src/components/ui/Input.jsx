export default function Input({
  label,
  id,
  type = "text",
  placeholder = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-[var(--color-text)]"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-[var(--radius)]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4
          py-3
          text-[var(--color-text)]
          placeholder:text-[var(--color-text-muted)]
          outline-none
          transition
          focus:border-[var(--color-primary)]
        "
        {...props}
      />
    </div>
  );
}
