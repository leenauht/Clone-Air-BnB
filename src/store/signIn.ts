import { User } from '@/types/user';

export interface AuthState {
  user: User | null;
  token: string;
  login: (user: User, token: string) => void;
  logout: () => void;
}
