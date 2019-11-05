import React from 'react';
import './App.css';
import MainPage from '../src/components/MainPage/MainPage'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';

import { Provider } from 'react-redux';
import store from '../src/store';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
  },
});
function App() {
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainPage />
      </ThemeProvider>  
    </Provider>

    
  );
}

export default App;
