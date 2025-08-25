import { useRef, useState } from 'react';

import { FormField } from '@/app/register/validateFiled';
import { useOutsideClick } from '@/hooks/useClickOutSide';
import clsx from 'clsx';
import { Check, ChevronDown } from 'lucide-react';

interface SelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  label: string;
  name: FormField;
  value: string;
  options: SelectOption[];
  onChange: (name: FormField, value: string) => void;
  error?: string;
  horizontal?: boolean;
}

export default function FormSelect({
  label,
  name,
  value,
  options,
  onChange,
  error,
  horizontal,
}: FormSelectProps) {
  const selected = options.find((opt) => opt.value === value) || null;
  const [open, setOpen] = useState(false);
  const dropdownSelect = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownSelect, () => {
    setOpen(false);
  });

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

      <div ref={dropdownSelect} className="w-full">
        <div
          className={`flex items-center justify-between rounded-lg border p-1.5 cursor-pointer ${
            open ? 'border-blue-500' : 'border-gray-300'
          }`}
          onClick={() => setOpen(!open)}
        >
          <span
            className={
              selected ? 'text-gray-900 line-clamp-1 flex-1' : 'text-gray-400'
            }
          >
            {selected ? selected.label : 'Select option'}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>

        {/* Dropdown */}
        {open && (
          <div className="relative w-full">
            <ul className="absolute mt-1 w-full rounded-lg border bg-white shadow-lg z-10 overflow-hidden group">
              {options.map((opt, idx) => (
                <>
                  <li
                    key={opt.value}
                    className={clsx(
                      'flex items-center justify-between px-4 py-2 cursor-pointer border border-transparent relative',
                      'hover:bg-blue-50 hover:rounded-lg hover:border hover:border-blue-400',
                      selected?.value === opt.value
                        ? 'text-blue-600 font-medium'
                        : 'text-gray-700',
                    )}
                    onClick={() => {
                      onChange(name, opt.value);
                      setOpen(false);
                    }}
                  >
                    {opt.label}
                    {selected?.value === opt.value && (
                      <Check className="h-4 w-4 text-blue-600" />
                    )}
                  </li>
                  {idx === options.length - 1 ? (
                    ''
                  ) : (
                    <div className="h-[1px] w-full bg-gray-400 group-hover:bg-transparent"></div>
                  )}
                </>
              ))}
            </ul>
          </div>
        )}
        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
