import styled from 'styled-components';
import { any } from 'prop-types';
import BotaoDeFechar from './styles/BotaoDeFechar';
import { useCarrinho } from '../lib/carrinhoState';
import RemoverDoCarrinho from './RemoverDoCarrinho';
import { useUsuario } from './UsuarioHook';
import CarrinhoStyles from './styles/CarrinhoStyles';
import formatarDinheiro from '../lib/formatarDinheiro';
import calcularPrecoTotal from '../lib/calcularPrecoTotal';
import BotaoDeFazerPedido from './BotaoDeFazerPedido';

const ItemCarrinhoStyles = styled.li`
  display: grid;
  padding: 1rem 0;
  border-bottom: 1px solid var(--lightGrey);
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding-right: 15px;
  img {
    margin-right: 1rem;
    align-self: center;
  }
  h3,
  p {
    margin: 0;
  }
`;

function ItemCarrinho({ itemCarrinho }) {
  const { produto } = itemCarrinho;

  if (!produto) return null;

  return (
    <ItemCarrinhoStyles>
      <img
        width="100"
        src={produto.foto.imagem.publicUrlTransformed}
        alt={produto.name}
      />
      <div>
        <h3>{produto.name}</h3>
        <p>
          {formatarDinheiro(produto.preco * itemCarrinho.quantidade)}
          <br />
          <span style={{ fontSize: '10px' }}>
            <em>{itemCarrinho.quantidade} &times;</em>{' '}
            {formatarDinheiro(produto.preco)}
          </span>
        </p>
        <em>Tamanho: {itemCarrinho.etiqueta}</em>
      </div>
      <RemoverDoCarrinho id={itemCarrinho.id} />
    </ItemCarrinhoStyles>
  );
}

ItemCarrinho.propTypes = {
  itemCarrinho: any,
};

export { ItemCarrinho };

function Carrinho() {
  const usuario = useUsuario();
  const { carrinhoAberto, fecharCarrinho } = useCarrinho();

  if (!usuario) return null;

  return (
    <CarrinhoStyles open={carrinhoAberto}>
      <header>
        <p>Carrinho de {usuario.name}</p>
        <BotaoDeFechar type="button" onClick={fecharCarrinho}>
          &times;
        </BotaoDeFechar>
      </header>
      <ul>
        {usuario.carrinho.map((itemCarrinho) => (
          <ItemCarrinho
            key={itemCarrinho.id}
            itemCarrinho={itemCarrinho}
            suppressHydrationWarning
          />
        ))}
      </ul>
      <footer>
        <p>{formatarDinheiro(calcularPrecoTotal(usuario.carrinho))}</p>
        <BotaoDeFazerPedido />
      </footer>
    </CarrinhoStyles>
  );
}

export default Carrinho;
