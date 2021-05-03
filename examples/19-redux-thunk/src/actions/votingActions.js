import * as types from "../constants/actionTypes";

import { voteRequest } from "../services/api";

const ajaxLoading = () => {
  return {
    type: types.VOTE_PENDING,
  };
};

const ajaxSuccess = (categoryId, nomineeIndex) => {
  return {
    type: types.VOTE_FULFILLED,
    categoryId,
    nomineeIndex,
  };
};

const ajaxRejected = () => {
  return {
    type: types.VOTE_REJECTED,
  };
};

export const vote = (categoryId, nomineeIndex) => {
  return (dispatch) => {
    dispatch(ajaxLoading());
    voteRequest(categoryId, nomineeIndex)
      .then(() => dispatch(ajaxSuccess(categoryId, nomineeIndex)))
      .catch(() => dispatch(ajaxRejected()));
  };
};
