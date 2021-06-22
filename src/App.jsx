import React from "react";
import { Route, Router, BrowserRouter, Switch } from "react-router-dom";

import ThemeProvider from "./providers/ThemeProvider";
import history from "./routes/history";
import routes from "./routes/routes";

import Home from "./components/views/home";
import Invoice from "./components/views/invoice";
import NotFound from "./components/views/not-found";
import NavBar from "./components/nav-bar";
import Layout from "./components/layouts/base";

const App = () => {
  return (
    <ThemeProvider>
      <Router history={history}>
        <BrowserRouter>
          <Layout>
            <NavBar />
            <Switch>
              <Route exact path={routes.invoice} component={Invoice} />
              <Route exact path={routes.home} component={Home} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Router>
    </ThemeProvider>
  );
};

export default App;
