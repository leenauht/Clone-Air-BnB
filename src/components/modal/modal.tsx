import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

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

  // open modal hide scroll, add some right padding to pervent layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-opacity3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full sm:h-auto sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3 shadow-shadow3 bg-white sm:rounded-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-end items-center px-4 py-2 border-gray-300 border-b">
          {title && (
            <CustomText
              heading="p"
              bold
              className="flex-1 h-12 justify-center items-center flex text-xl"
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
        {children}
      </div>
    </div>,
    document.body,
  );
}
