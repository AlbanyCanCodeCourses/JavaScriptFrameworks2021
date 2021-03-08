import "./App.css";
import { todos } from "./data/todos";
import Todo from "./Todo"
// import something
// import another thing

function App(props) {
  return <div className="App">{

    <Todo todo = {todos} showCompleted= {true} />
    
    }</div>; 
}

export default App;
