import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { Map } from 'immutable';

import reducers from './App.reducer';
import sagas from './App.saga';

export const history = createBrowserHistory();

const initialState = Map();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [routerMiddleware(history), sagaMiddleware, logger];

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const store = createStore(
  connectRouter(history)(reducers),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

export default store;
