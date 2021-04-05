import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { number, string } from 'prop-types';
import PaginacaoStyles from './styles/PagincaoStyles';
import MensagemDeErro from './MensagemDeErro';
import { porPagina } from '../config';
import { PAGINATION_QUERY } from '../api/queries/paginacao';

function Paginacao({ pagina, tagDeModa }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY, {
    variables: { tagDeModa: tagDeModa.replace('-', ' ') },
  });

  if (loading) return 'Loading...';

  if (error) return <MensagemDeErro error={error} />;

  const { count: total } = data._allProdutosMeta;
  const totalDePaginas = Math.ceil(total / porPagina);

  return (
    <PaginacaoStyles>
      <Head>
        <title>
          Loj Refúgio - Página {pagina} de {totalDePaginas}
        </title>
      </Head>
      <Link href={`/produtos/${tagDeModa}/${pagina - 1}`}>
        <a aria-disabled={pagina === 1}>Anterior</a>
      </Link>
      <p>
        Página {pagina} de {totalDePaginas}
      </p>
      <p>{total} Total de itens</p>
      <Link href={`/produtos/${tagDeModa}/${pagina + 1}`}>
        <a aria-disabled={pagina >= totalDePaginas}>Próxima</a>
      </Link>
    </PaginacaoStyles>
  );
}

Paginacao.propTypes = {
  pagina: number,
  tagDeModa: string,
};

export default Paginacao;
