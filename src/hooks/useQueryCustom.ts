import { useQuery } from '@tanstack/react-query';

type UseQueryOptions<Type> = {
  key: string;
  queryFn: () => Promise<Type>;
  options?: Omit<UseQueryOptions<Type>, 'queryKey' | 'queryFn'>;
};

export function useQueryCustom<Type>({
  key,
  queryFn,
  options,
}: UseQueryOptions<Type>) {
  const { data: dataRes } = useQuery<Type>({
    queryKey: [key],
    queryFn,
    ...options,
  });
  return dataRes;
}
