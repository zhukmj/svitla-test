import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import store from './redux/store';
import Main from './components/Main';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Main />
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
