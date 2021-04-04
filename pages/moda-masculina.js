import React from 'react';
import Produtos from '../components/Produtos';
import { ModaGrid } from '../components/styles/ModaStyles';

function ModaMasculina() {
  const MODA_MASCULINA = 'moda masculina';
  return (
    <ModaGrid>
      <h1>
        <img src="/mini-logo-masculino.png" alt="logo-masculino" />
        Moda Masculina
      </h1>
      <Produtos moda={MODA_MASCULINA} />
    </ModaGrid>
  );
}

export default ModaMasculina;
