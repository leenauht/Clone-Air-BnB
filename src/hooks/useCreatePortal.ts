import { useEffect, useState } from 'react';

import { createPortal } from 'react-dom';

export function useCreatePortal(containerRef?: HTMLElement | null) {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.createElement('div');
    (containerRef || document.body).appendChild(element);
    setPortalElement(element);

    // cleanup
    return () => {
      (containerRef || document.body).removeChild(element);
    };
  }, [containerRef]);

  const renderPortal = (children: React.ReactNode) => {
    if (!portalElement) return null;
    return createPortal(children, portalElement);
  };

  return { portalElement, renderPortal };
}
