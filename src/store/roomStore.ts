import { DEFAULT_ROOM_DATA, TypeRoomData } from '@/types/room';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type RoomStore = {
  listRoomData: TypeRoomData | null;
  setRoomData: (data: TypeRoomData) => void;
  clearRoomData: () => void;
};

export const useRoomStore = create<RoomStore>()(
  devtools(
    (set) => ({
      listRoomData: DEFAULT_ROOM_DATA,
      setRoomData: (data) =>
        set({ listRoomData: data }, false, { type: 'Room/Data' }),
      clearRoomData: () => set({ listRoomData: DEFAULT_ROOM_DATA }),
    }),
    // { name: 'RoomStore' },
  ),
);
