import { Map } from 'immutable';
import { cond, T, flip, isNil, identity, always, ifElse } from 'ramda';

import { HTTP_SUCCESS } from '../app/App.actions';
import { isTypeOf } from '../app/App.helpers';

const initialState = Map({ results: [] });

const defaultState = ifElse(isNil, always(initialState), identity);
const setDashboardState = (state, { results }) => state.set('results', results);

const isTypeSuccess = isTypeOf(HTTP_SUCCESS);

const isSuccessAction = flip(isTypeSuccess);

const dashboardReducer = cond([
  [isSuccessAction, setDashboardState],
  [T, defaultState]
]);

export default dashboardReducer;
