import { useMutation } from '@apollo/client';
import { CADASTRAR_MUTATION } from '../api/mutations/cadastrarMutation';
import { formatarTelefone } from '../lib/formatarTelefone';
import useForm from '../lib/useForm';
import { Fieldset } from './styles/FormFieldSetStyles';
import { FormGrid } from './styles/GlobalGridStyles';

function CadastrarForm() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    senha: '',
    name: '',
    telefone: '',
  });

  const [cadastrar, { data, loading, error }] = useMutation(
    CADASTRAR_MUTATION,
    {
      variables: inputs,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await cadastrar().catch(console.error);
    resetForm();
  };
  return (
    <FormGrid>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Cadastre-se no nosso site!</h2>
        <Fieldset>
          {data?.createUsuario && (
            <p>
              Usuário cadastrado com {data.createUsuario.email}
              <br />
              Tudo certo para logar!
            </p>
          )}
          {error && (
            <p style={{ color: 'red' }}>Houve um erro ao tentar cadastrar</p>
          )}
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Seu nome"
              autoComplete="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              autoComplete="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="telefone">
            <input
              type="text"
              name="telefone"
              placeholder="Seu telefone (Whatsapp)"
              autoComplete="phone"
              value={inputs.telefone}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="senha">
            <input
              type="password"
              name="senha"
              placeholder="Sua senha"
              autoComplete="password"
              value={inputs.senha}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Cadastrar!</button>
        </Fieldset>
      </form>
    </FormGrid>
  );
}

export default CadastrarForm;
