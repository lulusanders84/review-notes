import React from 'react';
import './App.css';
import MainPage from '../src/components/MainPage/MainPage'
import MainPageDev from '../src/components/MainPage/MainPageDev'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { Provider } from 'react-redux';
import store from '../src/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPageContainer from './components/MainPage/MainPageContainer';


const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }
  },
});
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/" exact={true}>
            <MainPageContainer component={<MainPage />} />
          </Route>
          <Route path="/dev" exact={true}>
            <MainPageContainer component={<MainPageDev />} />
          </Route>
        </Router>
      </ThemeProvider>  
    </Provider> 
  );
}

export default App;
