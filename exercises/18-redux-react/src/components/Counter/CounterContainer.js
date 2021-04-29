/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */

import { connect } from "react-redux";
import Counter from "./Counter";

import { increaseCount, decreaseCount } from "../../actions";

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => {
      dispatch(increaseCount());
    },
    decreaseCount: () => {
      dispatch(decreaseCount());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
