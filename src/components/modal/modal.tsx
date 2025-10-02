import React, { useEffect } from 'react';

import { useBobyScrollLock } from '@/hooks/useBodyScrollLock';
import { useCreatePortal } from '@/hooks/useCreatePortal';
import { ArrowLeft, X } from 'lucide-react';

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
  const { renderPortal } = useCreatePortal();
  const removeClass = useBobyScrollLock(isOpen);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // open modal hide scroll, add some right padding to pervent layout shift

  const handleClose = () => {
    onClose();
    removeClass();
  };

  if (!isOpen) return null;

  return renderPortal(
    <div
      onClick={handleClose}
      className="fixed inset-0 flex items-center justify-center bg-opacity3"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[100dvh] overflow-y-auto lg:w-1/2 lg:h-auto lg:rounded-xl xl:w-1/3 shadow-shadow3 bg-white overflow-hidden"
      >
        {/* Header */}
        <header className="header-title">
          <button
            onClick={handleClose}
            className="cursor-pointer bg-gray-100 hover:bg-gray-300 p-1 rounded-full block lg:hidden"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          {title && (
            <CustomText
              heading="p"
              bold
              className="flex-1 justify-center items-center flex text-xl"
            >
              {title}
            </CustomText>
          )}
          <button
            onClick={handleClose}
            className="cursor-pointer hover:bg-gray-200 p-1 rounded-full hidden lg:block"
          >
            <X className="w-5 h-5" />
          </button>
        </header>
        {/* Body */}
        {children}
      </div>
    </div>,
  );
}
