import {
  HTTP_REQUEST,
  HTTP_SUCCESS,
  HTTP_FAILURE,
  HTTP_PENDING
} from '../app/App.actions';

export const searchRequestAction = params => ({
  type: HTTP_REQUEST,
  params
});

export const searchSuccessAction = results => ({
  type: HTTP_SUCCESS,
  results
});

export const searchFailureAction = error => ({
  type: HTTP_FAILURE,
  error
});

export const searchPendingAction = () => ({
  type: HTTP_PENDING
});
