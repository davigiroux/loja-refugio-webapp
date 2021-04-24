import { useQuery } from '@apollo/client';
import { string } from 'prop-types';
import styled from 'styled-components';
import { PEDIDO_DETALHES_QUERY } from '../api/queries/pedidosQueries';
import { formatarData } from '../lib/formatarData';
import formatarDinheiro from '../lib/formatarDinheiro';
import { PedidosStyle } from './styles/PedidosStyles';

const Itens = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  gap: 25px;
`;

const ItemPedido = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-content: center;
  align-items: center;

  img {
    width: auto;
    height: 100px;
    object-fit: cover;
  }
`;

const Rodape = styled.footer`
  display: grid;
  border-top: 2px solid var(--primary);
  margin-top: 2rem;
  padding-top: 2rem;
  align-items: center;
  justify-content: right;
  font-size: 3rem;
  p {
    margin: 0;
    color: var(--primary);
    font-weight: 600;
  }
`;

const ItemPedidoDetalhes = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

function PedidoDetalhes({ id }) {
  const { data, error, loading } = useQuery(PEDIDO_DETALHES_QUERY, {
    variables: { idPedido: id },
  });

  if (loading) return <p>Carregando</p>;
  if (error) return <p>Erro ao buscar pedido</p>;

  const { Pedido: pedido } = data;

  return (
    <PedidosStyle>
      <div>
        <h2>Pedido nº {pedido.codigo}</h2>
        <p>
          <em>Pedido feito em: {formatarData(pedido.dataPedido)}</em>
          <br />
          <em>Status: {pedido.status}</em>
        </p>
        <h3>Itens</h3>
        <Itens>
          {pedido.itens.map((item, index) => (
            <ItemPedido key={index}>
              <img
                src={item.foto?.imagem?.publicUrlTransformed}
                alt={item.name}
              />
              <ItemPedidoDetalhes>
                <span>
                  <strong>{item.name}</strong>
                </span>
                <span>Qtd: {item.quantidade}</span>
                <span>
                  {formatarDinheiro(item.preco * item.quantidade)} (
                  <em style={{ fontSize: 12 }}>
                    {formatarDinheiro(item.preco)} x {item.quantidade}
                  </em>
                  )
                </span>
              </ItemPedidoDetalhes>
            </ItemPedido>
          ))}
        </Itens>
        <Rodape>
          <p>Valor total: {formatarDinheiro(pedido.total)}</p>
        </Rodape>
      </div>
    </PedidosStyle>
  );
}

PedidoDetalhes.propTypes = {
  id: string,
};

export default PedidoDetalhes;
