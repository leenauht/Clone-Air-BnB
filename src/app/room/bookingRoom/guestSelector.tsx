import React, { useState } from 'react';

import CustomTextBlock from '@/components/divItem/customTextBlock';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function GuestSelector() {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      className="border border-transparent rounded-xl hover:border hover:border-blue-500"
    >
      <div className="flex justify-between items-center p-2 sm:p-3 md:p-4 cursor-pointer">
        <CustomTextBlock
          title="Guests"
          text="1 guest"
          textClass="text-sm text-gray-500 font-medium"
        />
        <div className="text-left">
          {open ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </div>
    </div>
  );
}
