import { useCallback, useEffect, useRef, useState } from 'react';

import { useOutsideClick } from './useClickOutSide';

// Tạo biến global quản lý popup đang mở
let currentPopupId: string | null = null;
const listeners: Record<string, (open: boolean) => void> = {};

export function usePopup<T extends HTMLElement>(id: string) {
  const [open, setOpen] = useState(false);
  const ref = useRef<T>(null);

  // Register listener for ID
  useEffect(() => {
    listeners[id] = (isOpen: boolean) => setOpen(isOpen);
    return () => {
      delete listeners[id];
    };
  }, [id]);

  const openPopup = useCallback(() => {
    // Đóng popup khác nếu đang mở
    if (currentPopupId && currentPopupId !== id) {
      listeners[currentPopupId]?.(false);
    }
    currentPopupId = id;
    setOpen(true);
  }, [id]);

  const closePopup = useCallback(() => {
    if (currentPopupId === id) {
      currentPopupId = null;
    }
    setOpen(false);
  }, [id]);

  const togglePopup = useCallback(() => {
    if (open) {
      closePopup();
    } else {
      openPopup();
    }
  }, [open, closePopup, openPopup]);

  useOutsideClick(ref, closePopup);

  return { open, setOpen, ref, openPopup, closePopup, togglePopup };
}
