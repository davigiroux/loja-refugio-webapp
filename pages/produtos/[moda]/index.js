import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Paginacao from '../../../components/Paginacao';
import Produtos from '../../../components/Produtos';
import { ModaGrid } from '../../../components/styles/ModaStyles';

function PaginaDosProdutos() {
  const { query } = useRouter();
  const pagina = parseInt(query.pagina);
  const tagDeModaDoProduto = query.moda.replace('-', ' ');

  const metaDaPagina = {
    titulo: '',
    imgSrc: '',
    imgAlt: '',
  };

  if (tagDeModaDoProduto === 'moda feminina') {
    metaDaPagina.titulo = 'Moda Feminina';
    metaDaPagina.imgSrc = '/mini-logo-feminina.png';
    metaDaPagina.imgAlt = 'logo-feminina';
  } else if (tagDeModaDoProduto === 'moda masculina') {
    metaDaPagina.titulo = 'Moda Masculina';
    metaDaPagina.imgSrc = '/mini-logo-masculino.png';
    metaDaPagina.imgAlt = 'logo-masculino';
  }
  return (
    <ModaGrid>
      <h1>
        <img src={metaDaPagina.imgSrc} alt={metaDaPagina.imgAlt} />
        {metaDaPagina.titulo}
      </h1>
      <Paginacao pagina={pagina || 1} tagDeModa={query.moda} />
      <Produtos pagina={pagina || 1} tagDeModa={tagDeModaDoProduto} />
      <Paginacao pagina={pagina || 1} tagDeModa={query.moda} />
    </ModaGrid>
  );
}

export default PaginaDosProdutos;
