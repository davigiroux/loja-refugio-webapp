import { any } from 'prop-types';
import { useState, createContext, useContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function MobileMenuStateProvider({ children }) {
  const [menuAberto, setMenuAberto] = useState(false);

  function fecharMenu() {
    setMenuAberto(false);
  }

  function abrirMenu() {
    setMenuAberto(true);
  }

  return (
    <LocalStateProvider
      value={{
        menuAberto,
        setMenuAberto,
        fecharMenu,
        abrirMenu,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

MobileMenuStateProvider.propTypes = {
  children: any,
};

function useMobileMenu() {
  const all = useContext(LocalStateContext);
  return all;
}

export { MobileMenuStateProvider, useMobileMenu };
