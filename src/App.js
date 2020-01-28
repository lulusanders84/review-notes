import React from 'react';
import './App.css';
import MainPage from '../src/components/MainPage/MainPage'
import MainPageDev from '../src/components/MainPage/MainPageDev'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { handlePolicyScraping } from '../src/data/scrapePolicies';
import { Provider } from 'react-redux';
import store from '../src/store';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainPageContainer from './components/MainPage/MainPageContainer';
import { getBcbsPolicyLinks } from './utils/Policies/getBcbsPolicyLinks';

const theme = createMuiTheme({
  palette: {
    primary: { main: blue[500] }, // Purple and green play nicely together.
  },
});
function App() {
  getBcbsPolicyLinks();
  React.useEffect(() => {
    handlePolicyScraping();
  }, []);
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
