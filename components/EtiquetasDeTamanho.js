import { array, string } from 'prop-types';
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
  const etiquetas = estoque.map((e) => ({
    tamanho: e.etiqueta,
    quantidade: e.quantidade,
    texto: e.etiqueta === 'tamanho-unico' ? 'Tamanho único' : e.etiqueta,
  }));

  return (
    <>
      {etiquetas.map((etiqueta, index) => (
        <CustomLabel
          key={index}
          htmlFor={`etiqueta-${etiqueta.tamanho}`}
          className={`tamanho-etiqueta 
          ${etiqueta.quantidade > 0 ? '' : 'indisponivel'} 
          ${etiquetaSelecionada === etiqueta.tamanho ? 'selecionado' : ''}
          ${etiqueta.tamanho === 'tamanho-unico' ? 'texto' : 'circulo'}`}
        >
          <CustomRadio
            type="radio"
            name="etiqueta"
            id={`etiqueta-${etiqueta.tamanho}`}
            value={etiqueta.tamanho}
            disabled={etiqueta.quantidade <= 0}
          />
          {etiqueta.texto}
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
