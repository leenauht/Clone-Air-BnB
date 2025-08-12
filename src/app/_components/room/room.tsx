import Card from '@/components/card/card';
import { RoomData } from '@/types/room';

export default function Room({ data }: RoomData) {
  // const locationData = useQueryCustom({
  //   key: 'location',
  //   url: 'https://airbnbnew.cybersoft.edu.vn/api/vi-tri',
  // });

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
