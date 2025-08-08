import Image from 'next/image';

interface CardProps {
  width?: number;
  height?: number;
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="bg-gray-300 text-black rounded-lg overflow-hidden">
      <div className="relative h-60">
        <Image
          src="https://airbnbnew.cybersoft.edu.vn/images/vt6.jpg"
          alt="room"
          fill={true}
        />
      </div>
      {children}
    </div>
  );
}
