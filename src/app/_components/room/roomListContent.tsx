import Card from '@/components/card/card';
import { ROUTES } from '@/components/constants/constants';
import CustomText from '@/components/text/customText';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { useLocationStore } from '@/store/locationStore';
import { useRoomStore } from '@/store/roomStore';
import Link from 'next/link';

import { IconImgCard } from './iconImgCard';

export default function RoomListContent() {
  const listRoomData = useRoomStore((state) => state.listRoomData);
  const listLocationData = useLocationStore((state) => state.listLocationData);

  // check trường hợp khi f5 thì store ban đầu sẽ không có data
  const roomContent = Array.isArray(listRoomData?.content)
    ? listRoomData.content
    : [];
  const locationContent = Array.isArray(listLocationData?.content)
    ? listLocationData.content
    : [];

  return roomContent?.map((room) => {
    const loc = locationContent.find(
      (location) => location.id === room.maViTri,
    );
    if (!loc) return null;

    const address = `${loc.tenViTri} - ${loc.tinhThanh} - ${loc.quocGia}`;
    return (
      <Link
        href={{
          pathname: ROUTES.ROOM_DETAIL,
          query: {
            roomId: room.id,
            locationId: loc.id,
          },
        }}
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
