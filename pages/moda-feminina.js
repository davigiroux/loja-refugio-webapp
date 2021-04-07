import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Paginacao from '../components/Paginacao';
import Produtos from '../components/Produtos';
import { ModaGrid } from '../components/styles/ModaStyles';

function ModaFeminina() {
  const { query } = useRouter();
  const pagina = parseInt(query.page);

  const MODA_FEMININA = 'moda feminina';
  return (
    <ModaGrid>
      <h1>
        <img src="/mini-logo-feminina.png" alt="logo-feminina" />
        Moda Feminina
      </h1>
      <Paginacao pagina={pagina || 1} tagDeModa={MODA_FEMININA} />
      <Produtos pagina={pagina || 1} tagDeModa={MODA_FEMININA} />
      <Paginacao pagina={pagina || 1} tagDeModa={MODA_FEMININA} />
    </ModaGrid>
  );
}

export default ModaFeminina;
