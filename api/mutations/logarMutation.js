import gql from 'graphql-tag';

export const LOGAR_MUTATION = gql`
  mutation LOGAR_MUTATION($email: String!, $senha: String!) {
    authenticateUsuarioWithPassword(email: $email, senha: $senha) {
      ... on UsuarioAuthenticationWithPasswordSuccess {
        item {
          id
          name
          email
          telefone
        }
      }
      ... on UsuarioAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;
