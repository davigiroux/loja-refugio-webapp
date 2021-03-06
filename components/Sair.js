import { gql, useMutation } from '@apollo/client';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { useMobileMenu } from '../contexts/MobileMenuContext';
import { USUARIO_ATUAL_QUERY } from './UsuarioHook';

const SAIR_MUTATION = gql`
  mutation {
    endSession
  }
`;

function Sair() {
  const router = useRouter();
  const { fecharMenu } = useMobileMenu();
  const [signout] = useMutation(SAIR_MUTATION, {
    refetchQueries: () => [{ query: USUARIO_ATUAL_QUERY }],
  });

  return (
    <button
      id="sair"
      type="button"
      onClick={async () => {
        await signout();
        fecharMenu();
        router.push({ pathname: '/' });
      }}
    >
      SAIR
      <FontAwesomeIcon icon={faSignOutAlt} transform="right-10" />
    </button>
  );
}

export default Sair;
