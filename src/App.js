import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Routes from "./pages/routes";

import { theme, store } from "utils";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="wrapper">
          <Router>
            <div className="content">
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
