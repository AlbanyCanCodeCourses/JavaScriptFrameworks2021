/**
 * This connects Todo.jsx to the Redux store. This has already been completed for you.
 */

import { connect } from "react-redux";
import Todo from "./Todo";
import { addTodo, deleteTodo } from "../../actions";

function mapPropsToState(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToState(dispatch) {
  return {
    addTodo: userInput => dispatch(addTodo(userInput)),
    deleteTodo: todoIndex => dispatch(deleteTodo(todoIndex))
  };
}

export default connect(
  mapPropsToState,
  mapDispatchToState
)(Todo);
