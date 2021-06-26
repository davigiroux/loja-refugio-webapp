import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useUsuario } from '../UsuarioHook';
import Sair from '../Sair';
import { useCarrinho } from '../../lib/carrinhoState';
import Carrinho from '../Carrinho';
import Busca from '../Busca';
import MobileLinks from './MobileLinks';
import { useMobileMenu } from '../../contexts/MobileMenuContext';

const Navbar = styled.div`
  display: grid;
  background-color: var(--black);
  width: 100%;
  height: 100px;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  padding: 0 20px;
  gap: 30px;
  position: fixed;
  z-index: 299;
  @media (max-width: 600px) {
    height: 110px;
    column-gap: 10px;
    row-gap: 0;
    grid-template-columns: 1fr 40px;
    grid-template-rows: auto 1fr;

    #search {
      font-size: 13px;
      width: 100%;
    }
  }
`;

const Logo = styled.span`
  grid-column: 1 / 2;
  justify-self: left;
  padding-top: 5px;

  img {
    cursor: pointer;
  }
  @media (max-width: 600px) {
    grid-column: 1 / 3;
    justify-self: center;
    padding-top: 10px;

    img {
      width: 90px;
      height: auto;
    }
  }
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

  @media (max-width: 600px) {
    display: none;
  }
`;

const NavLinksMobile = styled.nav`
  display: none;
  @media (max-width: 600px) {
    display: block;
    justify-self: center;

    a,
    #botao-hamburguer {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: var(--offWhite);
      font-size: 18px;

      .fa-shopping-bag {
        font-size: 28px;
        margin-top: 17px;
      }
    }
  }
`;

function Nav() {
  const usuario = useUsuario();
  const { abrirCarrinho } = useCarrinho();
  const { abrirMenu } = useMobileMenu();

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
      <Busca />
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
      <NavLinksMobile>
        <button type="button" id="botao-hamburguer" onClick={() => abrirMenu()}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <MobileLinks />
      </NavLinksMobile>
    </Navbar>
  );
}

export default Nav;
