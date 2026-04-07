import { useEffect } from 'react';
import Lightbox from 'bs5-lightbox';

/**
 * Delegates clicks on a[data-toggle="lightbox"] inside root (document if null).
 */
export function useLightbox(rootRef, deps = []) {
  useEffect(() => {
    const handler = (e) => {
      const anchor = e.target.closest?.('a[data-toggle="lightbox"]');
      if (!anchor) return;
      const root = rootRef?.current ?? document.body;
      if (!root.contains(anchor)) return;
      e.preventDefault();
      const lightbox = new Lightbox(anchor);
      lightbox.show();
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
