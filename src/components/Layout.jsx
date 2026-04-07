import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ContactProvider } from '../context/ContactContext.jsx';
import { useAos } from '../hooks/useAos.js';
import SiteNav from './SiteNav.jsx';
import ContactModal from './ContactModal.jsx';
import Footer from './Footer.jsx';

function ScrollVar() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.body.offsetHeight - window.innerHeight;
      document.body.style.setProperty('--scroll', max > 0 ? String(y / max) : '0');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  useAos();

  return (
    <ContactProvider>
      <ScrollVar />
      <ScrollToTop />
      <SiteNav />
      <Outlet />
      <Footer />
      <ContactModal />
    </ContactProvider>
  );
}
