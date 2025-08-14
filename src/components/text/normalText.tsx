type NormalTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function NormalText({ children, className }: NormalTextProps) {
  return <div className={`font-normal ${className || ''}`}>{children}</div>;
}
