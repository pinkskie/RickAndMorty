import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Routes from "./pages/routes";

import { getTheme, store } from "utils";

const Root = () => {
  const { pathname } = useLocation();
  const hideNav = /login|register/i.test(pathname);
  
  if (hideNav) {
    return (
      <div className="wrapper">
        <Routes />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="content">
        <Routes/>
      </div>
      <Nav/>
    </div>
  );
};

const App = () => {
  const isLight = useSelector(state => state.theme.isLight);

  return (
    <ThemeProvider theme={getTheme(isLight)}>
      <CssBaseline />
      <Router>
        <Root />
      </Router>
    </ThemeProvider>
  );
};

const WithProvider= () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default WithProvider;
