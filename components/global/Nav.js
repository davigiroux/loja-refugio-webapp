import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useUsuario } from '../UsuarioHook';
import Sair from '../Sair';
import { useCarrinho } from '../../lib/carrinhoState';
import Carrinho from '../Carrinho';

const Navbar = styled.div`
  display: grid;
  background-color: var(--black);
  width: 100%;
  height: 100px;
  grid-template-columns: minmax(auto, 400px) 1fr 1fr;
  align-items: center;
  padding: 0 20px;
  gap: 30px;
  position: fixed;
  z-index: 299;
`;

const Logo = styled.span`
  grid-column: 1 / 2;
  justify-self: left;
  padding-top: 5px;

  img {
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  width: auto;

  .fa-search {
    position: absolute;
    font-size: 20px;
    color: var(--primary);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  padding: 0 15px;
`;

const NavLinks = styled.div`
  display: inline;
  grid-column: -2 /-1;
  color: var(--offWhite);

  ul {
    list-style: none;
    display: grid;
    align-items: center;
    grid-template-columns: repeat(4, auto);
    gap: 15px;
    justify-items: center;
    li {
      #sair {
        outline: none;
        font-size: 15px;
        padding: 10px 15px;
        background-color: transparent;
        border: none;
        color: var(--red);
        font-weight: 600;
        cursor: pointer;
      }

      #carrinho {
        &:active {
          outline: none;
        }
      }

      a,
      #carrinho {
        background-color: transparent;
        border: none;
        cursor: pointer;
        color: var(--offWhite);
        font-size: 18px;

        .fa-shopping-bag {
          font-size: 28px;
          margin-top: 17px;
        }

        .items-counter {
          display: grid;
          border-radius: 17px;
          width: 17px;
          height: 17px;
          background-color: var(--red);
          position: relative;
          color: var(--offWhite);
          font-size: 12px;
          justify-content: center;
          align-content: center;
          bottom: 15px;
          left: 15px;
          transition-duration: 0.2s;
        }

        &:hover {
          .items-counter {
            background-color: #ff4b4b;
          }
        }
      }
    }
  }
`;

function Nav() {
  const usuario = useUsuario();
  const { abrirCarrinho } = useCarrinho();

  return (
    <Navbar>
      <Link href="/">
        <Logo>
          <img
            src="https://res.cloudinary.com/dnyrymvie/image/upload/v1617831342/loja-refugio/logo-refugio_ncuqrr.png"
            width="200"
            height="90"
            alt="logo"
          />
        </Logo>
      </Link>
      <SearchBox>
        <SearchInput placeholder="Buscar por mais roupas..." />
        <FontAwesomeIcon icon={faSearch} transform="left-25 down-5" />
      </SearchBox>
      <Carrinho suppressHydrationWarning />
      <NavLinks>
        <ul>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          {usuario && (
            <>
              <li>
                <Link href="/pedidos">Meus pedidos</Link>
              </li>
              <li>
                <button id="carrinho" type="button" onClick={abrirCarrinho}>
                  <FontAwesomeIcon icon={faShoppingBag} />
                  <div className="items-counter">
                    {usuario.carrinho.reduce(
                      (acumulado, itemCarrinho) =>
                        acumulado +
                        (itemCarrinho.produto ? itemCarrinho.quantidade : 0),
                      0
                    )}
                  </div>
                </button>
              </li>
              <li>
                <Sair />
              </li>
            </>
          )}
          {!usuario && (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/cadastrar">Cadastrar</Link>
              </li>
            </>
          )}
        </ul>
      </NavLinks>
    </Navbar>
  );
}

export default Nav;
