import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

import Nav from './components/Nav/Nav';
import Routes from './pages/routes';
import { theme } from 'utils';

function App() {
  return (
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
  );
}

export default App;
