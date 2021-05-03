import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { CADASTRAR_MUTATION } from '../api/mutations/cadastrarMutation';
import useForm from '../lib/useForm';
import MensagemDeErro from './MensagemDeErro';
import { Fieldset } from './styles/FormFieldSetStyles';
import { FormGrid } from './styles/GlobalGridStyles';

function CadastrarForm() {
  const { inputs, handleChange, resetForm, allInputsFilled } = useForm({
    email: '',
    senha: '',
    name: '',
    telefone: '',
  });
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');
  const [senhaEhValida, setSenhaEhValida] = useState(true);
  const [erros, setErros] = useState({});
  const [carregando, setCarregando] = useState(false);

  const [cadastrar, { data, loading, error }] = useMutation(
    CADASTRAR_MUTATION,
    {
      variables: inputs,
    }
  );

  const mostrarErro = (mensagem) => {
    setErros({
      message: mensagem,
    });
    setCarregando(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCarregando(true);
    setErros({});

    if (!allInputsFilled()) {
      mostrarErro('Por favor, preencha todos os campos');
      return;
    }

    if (inputs.senha !== confirmacaoSenha) {
      mostrarErro('As senhas não conferem, favor digitar de novo!');
      return;
    }

    if (!senhaEhValida) {
      mostrarErro(
        'Sua senha não está forte o suficiente, verifique se todas as regras estão atendidas'
      );
      return;
    }

    await cadastrar().catch(console.error);
    setCarregando(false);
    resetForm();
  };

  const validarSenha = (e) => {
    const senha = e.target.value;

    const senhaFortePattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d][\w~@#$%^&*+=`|{}:;!.?\"()\[\]-]{8,}$/;
    setSenhaEhValida(senhaFortePattern.test(senha));

    handleChange(e);
  };

  return (
    <FormGrid>
      <form method="post" onSubmit={handleSubmit}>
        <h2>Cadastre-se no nosso site!</h2>
        <MensagemDeErro error={erros} />
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
              className={senhaEhValida ? '' : 'invalido'}
              value={inputs.senha}
              onChange={validarSenha}
            />
          </label>
          <em>A senha deve conter no mínimo 8 caracteres, letras e números</em>
          <label htmlFor="confirmacaoSenha">
            <input
              type="password"
              name="confirmacaoSenha"
              placeholder="Confirme sua senha"
              autoComplete="password"
              className={senhaEhValida ? '' : 'invalido'}
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
          </label>
          <button type="submit" disabled={carregando}>
            {carregando ? 'Cadastrando...' : 'Cadastrar!'}
          </button>
        </Fieldset>
      </form>
    </FormGrid>
  );
}

export default CadastrarForm;
