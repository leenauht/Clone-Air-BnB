import { API_URL } from '@/components/constants/constants';
import { apiFetch } from '@/services/api';

import { UseQueryOptions, queryOptions } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomQueryOptions<T> = {
  key: ApiUrlKey;
  id?: string | number;
  onSuccess?: (data: T) => void;
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>;
};

export function queryOptionsCustom<T>({
  key,
  id,
  onSuccess,
  options,
}: CustomQueryOptions<T>) {
  const { url } = API_URL[key];

  const finalUrl = id ? `${url}/${id}` : url;

  return queryOptions<T, Error>({
    queryKey: id ? [key, id] : [key],
    queryFn: async () => {
      try {
        const res = await apiFetch<{ content: T }>(finalUrl);
        if (res.content && onSuccess) {
          onSuccess(res.content);
        }
        return res.content;
      } catch (err) {
        console.error('API call failed:', err);
        throw err;
      }
    },
    ...options,
  });
}
