import React, { useEffect } from 'react';

import { toastInfo } from '@/helper/toastHelper';
import { usePopup } from '@/hooks/usePopup';
import { DateFormToPickerProps } from '@/types/typeDateFormToPicker';
import clsx from 'clsx';
import { differenceInDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

import Button from '../button/button';
import CustomTextBlock from '../divItem/customTextBlock';
import './datePicker.css';

export interface DatePickerRef {
  openPopup: () => void;
}
interface DateLabel {
  label: string;
  placeholder: string;
}

interface Props {
  value: DateRange | undefined;
  textForm: DateLabel;
  textTo: DateLabel;
  isActive?: boolean;
}

function getDateText(
  from: Date | undefined,
  to: Date | undefined,
  formLabel: DateLabel,
  toLabel: DateLabel,
) {
  if (from && to && from.getTime() !== to.getTime()) {
    return {
      textF: format(from, 'dd/MM/yyyy'),
      textT: format(to, 'dd/MM/yyyy'),
    };
  }

  if (from) {
    return {
      textF: format(from, 'dd/MM/yyyy'),
      textT: toLabel.placeholder,
    };
  }

  return {
    textF: formLabel.placeholder,
    textT: toLabel.placeholder,
  };
}

export function RenderLabel({ value, textForm, textTo, isActive }: Props) {
  const { from, to } = value ?? {};

  const { textF, textT } = getDateText(from, to, textForm, textTo);

  return (
    <div className="w-full flex">
      <div className="relative w-1/2 p-2 sm:p-3 md:p-4">
        <CustomTextBlock
          title={textForm.label}
          text={textF}
          heading="h6"
          textClass="text-sm text-gray-500 font-medium"
        />
        {isActive && !from && (
          <p className="h-0.5 w-[calc(100%-2rem)] bg-blue-500 absolute bottom-0.5"></p>
        )}
      </div>

      <div className="relative flex-1 p-2 sm:p-3 md:p-4">
        <CustomTextBlock
          title={textTo.label}
          text={textT}
          heading="h6"
          textClass="text-sm text-gray-500 font-medium"
        />
        {isActive && from && (
          <p className="h-0.5 w-[calc(100%-2rem)] bg-blue-500 absolute bottom-0.5"></p>
        )}
      </div>
    </div>
  );
}

export function RenderHeader({ value, textForm, textTo }: Props) {
  const { from, to } = value ?? {};

  const { textF, textT } = getDateText(from, to, textForm, textTo);
  return (
    <div className="px-4 py-2">
      <p className="font-medium text-sm text-gray-700 sm:text-base">
        {from && to && differenceInDays(to, from) > 0 ? (
          <span>{`${differenceInDays(to, from)} đêm`}</span>
        ) : (
          <span>{textForm.label}</span>
        )}
        <span className="px-1">|</span>
        {!from ? (
          <span>{textTo.label}</span>
        ) : (
          <span>
            {textF ? <span>{textF} - </span> : ''}
            {textT}
          </span>
        )}
      </p>
    </div>
  );
}

const CustomFormToDatePicker = React.forwardRef<
  DatePickerRef,
  DateFormToPickerProps
>((props, ref) => {
  const {
    value,
    onChange,
    label,
    onReset,
    textTo,
    textForm,
    className,
    noti,
    header = true,
  } = props;

  const [month, setMonth] = React.useState<Date>(new Date());

  const { open, togglePopup, closePopup, triggerRef, popupRef } = usePopup<
    HTMLButtonElement,
    HTMLDivElement
  >((isOpen) => {
    if (!isOpen && value?.from && value?.from === value?.to) {
      toastInfo(noti);
    }
  });

  React.useImperativeHandle(ref, () => ({
    openPopup: () => togglePopup(),
  }));

  const handleSelect = (val: DateRange | undefined) => {
    if (!val) return;
    (onChange as (value: typeof val) => void)?.(val);
  };

  useEffect(() => {
    if (open) {
      if (value?.from) {
        setMonth(value.from);
      } else {
        setMonth(new Date());
      }
    }
  }, [open, value]);

  return (
    <div className={clsx('w-full relative', className)}>
      {label && <div className="mb-1 text-sm font-medium">{label}</div>}

      <button
        ref={triggerRef}
        type="button"
        onClick={togglePopup}
        className="w-full cursor-pointer"
      >
        <RenderLabel
          value={value}
          textForm={textForm}
          textTo={textTo}
          isActive={open}
        />
        <p className="w-[0.5px] h-full bg-gray-500 absolute inset-0 m-auto"></p>
      </button>

      {open && (
        <div
          ref={popupRef}
          className="absolute bottom-16 w-full rounded-lg border border-gray-300 bg-white shadow-shadow4"
        >
          {header ? (
            <RenderHeader
              value={value}
              textForm={{ label: 'Số đêm', placeholder: '' }}
              textTo={{ label: 'Chọn ngày', placeholder: '' }}
            />
          ) : (
            ''
          )}

          <DayPicker
            month={month}
            onMonthChange={setMonth}
            showOutsideDays
            fixedWeeks
            mode="range"
            disabled={{ before: new Date() }}
            selected={value as DateRange | undefined}
            onSelect={(val) => handleSelect(val)}
            onDayClick={(day, modifiers) => {
              if (modifiers.outside && !modifiers.disabled) {
                // clicking on a day from another month switches to that month
                setMonth(day);
              }
            }}
          />
          <footer className="flex justify-end gap-2 p-3 border-t-[1px] border-gray-300">
            <Button
              disabled={!value}
              onClick={onReset}
              variant="danger"
              className="!px-3 !py-1 text-sm"
            >
              Reset
            </Button>
            <Button onClick={closePopup} className="!px-3 !py-1 text-sm">
              Confirm
            </Button>
          </footer>
        </div>
      )}
    </div>
  );
});

CustomFormToDatePicker.displayName = 'CustomFormToDatePicker';
export default CustomFormToDatePicker;
