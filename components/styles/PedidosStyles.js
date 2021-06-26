import styled from 'styled-components';

export const PedidosStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(700px, 1fr) 1fr;

  > div {
    grid-column: 2/3;

    h2 {
      color: var(--primary);
    }
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr;

    > div {
      grid-column: 1/-1;
    }
  }
`;

export const PedidoStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  border: 1px solid var(--grey);
  padding: 10px 15px;
  margin-bottom: 15px;

  .data-do-pedido,
  .link-do-pedido {
    justify-self: right;
  }

  .link-do-pedido {
    background-color: transparent;
    border: none;
    align-self: end;
    font-weight: 600;
  }

  .valor-do-pedido {
    font-size: 18px;
    color: var(--grey);
  }

  @media (max-width: 600px) {
    font-size: 12px;
    gap: 5px;
    padding: 5px 10px;
    .link-do-pedido {
      font-size: 13px;
    }

    .valor-do-pedido {
      font-size: 11px;
    }

    h2 {
    }
  }
`;
