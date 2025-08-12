import { useMemo } from 'react';

import Card from '@/components/card/card';
import { ICONS } from '@/components/icons/icon';
import BoldTitle from '@/components/text/boldTitle';
import NormalText from '@/components/text/normalText';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { TypeLocationData } from '@/types/location';
import { TypeRoomData } from '@/types/room';

interface RenderListContent {
  roomData?: TypeRoomData;
  locationData?: TypeLocationData;
}

export function IconImg() {
  return (
    <div className="absolute right-2 top-2 flex justify-center items-center">
      <ICONS.Heart width={24} height={24} />
    </div>
  );
}

export function ListRoom({ roomData, locationData }: RenderListContent) {
  const roomContent = roomData?.content;
  const locationContent = locationData?.content;

  const findLocation = useMemo(() => {
    return (id: number) =>
      locationContent?.find((loation) => loation.id === id);
  }, [locationContent]);

  return roomContent?.map((room) => {
    const loc = findLocation(room.maViTri);

    return (
      <div key={room.id} className={`${loc === undefined ? 'hidden' : ''}`}>
        {loc && (
          <Card
            key={room.id}
            className="shadow-shadow1 bg-gray-100"
            url={loc?.hinhAnh}
            contentImg={<IconImg />}
          >
            <div className="p-4 space-y-2">
              <BoldTitle className="line-clamp-1 font-medium">
                {loc.tenViTri} - {loc.tinhThanh} - {loc.quocGia}
              </BoldTitle>
              <NormalText className="line-clamp-2 text-gray-800 min-h-[3rem] flex items-center">
                {room.tenPhong}
              </NormalText>
              <PriceWithUnit
                amount={room.giaTien}
                unit="đêm"
                classNameAmount="text-lg"
              />
            </div>
          </Card>
        )}
      </div>
    );
  });
}

export default function RoomListContent({
  locationData,
  roomData,
}: RenderListContent) {
  return <ListRoom locationData={locationData} roomData={roomData} />;
}
