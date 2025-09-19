import Card from '@/components/card/card';
import { ROUTES } from '@/components/constants/constants';
import CustomTextBlock from '@/components/divItem/customTextBlock';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { useLocationStore } from '@/store/locationStore';
import { useRoomStore } from '@/store/roomStore';
import Link from 'next/link';

import { IconImgCard } from './iconImgCard';

export default function RoomListContent() {
  const listRoomData = useRoomStore((state) => state.listRoomData);
  const listLocationData = useLocationStore((state) => state.listLocationData);

  return listRoomData.map((room) => {
    const loc = listLocationData.find(
      (location) => location.id === room.maViTri,
    );
    if (!loc) return null;

    const address = `${loc.tenViTri} - ${loc.tinhThanh} - ${loc.quocGia}`;
    return (
      <Link
        href={`${ROUTES.ROOM_DETAIL}/${room.id}`}
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
              <CustomTextBlock
                title={address}
                text={room.tenPhong}
                heading="h6"
                titleClass="line-clamp-2 min-h-[3rem]"
                textClass="line-clamp-2 min-h-[3rem]"
              />
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
