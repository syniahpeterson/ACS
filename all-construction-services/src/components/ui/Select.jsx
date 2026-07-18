export default function Select({
  label,
  id,
  name,
  value = "",
  onChange,
  error,
  options = [],
  placeholder = "Select an option",
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

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
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
          outline-none
          transition
          ${
            error
              ? "border-red-500 focus:border-red-500"
              : "border-[var(--color-border)] focus:border-[var(--color-primary)]"
          }
        `}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const label = typeof option === "string" ? option : option.label;

          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>

      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
