/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */
import { connect } from "react-redux";
import { increaseCount, decreaseCount } from "../../actions";

/**
 * Import something form Redux here
 */
import Counter from "./Counter";

/**
 * Import the actions that you need
 */

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

/**
 * Complete this function. You may need to pass in arguements
 */

// Method 1
function mapDispatchToProps(dispatch) {
  return {
    increaseCount: () => dispatch(increaseCount()),
    decreaseCount: () => dispatch(decreaseCount()),
  };
}
// Method 2
const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
};

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
