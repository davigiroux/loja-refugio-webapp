import { useRouter } from 'next/dist/client/router';
import nProgress from 'nprogress';
import React, { useState } from 'react';
import { useCarrinho } from '../lib/carrinhoState';
import { CheckoutFormStyles, SickButton } from './styles/CheckoutStyles';

function CheckoutForm() {
  const [error, setError] = useState();
  const { fecharCarrinho } = useCarrinho();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    nProgress.start();

    if (error) {
      setError(error);
      nProgress.done();
      return;
    }

    router.push({ pathname: '/pedido/confirmar' });
    fecharCarrinho();
    nProgress.done();
  };

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      <SickButton>Fazer pedido</SickButton>
    </CheckoutFormStyles>
  );
}

function BotaoDeFazerPedido() {
  return <CheckoutForm />;
}

export default BotaoDeFazerPedido;
