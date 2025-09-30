import { queryOptionsCustom } from '@/hooks/queryOptionsCustom';
import { LocationItem } from '@/types/location';
import { RoomItem } from '@/types/room';

export const roomList = queryOptionsCustom<RoomItem[]>({
  key: 'phong-thue',
});

export const locationList = queryOptionsCustom<LocationItem[]>({
  key: 'vi-tri',
});
