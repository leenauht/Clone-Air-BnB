import { ApiError, apiFetch } from '@/services/api';

import { mutationOptions } from '@tanstack/react-query';

type CustomMutationOptions = {
  key: string | string[];
  url: string;
  method?: 'POST' | 'PUT' | 'DELETE';
};

export function useMutationCustom<TData, TVariables>({
  key,
  url,
  method,
}: CustomMutationOptions) {
  return mutationOptions<TData, ApiError, TVariables>({
    mutationKey: Array.isArray(key) ? key : [key],
    mutationFn: (variables: TVariables) =>
      apiFetch<TData>(url, {
        method,
        body: JSON.stringify(variables),
      }),
  });
}
