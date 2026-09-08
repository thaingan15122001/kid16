import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const scrollToElement = () => {
      const el = document.getElementById(hash);
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }));
        return true;
      }
      return false;
    };

    if (scrollToElement()) return;

    const timeout = setTimeout(scrollToElement, 300);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.hash]);
}
