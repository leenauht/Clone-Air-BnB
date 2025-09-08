import { FormField } from '@/app/_components/register/validateFiled';
import clsx from 'clsx';

interface FormItemProps {
  label: string;
  name: FormField;
  type?: string;
  value: string;
  onChange: (name: FormField, value: string) => void;
  error?: string;
  placeholder?: string;
  horizontal?: boolean;
}
export default function FormItem({
  label,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  horizontal,
}: FormItemProps) {
  return (
    <div
      className={clsx(
        'md:space-y-0.5',
        horizontal && 'flex flex-col sm:flex-row sm:gap-1',
      )}
    >
      <div className="sm:basis-[var(--label-width)] shrink-0">
        <label
          htmlFor={name}
          className={clsx(
            'label-required flex items-center font-medium',
            horizontal && 'sm:p-1.5 label-colon',
          )}
        >
          {label}
        </label>
      </div>
      <div className="w-full">
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value.trim())}
          placeholder={!placeholder ? `Input ${name}` : placeholder}
          className={clsx(
            'w-full border p-1.5 rounded-lg hover:border-blue-300 focus:outline-none focus:border-blue-300 transition duration-300',
            error ? 'border-red-500' : 'border-gray-300',
          )}
        />
        <p className="min-h-[20px] text-red-500 text-sm mt-0.5">
          {error ?? ''}
        </p>
      </div>
    </div>
  );
}
