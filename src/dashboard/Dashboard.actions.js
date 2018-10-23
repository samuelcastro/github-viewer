export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';
export const FILTER_CHANGE = 'FILTER_CHANGE';

export const dashboardFilterChangeAction = location => ({
  type: FILTER_CHANGE,
  payload: { location }
});
