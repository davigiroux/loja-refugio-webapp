import styled from 'styled-components';

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  form {
    grid-column: 2/3;

    h2 {
      color: var(--primary);
    }
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    > div,
    > form {
      grid-column: 1/-1;
    }
  }
`;

export const CenterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  > div {
    grid-column: 2/3;

    h2 {
      color: var(--primary);
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    > div {
      grid-column: 1/-1;
    }
  }
`;
