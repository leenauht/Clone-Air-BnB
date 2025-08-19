'use client';

import { API_URL } from '@/components/constants/constants';
import { useQueryCustom } from '@/hooks/useQueryCustom';
import { DEFAULT_LOCATION_DATA, TypeLocationData } from '@/types/location';
import { DEFAULT_ROOM_DATA, TypeRoomData } from '@/types/room';

import RoomListContent from './roomListContent';
import RoomListContentSkeleton from './roomSkeleton';

export default function RoomList() {
  const { data: roomData, isLoading } = useQueryCustom<TypeRoomData>({
    key: 'room',
    url: `${API_URL}/phong-thue`,
  });

  const { data: locationData } = useQueryCustom<TypeLocationData>({
    key: 'location',
    url: `${API_URL}/vi-tri`,
  });

  return (
    <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        {isLoading ? (
          <RoomListContentSkeleton />
        ) : (
          <RoomListContent
            locationData={locationData ?? DEFAULT_LOCATION_DATA}
            roomData={roomData ?? DEFAULT_ROOM_DATA}
          />
        )}
      </div>
    </div>
  );
}
