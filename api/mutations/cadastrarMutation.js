import gql from 'graphql-tag';

export const CADASTRAR_MUTATION = gql`
  mutation CADASTRAR_MUTATION(
    $email: String!
    $name: String!
    $senha: String!
    $telefone: String!
  ) {
    createUsuario(
      data: { email: $email, name: $name, senha: $senha, telefone: $telefone }
    ) {
      id
      email
      name
      telefone
    }
  }
`;
