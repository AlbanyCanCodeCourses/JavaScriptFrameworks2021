/**
 * You will be creating a container for the Counter component.
 * A container connects a component to the Redux store.
 * @see https://www.reactnative.guide/9-redux/9.2-presentational-vs-containers.html
 */
import { connect } from 'react-redux';

/**
 * Import something form Redux here
 */
import Counter from "./Counter";

import {
    rollDice,
    increaseCount,
    decreaseCount,
    // addTodo,
    // deleteTodo,
}  from '../../actions';

/**
 * Import the actions that you need
 */

/**
 * Complete this function. You may need to pass in arguements
 */
const mapStateToProps = state => {
    return{
        diceNumber: state.diceNumber,
        count: state.count,
        // todos: state.todos,
        // deleteTodo: state.deleteTodo
    }
}

/**
 * Complete this function. You may need to pass in arguements
 */
const mapDispatchToProps = {
    rollDice,
    increaseCount,
    decreaseCount,
    // addTodo,
    // deleteTodo,
}

/**
 * Refactor this so that you are connecting the Counter to the Redux store.
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
    
)(Counter);
