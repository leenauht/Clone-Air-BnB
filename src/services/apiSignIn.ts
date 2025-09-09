import { FormSignInData } from '@/app/_components/signIn/validateFormSignIn';
import { API_URL } from '@/components/constants/constants';
import { useMutationCustom } from '@/hooks/useMutationCustom';
import { User } from '@/types/user';

export function DataSignIn() {
  return useMutationCustom<User, FormSignInData>({
    key: 'signin',
    url: `${API_URL}/auth/signin`,
    method: 'POST',
  });
}
