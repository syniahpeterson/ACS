export default function Select({
  label,
  id,
  name,
  options = [],
  placeholder = "Select an option",
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

      <select
        id={id}
        name={name}
        required={required}
        autoComplete={autoComplete}
        defaultValue=""
        className="
          w-full
          rounded-[var(--radius)]
          border
          border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4
          py-3
          text-[var(--color-text)]
          outline-none
          transition
          focus:border-[var(--color-primary)]
        "
        {...props}
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
    </div>
  );
}
