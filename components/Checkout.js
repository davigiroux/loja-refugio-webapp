import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import React, { useState } from 'react';
import styled from 'styled-components';
import { PEDIDOS_USUARIO_QUERY } from '../api/queries/pedidos-queries';
import { useCarrinho } from '../lib/carrinhoState';
import { USUARIO_ATUAL_QUERY } from './UsuarioHook';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  gap: 1rem;
`;

const SickButton = styled.button`
  background: var(--primary);
  color: white;
  font-weight: 500;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transform: skew(-2deg);
  display: inline-block;
  transition: all 0.5s;
  &[disabled] {
    opacity: 0.5;
  }
`;

const CRIAR_PEDIDO_MUTATION = gql`
  mutation CRIAR_PEDIDO_MUTATION {
    checkout {
      id
      total
      itens {
        id
        name
      }
    }
  }
`;

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { fecharCarrinho } = useCarrinho();
  const router = useRouter();
  const [checkout, { error: graphQlError }] = useMutation(
    CRIAR_PEDIDO_MUTATION,
    {
      refetchQueries: [
        { query: USUARIO_ATUAL_QUERY },
        { query: PEDIDOS_USUARIO_QUERY },
      ],
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    nProgress.start();

    if (error) {
      setError(error);
      nProgress.done();
      return;
    }

    const pedido = await checkout();

    router.push({
      pathname: '/pedido/[id]',
      query: { id: pedido.data.checkout.id },
    });

    fecharCarrinho();
    setLoading(false);
    nProgress.done();
  };

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQlError && <p style={{ fontSize: 12 }}>{graphQlError.message}</p>}
      <SickButton>Confirmar pedido</SickButton>
    </CheckoutFormStyles>
  );
}

function Checkout() {
  return <CheckoutForm />;
}

export default Checkout;
