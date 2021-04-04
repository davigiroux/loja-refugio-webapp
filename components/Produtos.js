import { useQuery } from '@apollo/client';
import { ALL_PRODUTOS_QUERY } from '../queries/produtos-queries';
import Produto from './Produto';
import { ProdutosStyles } from './styles/ProdutosStyles';

function Produtos({ moda }) {
  const { data, error, loading } = useQuery(ALL_PRODUTOS_QUERY, {
    variables: {
      first: 10,
      skip: 0,
      moda,
    },
  });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao buscar as roupas</p>;

  const { allProdutos } = data;

  return (
    <ProdutosStyles>
      {allProdutos.map((produto) => (
        <Produto produto={produto} key={produto.id} />
      ))}
    </ProdutosStyles>
  );
}

export default Produtos;
