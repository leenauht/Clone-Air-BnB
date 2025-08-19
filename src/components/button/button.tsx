type TypeVariant = 'primary' | 'secondary' | 'danger';
type TypeButton = 'button' | 'submit' | 'reset';

interface ButtonProps {
  children: React.ReactNode;
  variant?: TypeVariant;
  type?: TypeButton;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const typeClasses: Record<TypeVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  secondary: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
  danger: 'bg-red-600 text-white hover:bg-red-700',
};

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  className,
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyle =
    'px-4 py-2 rounded-lg font-medium transition-colors duration-300 shadow cursor-pointer';
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyle} ${typeClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
