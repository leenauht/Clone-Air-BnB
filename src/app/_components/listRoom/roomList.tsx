import { getQueryClient } from '@/app/get-query-client';
import { queryOptionsCustom } from '@/hooks/queryOptionsCustom';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';

import RoomListContent from './roomListContent';

export default async function RoomList() {
  const queryClient = getQueryClient();
  const listRoom = await queryClient.fetchQuery(
    queryOptionsCustom<RoomItem[]>({
      key: 'phong-thue',
    }),
  );

  const listLocation = await queryClient.fetchQuery(
    queryOptionsCustom<LocationItem[]>({
      key: 'vi-tri',
    }),
  );

  return (
    <section className="w-full mx-auto px-4 pt-40 sm:px-6 max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-5 md:gap-4 xl:gap-5">
        <RoomListContent listRoom={listRoom} listLocation={listLocation} />
      </div>
    </section>
  );
}
