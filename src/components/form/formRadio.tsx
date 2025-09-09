import clsx from 'clsx';

interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioProps<T extends string> {
  label: string;
  name: T;
  value: string;
  options: RadioOption[];
  onChange: (name: T, value: string) => void;
  error?: string;
  horizontal?: boolean;
}

export default function FormRadio<T extends string>({
  label,
  name,
  value,
  options,
  onChange,
  error,
  horizontal,
}: FormRadioProps<T>) {
  return (
    <div
      className={clsx(
        'space-y-1',
        horizontal && 'flex flex-col sm:flex-row sm:gap-1',
      )}
    >
      <div className="sm:basis-[var(--label-width)] shrink-0">
        <label
          htmlFor={name}
          className={clsx(
            'label-required flex items-center font-medium',
            horizontal && 'sm:p-1.5 label-colon',
          )}
        >
          {label}
        </label>
      </div>

      <div className="w-full">
        <div className="flex gap-5">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(name, opt.value)}
                className="accent-blue-500 cursor-pointer translate-y-[1px]"
              />
              <span className="leading-6 align-middle">{opt.label}</span>
            </label>
          ))}
        </div>

        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
