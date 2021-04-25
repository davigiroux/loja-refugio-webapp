import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import { formatarTelefone } from '../lib/formatarTelefone';
import { ItemCarrinho } from './Carrinho';
import Checkout from './Checkout';
import { CenterGrid } from './styles/GlobalGridStyles';
import { useUsuario } from './UsuarioHook';

const Observacao = styled.div`
  text-align: justify;
  font-size: 14px;
`;

function ConfirmacaoDePedido() {
  const router = useRouter();
  const numeroMasculino = '+5567999778116';
  const numeroFeminino = '+5567991242757';
  const mensagem = 'Olá, gostaria de falar com o atendimento da Loja Refúgio!';

  const usuario = useUsuario();
  if (!usuario) router.push({ pathname: '/' });

  const ehApenasModaMasculina = usuario.carrinho.every((item) =>
    item.produto.tags.every((tag) => tag.name === 'moda masculina')
  );

  const numeroWhats = ehApenasModaMasculina ? numeroMasculino : numeroFeminino;

  const linkParaWhatsapp = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
    numeroWhats
  )}&text=${encodeURIComponent(mensagem)}`;
  return (
    <CenterGrid>
      <div>
        <h2>Confirmar dados do pedido</h2>
        <p>
          <i>
            <Observacao>
              *Ao confirmar seu pedido, será enviado um email com um número de
              identificação. A Loja então entrará em contato pelo seu número de
              Whatsapp cadastrado para definir os detalhes de pagamento e
              entrega.
              <br />
              {usuario?.telefone &&
                ` <br /> O número de telefone que será utilizado é: ${formatarTelefone(
                  usuario.telefone
                )}`}
              <br /> <br />
              Ou você pode entrar em contato com nosso atendimento{' '}
              <a
                style={{ fontSize: '12px', textTransform: 'uppercase' }}
                href={linkParaWhatsapp}
                target="_blank"
                rel="noreferrer"
              >
                Clicando aqui
              </a>
              .
            </Observacao>
          </i>
        </p>
        <hr />
        <ul>
          <h3>Itens:</h3>
          {usuario.carrinho.map((itemCarrinho) => (
            <ItemCarrinho key={itemCarrinho.id} itemCarrinho={itemCarrinho} />
          ))}
        </ul>
        <Checkout />
      </div>
    </CenterGrid>
  );
}

export default ConfirmacaoDePedido;
