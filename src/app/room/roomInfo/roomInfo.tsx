import React from 'react';

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
  return (
    <div className="w-full lg:w-3/5 space-y-4 md:space-y-5">
      <header>
        {loc ? (
          <CustomText heading="h3" className="text-xl md:text-2xl">
            Nhà nghỉ tại <span>{loc.tenViTri}</span> -{' '}
            <span>{loc.tinhThanh}</span> - <span>{loc.quocGia}</span>
          </CustomText>
        ) : (
          ''
        )}

        <CustomText heading="h6">
          <span>{room.khach}</span> khách - <span>{room.phongNgu}</span> phòng
          ngủ - <span>{room.giuong}</span> giường - <span>{room.phongTam}</span>{' '}
          phòng tắm
        </CustomText>
      </header>

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
