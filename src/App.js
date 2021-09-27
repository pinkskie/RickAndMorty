import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Provider } from 'react-redux'
import Nav from './components/Nav/Nav';
import Routes from './pages/routes';
import { theme } from 'utils';
import store from 'utils/store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div  style={{height: '100vh'}}>
          <Router>
            <div style={{ height: 'calc(100vh - 56px', overflow: 'scroll'}}>
              <Routes/>
            </div>
            <Nav/>
          </Router>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
