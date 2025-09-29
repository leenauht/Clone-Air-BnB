import { locationList, roomList } from '@/queries/queries';

import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import RoomList from './_components/listRoom/roomList';
import { getQueryClient } from './get-query-client';

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(roomList);

  await queryClient.prefetchQuery(locationList);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RoomList />
    </HydrationBoundary>
  );
}
