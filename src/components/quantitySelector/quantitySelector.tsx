import React from 'react';

import clsx from 'clsx';

import { ICONS } from '../icons/icon';

interface QuantitySelectorProps {
  id: string;
  value: number;
  onChange: (id: string, value: number) => void;
  min?: number;
  max?: number;
  sum?: number;
}

export default function QuantitySelector({
  id,
  value,
  onChange,
  min = 0,
  max = 10,
  sum,
}: QuantitySelectorProps) {
  const { PlusCircle, MinusCircle } = ICONS;

  const currentTotal = sum ?? value;

  const canIncrease = currentTotal < max;
  const canDecrease = value > min;

  const handleIncrease = () => {
    if (canIncrease) onChange(id, value + 1);
  };

  const handleDecrease = () => {
    if (canDecrease) onChange(id, value - 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className={clsx(
          canDecrease
            ? 'cursor-pointer text-gray-500'
            : 'cursor-not-allowed text-gray-200',
        )}
        onClick={handleDecrease}
      >
        <MinusCircle width={36} height={36} />
      </button>
      <span>{value}</span>
      <button
        className={clsx(
          canIncrease
            ? 'cursor-pointer text-gray-500'
            : 'cursor-not-allowed text-gray-200',
        )}
        onClick={handleIncrease}
      >
        <PlusCircle width={36} height={36} />
      </button>
    </div>
  );
}
