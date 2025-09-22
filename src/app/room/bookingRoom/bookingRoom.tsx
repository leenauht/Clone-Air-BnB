import React from 'react';

import PriceWithUnit from '@/components/text/priceWithUnit';
import { RoomItem } from '@/types/room';

import BookingDatePicker from './bookingDatePicker';
import GuestSelector from './guestSelector';

export function BookingSumary() {
  return (
    <div className="space-y-3 font-medium ">
      <p className="text-center text-gray-700">Bạn vẫn chưa bị trừ tiền</p>
      <div className="flex justify-between border-b border-gray-500 space-y-3">
        <div className="space-y-2 underline">
          <p>₫ 17 x 2 đêm</p>
          <p>Phí dịch vụ Airbnb</p>
        </div>
        <div className="space-y-2">
          <p>₫ 34</p>
          <p>₫ 1.000.000</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p>Tổng trước thuế</p>
        <p>₫ 1.000.034</p>
      </div>
    </div>
  );
}

export default function BookingRoom({ room }: { room: RoomItem }) {
  return (
    <div className="w-full sm:w-2/3 md:w-3/5 lg:flex-1 shadow-shadow3 rounded-xl h-fit">
      <div className="px-3 py-5 sm:p-5 space-y-4">
        <PriceWithUnit
          amount={room.giaTien}
          unit="đêm"
          classNameAmount="text-2xl"
        />
        <div className="border border-gray-400 box-border rounded-xl group">
          <BookingDatePicker />
          <div className="h-[0.5px] w-full bg-gray-400 group-hover:bg-transparent"></div>
          <GuestSelector />
        </div>

        <button className="text-white rounded-xl w-full py-2 md:py-3 bg-gradient-to-r from-[#e61e4d] to-[#d70466]">
          Đặt phòng
        </button>

        <BookingSumary />
      </div>
    </div>
  );
}
