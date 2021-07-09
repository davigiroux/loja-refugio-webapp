import { any } from 'prop-types';
import Link from 'next/link';
import {
  ProdutoStyle,
  ValorDoProduto,
  ProdutoInfo,
} from './styles/ProdutosStyles';
import formatarDinheiro from '../lib/formatarDinheiro';
import { formatarPorcentagem } from '../lib/formatarPorcentagem';

function Produto({ produto }) {
  const ehPromocao = produto.precoPromocional !== null;

  return (
    <ProdutoStyle>
      <Link href={`/produto/${produto.id}`}>
        <ProdutoInfo>
          <img
            src={produto?.fotos[0]?.imagem?.publicUrlTransformed}
            alt={produto?.fotos[0]?.imagem?.tituloDaImagem}
          />
          <p>{produto.name}</p>
          <span className="oferta-tag" hidden={!ehPromocao}>
            {formatarPorcentagem(produto.preco, produto.precoPromocional)} off
          </span>
          <ValorDoProduto>
            <span hidden={!ehPromocao}>
              {formatarDinheiro(produto.precoPromocional)}
            </span>
            <span className={ehPromocao ? 'preco-sem-promocao' : ''}>
              {formatarDinheiro(produto.preco)}
            </span>
          </ValorDoProduto>
        </ProdutoInfo>
      </Link>
    </ProdutoStyle>
  );
}

Produto.propTypes = {
  produto: any,
};

export default Produto;
