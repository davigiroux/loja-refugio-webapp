import styled from 'styled-components';

const PaginacaoStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin-bottom: 2rem;
  border: 1px solid var(--lightGray);
  border-radius: 10px;

  & > * {
    margin: 0;
    padding: 15px 30px;
    border-right: 1px solid var(--lightGray);
    &:last-child {
      border-right: 0;
    }
  }
  a[aria-disabled='true'] {
    color: grey;
    pointer-events: none;
  }

  @media (max-width: 600px) {
    font-size: 10px;

    & > * {
      padding: 5px 10px;
      border-right: 1px solid var(--lightGray);
      &:last-child {
        border-right: 0;
      }
    }
  }
`;

export default PaginacaoStyles;
