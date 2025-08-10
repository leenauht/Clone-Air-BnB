import Card from '@/components/card/card';
import { RoomData } from '@/types/room';

import { useLocation } from '../location/location';

export default function Room({ data }: RoomData) {
  const locationData = useLocation();
  console.log('locationData', locationData);

  return (
    <div className="grid grid-cols-4 gap-5">
      {data.content &&
        data.content.map((room) => {
          return (
            <Card key={room.id}>
              <p>{room.tenPhong}</p>
            </Card>
          );
        })}
    </div>
  );
}
