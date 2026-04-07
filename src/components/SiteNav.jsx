import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContact } from '../context/ContactContext.jsx';

export default function SiteNav() {
  const { pathname } = useLocation();
  const { open } = useContact();
  const [theme, setTheme] = useState('dark');
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setTheme(window.scrollY < 300 ? 'dark' : 'light');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      data-nav-theme={theme}
      className={theme === 'light' ? 'navbar-light' : 'navbar-dark'}
    >
      <div className={isHome ? 'container-xxl' : 'container-fluid'}>
        <Navbar.Brand as={Link} to="/">
          Chloe Chung
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/#main" className="link-underline">
              Work
            </Nav.Link>
            <button type="button" className="nav-link link-underline" onClick={open}>
              Contact
            </button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
