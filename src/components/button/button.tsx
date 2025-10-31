import React from 'react';

import clsx from 'clsx';

import { ICONS } from '../icons/icon';

type TypeVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'light'
  | 'link'
  | 'outline'
  | 'default';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: TypeVariant;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
}

const typeClasses: Record<TypeVariant, string> = {
  default: '',
  primary: 'bg-blue-600 text-white hover:opacity-80 py-2 px-5',
  secondary: 'bg-gray-600 text-white hover:opacity-80 py-2 px-5',
  danger: 'bg-red-600 text-white hover:opacity-70 py-2 px-5',
  light: 'bg-white text-black hover:opacity-70 py-2 px-5',
  link: 'bg-transparent text-blue-600 underline hover:text-blue-800 shadow-none',
  outline:
    'border border-gray-300 py-1 px-4 hover:text-blue-500 hover:border-blue-300',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'default',
      className,
      isLoading = false,
      disabled,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyle =
      'flex justify-center items-center font-medium transition duration-300 rounded-full';
    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={clsx(
          baseStyle,
          typeClasses[variant],
          className,
          disabled || isLoading ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        {...props}
      >
        {isLoading && (
          <span className="absolute flex justify-center items-center">
            <ICONS.Loading width={24} height={24} />
          </span>
        )}

        <span
          className={clsx('flex items-center justify-center gap-2', {
            'opacity-30': isLoading,
          })}
        >
          {startIcon && <span className="flex items-center">{startIcon}</span>}
          {children}
          {endIcon && <span className="flex items-center">{endIcon}</span>}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
