import React from 'react';

import CustomTextBlock from '@/components/divItem/customTextBlock';
import ShowMoreText from '@/components/showMoreText/showMoreText';
import CustomText from '@/components/text/customText';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';
import { Star } from 'lucide-react';

import { Amenities } from './amenities';

type TypeData = {
  room: RoomItem;
  loc?: LocationItem;
};

export default function RoomInfo({ room, loc }: TypeData) {
  const title = `Nhà nghỉ tại ${loc?.tenViTri} - ${loc?.tinhThanh} - ${loc?.quocGia}`;
  const text = `${room.khach} khách - ${room.phongNgu} phòng ngủ - ${room.giuong} giường - ${room.phongTam} phòng tắm`;

  return (
    <div className="w-full lg:w-3/5 space-y-4 md:space-y-5">
      <CustomTextBlock
        title={title}
        text={text}
        heading="h4"
        titleClass="md:text-2xl"
        textClass="font-medium"
      />

      <div className="flex items-center gap-1">
        <Star size={20} color="red" />
        <CustomText heading="h5">
          <span>rating (3.5*)</span> - <span>75 đánh giá</span>
        </CustomText>
      </div>
      <Amenities room={room} />
      <div>
        <CustomText heading="h5" className="pb-2">
          Giới thiệu về chỗ ở
        </CustomText>
        <ShowMoreText text={room.moTa} />
      </div>
    </div>
  );
}
