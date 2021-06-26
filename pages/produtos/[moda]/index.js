import { useRouter } from 'next/dist/client/router';
import React from 'react';
import dynamic from 'next/dynamic';
import Paginacao from '../../../components/Paginacao';
import Produtos from '../../../components/Produtos';

const ModaGrid = dynamic(() => import('../../../components/styles/ModaStyles'));

function PaginaDosProdutos() {
  const { query } = useRouter();
  const pagina = parseInt(query.pagina);
  const tagDeModaDoProduto = query.moda.replace('-', ' ');

  const metaData = {
    titulo: '',
    imgSrc: '',
    imgAlt: '',
  };

  if (tagDeModaDoProduto === 'moda feminina') {
    metaData.titulo = 'Moda Feminina';
    metaData.imgSrc = '/mini-logo-feminina.png';
    metaData.imgAlt = 'logo-feminina';
  } else if (tagDeModaDoProduto === 'moda masculina') {
    metaData.titulo = 'Moda Masculina';
    metaData.imgSrc = '/mini-logo-masculino.png';
    metaData.imgAlt = 'logo-masculino';
  }
  return (
    <ModaGrid>
      <h1>
        <img src={metaData.imgSrc} alt={metaData.imgAlt} />
        {metaData.titulo}
      </h1>
      <Paginacao pagina={pagina || 1} tagDeModa={query.moda} />
      <Produtos pagina={pagina || 1} tagDeModa={tagDeModaDoProduto} />
      <Paginacao pagina={pagina || 1} tagDeModa={query.moda} />
    </ModaGrid>
  );
}

export default PaginaDosProdutos;
