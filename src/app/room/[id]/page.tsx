'use client';

import React from 'react';

import { ICONS } from '@/components/icons/icon';
import CustomText from '@/components/text/customText';
import { useQueryCustom } from '@/hooks/useQueryCustom';
import { TypeLocationDetail } from '@/types/location';
import { TypeRoomDetail } from '@/types/room';
import Image from 'next/image';

// import BookingRoom from '../bookingRoom/bookingRoom';
import RoomContentSkeleton from '../roomInfo/roomContentSkeleton';
import RoomInfo from '../roomInfo/roomInfo';

export default function RoomDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);

  const { data: roomData, isLoading: isRoomLoading } =
    useQueryCustom<TypeRoomDetail>({
      key: 'phong-thue',
      id: id,
    });

  const { data: locationData, isLoading: isLocationLoading } =
    useQueryCustom<TypeLocationDetail>({
      key: 'vi-tri',
      id: roomData?.content.maViTri,
      enabled: !!roomData?.content.maViTri,
    });

  const isLoading = isRoomLoading || isLocationLoading;
  const isEmpty = !roomData?.content || !locationData?.content;

  if (isLoading) return <RoomContentSkeleton />;

  if (isEmpty) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <ICONS.Empty />
        <p>No Data</p>
      </div>
    );
  }

  const room = roomData.content;

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl space-y-4 md:space-y-5">
      <CustomText heading="h3" className="text-xl md:text-2xl">
        {room.tenPhong}
      </CustomText>
      <div className="relative w-full aspect-[3/1] overflow-hidden rounded-xl">
        <Image
          src={room.hinhAnh}
          alt="room"
          priority
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="lg:flex lg:gap-5 xl:gap-10">
        <RoomInfo roomData={roomData} locationData={locationData} />
        {/* <BookingRoom /> */}
      </div>
    </section>
  );
}
