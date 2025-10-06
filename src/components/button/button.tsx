type TypeVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'light'
  | 'link'
  | 'outline';
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
  primary: 'bg-blue-600 text-white hover:opacity-80',
  secondary: 'bg-gray-600 text-white hover:opacity-80',
  danger: 'bg-red-600 text-white hover:opacity-70',
  light: 'bg-white text-black hover:opacity-70',
  link: 'bg-transparent text-blue-600 underline hover:text-blue-800 shadow-none',
  outline:
    'border border-gray-300 py-1 px-4 cursor-pointer hover:text-blue-500 hover:border-blue-300',
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
    'rounded-lg font-medium transition duration-300 cursor-pointer';
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
