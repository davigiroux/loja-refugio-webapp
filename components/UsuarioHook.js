import { gql, useQuery } from '@apollo/client';

export const USUARIO_ATUAL_QUERY = gql`
  query {
    authenticatedItem {
      ... on Usuario {
        id
        email
        name
        carrinho {
          id
          quantidade
          etiqueta
          produto {
            id
            preco
            name
            tags {
              name
            }
            fotos {
              principal
              imagem {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`;

export function useUsuario() {
  const { data } = useQuery(USUARIO_ATUAL_QUERY);
  return data?.authenticatedItem;
}
