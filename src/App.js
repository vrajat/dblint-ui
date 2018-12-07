import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';
import './App.scss';
import { loadState } from "./lib/localStorage";
import { v4 } from 'node-uuid';
import { Mixpanel } from "./lib/MixPanel";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./components/DbApp'),
  loading
});

class App extends Component {
 render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
