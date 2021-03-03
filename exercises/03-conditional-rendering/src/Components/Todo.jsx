import React, { useEffect, useState } from "react";

/*function Item(props) {
  return <li>{props.title}</li>;
}*/

const Todo = ({ todos, name = "", showCompleted, ...props }) => {
  const [state, setState] = useState({
    isWorkCompleted: showCompleted,
    notCompleted: [],
  });

  function filterNotCompleted() {
    var arr = todos;

    arr.prototype.forEach(function (e) {
      state.notCompleted = state.notCompleted.concat(
        e.todos.filter(function (c) {
          return c.showCompleted === false;
        })
      );
    });
    console.log(state.notCompleted);
  }
  /*var trueArr = [];
  function hideUnCompleted() {
    for (var key in todos) {
      if (todos.showCompleted[key] === false) {
        delete todos[key];
      } else {
        trueArr.push(key);
      }
    }
  }*/

  useEffect(() => {
    filterNotCompleted();
  });

  return (
    <div>
      {/*<ul>
        {trueArr.map(function (text, index) {
          return <li key={index}>{text.title}</li>;
        })}
      </ul>*/}
    </div>
  );
};

export default Todo;
