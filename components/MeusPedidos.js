import { useQuery } from '@apollo/client';
import { object } from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { formatarData } from '../lib/formatarData';
import formatarDinheiro from '../lib/formatarDinheiro';
import { PEDIDOS_USUARIO_QUERY } from '../queries/pedidos-queries';
import { PedidosStyle, PedidoStyle } from './styles/PedidosStyles';

function MeusPedidos({ usuario }) {
  const { data, error, loading } = useQuery(PEDIDOS_USUARIO_QUERY, {
    variables: { idUsuario: usuario?.id },
  });

  const contarItensNoPedido = (pedido) =>
    pedido.itens.reduce((acumulado, item) => acumulado + item.quantidade, 0);

  if (error) return <p>Erro ao buscar os pedidos do usuário</p>;
  if (loading) return <p>Carregando...</p>;

  const { allPedidos: pedidos } = data;
  return (
    <PedidosStyle>
      <div>
        <h2>Meus pedidos</h2>
        {pedidos.map((pedido) => (
          <PedidoStyle key={pedido.id}>
            <span>Código: {pedido.codigo}</span>
            <span className="data-do-pedido">
              {formatarData(pedido.dataPedido)}
            </span>
            <span className="valor-do-pedido">
              Valor total: <strong>{formatarDinheiro(pedido.total)}</strong> (
              {contarItensNoPedido(pedido)} itens)
            </span>
            <Link href={`/pedido/${pedido.id}`}>
              <a className="link-do-pedido">
                <FontAwesomeIcon icon={faReceipt} transform="left-8" />
                VER PEDIDO
              </a>
            </Link>
          </PedidoStyle>
        ))}
      </div>
    </PedidosStyle>
  );
}

MeusPedidos.propTypes = {
  usuario: object,
};

export default MeusPedidos;
