import React from 'react';

import { ICONS } from '@components/icons/icon';

import CustomText from '../text/customText';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({
  children,
  title,
  isOpen,
  onClose,
}: ModalProps) {
  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') onClose();
  //   };
  //   document.addEventListener('keydown', handleEsc);
  //   return () => document.removeEventListener('keydown', handleEsc);
  // }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-opacity1"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] xl:w-1/3 h-auto px-4 shadow-shadow3 bg-white rounded-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-end items-center">
          {title && (
            <CustomText
              heading="p"
              bold
              className="flex-1 h-10 justify-center items-center flex text-xl"
            >
              {title}
            </CustomText>
          )}
          <button
            onClick={onClose}
            className="cursor-pointer hover:bg-gray-200 p-1 rounded-full"
          >
            <ICONS.Close width={16} height={16} />
          </button>
        </div>
        {/* Body */}
        <div>{children}</div>
      </div>
    </div>
  );
}
