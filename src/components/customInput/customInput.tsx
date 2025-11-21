import React from 'react';

interface CustomInputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
}

export default function CustomInput({
  label,
  value,
  onChange,
  placeholder = 'Input',
  type = 'text',
  name,
}: CustomInputProps) {
  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
