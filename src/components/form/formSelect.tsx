import { FormField } from '@/app/_components/register/validateFiled';
import clsx from 'clsx';

import Dropdown from '../dropdown/dropdown';

interface FormSelectProps {
  label: string;
  name: FormField;
  value: string;
  onChange: (name: FormField, value: string) => void;
  error?: string;
  horizontal?: boolean;
}

export default function FormSelect({
  label,
  name,
  value,
  onChange,
  error,
  horizontal,
}: FormSelectProps) {
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
        <Dropdown
          value={value}
          className={clsx(
            'w-full p-1.5 border rounded-lg hover:border-blue-300 transition duration-300',
            error ? 'border-red-500' : 'border-gray-300',
            value && 'bg-[#e8f0fe]',
          )}
          clsDropdownMenu="w-full"
          options={[
            { label: 'Male', value: 'true' },
            { label: 'Female', value: 'false' },
          ]}
          onChange={(val) => onChange(name, val)}
        />
        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
