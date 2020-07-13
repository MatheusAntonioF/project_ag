import React from 'react';

import { ThemeProvider } from 'styled-components';

import dark_theme from '~/styles/theme/dark';

import GlobalStyle from '~/styles/global';

import Dashboard from '~/pages/Dashboard';

function App() {
  return (
    <ThemeProvider theme={dark_theme}>
      <GlobalStyle />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
