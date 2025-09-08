import { useCallback, useEffect } from 'react';

export function useBobyScrollLock(isOpen: boolean) {
  const addClass = useCallback(() => {
    document.body.classList.add('modal-open');
  }, []);

  const removeClass = useCallback(() => {
    document.body.classList.remove('modal-open');
  }, []);

  useEffect(() => {
    if (isOpen) {
      addClass();
    } else {
      removeClass();
    }
    return () => removeClass();
  }, [isOpen, addClass, removeClass]);
  return removeClass;
}
