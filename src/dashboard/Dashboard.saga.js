import { takeLatest, put } from 'redux-saga/effects';
import { parseLocation } from '../shared/Shared.helpers';
import { LOCATION_CHANGE } from './Dashboard.actions';
import { searchRequestAction } from '../search/Search.actions';

/**
 * Filter Issues by params
 * Also handles cases when user changes the url/filters directly in the browser
 * If event is a POP state re-fetch data
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * @param {*} router action payload
 */
function* findIssuesByLocationChange({ payload: { action, location } }) {
  const { owner, name, state } = parseLocation(location);
  const params = { owner, name, state };
  const hasFilter = owner && name && state;

  if ((location.pathname !== '/' && action === 'POP') || hasFilter) {
    yield put(searchRequestAction(params));
  }
}

// Saga generator to watch for http requests
function* dashboardSaga() {
  yield takeLatest(LOCATION_CHANGE, findIssuesByLocationChange);
}

export default dashboardSaga;
