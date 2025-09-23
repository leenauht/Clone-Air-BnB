'use client';

import React from 'react';

import CustomFormToDatePicker, {
  DatePickerRef,
} from '@/components/datePicker/customFormToDatePicker';
import { differenceInDays } from 'date-fns';
import { DateRange } from 'react-day-picker';

interface BookingDatePickerProps {
  value: DateRange | undefined;
  onChange?: (range: DateRange | undefined) => void;
  onDaysChange: (days: number) => void;
  onReset: () => void;
}

const BookingDatePicker = React.forwardRef<
  DatePickerRef,
  BookingDatePickerProps
>(({ onDaysChange, value, onChange, onReset }, ref) => {
  const handleOnChange = (range: DateRange | undefined) => {
    onChange?.(range);
    if (range?.from && range.to) {
      onDaysChange(differenceInDays(range.to, range.from));
    } else {
      onDaysChange(0);
    }
  };

  return (
    <CustomFormToDatePicker
      ref={ref}
      value={value}
      onChange={handleOnChange}
      onReset={onReset}
      className="border border-transparent rounded-xl hover:border hover:border-blue-500"
      textForm={{ label: 'Nhận phòng', placeholder: 'Thêm ngày' }}
      textTo={{ label: 'Trả phòng', placeholder: 'Thêm ngày' }}
      noti="Vui lòng thêm ngày trả phòng!"
    />
  );
});
BookingDatePicker.displayName = 'BookingDatePicker';
export default BookingDatePicker;
