import * as types from "./constants/actionTypes";

export function rollDice() {
  return {
    type: types.ROLL_DICE,
  };
}

export function increaseCount() {
  return {
    type: types.INCREASE_COUNT,
  };
}

export function decreaseCount() {
  return {
    type: types.DECREASE_COUNT,
  };
}

export function addTodo(userInput) {
  return {
    type: types.ADD_TODO,
    userInput,
  };
}

export function deleteTodo(todoIndex) {
  return {
    type: types.DELETE_TODO,
    todoIndex,
  };
}

export function setTodoInput(userInput) {
  return {
    type: types.SET_TODO_INPUT,
    payload: { userInput: userInput },
  };
}
