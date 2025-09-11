import { API_URL } from '@/components/constants/constants';
import { apiFetch } from '@/services/api';

import { useQuery } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomQueryOptions = {
  key: ApiUrlKey;
};

export function useQueryCustom<T>({ key }: CustomQueryOptions) {
  const { url } = API_URL[key];

  return useQuery<T>({
    queryKey: [key],
    queryFn: () => apiFetch<T>(url),
  });
}
