'use client';

import { DataLocation } from '@/services/apiLocation';
import { DataRoomList } from '@/services/apiRentalRoom';
import { DEFAULT_LOCATION_DATA } from '@/types/location';
import { DEFAULT_ROOM_DATA } from '@/types/room';

import { useSuspenseQuery } from '@tanstack/react-query';

import RoomListContent from './roomListContent';
import RoomListContentSkeleton from './roomSkeleton';

export default function RoomList() {
  const { data: roomData, isLoading } = useSuspenseQuery(DataRoomList());
  const { data: locationData } = useSuspenseQuery(DataLocation());

  return (
    <div className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl">
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
