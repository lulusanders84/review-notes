import React from 'react';
import './App.css';
import MainPage from '../src/components/MainPage/MainPage'
import MainPageDev from '../src/components/MainPage/MainPageDev'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { scrapePolicies } from '../src/data/scrapePolicies';
import { Provider } from 'react-redux';
import store from '../src/store';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
  },
});
function App() {
  React.useEffect(() => {
    scrapePolicies();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/" component={<MainPage />} />
            <Route path="/dev" component={<MainPageDev />} />
          </Switch>
        </Router>
      </ThemeProvider>  
    </Provider>

    
  );
}

export default App;
