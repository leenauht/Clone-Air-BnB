import { API_URL } from '@/components/constants/constants';
import { ApiError, apiFetch } from '@/services/api';

import { useMutation } from '@tanstack/react-query';

type ApiUrlKey = keyof typeof API_URL;

type CustomMutationOptions = {
  key: ApiUrlKey;
};

export function useMutationCustom<TData, TVariables>({
  key,
}: CustomMutationOptions) {
  const { url, method } = API_URL[key];
  return useMutation<TData, ApiError, TVariables>({
    mutationKey: [key],
    mutationFn: (variables: TVariables) =>
      apiFetch<TData>(url, {
        method,
        body: JSON.stringify(variables),
      }),
  });
}
