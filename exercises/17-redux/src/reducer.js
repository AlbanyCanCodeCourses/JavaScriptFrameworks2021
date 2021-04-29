import * as types from "./constants/actionTypes";

const reducer = (
  state = {
    count: 0,
    isVisible: false,
    color: "",
    todoInput: "",
    todos: ["Finish this assignment", "Read a book"],
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.TOGGLE_TEXT:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case types.PICK_COLOR:
      return {
        ...state,
        color: action.payload.color,
      };
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.payload.todoInput,
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
    default:
      return state;
  }
};

export default reducer;
