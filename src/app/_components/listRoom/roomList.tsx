'use client';

import { MockupLocationData } from '@/mockupData/location';
import { MockupRoomData } from '@/mockupData/roomData';

// import { locationList, roomList } from '@/queries/queries';

// import { useSuspenseQuery } from '@tanstack/react-query';

import RoomListContent from './roomListContent';

export default function RoomList() {
  // const { data: rooms } = useSuspenseQuery(roomList);

  // const { data: locations } = useSuspenseQuery(locationList);

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        <RoomListContent
          // rooms={rooms}
          // locations={locations}
          rooms={MockupRoomData}
          locations={MockupLocationData}
        />
      </div>
    </section>
  );
}
