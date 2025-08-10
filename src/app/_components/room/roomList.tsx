'use client';

import { MockupRoomData } from '@/mockupData/roomData';
import { FetchData } from '@/services/fetchData';
import { TypeRoomData } from '@/types/room';

import Room from './room';

export default function RoomList() {
  const { data: dataRoom } = FetchData<TypeRoomData>(MockupRoomData, 'room');
  return (
    <div className="container mx-auto pt-40 w-full">
      {dataRoom && <Room data={dataRoom} />}
    </div>
  );
}
