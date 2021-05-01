import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT,
  };
};

export const decreaseCount = () => {
  return {
    type: types.DECREASE_COUNT,
  };
};

export const toggle = () => {
  return {
    type: types.TOGGLE_VISIBILITY,
  };
};

export const pickColor = (color) => {
  return {
    type: types.WHAT_COLOR,
    color: color,
  };
};

export const setInput = (todoInput) => {
  return {
    type: types.SET_INPUT,
    todoInput: todoInput,
  };
};

export const addTodo = () => {
  return {
    type: types.ADD_TODO,
  };
};
