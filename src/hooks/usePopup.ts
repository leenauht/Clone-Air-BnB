import { useRef, useState } from 'react';

import { useOutsideClick } from './useClickOutSide';

export function usePopup<T extends HTMLElement, K extends HTMLElement>() {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<T>(null);
  const popupRef = useRef<K>(null);

  const closePopup = () => setOpen(false);

  const togglePopup = () => setOpen((prev) => !prev);

  useOutsideClick([popupRef, triggerRef], () => closePopup());

  return { open, togglePopup, triggerRef, popupRef };
}
