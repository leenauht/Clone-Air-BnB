'use client';

import React from 'react';

import CustomText from '@/components/text/customText';
import { useQueryCustom } from '@/hooks/useQueryCustom';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';
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

  const { data: roomData, isLoading: isRoomLoading } = useQueryCustom<RoomItem>(
    {
      key: 'phong-thue',
      id: id,
    },
  );

  const { data: locationData, isLoading: isLocationLoading } =
    useQueryCustom<LocationItem>({
      key: 'vi-tri',
      id: roomData?.maViTri,
      options: {
        enabled: !!roomData?.maViTri,
      },
    });

  const isLoading = isRoomLoading || isLocationLoading;

  if (isLoading) return <RoomContentSkeleton />;

  // custom page error
  if (!roomData) return null;

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl space-y-4 md:space-y-5">
      <CustomText heading="h3" className="text-xl md:text-2xl">
        {roomData?.tenPhong}
      </CustomText>
      <div className="relative w-full aspect-[3/1] overflow-hidden rounded-xl">
        <Image
          src={roomData.hinhAnh}
          alt="room"
          priority
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="lg:flex lg:gap-5 xl:gap-10">
        <RoomInfo room={roomData} loc={locationData} />
        {/* <BookingRoom /> */}
      </div>
    </section>
  );
}
