import { API_URL } from '@/components/constants/constants';
import { useQueryCustomOptions } from '@/hooks/useQueryCustom';
import { TypeRoomData } from '@/types/room';

export function DataRoomList() {
  return useQueryCustomOptions<TypeRoomData>({
    key: 'room',
    url: `${API_URL}/phong-thue`,
  });
}
