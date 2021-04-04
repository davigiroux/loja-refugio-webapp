import { array, bool, string } from 'prop-types';
import styled from 'styled-components';

const CustomLabel = styled.label`
  &.selecionado {
    background-color: var(--black);
    color: var(--offWhite);
  }
`;

const CustomRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

function EtiquetasDeTamanho({ estoque, etiquetaSelecionada }) {
  const tamanhos = ['PP', 'P', 'M', 'G', 'GG'];

  const etiquetas = tamanhos.map((tamanho) => {
    const item = estoque.find((e) => e.etiqueta === tamanho);

    return {
      tamanho,
      quantidade: item ? item.quantidade : 0,
    };
  });

  return (
    <>
      {etiquetas.map((etiqueta, index) => (
        <CustomLabel
          key={index}
          htmlFor={`etiqueta-${etiqueta.tamanho}`}
          className={`tamanho-etiqueta ${
            etiqueta.quantidade > 0 ? '' : 'indisponivel'
          } ${etiquetaSelecionada === etiqueta.tamanho ? 'selecionado' : ''}`}
        >
          <CustomRadio
            type="radio"
            name="etiqueta"
            id={`etiqueta-${etiqueta.tamanho}`}
            value={etiqueta.tamanho}
            disabled={etiqueta.quantidade <= 0}
          />
          {etiqueta.tamanho}
        </CustomLabel>
      ))}
    </>
  );
}

EtiquetasDeTamanho.propTypes = {
  estoque: array,
  etiquetaSelecionada: string,
};

export default EtiquetasDeTamanho;
