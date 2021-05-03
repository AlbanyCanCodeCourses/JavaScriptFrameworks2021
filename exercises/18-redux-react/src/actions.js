import * as types from "./constants/actionTypes";

export function rollDice() {
  return {
    type: types.ROLL_DICE
  };
}

export function increaseCount() {
  return {
    type: types.INCREASE_COUNT
  };
}

export function decreaseCount() {
  return {
    type: types.DECREASE_COUNT
  };
}

export function setInput(userInput) {
  return {
    type: types.SET_INPUT,
    userInput
  };
}

export function addTodo() {
  return {
    type: types.ADD_TODO,
  };
}

export function deleteTodo(todoIndex) {
  return {
    type: types.DELETE_TODO,
    todoIndex
  };
}
