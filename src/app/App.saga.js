import { all, fork } from 'redux-saga/effects';
import { saga as searchSaga } from '../search';
import { saga as dashboardSaga } from '../dashboard';

export default function* rootSaga() {
  yield all([fork(searchSaga), fork(dashboardSaga)]);
}
