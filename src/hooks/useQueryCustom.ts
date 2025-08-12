import { apiFetch } from '@/services/api';

import { useQuery } from '@tanstack/react-query';

type UseQueryOptions<Type> = {
  key: string;
  url: string;
  options?: Omit<UseQueryOptions<Type>, 'queryKey' | 'queryFn'>;
};

export function useQueryCustom<Type>({
  key,
  url,
  options,
}: UseQueryOptions<Type>) {
  return useQuery<Type>({
    queryKey: [key],
    queryFn: () => apiFetch<Type>(url),
    ...options,
  });
}
