import { User } from '@/types/user';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        login: (user, token) =>
          set({ user, token }, false, { type: 'Auth/login' }),
        logout: () =>
          set({ user: null, token: null }, false, { type: 'Auth/logout' }),
      }),
      {
        name: 'auth-storage',
      },
    ),
    { name: 'AuthStore' },
  ),
);
