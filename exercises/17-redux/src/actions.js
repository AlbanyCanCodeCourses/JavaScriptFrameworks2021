import * as types from "./constants/actionTypes";

export const increaseCount = () => {
  return {
    type: types.INCREASE_COUNT
  };
};

export const decreaseCount = () => {
  return{
  type: types.DECREASE_COUNT
  }
  // Complete me
};

export const toggle = () => {
  return{
    type: types.TOGGLE 
  }
  // Complete me
};

export const pickColor = color => {
  return{
    type:types.PICK_COLOR,
    payload: color
  }
  // Complete me
};

export const setInput = todoInput => {
  return{
    type: types.SET_INPUT,
    payload: todoInput
    }
  // Complete me
};

export const addTodo = () => {
  
  return{
    type:types.ADD_TO_DO
  }
  // Complete me
};

export const deleteItem = (index) =>{
  console.log(index)
  return{
    type:types.DELETE_ITEM,
    payload: index

  }
}