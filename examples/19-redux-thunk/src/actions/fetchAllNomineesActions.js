import * as types from "../constants/actionTypes";

import { fetchAllNomineesRequest } from "../services/api";

const ajaxLoading = () => {
  return {
    type: types.FETCH_ALL_NOMINEES_PENDING
  };
};

const ajaxSuccess = payload => {
  return {
    type: types.FETCH_ALL_NOMINEES_FULFILLED,
    payload
  };
};

const ajaxFailure = () => {
  return {
    type: types.FETCH_ALL_NOMINEES_REJECTED
  };
};

export const fetchAllNominees = () => {
  return dispatch => {
    dispatch(ajaxLoading());
    fetchAllNomineesRequest()
      .then(response => dispatch(ajaxSuccess(response)))
      .catch(() => dispatch(ajaxFailure()));
  };
};
