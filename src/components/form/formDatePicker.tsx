import { useState } from 'react';

interface FormDatePickerProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FormDatePicker({
  label,
  name,
  value,
  onChange,
  error,
}: FormDatePickerProps) {
  const [dateValue, setDateValue] = useState(value ?? '');

  return (
    <div>
      <div className="flex items-center">
        <label
          htmlFor={name}
          className="label-required label-colon basis-[var(--label-width)] shrink-0 flex items-center p-1.5 font-medium"
        >
          {label}
        </label>
        <input
          id={name}
          name={name}
          type="date"
          value={dateValue}
          placeholder="Select date"
          onChange={(e) => {
            setDateValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </div>
      <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
    </div>
  );
}
