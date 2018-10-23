import { Map } from 'immutable';
import { cond, T, flip, compose, isNil, identity, always, ifElse, curry } from 'ramda';

import { HTTP_FAILURE, HTTP_PENDING, HTTP_SUCCESS } from '../app/App.actions';
import { isTypeOf } from '../app/App.helpers';

const initialState = Map({ error: null, loading: false, hydrated: false });

const setErrorState = (state, { error }) => state.set('error', error);
const setHydrated = curry((isHydrated, state) => state.set('hydrated', isHydrated));
const setLoadingState = curry((bool, state) => state.set('loading', bool));

const setFailureState = compose(setLoadingState(false), setErrorState);
const setPendingState = compose(setLoadingState(true), setErrorState);
const setSuccessState = compose(setLoadingState(false), setHydrated(true))
const defaultState = ifElse(isNil, always(initialState), identity);

const isTypePending = isTypeOf(HTTP_PENDING);
const isTypeFailure = isTypeOf(HTTP_FAILURE);
const isTypeSuccess = isTypeOf(HTTP_SUCCESS);

const isPendingAction = flip(isTypePending);
const isFailureAction = flip(isTypeFailure);
const isSuccessAction = flip(isTypeSuccess)

const searchReducer = cond([
  [isPendingAction, setPendingState],
  [isFailureAction, setFailureState],
  [isSuccessAction, setSuccessState],
  [T, defaultState],
]);

export default searchReducer;
