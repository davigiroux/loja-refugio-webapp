/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';
import withData from '../lib/withData';
import Page from '../components/global/Page';
import Nav from '../components/global/Nav';
import { CarrinhoStateProvider } from '../lib/carrinhoState';
import { MobileMenuStateProvider } from '../contexts/MobileMenuContext';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <MobileMenuStateProvider>
        <CarrinhoStateProvider>
          <Nav />
          <Page>
            <Component {...pageProps} />
          </Page>
        </CarrinhoStateProvider>
      </MobileMenuStateProvider>
    </ApolloProvider>
  );
}

App.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(App);
