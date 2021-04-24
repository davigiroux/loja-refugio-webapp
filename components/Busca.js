/* eslint-disable react/jsx-props-no-spreading */
import { useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { BUSCAR_PRODUTOS_QUERY } from '../api/queries/buscaQuery';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

function Busca() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [findItems, { loading, data, error }] = useLazyQuery(
    BUSCAR_PRODUTOS_QUERY,
    {
      fetchPolicy: 'no-cache',
    }
  );
  const findItemsButChill = debounce(findItems, 250);
  const items = data?.searchTerms || [];
  resetIdCounter();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    selectItem,
    getComboboxProps,
    highlightedIndex,
    closeMenu,
  } = useCombobox({
    items,
    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue,
        },
      });
    },
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/produto/${selectedItem.id}`,
      });
      closeMenu();
    },
    itemToString: (item) => item.name || '',
  });

  const SearchBox = styled.div`
    width: auto;

    .fa-search {
      position: absolute;
      font-size: 20px;
      color: var(--primary);
    }
  `;

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <input
          {...getInputProps({
            type: 'search',
            placeholder: 'Buscar um produto...',
            id: 'search',
            className: isLoading ? 'loading' : '',
          })}
        />
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <DropDownItem
              onClick={() => selectItem(item)}
              highlighted={index === highlightedIndex}
              {...getInputProps({ item })}
              key={item.id}
            >
              <img
                src={item.foto.imagem.publicUrlTransformed}
                alt={item.name}
                width="50"
              />
              {item.name}
            </DropDownItem>
          ))}
        {isOpen && !items.length && !loading && (
          <DropDownItem>
            Desculpe, nenhum item encontrado para "{inputValue}"
          </DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}

export default Busca;
