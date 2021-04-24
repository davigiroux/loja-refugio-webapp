import { useQuery } from '@apollo/client';
import { string } from 'prop-types';
import { useState } from 'react';
import formatarDinheiro from '../lib/formatarDinheiro';
import AddNoCarrinho from './AddNoCarrinho';
import { CenterGrid } from './styles/GlobalGridStyles';
import { ProdutoDetalhesStyles, Tags } from './styles/ProdutoDetalhesStyles';
import EtiquetasDeTamanho from './EtiquetasDeTamanho';
import { PRODUTO_DETALHES_QUERY } from '../api/queries/produtosQueries';

function ProdutoDetalhes({ id }) {
  const { data, error, loading } = useQuery(PRODUTO_DETALHES_QUERY, {
    variables: { id },
  });
  const [tamanhoEtiqueta, setTamanhoEtiqueta] = useState('');

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>Erro ao buscar o produto</p>;

  const { Produto: produto } = data;
  return (
    <CenterGrid>
      <ProdutoDetalhesStyles>
        <img
          src={produto.foto.imagem.publicUrlTransformed}
          width="auto"
          height="350"
          alt={produto.name}
        />
        <div>
          <h3>{produto.name}</h3>
          <p className="preco">{formatarDinheiro(produto.preco)}</p>
          <div className="tamanhos">
            {produto.estoque.length > 0
              ? 'tamanhos:'
              : 'Sem estoque disponível'}
            <div
              className="etiquetas"
              onChange={(e) => setTamanhoEtiqueta(e.target.value)}
            >
              <EtiquetasDeTamanho
                estoque={produto.estoque}
                etiquetaSelecionada={tamanhoEtiqueta}
              />
            </div>
          </div>
          <Tags>
            {produto.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag.name}
              </span>
            ))}
          </Tags>
          <AddNoCarrinho
            id={produto.id}
            etiqueta={tamanhoEtiqueta}
            desabilitado={tamanhoEtiqueta === ''}
          />
        </div>
      </ProdutoDetalhesStyles>
    </CenterGrid>
  );
}

ProdutoDetalhes.propTypes = {
  id: string,
};

export default ProdutoDetalhes;
