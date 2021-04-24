import { gql, useMutation } from '@apollo/client';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/dist/client/router';
import { bool, string } from 'prop-types';
import styled from 'styled-components';
import { useUsuario, USUARIO_ATUAL_QUERY } from './UsuarioHook';

const ADD_NO_CARRINHO_MUTATION = gql`
  mutation ADD_NO_CARRINHO_MUTATION($id: ID!, $etiqueta: String!) {
    addNoCarrinho(produtoId: $id, etiqueta: $etiqueta) {
      id
    }
  }
`;

const Botao = styled.button`
  outline: none;
  background-color: var(--primary);
  color: var(--offWhite);
  width: 200px;
  height: 35px;
  border: none;
  cursor: pointer;

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;

function AddNoCarrinho({ id, etiqueta, desabilitado }) {
  const usuario = useUsuario();
  const router = useRouter();
  const [addNoCarrinho, { loading }] = useMutation(ADD_NO_CARRINHO_MUTATION, {
    variables: { id, etiqueta },
    refetchQueries: [{ query: USUARIO_ATUAL_QUERY }],
  });

  const addItem = async () => {
    try {
      if (!usuario) {
        alert('Você deve logar primeiro para adicionar roupas no carrinho!');
        router.push({ pathname: '/login' });
        return;
      }
      await addNoCarrinho();
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };
  return (
    <Botao type="button" onClick={addItem} disabled={loading || desabilitado}>
      <FontAwesomeIcon icon={faShoppingBag} transform="left-8" size="lg" />
      {loading ? 'Adicionando' : 'Adicionar no carrinho'}
    </Botao>
  );
}

AddNoCarrinho.propTypes = {
  id: string,
  etiqueta: string,
  desabilitado: bool,
};

export default AddNoCarrinho;
