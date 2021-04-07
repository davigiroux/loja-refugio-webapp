import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`


  html {
    --primary: #6e7e79;
    --lightPrimary: #b6c6c1;
    --red: #ff0000;
    --black: #212121;
    --grey: #3a3a3a;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.99);
    box-sizing: border-box;   
    font-size: 10px; 
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    background-color: var(--offWhite);
  }

  a {
    text-decoration: none;
    color: var(--black);
  }

  a:hover {
    text-decoration: underline;
  }

  button {
    font-family:  'Montserrat', ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyle = styled.div`
  max-width: var(--maxWwidth);
  margin: 0 auto;
  padding: 110px 15px;
`;

function Page({ children }) {
  return (
    <div>
      <Head>
        <title>Loja Refúgio</title>
      </Head>

      <GlobalStyles />
      <InnerStyle>{children}</InnerStyle>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};

export default Page;
