/**
 * Refactor this presentation components so that is using the props that is is getting
 * from its container. The container has already been completed for you.
 * @see src/components/Todo/TodoContainer.js
 *
 * As a bonus, see if you can get and set user input from the store as well
 */

// import { useState } from "react";
import ListItem from "./ListItem/ListItem";

function Todo(props) {
  /**
   * This will be passed down from the container as props instead
   * (but you still need to prevent the form from submitting and pass up user input)
   */
  const setUserInput = userInput => props.setInput(userInput)
  const addTodo = (e) => {
    e.preventDefault();
    props.addTodo()
  };
  /**
   * This will be passed down from the container as props instead
   * (but you still need to pass up the todo index)
   */
  const deleteTodo = (todoIndex) => {
    props.deleteTodo(todoIndex)
  };
  return (
    <div className="mt-4">
      <h1 className="h3">Todo List</h1>
      <form className="form-group" onSubmit={e => addTodo(e)}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter text"
            aria-label="Enter text"
            aria-describedby="button-add"
            value={props.userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="subimit" id="button-add">
              Add
            </button>
          </div>
        </div>
      </form>
      <ul className="list-group">
        {/* The todos will be passed down as props */}
        {props.todos.map((text, index) => {
          const key = `todo-item-${index}`;
          return (
            <ListItem deleteTodo={deleteTodo} todoIndex={index} key={key}>
              {text}
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
