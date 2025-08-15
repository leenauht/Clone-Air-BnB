'use client';

import { useQueryCustom } from '@/hooks/useQueryCustom';
import { DEFAULT_LOCATION_DATA, TypeLocationData } from '@/types/location';
import { DEFAULT_ROOM_DATA, TypeRoomData } from '@/types/room';

import RoomListContent from './roomListContent';

export default function RoomList() {
  const { data: roomData } = useQueryCustom<TypeRoomData>({
    key: 'room',
    url: 'https://airbnbnew.cybersoft.edu.vn/api/phong-thue',
  });

  const { data: locationData } = useQueryCustom<TypeLocationData>({
    key: 'location',
    url: 'https://airbnbnew.cybersoft.edu.vn/api/vi-tri',
  });

  return (
    <div className="w-full mx-auto px-4 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        <RoomListContent
          locationData={locationData ?? DEFAULT_LOCATION_DATA}
          roomData={roomData ?? DEFAULT_ROOM_DATA}
        />
      </div>
    </div>
  );
}
