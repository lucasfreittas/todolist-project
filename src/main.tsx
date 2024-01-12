import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import GlobalStyle from './Styles/global';

import { App } from './Pages/App';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
)
