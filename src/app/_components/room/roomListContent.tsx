import { useMemo } from 'react';

import Card from '@/components/card/card';
import { ROUTES } from '@/components/constants/constants';
import CustomText from '@/components/text/customText';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { TypeLocationData } from '@/types/location';
import { TypeRoomData } from '@/types/room';
import Link from 'next/link';

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
    const address = `${loc?.tenViTri} - ${loc?.tinhThanh} - ${loc?.quocGia}`;
    return (
      <Link
        href={ROUTES.ROOM_DETAIL}
        key={room.id}
        className={`${loc === undefined ? 'hidden' : ''}`}
      >
        {loc && (
          <Card
            className="cursor-pointer shadow-shadow3 hover:shadow-shadow2 transition duration-300 rounded-lg overflow-hidden"
            url={loc?.hinhAnh}
            contentImg={
              <IconImgCard
                id={room.id}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              />
            }
          >
            <div className="p-4">
              <CustomText
                heading="p"
                bold
                title={address}
                className="line-clamp-2 min-h-[3rem]"
              >
                {address}
              </CustomText>

              <CustomText
                heading="p"
                title={room.tenPhong}
                className="line-clamp-2 min-h-[3rem]"
              >
                {room.tenPhong}
              </CustomText>
              <PriceWithUnit
                amount={room.giaTien}
                unit="đêm"
                classNameAmount="text-lg"
              />
            </div>
          </Card>
        )}
      </Link>
    );
  });
}
