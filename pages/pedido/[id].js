import { object } from 'prop-types';
import PedidoDetalhes from '../../components/PedidoDetalhes';

function Pedido({ query }) {
  return <PedidoDetalhes id={query.id} />;
}

Pedido.propTypes = {
  query: object,
};

export default Pedido;
