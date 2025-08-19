import clsx from 'clsx';

interface FormItemProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (name: string, value: string) => void;
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
    <div className={clsx(horizontal && 'flex')}>
      <div className="basis-[var(--label-width)] shrink-0">
        <label
          htmlFor={name}
          className={clsx(
            'label-required flex items-center p-1.5 font-medium',
            horizontal && 'label-colon',
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
          className={`w-full border p-1.5 rounded-lg focus:outline-none ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
      </div>
    </div>
  );
}
