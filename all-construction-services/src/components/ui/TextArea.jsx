export default function TextArea({
  label,
  id,
  name,
  value = "",
  onChange,
  error,
  rows = 6,
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

      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
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
          resize-y
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
