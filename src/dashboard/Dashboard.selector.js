import { createSelector } from 'reselect';

export const getDashboard = state => state.get('dashboard');
export const getResults = dashboard => dashboard.get('results');

// Memoized getDashboadResults
export const getDashboadResults = createSelector(getDashboard, getResults);
