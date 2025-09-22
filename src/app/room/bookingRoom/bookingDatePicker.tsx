'use client';

import React, { useState } from 'react';

import CustomFormToDatePicker from '@/components/datePicker/customFormToDatePicker';
import { DateRange } from 'react-day-picker';

export default function BookingDatePicker() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);

  return (
    <CustomFormToDatePicker
      className="border border-transparent rounded-xl hover:border hover:border-blue-500"
      textForm={{ label: 'Nhận phòng', placeholder: 'Thêm ngày' }}
      textTo={{ label: 'Trả phòng', placeholder: 'Thêm ngày' }}
      value={dateRange}
      onChange={setDateRange}
      onReset={() => setDateRange(undefined)}
    />
  );
}
