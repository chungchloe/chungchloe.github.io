import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const ContactContext = createContext(null);

export function ContactProvider({ children }) {
  const [show, setShow] = useState(false);
  const open = useCallback(() => setShow(true), []);
  const close = useCallback(() => setShow(false), []);

  const value = useMemo(() => ({ open, close, show }), [open, close, show]);

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
}

export function useContact() {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error('useContact must be used within ContactProvider');
  }
  return ctx;
}
