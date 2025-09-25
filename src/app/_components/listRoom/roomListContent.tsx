'use client';

import { useEffect } from 'react';

import Card from '@/components/card/card';
import { ROUTES } from '@/components/constants/constants';
import CustomTextBlock from '@/components/divItem/customTextBlock';
import PriceWithUnit from '@/components/text/priceWithUnit';
import { useLocationStore } from '@/store/locationStore';
import { useRoomStore } from '@/store/roomStore';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';
import Link from 'next/link';

import { IconImgCard } from './iconImgCard';

interface DataList {
  listRoom: RoomItem[];
  listLocation: LocationItem[];
}

export default function RoomListContent({ listRoom, listLocation }: DataList) {
  const setRoomData = useRoomStore((state) => state.setRoomData);
  const setLocationData = useLocationStore((state) => state.setLocationData);

  useEffect(() => {
    if (listRoom?.length) setRoomData(listRoom);
    if (listLocation?.length) setLocationData(listLocation);
  }, [listRoom, listLocation, setRoomData, setLocationData]);

  if (!listRoom?.length || !listLocation?.length) {
    return <p>No Data</p>;
  }

  return (
    <>
      {listRoom.map((room) => {
        const loc = listLocation.find(
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
                contentImg={<IconImgCard id={room.id} />}
              >
                <div className="p-4">
                  <CustomTextBlock
                    title={address}
                    text={room.tenPhong}
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
      })}
    </>
  );
}
