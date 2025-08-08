import { useQuery } from '@tanstack/react-query';

export const FetchData = <Type>(mockupData: Type) => {
  return useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      return mockupData;
    },
  });
};
