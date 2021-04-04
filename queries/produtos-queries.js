import gql from 'graphql-tag';

export const ALL_PRODUTOS_QUERY = gql`
  query ALL_PRODUTOS_QUERY($skip: Int = 0, $first: Int, $moda: String) {
    allProdutos(
      first: $first
      skip: $skip
      where: { tags_some: { name: $moda } }
    ) {
      id
      name
      preco
      tags {
        name
      }
      foto {
        id
        imagem {
          publicUrlTransformed
        }
      }
    }
  }
`;

export const PRODUTO_DETALHES_QUERY = gql`
  query PRODUTO_DETALHES_QUERY($id: ID!) {
    Produto(where: { id: $id }) {
      id
      name
      preco
      foto {
        imagem {
          publicUrlTransformed
        }
      }
      tags {
        name
      }
      estoque {
        etiqueta
        quantidade
      }
    }
  }
`;
