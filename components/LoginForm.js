import { useMutation } from '@apollo/client';
import { useRouter } from 'next/dist/client/router';
import useForm from '../lib/useForm';
import { LOGAR_MUTATION } from '../mutations/logar-mutation';
import { Fieldset } from './styles/FormFieldSetStyles';
import { FormGrid } from './styles/GlobalGridStyles';
import { USUARIO_ATUAL_QUERY } from './UsuarioHook';

function LoginForm() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    senha: '',
  });

  const [signin, { data, loading }] = useMutation(LOGAR_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: USUARIO_ATUAL_QUERY }],
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin();
    resetForm();
    router.push('/');
  };

  const error =
    data?.authenticateUsuarioWithPassword.__typename ===
    'UsuarioAuthenticationWithPasswordFailure'
      ? data?.authenticateUsuarioWithPassword
      : undefined;

  return (
    <FormGrid>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Fazer login na sua conta</h2>
        <Fieldset>
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
          <label htmlFor="senha">
            <input
              type="password"
              name="senha"
              placeholder="Sua senha"
              autoComplete="senha"
              value={inputs.senha}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Login!</button>
        </Fieldset>
      </form>
    </FormGrid>
  );
}

export default LoginForm;
