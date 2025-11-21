import { Button } from '@/components/button/button';
import { usePopup } from '@/hooks/usePopup';
import { CustomDatePickerProps } from '@/types/typeCustomDatePicker';
import clsx from 'clsx';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import './datePicker.css';

export function RenderLabel(props: {
  value: Date | DateRange | undefined;
  placeholder?: string;
  mode: 'single' | 'range';
}) {
  const { value, placeholder, mode } = props;
  let text: string;
  if (!value) return <p>{placeholder ?? ''}</p>;

  if (mode === 'single') {
    text = format(value as Date, 'dd/MM/yyyy');
  } else {
    const { from, to } = value as DateRange;
    if (!from) {
      text = placeholder ?? '';
    } else {
      text =
        to && from.getTime() !== to.getTime()
          ? `${format(from, 'dd/MM/yyyy')} - ${format(to, 'dd/MM/yyyy')}`
          : format(from, 'dd/MM/yyyy');
    }
  }
  return <p>{text}</p>;
}

export default function CustomDatePicker(props: CustomDatePickerProps) {
  const { mode, value, onChange, label, placeholder, onReset, error } = props;
  const { open, togglePopup, triggerRef, popupRef } = usePopup<
    HTMLButtonElement,
    HTMLDivElement
  >();

  const handleSelect = (val: Date | DateRange | undefined) => {
    if (!val) return;

    (onChange as (value: typeof val) => void)?.(val);

    const shouldClose =
      mode === 'single' ||
      (mode === 'range' &&
        (val as DateRange).from &&
        (val as DateRange).to &&
        (val as DateRange).from?.getTime() !==
          (val as DateRange).to?.getTime());
    if (shouldClose) togglePopup();
  };

  return (
    <div className="w-full relative">
      {label && <div className="mb-1 text-sm font-medium">{label}</div>}

      <button
        ref={triggerRef}
        type="button"
        onClick={togglePopup}
        className={clsx(
          'w-full text-gray-500 rounded-lg border px-3 py-1.5 transition duration-300 cursor-pointer ',
          'flex items-center justify-between hover:border-blue-300 focus:outline-none focus:border-blue-300',
          error ? 'border-red-500' : 'border-gray-300',
          value && 'bg-[#e8f0fe] !text-black',
        )}
      >
        <RenderLabel value={value} placeholder={placeholder} mode={mode} />

        <Calendar className="w-6 h-6 text-gray-500 hover:text-blue-500 transition duration-300" />
      </button>
      <p className="min-h-[20px] text-red-500 text-sm mt-0.5">{error ?? ''}</p>

      {open && (
        <div
          ref={popupRef}
          className="absolute bottom-16 right-0 max-w-[360px] sm:w-full sm:max-w-none rounded-lg border border-gray-300 bg-white shadow-shadow4"
        >
          {mode === 'single' ? (
            <DayPicker
              mode="single"
              selected={value as Date | undefined}
              onSelect={(val) => handleSelect(val)}
            />
          ) : (
            <DayPicker
              mode="range"
              selected={value as DateRange | undefined}
              onSelect={(val) => handleSelect(val)}
            />
          )}

          <footer className="flex justify-end gap-2 p-3 border-t-[1px] border-gray-300">
            <Button
              disabled={!value}
              onClick={onReset}
              className="!px-3 !py-1 text-sm"
            >
              Reset
            </Button>
            <Button
              onClick={() => togglePopup()}
              className="!px-3 !py-1 text-sm"
              variant="danger"
            >
              Close
            </Button>
          </footer>
        </div>
      )}
    </div>
  );
}
