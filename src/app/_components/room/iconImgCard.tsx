import { ICONS } from '@/components/icons/icon';
import { useLikeSore } from '@/store/likeStore';

interface IconImgCardProps {
  id: number;
}

export function IconImgCard({ id }: IconImgCardProps) {
  const { likes, toggleLike } = useLikeSore();
  const isLiked = likes.some((item) => item.id === id && item.isLike);
  return (
    <div
      onClick={() => toggleLike(id)}
      className="absolute right-2 top-2 flex justify-center items-center cursor-pointer hover:scale-110 transition duration-300"
    >
      <ICONS.Heart
        width={24}
        height={24}
        color={`${
          isLiked === true ? 'rgba(255, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)'
        }`}
      />
    </div>
  );
}
