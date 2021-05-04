import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    memberId: null,
    votes: {}
  },
  action
) => {
  switch (action.type) {
    case types.FETCH_ALL_NOMINEES_FULFILLED: {
      const { categories } = action.payload;
      return {
        ...state,
        categories,
        isLoading: false,
        hasError: false
      };
    }
    case types.VOTE_FULFILLED: {
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.categoryId]: action.nomineeIndex
        },
        isLoading: false,
        hasError: false
      };
    }
    case types.FETCH_ALL_NOMINEES_PENDING:
    case types.VOTE_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case types.FETCH_ALL_NOMINEES_REJECTED:
    case types.VOTE_REJECTED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
};

export default reducer;
