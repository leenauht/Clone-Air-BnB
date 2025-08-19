interface RadioOption {
  label: string;
  value: string;
}

interface FormRadioProps {
  label: string;
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
  error?: string;
}

export default function FormRadio({
  label,
  name,
  value,
  options,
  onChange,
  error,
}: FormRadioProps) {
  return (
    <div className="flex items-center">
      <div className="basis-[var(--label-width)] shrink-0">
        <label
          htmlFor={name}
          className="label-required label-colon flex items-center p-1.5 font-medium"
        >
          {label}
        </label>
      </div>

      <div className="flex w-full gap-5">
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
              onChange={() => onChange(opt.value)}
              className="accent-blue-500 cursor-pointer translate-y-[1px]"
            />
            <span className="leading-none align-middle">{opt.label}</span>
          </label>
        ))}
      </div>
      <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
    </div>
  );
}
