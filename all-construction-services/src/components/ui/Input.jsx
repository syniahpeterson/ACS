export default function Input({
  label,
  id,
  name,
  type = "text",
  value = "",
  onChange,
  error,
  placeholder = "",
  required = false,
  autoComplete,
  disabled = false,
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
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`
          w-full
          rounded-[var(--radius)]
          border
          px-4
          py-3
          bg-[var(--color-surface)]
          text-[var(--color-text)]
          placeholder:text-[var(--color-text-muted)]
          outline-none
          transition
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
          }
        `}
      />

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
