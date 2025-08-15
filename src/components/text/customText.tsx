import clsx from 'clsx';

type TextType = 'default' | 'secondary' | 'success' | 'warning' | 'danger';
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

interface CustomTextProps extends React.HTMLAttributes<HTMLElement> {
  heading?: HeadingTag;
  type?: TextType;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  children: React.ReactNode;
}

const typeClasses: Record<TextType, string> = {
  default: 'text-gray-900',
  secondary: 'text-gray-500',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  danger: 'text-red-600',
};

const CustomText = ({
  heading: Component = 'p',
  type = 'default',
  bold,
  italic,
  underline,
  children,
  className,
  ...rest
}: CustomTextProps) => {
  return (
    <Component
      className={clsx(
        typeClasses[type],
        bold && 'font-bold',
        italic && 'italic',
        underline && 'underline',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
export default CustomText;
