import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LikeItem = {
  id: number;
  isLike: boolean;
};

export type LikeStore = {
  likes: LikeItem[];
  initLikes: (roomIds: number[]) => void;
  toggleLike: (id: number) => void;
};

export const useLikeSore = create<LikeStore>()(
  persist(
    (set, get) => ({
      likes: [],
      initLikes: (roomIds) => {
        const currentLikes = get().likes;
        // add new id in likes
        const newLikes = roomIds
          .filter((id) => !currentLikes.some((item) => item.id === id))
          .map((id) => ({ id, isLike: false }));
        if (newLikes.length > 0) {
          set({ likes: [...currentLikes, ...newLikes] });
        }
      },
      toggleLike: (id) =>
        set((state) => ({
          likes: state.likes.map((item) =>
            item.id === id ? { ...item, isLike: !item.isLike } : item,
          ),
        })),
    }),
    {
      name: 'room-like',
    },
  ),
);
