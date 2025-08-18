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
    <div className="flex gap-2 items-center">
      <div className="basis-[var(--label-width)] shrink-0">
        <label className="formItem flex items-center p-1.5 font-medium">
          {label}
          <span className="font-normal">:</span>
        </label>
        <p className="min-h-[20px]"></p>
      </div>

      <div className="w-full">
        <div className="flex gap-5">
          {options.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center justify-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                name={name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(opt.value)}
                className="accent-blue-500 cursor-pointer"
              />
              <span>{opt.label}</span>
            </label>
          ))}
        </div>
        <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
      </div>
    </div>
  );
}
