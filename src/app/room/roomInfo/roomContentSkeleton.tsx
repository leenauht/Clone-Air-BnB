import { ICONS } from '@/components/icons/icon';

export default function RoomContentSkeleton() {
  return (
    <div className="bg-opacity1 animate-pulse h-screen w-full flex items-center justify-center">
      <ICONS.Loading width={40} height={40} color="blue" />
    </div>
  );
}
