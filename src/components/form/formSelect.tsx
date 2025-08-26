import { useState } from 'react';

import { FormField } from '@/app/_components/register/validateFiled';
import clsx from 'clsx';

import Dropdown from '../dropdown/dropdown';

interface FormSelectProps {
  label: string;
  name: FormField;
  error?: string;
  horizontal?: boolean;
}

export default function FormSelect({
  label,
  name,
  error,
  horizontal,
}: FormSelectProps) {
  const [gender, setGender] = useState('');
  console.log('gender', gender);

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
      <div>
        <Dropdown
          value={gender}
          className={clsx(
            'w-full p-1.5 border border-gray-300 rounded-lg hover:border-blue-300',
            gender && 'bg-[#e8f0fe]',
          )}
          options={[
            { label: 'Male', value: 'true' },
            { label: 'Female', value: 'false' },
          ]}
          onChange={(val) => setGender(val)}
        />
        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
