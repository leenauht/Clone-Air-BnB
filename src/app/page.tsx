import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import RoomList from './_components/room/roomList';
import { getQueryClient } from './get-query-client';

export const metadata = {
  title: 'Airbnb | Trang web đặt phòng Airbnb clone',
  description: 'Trang web đặt phòng Airbnb clone',
  icons: {
    icon: '/icons/airbnb.avif',
  },
};

export default function Home() {
  const queryClient = getQueryClient();

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RoomList />
    </HydrationBoundary>
  );
}
