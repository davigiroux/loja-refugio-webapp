import styled from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  display: grid;
  padding: 0;
  margin: 0;
  grid-template-rows: repeat(5, auto);
  gap: 15px;
  align-items: center;

  label {
    width: 100%;
  }

  input {
    outline: none;
    padding: 10px 15px;
    font-size: 12px;
    width: 100%;
  }

  button {
    width: 200px;
    padding: 10px 15px;
    justify-self: right;
    margin-top: 20px;
    cursor: pointer;
    border: 1px solid var(--primary);
    color: var(--primary);
  }
`;
