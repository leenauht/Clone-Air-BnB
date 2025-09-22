import { useEffect } from 'react';

export const useOutsideClick = (
  refs: React.RefObject<HTMLElement | null>[],
  callback: (target: EventTarget | null) => void,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const isInside = refs.some(
        (ref) => ref.current && ref.current.contains(e.target as Node),
      );

      if (!isInside) {
        callback(e.target);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [refs, callback]);
};
