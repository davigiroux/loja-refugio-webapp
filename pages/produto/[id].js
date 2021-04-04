import { object } from 'prop-types';
import ProdutoDetalhes from '../../components/ProdutoDetalhes';

function ProdutoDetalhesPage({ query }) {
  const { id } = query;

  return <ProdutoDetalhes id={id} />;
}

ProdutoDetalhesPage.propTypes = {
  query: object,
};

export default ProdutoDetalhesPage;
