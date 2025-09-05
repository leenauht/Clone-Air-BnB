import React, { useEffect } from 'react';

import { useCreatePortal } from '@/hooks/useCreatePortal';
import { X } from 'lucide-react';

import Button from '../button/button';
import CustomText from '../text/customText';
import './style.css';

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
  const { renderPortal } = useCreatePortal();

  // useEffect(() => {
  //   const handleEsc = (e: KeyboardEvent) => {
  //     if (e.key === 'Escape') onClose();
  //   };
  //   document.addEventListener('keydown', handleEsc);
  //   return () => document.removeEventListener('keydown', handleEsc);
  // }, [onClose]);

  // open modal hide scroll, add some right padding to pervent layout shift
  const handleRemoveClass = () => {
    onClose();
    document.body.classList.remove('modal-open');
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return renderPortal(
    <div
      onClick={handleRemoveClass}
      className="fixed inset-0 flex items-center justify-center bg-opacity3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full sm:h-auto sm:w-2/3 md:w-3/5 lg:w-2/5 xl:w-1/3 shadow-shadow3 bg-white sm:rounded-xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex justify-end items-center px-4 py-2 border-gray-200 border-b">
          {title && (
            <CustomText
              heading="p"
              bold
              className="flex-1 h-12 justify-center items-center flex text-xl"
            >
              {title}
            </CustomText>
          )}
          <Button
            variant="light"
            onClick={handleRemoveClass}
            className="p-1 !rounded-full hover:bg-gray-300 hover:opacity-100"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        {/* Body */}
        {children}
      </div>
    </div>,
  );
}
