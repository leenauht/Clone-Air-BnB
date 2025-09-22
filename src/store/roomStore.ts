import { RoomItem } from '@/types/room';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type RoomStore = {
  listRoomData: RoomItem[] | [];
  setRoomData: (data: RoomItem[]) => void;
  clearRoomData: () => void;
};

export const useRoomStore = create<RoomStore>()(
  devtools(
    (set) => ({
      listRoomData: [],
      setRoomData: (data) =>
        set({ listRoomData: data }, false, { type: 'Room/Data' }),
      clearRoomData: () => set({ listRoomData: [] }),
    }),
    { name: 'RoomStore' },
  ),
);
