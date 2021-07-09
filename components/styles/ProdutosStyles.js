import styled from 'styled-components';

export const ProdutosStyles = styled.div`
  display: grid;
  padding: 0 200px;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  row-gap: 150px;

  @media (max-width: 600px) {
    padding: 0;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const ProdutoStyle = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 15px;
  align-items: top;
  justify-content: center;
  justify-items: center;
  font-size: 16px;
`;

export const ProdutoInfo = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  justify-content: center;
  justify-items: center;
  position: relative;

  .oferta-tag {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--black);
    color: var(--white);
    padding: 8px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-top: 5px;
  }

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @media (max-width: 600px) {
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    p {
      font-size: 13px;
    }

    .oferta-tag {
      padding: 4px;
      font-size: 9px;
    }
  }
`;

export const ValorDoProduto = styled.span`
  color: var(--primary);
  font-size: 20px;
  font-weight: 600;

  .preco-sem-promocao {
    margin-left: 7px;
    font-size: 12px;
    color: var(--grey);
    text-decoration: line-through;
  }

  @media (max-width: 600px) {
    font-size: 14px;

    .preco-sem-promocao {
      font-size: 10px;
    }
  }
`;
