import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Paginacao from '../components/Paginacao';
import Produtos from '../components/Produtos';
import { ModaGrid } from '../components/styles/ModaStyles';

function ModaMasculina() {
  const { query } = useRouter();
  const pagina = parseInt(query.page);
  const MODA_MASCULINA = 'moda masculina';
  return (
    <ModaGrid>
      <h1>
        <img src="/mini-logo-masculino.png" alt="logo-masculino" />
        Moda Masculina
      </h1>
      <Paginacao pagina={pagina || 1} tagDeModa={MODA_MASCULINA} />
      <Produtos pagina={pagina || 1} tagDeModa={MODA_MASCULINA} />
      <Paginacao pagina={pagina || 1} tagDeModa={MODA_MASCULINA} />
    </ModaGrid>
  );
}

export default ModaMasculina;
