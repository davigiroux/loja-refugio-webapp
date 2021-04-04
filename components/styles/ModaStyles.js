import styled from 'styled-components';

export const ModaGrid = styled.div`
  display: grid;
  justify-content: center;
  justify-items: center;

  h1 {
    font-size: 40px;
    color: var(--primary);
    font-weight: 400;
    letter-spacing: 2px;
    border-bottom: 1px solid var(--lightPrimary);
    margin-bottom: 80px;
    display: grid;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: center;
    justify-items: center;

    img {
      width: 100px;
    }
  }
`;
