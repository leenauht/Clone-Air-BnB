import { useState } from 'react';

import { FormField } from '@/app/_components/register/validateFiled';
import clsx from 'clsx';

// import { Calendar } from 'lucide-react';

interface FormDatePickerProps {
  label: string;
  name: FormField;
  value: string;
  onChange: (name: FormField, value: string) => void;
  error?: string;
  horizontal?: boolean;
}

export default function FormDatePicker({
  label,
  name,
  value,
  onChange,
  error,
  horizontal,
}: FormDatePickerProps) {
  const [dateValue, setDateValue] = useState(value ?? '');

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

      {/* <div>
        <input type="text" placeholder="abcd" />
        <Calendar />
      </div> */}

      <div className="w-full">
        <input
          id={name}
          name={name}
          type="date"
          value={dateValue}
          className="p-1.5 cursor-pointer border rounded-lg"
          lang="en"
          onChange={(e) => {
            setDateValue(e.target.value);
            onChange(name, e.target.value);
          }}
        />
        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
