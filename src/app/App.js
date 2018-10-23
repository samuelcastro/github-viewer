import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import store, { history } from './App.config';

import AppRouters from './App.router';

export const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppRouters />
    </ConnectedRouter>
  </Provider>
);

// export default hot(module)(App);
export default App;
