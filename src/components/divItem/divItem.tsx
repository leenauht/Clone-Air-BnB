interface DivItemProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  onClick?: () => void;
}

export default function DivItem({
  icon,
  text,
  className,
  onClick,
}: DivItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300"
    >
      <span>{icon}</span>
      <span className={`${className} whitespace-nowrap`}>{text}</span>
    </div>
  );
}
