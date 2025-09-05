import { useRef, useState } from 'react';

import { useOutsideClick } from './useClickOutSide';

export function usePopup<T extends HTMLElement>() {
  const [open, setOpen] = useState(false);
  const ref = useRef<T>(null);

  const closePopup = () => setOpen(false);

  const togglePopup = () => setOpen((prev) => !prev);

  useOutsideClick(ref, closePopup);

  return { open, ref, togglePopup };
}
