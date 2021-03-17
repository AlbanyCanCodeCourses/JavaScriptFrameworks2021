import "./data/todos";
import { todos } from "./data/todos";
// import { todos } from "./data/todos";

function Todo(props) {
  return (
    <ul>
      {todos.map((todo, index) => {
      if((props.showCompleted && todo.completed)||!props.showCompleted){
        return <li key={`todo-item-${index}`}>{todo.title}</li>;
      }
      })}
    </ul>
   
  );
}

export default Todo;
