import Image from 'next/image';

interface CardProps {
  className?: string;
  url: string;
  contentImg?: React.ReactNode;
  children: React.ReactNode;
}

export default function Card({
  children,
  contentImg,
  className,
  url,
}: CardProps) {
  return (
    <div className={className}>
      <div className="relative aspect-[16/9]">
        <Image
          src={url}
          alt="room"
          priority
          fill={true}
          className="object-cover"
        />
        {contentImg}
      </div>
      {children}
    </div>
  );
}
