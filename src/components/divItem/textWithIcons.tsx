interface TextWithIconsProps {
  prefix?: React.ReactNode;
  text: string;
  subfix?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function TextWithIcons({
  prefix,
  text,
  subfix,
  className,
  onClick,
}: TextWithIconsProps) {
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
