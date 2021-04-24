import gql from 'graphql-tag';

export const CRIAR_PEDIDO_MUTATION = gql`
  mutation CRIAR_PEDIDO_MUTATION {
    checkout {
      id
      total
      itens {
        id
        name
      }
    }
  }
`;
