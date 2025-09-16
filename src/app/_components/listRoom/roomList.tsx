'use client';

import { useEffect } from 'react';

import { useQueryCustom } from '@/hooks/useQueryCustom';
import { useLocationStore } from '@/store/locationStore';
import { useRoomStore } from '@/store/roomStore';
import { TypeLocationData } from '@/types/location';
import { TypeRoomData } from '@/types/room';

import RoomListContent from './roomListContent';
import RoomListContentSkeleton from './roomSkeleton';

export default function RoomList() {
  const { data: roomData, isLoading } = useQueryCustom<TypeRoomData>({
    key: 'phong-thue',
  });
  const { data: locationData } = useQueryCustom<TypeLocationData>({
    key: 'vi-tri',
  });

  const setRoomData = useRoomStore((state) => state.setRoomData);
  const setLocationData = useLocationStore((state) => state.setLocationData);

  // chỉ lưu vào store khi có data
  useEffect(() => {
    if (roomData) setRoomData(roomData);
  }, [roomData, setRoomData]);

  useEffect(() => {
    if (locationData) setLocationData(locationData);
  }, [locationData, setLocationData]);

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        {isLoading ? <RoomListContentSkeleton /> : <RoomListContent />}
      </div>
    </section>
  );
}
