import { API_URL } from '@/components/constants/constants';
import { useMutationCustom } from '@/hooks/useMutationCustom';
import { User } from '@/types/user';

export function DataRegister() {
  return useMutationCustom<User, { name: string }>({
    key: 'register',
    url: `${API_URL}/auth/signup`,
    method: 'POST',
  });
}
