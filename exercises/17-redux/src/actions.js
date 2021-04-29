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
    type: types.TOGGLE_TEXT,
  };
};

export const pickColor = (color) => {
  return {
    type: types.PICK_COLOR,
    payload: { color: color },
  };
};

export const setInput = (todoInput) => {
  return {
    type: types.SET_INPUT,
    payload: { todoInput: todoInput },
  };
};

export const addTodo = () => {
  return {
    type: types.ADD_TODO,
  };
};
