import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todos, showCompleted }) => {
  return (
    <ol className="list">
      {showCompleted
        ? todos.map((todo, index) => {
            return (
              todo.completed && <li key={"completed-" + index}>{todo.title}</li>
            );
          })
        : todos.map((todo, index) => {
            return (
              !todo.completed && (
                <li key={"unfinished-" + index}>{todo.title}</li>
              )
            );
          })}
    </ol>
  );
};

Todo.propTypes = {
  todos: PropTypes.array,
  showCompleted: PropTypes.bool,
};

export default Todo;
