import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

export function useAos() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [pathname]);
}
