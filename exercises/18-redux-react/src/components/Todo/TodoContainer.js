/**
 * This connects Todo.jsx to the Redux store. This has already been completed for you.
 */

import { connect } from "react-redux";
import Todo from "./Todo";
import { setInput, addTodo, deleteTodo } from "../../actions";

function mapPropsToState(state) {
  return {
    todos: state.todos,
    userInput: state.userInput
  };
}

function mapDispatchToState(dispatch) {
  return {
    setInput: userInput => dispatch(setInput(userInput)),
    addTodo: () => dispatch(addTodo()),
    deleteTodo: todoIndex => dispatch(deleteTodo(todoIndex))
  };
}

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Todo);
