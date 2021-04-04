import React from 'react';
import Produtos from '../components/Produtos';
import { ModaGrid } from '../components/styles/ModaStyles';

function ModaFeminina() {
  const MODA_FEMININA = 'moda feminina';
  return (
    <ModaGrid>
      <h1>
        <img src="/mini-logo-feminina.png" alt="logo-feminina" />
        Moda Feminina
      </h1>
      <Produtos moda={MODA_FEMININA} />
    </ModaGrid>
  );
}

export default ModaFeminina;
