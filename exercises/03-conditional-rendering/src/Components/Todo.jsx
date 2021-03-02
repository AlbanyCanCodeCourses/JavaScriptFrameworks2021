import React, { useEffect } from "react";

/*function Item(props) {
  return <li>{props.title}</li>;
}*/

const Todo = ({ todos, name = "", showCompleted, ...props }) => {
  var trueArr = [];
  function hideUnCompleted() {
    for (var key in todos) {
      if (todos.showCompleted[key] === false) {
        delete todos[key];
      } else {
        trueArr.push(key);
      }
    }
  }

  useEffect(() => {
    hideUnCompleted();
  });

  return (
    <div>
      <ul>
        {trueArr.map(function (text, index) {
          return <li key={index}>{text.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
