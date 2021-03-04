import React from "react";

function Todo(props) {
  return (
    <ul>
      {props.todos.map((todo, idx) => {
        if ((props.showCompleted && todo.completed) || !props.showCompleted) {
          return <li key={idx}>{todo.title}</li>;
        }
      })}
    </ul>
  );
}

export default Todo;
