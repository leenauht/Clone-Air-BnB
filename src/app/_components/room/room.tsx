import Card from '@/components/card/card';
import { TypeRoomData } from '@/types/room';

interface RoomProps {
  data: TypeRoomData;
}

export default function Room({ data }: RoomProps) {
  // const locationData = useQueryCustom({
  //   key: 'location',
  //   url: 'https://airbnbnew.cybersoft.edu.vn/api/vi-tri',
  // });
  console.log(data);

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
