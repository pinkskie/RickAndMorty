import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { Provider } from "react-redux";

import { CssBaseline, ThemeProvider } from "@material-ui/core";
import Nav from "./components/Nav/Nav";
import Routes from "./pages/routes";

import { theme, store } from "utils";

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

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Root />
      </Router>
    </ThemeProvider>
  </Provider>
);

export default App;
