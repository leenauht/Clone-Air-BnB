import { API_URL } from '@/components/constants/constants';
import { useQueryCustomOptions } from '@/hooks/useQueryCustom';
import { TypeLocationData } from '@/types/location';

export function DataLocation() {
  return useQueryCustomOptions<TypeLocationData>({
    key: 'location',
    url: `${API_URL}/vi-tri`,
  });
}
