/* eslint-disable no-unused-vars */
import fetch from 'isomorphic-unfetch';
/* eslint-enable no-unused-vars */
import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Cookies from 'js-cookie';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../lib/getPageContext';

class MainApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  pageContext = null;

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    const token = Cookies.get('access_token');

    const client = new ApolloClient({
      uri: 'https://api.github.com/graphql',
      headers: { authorization: `Bearer ${token}` },
    });

    return (
      <Container>
        <ApolloProvider client={client}>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
                tree thanks to React context. */}
            <MuiThemeProvider
              theme={this.pageContext.theme}
              sheetsManager={this.pageContext.sheetsManager}
            >
              {/*
                  CssBaseline kickstart an elegant,
                  consistent, and simple baseline to build upon.
              */}
              <CssBaseline />
              {/* Pass pageContext to the _document though the renderPage enhancer
                  to render collected styles on server side. */}
              <Component pageContext={this.pageContext} {...pageProps} />
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default MainApp;
