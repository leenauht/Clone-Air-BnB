import { useMemo } from 'react';

import Card from '@/components/card/card';
import BoldTitle from '@/components/text/boldTitle';
import NormalText from '@/components/text/normalText';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { TypeLocationData } from '@/types/location';
import { TypeRoomData } from '@/types/room';

import { IconImgCard } from './iconImgCard';

interface RenderListContent {
  roomData?: TypeRoomData;
  locationData?: TypeLocationData;
}

export default function RoomListContent({
  locationData,
  roomData,
}: RenderListContent) {
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
            className="cursor-pointer shadow-shadow3 hover:shadow-shadow2 transition duration-200"
            url={loc?.hinhAnh}
            contentImg={<IconImgCard id={room.id} />}
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
