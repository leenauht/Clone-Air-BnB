'use client';

import { RoomData, TypeRoomData } from '@/mockupData/roomData';
import { FetchData } from '@/services/fetchData';

import Room from './room';

export default function RoomList() {
  const data = FetchData<TypeRoomData>(RoomData);
  const { data: dataRoom } = data;

  return (
    <div className="container mx-auto pt-40 w-full">
      {dataRoom && <Room data={dataRoom} />}
    </div>
  );
}
