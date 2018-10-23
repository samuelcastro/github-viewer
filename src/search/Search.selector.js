import { createSelector } from 'reselect';

import { compose, isNil, complement } from 'ramda';

const isNotNil = complement(isNil);

export const getSearchState = state => state.get('search');
export const getError = state => state.get('error');
export const isLoading = state => state.get('loading');
export const isHydrated = state => state.get('hydrated');

export const hasError = compose(isNotNil, getError);

// Memoization
export const hasErrorSelector = createSelector(getSearchState, hasError);
export const errorMessageSelector = createSelector(getSearchState, getError);
export const isLoadingSelector = createSelector(getSearchState, isLoading);
export const isHydratedSelector = createSelector(getSearchState, isHydrated);
