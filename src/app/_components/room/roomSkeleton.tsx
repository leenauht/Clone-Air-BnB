export default function RoomListContentSkeleton() {
  return (
    <>
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="rounded-lg overflow-hidden shadow bg-gray-200 animate-pulse h-80 w-full"
        ></div>
      ))}
    </>
  );
}
