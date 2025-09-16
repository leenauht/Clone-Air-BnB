import CustomText from '@/components/text/customText';
import { RoomItem } from '@/types/room';

import { dataUtilties } from './dataUtilities';

export function Amenities({ room }: { room: RoomItem }) {
  // Chuyển sang mảng, lọc ra những property có kiểu boolean và lấy giá trị true

  const utilti = Object.entries(room).filter(
    ([, value]) => typeof value === 'boolean' && value,
  );

  return (
    <div>
      <CustomText heading="h5" className="pb-2">
        Nơi này có những gì cho bạn
      </CustomText>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {dataUtilties.map(({ name, field, svg: ICON }) => {
          const findUtiliti = utilti.some(([key]) => field === key);
          return (
            <div key={name} className="flex items-center gap-5">
              {ICON}
              {findUtiliti ? (
                <p>{name}</p>
              ) : (
                <s className="text-gray-700">{name}</s>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
