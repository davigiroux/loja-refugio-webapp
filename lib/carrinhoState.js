import { any } from 'prop-types';
import { useState, createContext, useContext } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CarrinhoStateProvider({ children }) {
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  function fecharCarrinho() {
    setCarrinhoAberto(false);
  }

  function abrirCarrinho() {
    setCarrinhoAberto(true);
  }

  return (
    <LocalStateProvider
      value={{
        carrinhoAberto,
        setCarrinhoAberto,
        fecharCarrinho,
        abrirCarrinho,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

CarrinhoStateProvider.propTypes = {
  children: any,
};

function useCarrinho() {
  const all = useContext(LocalStateContext);
  return all;
}

export { CarrinhoStateProvider, useCarrinho };
