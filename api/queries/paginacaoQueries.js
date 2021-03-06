import gql from 'graphql-tag';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($tagDeModa: String!) {
    _allProdutosMeta(
      where: {
        tags_some: { name: $tagDeModa }
        fotos_some: { principal: true }
      }
    ) {
      count
    }
  }
`;

export const PAGINATION_QUERY1 = gql`
  query {
    _allProdutosMeta {
      count
    }
  }
`;
