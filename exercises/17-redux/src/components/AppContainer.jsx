/**
 * Ignore me for now.
 */

import { connect } from "react-redux";
import App from "./App";

import {
  increaseCount,
  decreaseCount,
  toggle,
  pickColor,
  setInput,
  addTodo
} from "../actions";

const mapStateToProps = state => {
  console.log("state", state);
  return {
    count: state.count,
    isVisible: state.isVisible,
    color: state.color,
    todoInput: state.todoInput,
    todos: state.todos
  };
};

const mapDispatchToProps = {
  increaseCount,
  decreaseCount,
  toggle,
  pickColor,
  setInput,
  addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
