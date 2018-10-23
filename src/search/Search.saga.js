import { takeLatest, call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import gitUrlParse from 'git-url-parse';
import { findIssuesApiSaga } from '../shared/Github.saga';
import { HTTP_REQUEST } from '../app/App.actions';

import {
  searchPendingAction,
  searchSuccessAction,
  searchFailureAction
} from './Search.actions';

// Saga generator to find issues
function* findIssuesByParams({ params: { url, redirect = false, ...rest } }) {
  try {
    yield put(searchPendingAction());

    const { owner, name, state = 'all' } = url ? gitUrlParse(url) : rest;
    const results = yield call(findIssuesApiSaga, owner, name, { state });

    yield put(searchSuccessAction(results));

    if (redirect) {
      yield put(push(`/results/${owner}/${name}?state=${state}`, { url }));
    }
  } catch ({ message }) {
    yield put(searchFailureAction(message));
  }
}

// Saga generator to watch for http requests
function* searchSaga() {
  yield takeLatest(HTTP_REQUEST, findIssuesByParams);
}

export default searchSaga;
