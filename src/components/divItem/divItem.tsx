interface DivItemProps {
  prefix?: React.ReactNode;
  text: string;
  subfix?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function DivItem({
  prefix,
  text,
  subfix,
  className,
  onClick,
}: DivItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-2 cursor-pointer hover:text-blue-500 transition duration-300"
    >
      {prefix}
      <span className={className}>{text}</span>
      {subfix}
    </div>
  );
}
