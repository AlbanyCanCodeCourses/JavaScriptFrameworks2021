import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
    isVisible: false,
    color: "",
    todoInput: "",
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
        color: action.color,
      };
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.todoInput,
      };
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
      };
    /**
     * Add additional case statements here
     */
    default:
      return state;
  }
};

export default reducer;
