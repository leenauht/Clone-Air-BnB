import { useEffect } from 'react';

import { API_URL } from '@/components/constants/constants';
import { apiFetch } from '@/services/api';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomQueryOptions<T> = {
  key: ApiUrlKey;
  id?: string | number;
  setStoreFn?: (data: T) => void;
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>;
};

export function useQueryCustom<T>({
  key,
  id,
  setStoreFn,
  options,
}: CustomQueryOptions<T>) {
  const { url } = API_URL[key];

  // nếu có id thêm vào cuối url
  const finalUrl = id ? `${url}/${id}` : url;

  const query = useQuery<T, Error>({
    queryKey: id ? [key, id] : [key],
    queryFn: async () => {
      // lấy content trong data api trả về
      const res = await apiFetch<{ content: T }>(finalUrl);
      return res.content;
    },
    ...options,
  });

  // TanStack v5+ không hỗ trợ onSuccess nữa
  useEffect(() => {
    if (query.isSuccess && query.data && setStoreFn) {
      setStoreFn(query.data);
    }
  }, [query.isSuccess, query.data, setStoreFn]);

  return query;
}
