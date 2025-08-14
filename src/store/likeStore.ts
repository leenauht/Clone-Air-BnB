import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LikeStore = {
  likes: Record<number, true>;
  toggleLike: (id: number) => void;
  isLiked: (id: number) => boolean;
};

export const useLikeSore = create<LikeStore>()(
  persist(
    (set, get) => ({
      likes: {},
      toggleLike: (id) => {
        const current = { ...get().likes };
        if (current[id]) {
          delete current[id];
        } else {
          current[id] = true;
        }
        set({ likes: current });
      },
      isLiked: (id) => Boolean(get().likes[id]),
    }),
    {
      name: 'room-like',
    },
  ),
);
