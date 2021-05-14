import styled from 'styled-components';

export const ProdutoDetalhesStyles = styled.div`
  display: grid;
  grid-template-columns: 390px 1fr;
  column-gap: 60px;
  margin-top: 30px;

  > img {
    justify-self: center;
  }

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
    margin-bottom: 20px;
  }

  .tamanhos {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 15px;
    color: var(--grey);

    .etiquetas {
      justify-items: center;
      grid-row: 2/3;
      grid-column: 1/2;
      display: grid;
      gap: 5px;
      grid-template-columns: repeat(5, 1fr);

      .tamanho-etiqueta {
        &.indisponivel {
          background-color: var(--lightGrey);
          color: var(--grey);
          border-color: var(--grey);
          cursor: not-allowed;
          text-decoration: line-through;
        }
      }

      .circulo {
        display: grid;
        border: 1px solid var(--grey);
        border-radius: 40px;
        width: 40px;
        height: 40px;
        justify-content: center;
        align-content: center;
        cursor: pointer;
      }

      .texto {
        display: grid;
        border: 1px solid var(--grey);
        width: 135px;
        align-content: center;
        justify-content: center;
      }
    }
  }
`;

export const GridDeFotos = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  margin-top: 15px;
  justify-content: left;

  .caixa-imagem {
    width: 70px;
    border: 1px solid var(--lightPrimary);
    display: grid;

    img {
      width: 100%;
      height: 70px;
      object-fit: cover;
    }

    &:hover {
      border: 1px solid var(--primary);
      cursor: pointer;
    }

    &.selecionada {
      border: 2px solid var(--primary);
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
