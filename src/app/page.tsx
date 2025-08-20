import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import RoomList from './_components/room/roomList';
import { getQueryClient } from './get-query-client';

export default function Home() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RoomList />
    </HydrationBoundary>
  );
}
