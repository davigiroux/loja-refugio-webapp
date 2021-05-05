import { any } from 'prop-types';
import Link from 'next/link';
import {
  ProdutoStyle,
  ValorDoProduto,
  ProdutoInfo,
} from './styles/ProdutosStyles';
import formatarDinheiro from '../lib/formatarDinheiro';

function Produto({ produto }) {
  return (
    <ProdutoStyle>
      <Link href={`/produto/${produto.id}`}>
        <ProdutoInfo>
          <img
            src={produto?.fotos[0]?.imagem?.publicUrlTransformed}
            alt={produto?.fotos[0]?.imagem?.tituloDaImagem}
          />
          <p>{produto.name}</p>
          <ValorDoProduto>{formatarDinheiro(produto.preco)}</ValorDoProduto>
        </ProdutoInfo>
      </Link>
    </ProdutoStyle>
  );
}

Produto.propTypes = {
  produto: any,
};

export default Produto;
