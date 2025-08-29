import { usePopup } from '@/hooks/usePopup';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

import { DropdownOption, DropdownProps } from './typeDropdown';

export function DropdownMenu({
  open,
  options,
  value,
  className,
  onChange,
  setOpen,
}: {
  open: boolean;
  options: DropdownOption[];
  value?: string;
  className?: string;
  onChange: (value: string) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const liClassName = clsx(
    'flex items-center gap-1.5 py-2 px-3 cursor-pointer hover:bg-blue-100',
  );

  if (!open) return null;
  return (
    <ul
      className={clsx(
        'absolute right-0 mt-2 shadow-shadow3 rounded-lg bg-white overflow-hidden border border-gray-300 z-1',
        className ? className : 'w-max max-w-60 sm:max-w-md lg:max-w-xl',
      )}
    >
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
          <span className="flex-1 break-words line-clamp-2" title={label}>
            {label}
          </span>
          <span>{subfix}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Dropdown({
  id,
  label,
  trigger,
  options,
  value,
  onChange,
  className,
  clsDropdownMenu,
  isChevronDown,
}: DropdownProps) {
  const selected = options.find((opt) => opt.value === value) || null;
  const { open, togglePopup, ref, setOpen } = usePopup<HTMLDivElement>(id);

  return (
    <div
      tabIndex={0}
      ref={ref}
      id={id}
      className={clsx(
        'relative inline-block text-left focus:outline-none focus:border-blue-300',
        className,
      )}
    >
      <div
        onClick={togglePopup}
        className="flex items-center justify-between gap-2 cursor-pointer hover:border-blue-500"
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
        className={clsDropdownMenu}
      />
    </div>
  );
}
