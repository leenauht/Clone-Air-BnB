'use client';

import { useQueryCustom } from '@/hooks/useQueryCustom';

import Room from './room';

export default function RoomList() {
  const roomData = useQueryCustom<React.ReactNode>({
    key: 'room',
    url: 'https://airbnbnew.cybersoft.edu.vn/api/phong-thue',
  });

  return (
    <div className="container mx-auto pt-40 w-full">
      {roomData && <Room data={roomData} />}
    </div>
  );
}
