export default function TextArea({
  label,
  id,
  rows = 6,
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

      <textarea
        id={id}
        rows={rows}
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
          resize-y
        "
        {...props}
      />
    </div>
  );
}
