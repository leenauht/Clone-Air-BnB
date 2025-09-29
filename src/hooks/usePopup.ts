import { useRef, useState } from 'react';

import { useOutsideClick } from './useClickOutSide';

export function usePopup<T extends HTMLElement, K extends HTMLElement>(
  onClose?: (isOpen: boolean) => void,
  ignoreRefs?: Array<React.RefObject<HTMLElement | null>>,
) {
  const [open, setOpen] = useState(false);

  const triggerRef = useRef<T>(null);
  const popupRef = useRef<K>(null);

  const closePopup = () => {
    onClose?.(false);
    setOpen(false);
  };

  const togglePopup = () => {
    if (open) {
      closePopup();
    } else {
      setOpen(true);
    }
  };

  useOutsideClick(
    [popupRef, triggerRef],
    () => {
      if (open) closePopup();
    },
    ignoreRefs,
  );

  return { open, closePopup, togglePopup, triggerRef, popupRef };
}
