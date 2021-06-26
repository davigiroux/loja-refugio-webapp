import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { useMobileMenu } from '../../contexts/MobileMenuContext';
import { useCarrinho } from '../../lib/carrinhoState';
import Sair from '../Sair';
import { useUsuario } from '../UsuarioHook';
import CarrinhoButton from './CarrinhoButton';

const LinkContainer = styled.div`
  display: block;
  width: 60%;
  height: 200vh;
  background-color: #272727;
  color: var(--offWhite);
  position: absolute;
  z-index: 15;
  top: 0;
  right: 0;
  transform: translate(100%, 0);
  padding: 30px 25px;
  transition-duration: 0.4s;
  text-align: center;

  &.active {
    transform: translate(1%, 0);
  }

  .greetings {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 10px;
    h3 {
      grid-column: 1/-1;
      font-size: 14px;
    }
    #sair {
      background: transparent;
      border: none;
      color: red;
      font-size: 16px;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
    border-bottom: 3px solid var(--offWhite);
  }

  ul {
    list-style-type: none;
    padding: none;
    -webkit-padding-start: 0;

    li {
      padding-top: 10px;
    }

    li > #carrinho {
      background: transparent;
      border: none;
      color: var(--offWhite);
      margin-top: 20px;
      font-size: 16px;
      cursor: pointer;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }

    .link-button {
      background: transparent;
      background-color: none;
      font-size: 15px;
      font-weight: 400;
      outline: none;
      border: none;
      cursor: pointer;
      color: var(--offWhite);
    }
  }
`;

const Overlay = styled.div`
  display: block;
  width: 100%;
  height: 200vh;
  background: #323232;
  opacity: 0.5;
  position: absolute;
  z-index: 14;
  top: 0;
  transform: translate(50%, 0);
  transition-duration: 0.3s;

  &.active {
    transform: translate(-100%, 0);
  }
`;

function MobileLinks() {
  const { menuAberto, fecharMenu } = useMobileMenu();
  const usuario = useUsuario();
  const router = useRouter();
  const { abrirCarrinho, fecharCarrinho, carrinhoAberto } = useCarrinho();

  const handleRouteChange = (href) => {
    fecharMenu();
    router.push(href);
  };

  const handleCarrinhoClick = () => {
    fecharMenu();
    abrirCarrinho();
  };

  const overlayClick = () => {
    fecharMenu();
    fecharCarrinho();
  };

  let qtdItens = 0;
  if (usuario) {
    qtdItens = usuario?.carrinho?.reduce(
      (acumulado, itemCarrinho) =>
        acumulado + (itemCarrinho.produto ? itemCarrinho.quantidade : 0),
      0
    );
  }

  return (
    <>
      <Overlay
        onClick={overlayClick}
        className={menuAberto || carrinhoAberto ? 'active' : ''}
      />
      <LinkContainer className={menuAberto ? 'active' : ''}>
        <div className="greetings">
          <h3>Olá, {usuario ? usuario.name : 'visitante'}!</h3>

          {usuario && (
            <>
              <CarrinhoButton
                handleClick={handleCarrinhoClick}
                qtdItens={qtdItens}
              />
              <Sair />
            </>
          )}
        </div>
        <ul>
          {usuario && (
            <>
              <li>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => handleRouteChange('/pedidos')}
                >
                  Meus pedidos
                </button>
              </li>
            </>
          )}
          {!usuario && (
            <>
              <li>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => handleRouteChange('/login')}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="link-button"
                  onClick={() => handleRouteChange('/cadastrar')}
                >
                  Cadastrar
                </button>
              </li>
            </>
          )}
          <li>
            <button
              type="button"
              className="link-button"
              onClick={() => handleRouteChange('/contato')}
            >
              Contato
            </button>
          </li>
        </ul>
      </LinkContainer>
    </>
  );
}

export default MobileLinks;
