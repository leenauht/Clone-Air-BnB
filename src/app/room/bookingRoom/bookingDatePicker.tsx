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
  ignoreRefs?: React.RefObject<HTMLElement | null>[];
}

const BookingDatePicker = React.forwardRef<
  DatePickerRef,
  BookingDatePickerProps
>(({ onDaysChange, value, onChange, onReset, ignoreRefs }, ref) => {
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
      ignoreRefs={ignoreRefs}
      className="border rounded-tl-xl rounded-tr-xl hover:border hover:border-blue-500"
      textForm={{ label: 'Check-in', placeholder: 'Add day' }}
      textTo={{ label: 'Check out', placeholder: 'Add day' }}
      noti={{
        from: 'Please add your check-in and checkout dates!',
        to: 'Please add your checkout date!',
      }}
    />
  );
});
BookingDatePicker.displayName = 'BookingDatePicker';
export default BookingDatePicker;
