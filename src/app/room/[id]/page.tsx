import React from 'react';

import { getQueryClient } from '@/app/get-query-client';
import CustomText from '@/components/text/customText';
import { queryOptionsCustom } from '@/hooks/queryOptionsCustom';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';
import Image from 'next/image';

import BookingRoom from '../bookingRoom/bookingRoom';
import RoomInfo from '../roomInfo/roomInfo';

export default async function RoomDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const queryClient = getQueryClient();
  const room = await queryClient.fetchQuery(
    queryOptionsCustom<RoomItem>({ key: 'phong-thue', id: id }),
  );
  const location = await queryClient.fetchQuery(
    queryOptionsCustom<LocationItem>({
      key: 'vi-tri',
      id: room.maViTri,
      options: { enabled: !!room.maViTri },
    }),
  );

  // custom page error
  if (!room) return null;

  return (
    <section className="w-full mx-auto px-4 pt-40 pb-10 sm:px-6 max-w-7xl space-y-4 md:space-y-5">
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
      <div className="space-y-5 lg:space-y-0 lg:flex lg:gap-5 xl:gap-10">
        <RoomInfo room={room} loc={location} />
        <BookingRoom room={room} />
      </div>
    </section>
  );
}
