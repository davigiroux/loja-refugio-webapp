import gql from 'graphql-tag';

export const BUSCAR_PRODUTOS_QUERY = gql`
  query BUSCAR_PRODUTOS_QUERY($searchTerm: String!) {
    searchTerms: allProdutos(
      where: {
        fotos_some: { principal: true }
        OR: [
          { tags_some: { name_contains: $searchTerm } }
          { name_contains: $searchTerm }
        ]
      }
    ) {
      id
      name
      fotos {
        principal
        imagem {
          publicUrlTransformed
        }
      }
      tags {
        name
      }
    }
  }
`;
