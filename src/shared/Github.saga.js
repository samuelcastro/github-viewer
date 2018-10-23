import { call } from 'redux-saga/effects';
import { findIssues } from './Github.api';

// common generator saga api call
export function* findIssuesApiSaga(owner, name, params) {
  if (!owner || !name) throw new Error('Oops, this is not a valid url!');

  return yield call(
    findIssues,
    owner,
    name,
    params,
    params.state === 'pull-request'
  );
}

export default findIssuesApiSaga;
