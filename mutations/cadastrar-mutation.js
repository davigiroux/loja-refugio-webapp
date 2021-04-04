import gql from 'graphql-tag';

export const CADASTRAR_MUTATION = gql`
  mutation CADASTRAR_MUTATION(
    $email: String!
    $name: String!
    $senha: String!
  ) {
    createUsuario(data: { email: $email, name: $name, senha: $senha }) {
      id
      email
      name
    }
  }
`;
