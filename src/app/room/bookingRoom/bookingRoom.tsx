'use client';

import React, { useMemo, useRef, useState } from 'react';

import { Button } from '@/components/button/button';
import { OPTIONS_GUESTS } from '@/components/constants/constants';
import { DatePickerRef } from '@/components/datePicker/customFormToDatePicker';
import CustomTextBlock from '@/components/divItem/customTextBlock';
import Modal from '@/components/modal/modal';
import CustomText from '@/components/text/customText';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { formatDateRange } from '@/helper/formatDateRange';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';
import { format, subDays } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { DateRange } from 'react-day-picker';

import BookingDatePicker from './bookingDatePicker';
import GuestSelector from './guestSelector';

interface BookingSumaryProps {
  days: number;
  price: number;
}
const SERVICE_FEE = 1000000;

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

export default function BookingRoom({
  room,
  loc,
}: {
  room: RoomItem;
  loc: LocationItem;
}) {
  const [days, setDays] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);
  const datePickerRef = useRef<DatePickerRef>(null);
  const bookingButtonRef = useRef<HTMLButtonElement>(null);

  const [open, setOpen] = useState(false);

  const quantity = () =>
    Object.fromEntries(OPTIONS_GUESTS.map((item) => [item.id, item.min ?? 0]));

  const [guestQuantities, setGuestQuantities] =
    useState<Record<string, number>>(quantity);

  const handleBookingClick = () => {
    if (!dateRange?.from || !dateRange?.to || dateRange.from === dateRange.to) {
      datePickerRef.current?.openPopup();
    } else {
      datePickerRef.current?.clsPopup();
      setOpen(true);
    }
  };

  const handleResetDate = () => {
    setDateRange(undefined);
    setDays(0);
  };

  const roomSummary = `${room.khach} khách - ${room.phongNgu} phòng ngủ - ${room.giuong} giường - ${room.phongTam} phòng tắm`;
  const price = room.giaTien;
  const sum = price * days;
  const subtotal = sum + SERVICE_FEE;

  // refund
  const refundDate = useMemo(() => {
    if (!dateRange?.from) return null;
    return format(subDays(dateRange?.from, 1), 'MMM dd, yyyy', {
      locale: enUS,
    });
  }, [dateRange]);

  const { adults, children } = guestQuantities;

  const guestLabels = `${adults} adults${children ? `, ${children} children` : ''}`;

  return (
    <div className="max-w-sm sm:max-w-none sm:w-2/3 md:w-3/5 lg:flex-1 shadow-shadow3 rounded-xl h-fit">
      <div className="px-3 py-5 sm:p-5 space-y-4">
        <PriceWithUnit
          amount={days === 0 ? room.giaTien : room.giaTien * days}
          unit={`for ${days === 0 ? 1 : days} night`}
          classNameAmount="text-2xl"
          classNameUnit="font-medium text-gray-700"
        />
        <div>
          <BookingDatePicker
            ref={datePickerRef}
            ignoreRefs={[bookingButtonRef]}
            value={dateRange}
            onDaysChange={setDays}
            onChange={setDateRange}
            onReset={handleResetDate}
          />

          <GuestSelector
            guests={room.khach}
            quantity={guestQuantities}
            onQuantityChange={setGuestQuantities}
          />
        </div>

        <Button
          ref={bookingButtonRef}
          onClick={handleBookingClick}
          className="btn-booking"
        >
          Booking
        </Button>
        {days > 0 ? <BookingSumary days={days} price={room.giaTien} /> : ''}
      </div>

      <Modal isOpen={open} title="Booking" onClose={() => setOpen(false)}>
        <div className="model-booking">
          <div className="flex-1 p-5">
            <div className="flex justify-center items-center gap-3 xl:gap-4 2xl:gap-5">
              <div className="relative h-24 w-24 sm:h-28 sm:w-28 xl:w-30 xl:h-30">
                <Image
                  src={loc.hinhAnh}
                  alt="Logo"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              <div className="flex-1">
                <CustomText
                  heading="h6"
                  className="line-clamp-2 lg:text-lg"
                  title={room.tenPhong}
                >
                  {room.tenPhong}
                </CustomText>
                <div className="flex gap-1 items-center">
                  <Star size={18} className="text-gray-900 fill-gray-900" />
                  <span className="text-sm font-medium lg:text-base">
                    3.5 (75)
                  </span>
                </div>
                <p className="text-sm font-medium">{roomSummary}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-200 [&>*]:p-3 items-center">
              <CustomTextBlock
                title="Free cancellation"
                text={`Cancel before ${refundDate} for a full refund.`}
                textClass="text-sm"
              />
              <CustomTextBlock
                title="Your travel"
                text={formatDateRange(dateRange, enUS)}
                textClass="text-sm"
              />
              <CustomTextBlock
                title="Guest"
                text={guestLabels}
                textClass="text-sm"
              />
              <div className="flex justify-between">
                <div>
                  <h6>Price details</h6>
                  <PriceWithUnit
                    amount={price}
                    unit={`${days} nights`}
                    classNameUnit="font-medium text-gray-700 text-sm"
                    classNameAmount="text-sm text-gray-700"
                    reverse={false}
                    separator="x"
                  />
                </div>
                <PriceWithUnit
                  amount={sum}
                  classNameAmount="text-sm text-gray-700"
                  separator=""
                />
              </div>
              <div className="flex justify-between">
                <h6>Airbnb sevices fee</h6>
                <PriceWithUnit
                  amount={SERVICE_FEE}
                  classNameAmount="text-sm text-gray-700"
                  separator=""
                />
              </div>
              <div className="flex justify-between">
                <h6>Subtotal</h6>
                <PriceWithUnit
                  amount={subtotal}
                  classNameAmount="text-sm"
                  separator=""
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
