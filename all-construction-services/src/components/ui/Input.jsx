export default function Input({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  required = false,
  autoComplete,
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
          {required && " *"}
        </label>
      )}

      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
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
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
        {...props}
      />
    </div>
  );
}
