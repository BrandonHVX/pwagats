import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import Home from './Home';

import theme from './theme';
import reset from './reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .nav-active {
    color: ${theme.brand.primary} !important;
  }
`;

// We can pass customSEO here to not include the <SEO> component twice. This prop is 'true' on the project template
// as the SEO component there passes in some additional things. Otherwise things would be inserted two times

const Layout = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Home />
		Hello
	</ThemeProvider>
);

export default Layout;
