import { usePopup } from '@/hooks/usePopup';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

import { DropdownOption, DropdownProps } from '../../types/typeDropdown';

export function DropdownMenu({
  open,
  options,
  value,
  className,
  onChange,
}: {
  open: boolean;
  options: DropdownOption[];
  value?: string;
  className?: string;
  onChange: (value: string) => void;
}) {
  const liClassName = clsx(
    'flex items-center gap-1.5 py-2 px-3 cursor-pointer hover:bg-blue-100',
  );

  if (!open) return null;
  return (
    <div className="absolute right-0 z-1 w-full mt-2.5">
      <ul
        className={clsx(
          'mb-2.5 shadow-shadow3 rounded-lg bg-white overflow-hidden border border-gray-300',
          className ? className : 'w-max max-w-60 sm:max-w-md lg:max-w-xl',
        )}
      >
        {options.map(({ value: val, prefix, label, subfix, color }, idx) => (
          <li
            key={val}
            className={clsx(
              liClassName,
              value === val ? 'text-blue-600 font-medium' : 'text-gray-700',
              idx !== options.length - 1 && 'border-b border-gray-300',
            )}
            onClick={() => onChange(val)}
          >
            <span>{prefix}</span>
            <span className="flex-1 break-words line-clamp-2" style={{ color }}>
              {label}
            </span>
            <span>{subfix}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dropdown({
  label,
  activator,
  options,
  value,
  onChange,
  className,
  clsDropdownMenu,
  isChevronDown,
}: DropdownProps) {
  const selected = options.find((opt) => opt.value === value) || null;
  const { open, togglePopup, ref } = usePopup<HTMLDivElement>();

  return (
    <div
      tabIndex={0}
      ref={ref}
      className={clsx(
        'relative inline-block text-left focus:outline-none cursor-pointer focus:border-blue-300',
        className,
      )}
    >
      <div
        onClick={togglePopup}
        className="flex items-center justify-between gap-2 hover:border-blue-500"
      >
        {activator ? (
          activator
        ) : (
          <span className={clsx(selected ? 'text-gray-900' : 'text-gray-400')}>
            {selected ? selected.label : label || 'Select Option'}
          </span>
        )}

        {!isChevronDown ? (
          <ChevronDown
            className={clsx(
              'h-4 w-4 transition-transform',
              open && 'rotate-180',
            )}
          />
        ) : null}
      </div>

      {/* Dropdown */}
      <DropdownMenu
        open={open}
        options={options}
        value={value}
        onChange={(val) => {
          onChange(val);
          togglePopup();
        }}
        className={clsDropdownMenu}
      />
    </div>
  );
}
