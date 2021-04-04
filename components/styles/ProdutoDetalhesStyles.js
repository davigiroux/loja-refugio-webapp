import styled from 'styled-components';

export const ProdutoDetalhesStyles = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 60px;
  margin-top: 30px;

  h3 {
    color: var(--black);
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
    font-size: 18px;
  }

  .preco {
    color: var(--primary);
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    margin-bottom: 40px;
  }

  .tamanhos {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 15px;

    .etiquetas {
      justify-items: center;
      grid-row: 2/3;
      grid-column: 1/2;
      display: grid;
      gap: 5px;
      grid-template-columns: repeat(5, 1fr);

      .tamanho-etiqueta {
        display: grid;
        border: 1px solid var(--grey);
        border-radius: 40px;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-content: center;
        cursor: pointer;

        &.indisponivel {
          background-color: var(--lightGrey);
          color: var(--grey);
          border-color: var(--grey);
          cursor: not-allowed;
          text-decoration: line-through;
        }
      }
    }
  }
`;

export const Tags = styled.div`
  margin: 35px 0;

  .tag {
    background-color: var(--grey);
    color: var(--offWhite);
    padding: 5px;
    font-size: 12px;
    border-radius: 3px;
    margin: 3px;
  }
`;
