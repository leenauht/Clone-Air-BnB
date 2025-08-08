import { create } from 'zustand';

interface AppState {
  loading: boolean;
}

export const useAppStore = create<AppState>(() => ({
  loading: false,
}));
