import * as types from "./constants/actionTypes";

const reducer = (
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    count: 0,
    isVisible: false,
    color: null,
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
    /**
     * Add additional case statements here
     */
    case types.DECREASE_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };
    case types.TOGGLE_VISIBILITY:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    case types.WHAT_COLOR:
      return {
        ...state,
        color: action.color,
      };
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.todoInput,
      };
    case types.ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, state.todoInput],
        todoInput: "",
      };
    }
    default:
      return state;
  }
};

export default reducer;
