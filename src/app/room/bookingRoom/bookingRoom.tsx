import React, { useRef, useState } from 'react';

import { DatePickerRef } from '@/components/datePicker/customFormToDatePicker';
import Modal from '@/components/modal/modal';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { RoomItem } from '@/types/room';
import clsx from 'clsx';
import { DateRange } from 'react-day-picker';

import BookingDatePicker from './bookingDatePicker';
import GuestSelector from './guestSelector';

interface BookingSumaryProps {
  days: number;
  price: number;
}

export function BookingSumary({ days, price }: BookingSumaryProps) {
  const serviceFee = 1000000;
  return (
    <div className="space-y-3 font-medium ">
      <p className="text-center text-gray-700">Bạn vẫn chưa bị trừ tiền</p>
      <div className="flex justify-between border-b border-gray-300 space-y-3">
        <div className="space-y-2 underline">
          <PriceWithUnit amount={price} unit={`${days} đêm`} separator="x" />
          <p>Phí dịch vụ Airbnb</p>
        </div>
        <div className="space-y-2">
          <PriceWithUnit amount={price * days} separator="" />
          <PriceWithUnit amount={serviceFee} separator="" />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Tổng trước thuế</p>
        <PriceWithUnit amount={serviceFee + price * days} separator="" />
      </div>
    </div>
  );
}

export default function BookingRoom({ room }: { room: RoomItem }) {
  const [days, setDays] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const datePickerRef = useRef<DatePickerRef>(null);

  const [open, setOpen] = useState(false);

  const handleBookingClick = () => {
    if (!dateRange?.from || !dateRange?.to || dateRange.from === dateRange.to) {
      datePickerRef.current?.openPopup();
    } else {
      setOpen(true);
    }
  };

  const handleResetDate = () => {
    setDateRange(undefined);
    setDays(0);
  };

  return (
    <div className="w-full sm:w-2/3 md:w-3/5 lg:flex-1 shadow-shadow3 rounded-xl h-fit">
      <div className="px-3 py-5 sm:p-5 space-y-4">
        <PriceWithUnit
          amount={room.giaTien}
          unit="đêm"
          classNameAmount="text-2xl"
          classNameUnit="font-medium text-gray-700"
        />
        <div className="border border-gray-400 box-border rounded-xl group">
          <BookingDatePicker
            ref={datePickerRef}
            value={dateRange}
            onDaysChange={setDays}
            onChange={setDateRange}
            onReset={handleResetDate}
          />
          <div className="h-[0.5px] w-full bg-gray-400 group-hover:bg-transparent"></div>
          <GuestSelector />
        </div>

        <button
          onClick={handleBookingClick}
          className={clsx(
            'text-white font-medium md:text-lg cursor-pointer rounded-full w-full py-2 md:py-3 bg-gradient-to-r from-[#e61e4d] to-[#d70466]',
            'hover:bg-[radial-gradient(_#e61e4d,_#d70466)] transition-all duration-300',
          )}
        >
          Đặt phòng
        </button>
        {days > 0 ? <BookingSumary days={days} price={room.giaTien} /> : ''}
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        abcd
      </Modal>
    </div>
  );
}
