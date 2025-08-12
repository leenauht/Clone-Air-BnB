import { apiFetch } from '@/services/api';
import { RoomItem } from '@/types/room';

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
  const { data: dataRes } = useQuery<{ content: RoomItem[] }>({
    queryKey: [key],
    queryFn: () => apiFetch<{ content: RoomItem[] }>(url),
    ...options,
  });
  return dataRes;
}
