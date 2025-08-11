type NormalTextProps = {
  children: React.ReactNode;
  className?: string;
};

export default function NormalText({ children, className }: NormalTextProps) {
  return (
    <p className={`font-normal text-base ${className || ''}`}>{children}</p>
  );
}
