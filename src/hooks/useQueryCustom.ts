import { API_URL } from '@/components/constants/constants';
import { apiFetch } from '@/services/api';

import { useQuery } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomQueryOptions = {
  key: ApiUrlKey;
  id?: string | number;
};

export function useQueryCustom<T>({ key, id }: CustomQueryOptions) {
  const { url } = API_URL[key];

  // nếu có id thêm vào cuối url
  const finalUrl = id ? `${url}/${id}` : url;

  return useQuery<T>({
    queryKey: id ? [key, id] : [key],
    queryFn: () => apiFetch<T>(finalUrl),
  });
}
