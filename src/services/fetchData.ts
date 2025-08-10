import { useQuery } from '@tanstack/react-query';

export const FetchData = <Type>(mockupData: Type, key: string) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      return mockupData;
    },
  });
};
