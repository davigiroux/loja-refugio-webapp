import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import React, { useState } from 'react';
import { CRIAR_PEDIDO_MUTATION } from '../api/mutations/pedidoMutation';
import { PEDIDOS_USUARIO_QUERY } from '../api/queries/pedidosQueries';
import { useCarrinho } from '../lib/carrinhoState';
import { CheckoutFormStyles, SickButton } from './styles/CheckoutStyles';
import { useUsuario, USUARIO_ATUAL_QUERY } from './UsuarioHook';

function CheckoutForm() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { fecharCarrinho } = useCarrinho();
  const usuario = useUsuario();
  const router = useRouter();
  const [checkout, { error: graphQlError }] = useMutation(
    CRIAR_PEDIDO_MUTATION,
    {
      refetchQueries: [
        { query: USUARIO_ATUAL_QUERY },
        { query: PEDIDOS_USUARIO_QUERY, variables: { idUsuario: usuario.id } },
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
