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
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <div className="relative h-60">
        <Image src={url} alt="room" priority fill={true} />
        {contentImg}
      </div>
      {children}
    </div>
  );
}
