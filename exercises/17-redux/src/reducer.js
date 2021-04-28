import * as types from "./constants/actionTypes";

const reducer = (
 
  /**
   * Starting state.
   * You may want to add more values here
   */
  state = {
    color: '',
    isVisible: false,
    pickColor: null,
    count: 0,
    todos: ["Finish this assignment", "Read a book"],
    todoInput: '',
    deletedItems: []

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
    case types.TOGGLE:
      return {
        ...state,
        isVisible: !state.isVisible ,
       
      
      };
    case types.PICK_COLOR:
      return {
        ...state,
        color: action.payload,
        
       
      };
    case types.SET_INPUT:
      return {
        ...state,
        todoInput: action.payload

      };
    case types.ADD_TO_DO:
      if(state.todoInput === ''){
        return state
      }
      return {
        ...state,
        todos: state.todos.concat(state.todoInput)
      };
      case types.DELETE_ITEM:
        let newTodos = [];
        for(let i = 0; i < state.todos.length ; i++)
        {
          if( i != action.payload)
          {
            newTodos.push(state.todos[i]);
          }
        }
        return{
          ...state,
          todos: newTodos
        }
  
    /**
     * Add additional case statements here
     */
    default:
      return state;
  }
};

export default reducer;
