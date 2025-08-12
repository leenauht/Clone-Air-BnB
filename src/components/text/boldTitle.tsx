type BoldTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BoldTitle({ children, className }: BoldTitleProps) {
  return <p className={`font-medium ${className || ''}`}>{children}</p>;
}
