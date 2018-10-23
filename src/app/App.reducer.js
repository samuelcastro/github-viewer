import { combineReducers } from 'redux-immutable';
import { reducer as search } from '../search';
import { reducer as dashboard } from '../dashboard';

const rootReducer = combineReducers({
  search,
  dashboard,
});

export default rootReducer;
