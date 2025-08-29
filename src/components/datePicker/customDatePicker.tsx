import { usePopup } from '@/hooks/usePopup';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import Button from '../button/button';
import './datePicker.css';
import { CustomDatePickerProps, DateRange } from './typeDatePicker';

export default function CustomDatePicker({
  id,
  mode = 'single',
  value,
  onChange,
  label,
  placeholder,
  onReset,
  error,
}: CustomDatePickerProps) {
  const { open, togglePopup, ref, closePopup } = usePopup<HTMLDivElement>(id);

  const handleSelect = (val: Date | DateRange | undefined) => {
    if (mode === 'range') {
      const rangeVal = val as DateRange | undefined;
      (onChange as (value: DateRange | undefined) => void)?.(rangeVal);

      if (
        rangeVal?.from &&
        rangeVal?.to &&
        rangeVal.from.getTime() !== rangeVal.to.getTime()
      ) {
        closePopup();
      }
    }

    if (mode === 'single') {
      const dateVal = val as Date | undefined;
      (onChange as (value: Date | undefined) => void)?.(dateVal);
      closePopup();
    }
  };

  const renderLabel = () => {
    if (mode === 'single') {
      if (value) return format(value as Date, 'dd/MM/yyyy');
    }

    if (mode === 'range' && value) {
      const { from, to } = value as DateRange;
      if (from && to && from.getTime() !== to.getTime()) {
        return `${format(from, 'dd/MM/yyyy')} - ${format(to, 'dd/MM/yyyy')}`;
      }
      if (from) {
        return format(from, 'dd/MM/yyyy');
      }
      return placeholder;
    }

    return placeholder;
  };

  return (
    <div className="w-full">
      {label && <div className="mb-1 text-sm font-medium">{label}</div>}

      <button
        type="button"
        onClick={togglePopup}
        className={clsx(
          'w-full hover:border-blue-300 rounded-lg border px-3 py-1.5 transition duration-300',
          'flex items-center justify-between cursor-pointer focus:outline-none focus:border-blue-300',
          error ? 'border-red-500' : 'border-gray-300',
          value && 'bg-[#e8f0fe]',
        )}
      >
        <div>{renderLabel()}</div>
        <Calendar className="w-6 h-6 text-gray-500" />
      </button>
      <p className="min-h-[20px] text-red-500 text-sm mt-0.5">{error ?? ''}</p>

      {open && (
        <div
          ref={ref}
          className="mt-1 w-full rounded-lg border border-gray-300 bg-white shadow-lg"
        >
          <DayPicker
            mode={mode}
            selected={value as undefined}
            onSelect={handleSelect}
            required={mode === 'range'}
          />
          <div className="flex justify-end gap-2 p-3 border-t-[1px] border-gray-300">
            <Button
              disabled={!value}
              onClick={onReset}
              className="!px-3 !py-1 text-sm"
            >
              Reset
            </Button>
            <Button
              onClick={() => closePopup()}
              className="!px-3 !py-1 text-sm"
              variant="danger"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
