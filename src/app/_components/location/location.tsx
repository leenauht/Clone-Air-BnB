import { useQueryCustom } from '@/hooks/useQueryCustom';
import { MockupLocationData } from '@/mockupData/location';
import { apiFetch } from '@/services/api';
import { TypeLocationData } from '@/types/location';

const fetchLocationData = async (): Promise<TypeLocationData> => {
  return apiFetch('/vi-tri');
};

export const fetchMockupLocationData = (): Promise<TypeLocationData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MockupLocationData);
    }, 300); // giả lập delay API 300ms
  });
};

export function useLocation() {
  return useQueryCustom({
    key: 'location',
    queryFn: fetchLocationData,
  });
}
