import { DEFAULT_LOCATION_DATA, TypeLocationData } from '@/types/location';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type LocationStore = {
  listLocationData: TypeLocationData | null;
  setLocationData: (data: TypeLocationData) => void;
  clearLocationData: () => void;
};

export const useLocationStore = create<LocationStore>()(
  devtools(
    (set) => ({
      listLocationData: DEFAULT_LOCATION_DATA,
      setLocationData: (data) =>
        set({ listLocationData: data }, false, { type: 'Location/Data' }),
      clearLocationData: () => set({ listLocationData: DEFAULT_LOCATION_DATA }),
    }),
    // { name: 'Locationtore' },
  ),
);
