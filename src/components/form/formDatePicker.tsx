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
    <div className="flex gap-2 items-center">
      <div className="basis-[var(--label-width)] shrink-0">
        <label className="formItem flex items-center p-1.5 font-medium">
          {label}
          <span className="font-normal">:</span>
        </label>
        <p className="min-h-[20px]"></p>
      </div>

      <div className="relative">
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
        <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
      </div>
    </div>
  );
}
