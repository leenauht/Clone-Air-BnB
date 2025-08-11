'use client';

import { useLocation } from '@/hooks/useLocation';
import { useRoom } from '@/hooks/useRoom';

import RoomListContent from './roomListContent';

export default function RoomList() {
  const locationData = useLocation();
  const roomData = useRoom();

  return (
    <div className="container mx-auto pt-40 w-full">
      <div className="grid grid-cols-4 gap-5">
        <RoomListContent locationData={locationData} roomData={roomData} />
      </div>
    </div>
  );
}
