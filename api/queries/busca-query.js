import gql from 'graphql-tag';

export const BUSCAR_PRODUTOS_QUERY = gql`
  query BUSCAR_PRODUTOS_QUERY($searchTerm: String!) {
    searchTerms: allProdutos(where: { name_contains_i: $searchTerm }) {
      id
      name
      foto {
        imagem {
          publicUrlTransformed
        }
      }
    }
  }
`;
