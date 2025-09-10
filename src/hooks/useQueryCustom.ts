import { apiFetch } from '@/services/api';

import { useQuery } from '@tanstack/react-query';

type CustomQueryOptions = {
  key: string;
  url: string;
};

export function useQueryCustomOptions<T>({ key, url }: CustomQueryOptions) {
  return useQuery<T>({
    queryKey: [key],
    queryFn: () => apiFetch<T>(url),
  });
}
