'use client';

import { useQueryCustom } from '@/hooks/useQueryCustom';
import { DEFAULT_ROOM_DATA, TypeRoomData } from '@/types/room';

import Room from './room';

export default function RoomList() {
  const { data } = useQueryCustom<TypeRoomData>({
    key: 'room',
    url: 'https://airbnbnew.cybersoft.edu.vn/api/phong-thue',
  });
  return (
    <div className="container mx-auto pt-40 w-full">
      <Room data={data ?? DEFAULT_ROOM_DATA} />
    </div>
  );
}
