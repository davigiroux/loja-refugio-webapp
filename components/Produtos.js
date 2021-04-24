import { useQuery } from '@apollo/client';
import { number, string } from 'prop-types';
import { ALL_PRODUTOS_QUERY } from '../api/queries/produtosQueries';
import { porPagina } from '../config';
import Produto from './Produto';
import { ProdutosStyles } from './styles/ProdutosStyles';

function Produtos({ pagina, tagDeModa }) {
  const { data, error, loading } = useQuery(ALL_PRODUTOS_QUERY, {
    variables: {
      first: porPagina,
      skip: pagina * porPagina - porPagina,
      moda: tagDeModa,
    },
  });

  if (error) return <p>Erro ao buscar as roupas</p>;
  if (loading) return <p>Carregando...</p>;
  const { allProdutos } = data;

  return (
    <ProdutosStyles>
      {allProdutos.map((produto) => (
        <Produto produto={produto} key={produto.id} />
      ))}
    </ProdutosStyles>
  );
}

Produtos.propTypes = {
  tagDeModa: string,
  pagina: number,
};

export default Produtos;
