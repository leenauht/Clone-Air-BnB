import React, { useEffect } from 'react';

import Button from '@/components/button/button';
import { OPTIONS_GUESTS } from '@/components/constants/constants';
import CustomTextBlock from '@/components/divItem/customTextBlock';
import QuantitySelector from '@/components/quantitySelector/quantitySelector';
import { usePopup } from '@/hooks/usePopup';
import clsx from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface GuestSelectorProps {
  guests: number;
  quantity: Record<string, number>;
  onQuantityChange: (value: Record<string, number>) => void;
  setIsHidden?: (value: boolean) => void;
}

export default function GuestSelector({
  guests,
  quantity,
  onQuantityChange,
  setIsHidden,
}: GuestSelectorProps) {
  const { open, togglePopup, triggerRef, popupRef } = usePopup<
    HTMLDivElement,
    HTMLDivElement
  >();

  const handleQuantityChange = (id: string, value: number) => {
    const updated = {
      ...quantity,
      [id]: value,
    };
    onQuantityChange(updated);
  };

  const totalMainGuests = quantity.adults + quantity.children;

  useEffect(() => {
    if (setIsHidden) setIsHidden(open);
  }, [open, setIsHidden]);

  return (
    <div
      className={clsx(
        open ? 'border border-blue-500' : 'border border-transparent',
        'relative rounded-xl hover:border hover:border-blue-500',
      )}
    >
      <div
        ref={triggerRef}
        onClick={togglePopup}
        className="flex justify-between items-center p-2 sm:p-3 md:p-4 cursor-pointer"
      >
        <CustomTextBlock
          title="Guests"
          text={`${totalMainGuests} guest`}
          textClass="text-sm text-gray-500 font-medium"
        />
        <div className="text-left">
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>

      {open ? (
        <div
          ref={popupRef}
          className="absolute shadow-shadow3 bg-white rounded-xl h-fit w-full"
        >
          <div className="p-3 sm:p-5 flex flex-col gap-3 sm:gap-4">
            {OPTIONS_GUESTS.map(({ id, label, min, max }) => {
              return (
                <div key={id} className="flex justify-between items-center">
                  <CustomTextBlock
                    title={label.title}
                    text={label.text}
                    textClass="text-sm"
                  />
                  <QuantitySelector
                    id={id}
                    value={quantity[id]}
                    onChange={handleQuantityChange}
                    min={min}
                    max={max ?? guests}
                    sum={max === undefined ? totalMainGuests : undefined}
                  />
                </div>
              );
            })}
            <p className="text-sm">
              {`This place has a maximum of ${guests} guests, not including infants. If
              you're bringing more than 2 pets, please let your host know.`}
            </p>
            <div className="flex justify-end">
              <Button onClick={togglePopup} variant="outline">
                Close
              </Button>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
