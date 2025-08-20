import { apiFetch } from '@/services/api';

import { queryOptions } from '@tanstack/react-query';

type CustomQueryOptions = {
  key: string;
  url: string;
};

export function useQueryCustomOptions<T>({ key, url }: CustomQueryOptions) {
  return queryOptions<T>({
    queryKey: [key],
    queryFn: () => apiFetch<T>(url),
  });
}
