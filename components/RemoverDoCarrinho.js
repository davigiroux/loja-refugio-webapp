import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BotaoGrande = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;

  &:hover {
    color: var(--red);
    cursor: pointer;
  }
`;

const REMOVER_DO_CARRINHO_MUTATION = gql`
  mutation REMOVER_DO_CARRINHO_MUTATION($id: ID!) {
    deleteItemCarrinho(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteItemCarrinho));
}

function RemoverDoCarrinho({ id }) {
  const [removerDoCarrinho, { loading }] = useMutation(
    REMOVER_DO_CARRINHO_MUTATION,
    {
      variables: { id },
      update,
    }
  );

  return (
    <BotaoGrande
      disabled={loading}
      type="button"
      title="Remover esse item do carrinho"
      onClick={removerDoCarrinho}
    >
      &times;
    </BotaoGrande>
  );
}

RemoverDoCarrinho.propTypes = {
  id: string,
};

export default RemoverDoCarrinho;
