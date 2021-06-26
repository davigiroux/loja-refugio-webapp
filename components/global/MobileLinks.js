import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { useMobileMenu } from '../../contexts/MobileMenuContext';
import Sair from '../Sair';
import { useUsuario } from '../UsuarioHook';

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
  padding: 30px 50px;
  transition-duration: 0.4s;
  text-align: center;

  &.active {
    transform: translate(1%, 0);
  }

  h3 {
    border-bottom: 3px solid var(--offWhite);
  }

  ul {
    list-style-type: none;
    padding: none;
    -webkit-padding-start: 0;

    li {
      padding-top: 10px;
    }

    li > #sair {
      background: transparent;
      border: none;
      color: red;
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

  const handleRouteChange = (href) => {
    fecharMenu();
    router.push(href);
  };

  return (
    <>
      <Overlay onClick={fecharMenu} className={menuAberto ? 'active' : ''} />
      <LinkContainer className={menuAberto ? 'active' : ''}>
        <h3>Olá, {usuario ? usuario.name : 'visitante'}!</h3>
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
          {usuario && (
            <li>
              <Sair />
            </li>
          )}
        </ul>
      </LinkContainer>
    </>
  );
}

export default MobileLinks;
