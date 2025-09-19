import { API_URL } from '@/components/constants/constants';
import { apiFetch } from '@/services/api';

import { UseQueryOptions, useQuery } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomQueryOptions<T> = {
  key: ApiUrlKey;
  id?: string | number;
  onSuccess?: (data: T) => void;
  options?: Omit<UseQueryOptions<T, Error>, 'queryKey' | 'queryFn'>;
};

export function useQueryCustom<T>({
  key,
  id,
  onSuccess,
  options,
}: CustomQueryOptions<T>) {
  const { url } = API_URL[key];

  // nếu có id thêm vào cuối url
  const finalUrl = id ? `${url}/${id}` : url;

  const query = useQuery<T, Error>({
    queryKey: id ? [key, id] : [key],
    queryFn: async () => {
      // lấy content trong data api trả về
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

  return query;
}
