import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: true,
    color: "",
    todoInput: "",
    todos: ["Finish this assignment", "Read a book"]
  },
  action
) => {
  console.log("action", action);
  switch (action.type) {
    case types.INCREASE_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case types.TOGGLE:
      return {
        ...state,
        isVisible: !state.isVisible
      }
    case types.PICK_COLOR:
      return {
        ...state,
        color: state.color === action.color ? "" : action.color
      }
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.todoInput
      }
    case types.ADD_TODO:
      return {
        ...state,
        todos: state.todoInput ? [...state.todos, state.todoInput] : state.todos,
        todoInput: ""
    }

    default:
      return state;
  }
};

export default reducer;
