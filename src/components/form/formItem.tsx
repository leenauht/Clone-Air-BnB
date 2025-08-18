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
    <>
      {horizontal ? (
        <div className="flex gap-2">
          <div className="basis-[var(--label-width)] shrink-0">
            <label className="formItem flex items-center p-1.5 font-medium">
              {label}
            </label>
            <p className="min-h-[20px]"></p>
          </div>

          <div className="w-full">
            <input
              id={name}
              type={type}
              name={name}
              value={value}
              onChange={(e) => onChange(name, e.target.value.trim())}
              placeholder={placeholder}
              className={`w-full border p-1.5 rounded-lg focus:outline-none ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
            />

            <p className="mini-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
          </div>
        </div>
      ) : (
        <div>
          <label className="block mb-1 font-semibold">{label}</label>
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value.trim())}
            placeholder={placeholder}
            className={`w-full border p-1.5 rounded-lg focus:outline-none ${
              error ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          <p className="min-h-[20px] text-red-500 text-sm">{error ?? ''}</p>
        </div>
      )}
    </>
  );
}
