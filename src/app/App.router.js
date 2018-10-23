import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Loading } from './components';

/**
 * Here I'm importing components asynchronously (proposal-dynamic-import)
 * https://github.com/tc39/proposal-dynamic-import
 */

// Async search import
const AsyncSearch = Loadable({
  loading: () => <Loading />,
  loader: () => import('../search')
});

// Async dashboard import
const AsyncDashboard = Loadable({
  loading: () => <Loading />,
  loader: () => import('../dashboard')
});

const AppRouters = () => (
  <Switch>
    <Route exact path="/" component={AsyncSearch} />
    <Route path="/results/:owner/:repo" component={AsyncDashboard} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default AppRouters;
