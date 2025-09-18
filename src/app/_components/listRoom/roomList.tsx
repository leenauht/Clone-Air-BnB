'use client';

import { useQueryCustom } from '@/hooks/useQueryCustom';
import { useLocationStore } from '@/store/locationStore';
import { useRoomStore } from '@/store/roomStore';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';

import RoomListContent from './roomListContent';
import RoomListContentSkeleton from './roomSkeleton';

export default function RoomList() {
  const setRoomData = useRoomStore((state) => state.setRoomData);
  const setLocationData = useLocationStore((state) => state.setLocationData);

  const { isLoading } = useQueryCustom<RoomItem[]>({
    key: 'phong-thue',
    onSuccess: setRoomData,
  });

  useQueryCustom<LocationItem[]>({
    key: 'vi-tri',
    onSuccess: setLocationData,
  });

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        {isLoading ? <RoomListContentSkeleton /> : <RoomListContent />}
      </div>
    </section>
  );
}
