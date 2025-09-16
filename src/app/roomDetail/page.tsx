import { Suspense } from 'react';

import RoomDetail from './roomDetail';

export default function RoomDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full flex justify-center items-center">
          Loading...
        </div>
      }
    >
      <RoomDetail />
    </Suspense>
  );
}
