import styled from 'styled-components';

const CarrinhoStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 15;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${(props) => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid var(--primary);
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double var(--primary);
    margin-top: 2rem;
    padding-top: 2rem;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
      color: var(--primary);

      @media (max-width: 600px) {
        font-size: 2rem;
      }
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }

  @media (max-width: 600px) {
    min-width: 70%;
  }
`;

export default CarrinhoStyles;
