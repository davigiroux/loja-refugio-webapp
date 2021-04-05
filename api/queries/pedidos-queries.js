import gql from 'graphql-tag';

export const PEDIDOS_USUARIO_QUERY = gql`
  query PEDIDOS_USUARIO_QUERY($idUsuario: ID!) {
    allPedidos(where: { usuario: { id: $idUsuario } }) {
      id
      dataPedido
      codigo
      total
      status
      itens {
        name
        quantidade
      }
    }
  }
`;

export const PEDIDO_DETALHES_QUERY = gql`
  query PEDIDO_DETALHES_QUERY($idPedido: ID!) {
    Pedido(where: { id: $idPedido }) {
      id
      dataPedido
      codigo
      total
      itens {
        name
        quantidade
        preco
        foto {
          imagem {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
