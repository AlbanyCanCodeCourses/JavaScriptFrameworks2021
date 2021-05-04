/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */

/**
 * Import something form Redux here
 */
import {connect} from 'react-redux';
import Counter from "./Counter";

/**
 * Import the actions that you need
 */

import { increaseCount, decreaseCount } from "../../actions";

/**
 * Complete this function. You may need to pass in arguements
 */
function mapStateToProps(state) {
    console.log("state", state)
    return {
        count: state.count
    }
}

/**
 * Complete this function. You may need to pass in arguements
 */
const mapDispatchToProps = (dispatch) => {
    return {
        increaseCount: ()=> dispatch(increaseCount()),
        decreaseCount: ()=> dispatch(decreaseCount())
    }
}

//could be 
//const mapDispatchToProps = {
//   increaseCount,
//   decreateCount
//}

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
