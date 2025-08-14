type BoldTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BoldTitle({ children, className }: BoldTitleProps) {
  return <div className={`font-medium ${className || ''}`}>{children}</div>;
}
