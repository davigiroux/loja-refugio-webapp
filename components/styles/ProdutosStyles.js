import styled from 'styled-components';

export const ProdutosStyles = styled.div`
  display: grid;
  padding: 0 200px;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  row-gap: 150px;
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
`;

export const ValorDoProduto = styled.span`
  color: var(--primary);
  font-size: 20px;
  font-weight: 600;
`;
