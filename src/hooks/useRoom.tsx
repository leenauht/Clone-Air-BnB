import { useQueryCustom } from '@/hooks/useQueryCustom';
import { apiFetch } from '@/services/api';
import { TypeRoomData } from '@/types/room';

const fetchRoomData = async (): Promise<TypeRoomData> => {
  return apiFetch('https://airbnbnew.cybersoft.edu.vn/api/phong-thue');
};

export function useRoom() {
  return useQueryCustom({
    key: 'room',
    queryFn: fetchRoomData,
  });
}
