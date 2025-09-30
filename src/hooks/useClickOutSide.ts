import { useEffect } from 'react';

export const useOutsideClick = (
  refs: React.RefObject<HTMLElement | null>[],
  callback: (target: EventTarget | null) => void,
  ignoreRefs?: Array<React.RefObject<HTMLElement | null>>,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        ignoreRefs &&
        ignoreRefs.some((r) => r?.current && r.current.contains(target))
      ) {
        return;
      }

      const isInside = refs.some(
        (ref) => ref?.current && ref.current.contains(target),
      );
      if (!isInside) {
        callback(e.target);
      }
    };
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [refs, callback, ignoreRefs]);
};
