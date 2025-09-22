import { LocationItem } from '@/types/location';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type LocationStore = {
  listLocationData: LocationItem[];
  setLocationData: (data: LocationItem[]) => void;
  clearLocationData: () => void;
};

export const useLocationStore = create<LocationStore>()(
  devtools(
    (set) => ({
      listLocationData: [],
      setLocationData: (data) =>
        set({ listLocationData: data }, false, { type: 'Location/Data' }),
      clearLocationData: () => set({ listLocationData: [] }),
    }),
    { name: 'Locationtore' },
  ),
);
