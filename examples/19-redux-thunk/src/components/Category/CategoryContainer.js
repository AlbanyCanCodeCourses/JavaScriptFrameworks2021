import { connect } from "react-redux";
import Category from "./Category";

import { fetchAllNominees } from "../../actions/fetchAllNomineesActions";
import { vote } from "../../actions/votingActions";

function mapPropsToState({ categories, votes, isLoading, hasError }) {
  return {
    categories,
    votes,
    isLoading,
    hasError
  };
}

function mapDispatchToState(dispatch) {
  return {
    fetchAllNominees: () => dispatch(fetchAllNominees()),
    vote: (categoryId, nomineeIndex) => dispatch(vote(categoryId, nomineeIndex))
  };
}

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Category);
