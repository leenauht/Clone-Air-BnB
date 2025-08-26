import { useRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/useClickOutSide';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

interface DropdownOption {
  label: string;
  value: string;
  prefix?: React.ReactNode;
  subfix?: React.ReactNode;
}

interface DropdownProps {
  label?: string;
  trigger?: React.ReactNode;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  className?: string;
  isChevronDown?: boolean;
}

export function DropdownMenu({
  open,
  options,
  value,
  onChange,
  setOpen,
}: {
  open: boolean;
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const liClassName = clsx(
    'flex items-center gap-1.5 py-2 px-3 cursor-pointer hover:bg-blue-50',
  );

  if (!open) return null;
  return (
    <ul className="absolute right-0 mt-2 shadow-shadow3 rounded-lg bg-white overflow-hidden min-w-full max-w-sm">
      {options.map(({ value: val, prefix, label, subfix }, idx) => (
        <li
          key={val}
          className={clsx(
            liClassName,
            value === val ? 'text-blue-600 font-medium' : 'text-gray-700',
            idx !== options.length - 1 && 'border-b border-gray-300',
          )}
          onClick={() => {
            onChange(val);
            setOpen(false);
          }}
        >
          <span>{prefix}</span>
          <span className="flex-1 break-words line-clamp-3">{label}</span>
          <span>{subfix}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Dropdown({
  label,
  trigger,
  options,
  value,
  onChange,
  className,
  isChevronDown,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const selected = options.find((opt) => opt.value === value) || null;
  const dropdownCustom = useRef<HTMLDivElement>(null);

  useOutsideClick(dropdownCustom, () => {
    if (open) setOpen(false);
  });

  return (
    <div
      ref={dropdownCustom}
      className={clsx('relative inline-block text-left', className)}
    >
      <div
        className="flex items-center justify-between gap-2 cursor-pointer hover:border-blue-500"
        onClick={() => setOpen(!open)}
      >
        {trigger ? (
          trigger
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
        onChange={onChange}
        setOpen={setOpen}
      />
    </div>
  );
}
