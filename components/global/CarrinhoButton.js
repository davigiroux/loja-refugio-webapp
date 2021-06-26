import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { func, number } from 'prop-types';
import styled from 'styled-components';

const CarrinhoButtonStyles = styled.div`
  #carrinho {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: var(--offWhite);
    font-size: 18px;

    .fa-shopping-bag {
      font-size: 28px;
      margin-top: 17px;
    }

    .items-counter {
      display: grid;
      border-radius: 17px;
      width: 17px;
      height: 17px;
      background-color: var(--red);
      position: relative;
      color: var(--offWhite);
      font-size: 12px;
      justify-content: center;
      align-content: center;
      bottom: 15px;
      left: 15px;
      transition-duration: 0.2s;
    }

    &:hover {
      .items-counter {
        background-color: #ff4b4b;
      }
    }
  }
`;

function CarrinhoButton({ handleClick, qtdItens }) {
  return (
    <CarrinhoButtonStyles>
      <button id="carrinho" type="button" onClick={handleClick}>
        <FontAwesomeIcon icon={faShoppingBag} />
        <div className="items-counter">{qtdItens}</div>
      </button>
    </CarrinhoButtonStyles>
  );
}

CarrinhoButton.propTypes = {
  handleClick: func,
  qtdItens: number,
};

export default CarrinhoButton;
