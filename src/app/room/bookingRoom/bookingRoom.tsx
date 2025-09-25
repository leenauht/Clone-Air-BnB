'use client';

import React, { useRef, useState } from 'react';

import { DatePickerRef } from '@/components/datePicker/customFormToDatePicker';
import CustomTextBlock from '@/components/divItem/customTextBlock';
import Modal from '@/components/modal/modal';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { formatNumberWithCommas } from '@/helper/numberFormat';
import { RoomItem } from '@/types/room';
import clsx from 'clsx';
// import { format } from 'date-fns';
// import { useRouter } from 'next/navigation';
import { DateRange } from 'react-day-picker';

import BookingDatePicker from './bookingDatePicker';
import GuestSelector from './guestSelector';

interface BookingSumaryProps {
  days: number;
  price: number;
}
export const SERVICE_FEE = 1000000;

export function BookingSumary({ days, price }: BookingSumaryProps) {
  return (
    <div className="space-y-3 font-medium">
      <p className="text-center text-gray-700">You won&apos;t be charged yet</p>
      <div className="flex justify-between border-b border-gray-300 space-y-3">
        <div className="space-y-2 underline">
          <PriceWithUnit amount={price} unit={`${days} night`} separator="x" />
          <p>Airbnb sevices fee</p>
        </div>
        <div className="space-y-2 text-right text-lg">
          <PriceWithUnit amount={price * days} separator="" />
          <PriceWithUnit amount={SERVICE_FEE} separator="" />
        </div>
      </div>
      <div className="flex justify-between">
        <p>Subtotal</p>
        <PriceWithUnit
          amount={SERVICE_FEE + price * days}
          separator=""
          classNameAmount="text-lg"
        />
      </div>
    </div>
  );
}

export default function BookingRoom({ room }: { room: RoomItem }) {
  const [days, setDays] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const datePickerRef = useRef<DatePickerRef>(null);
  // const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleBookingClick = () => {
    if (!dateRange?.from || !dateRange?.to || dateRange.from === dateRange.to) {
      datePickerRef.current?.openPopup();
    } else {
      datePickerRef.current?.clsPopup();
      setOpen(true);
      // const startDate = format(new Date(`${dateRange?.from}`), 'yyyy-MM-dd');
      // const endDate = format(new Date(`${dateRange?.to}`), 'yyyy-MM-dd');
      // router.push(
      //   `/booking-confirm?roomId=${room.id}&start=${startDate}&end=${endDate}`,
      // );
    }
  };

  const handleResetDate = () => {
    setDateRange(undefined);
    setDays(0);
  };

  const price = room.giaTien;
  const sum = price * days;
  const subtotal = sum + SERVICE_FEE;

  return (
    <div className="w-full sm:w-2/3 md:w-3/5 lg:flex-1 shadow-shadow3 rounded-xl h-fit">
      <div className="px-3 py-5 sm:p-5 space-y-4">
        <PriceWithUnit
          amount={days === 0 ? room.giaTien : room.giaTien * days}
          unit={`for ${days === 0 ? 1 : days} night`}
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
          ref={datePickerRef.current?.ref}
          onClick={handleBookingClick}
          className={clsx(
            'text-white font-medium md:text-lg cursor-pointer rounded-full w-full py-2 md:py-3 bg-gradient-to-r from-[#e61e4d] to-[#d70466]',
            'hover:bg-[radial-gradient(_#e61e4d,_#d70466)] transition-all duration-300',
          )}
        >
          Booking
        </button>
        {days > 0 ? <BookingSumary days={days} price={room.giaTien} /> : ''}
      </div>
      <Modal isOpen={open} title="Booking" onClose={() => setOpen(false)}>
        <div className="px-5 flex flex-col divide-y divide-gray-200 [&>*]:py-4">
          <CustomTextBlock title="Your travel" text="Từ ngày" heading="h5" />
          <CustomTextBlock title="Guest" text="1 khách" heading="h5" />
          <div className="flex justify-between items-center">
            <div>
              <h5>Prices</h5>
              <PriceWithUnit
                amount={price}
                unit="night"
                classNameUnit="font-medium text-gray-500 text-sm"
                classNameAmount="text-xl"
              />
            </div>
            <PriceWithUnit
              amount={sum}
              unit="night"
              classNameUnit="font-medium text-gray-500 text-sm"
              classNameAmount="text-xl"
            />
          </div>
          <CustomTextBlock
            title="Airbnb sevices fee"
            text={`₫ ${formatNumberWithCommas(SERVICE_FEE)}`}
            heading="h5"
            divClass="flex justify-between"
            textClass="font-bold text-xl"
          />
          <CustomTextBlock
            title="Subtotal"
            text={`₫ ${formatNumberWithCommas(subtotal)}`}
            heading="h5"
            divClass="flex justify-between"
            textClass="font-bold text-xl"
          />
          <div className="flex justify-center px-5 !py-8">
            <button className="px-4 py-2 w-4/5 text-lg font-medium border border-gray-300 rounded-full cursor-pointer hover:border-blue-300 hover:bg-blue-500 hover:text-white transition duration-300">
              Booking
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
