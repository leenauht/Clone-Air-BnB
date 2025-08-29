import { FormField } from '@/app/_components/register/validateFiled';
import clsx from 'clsx';
import { format } from 'date-fns';

import CustomDatePicker from '../datePicker/customDatePicker';

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
  error,
  value,
  onChange,
  horizontal,
}: FormDatePickerProps) {
  const dateValue = value ? new Date(value) : undefined;

  return (
    <div
      className={clsx(
        'space-y-1 pr-2.5 relative',
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
        <CustomDatePicker
          id={name}
          error={error}
          mode="single"
          placeholder="Select date"
          value={dateValue}
          onChange={(val) => {
            // val: Date | undefined
            onChange(name, val ? format(val, 'yyyy-MM-dd') : '');
          }}
          onReset={() => onChange(name, '')}
        />
      </div>
    </div>
  );
}
