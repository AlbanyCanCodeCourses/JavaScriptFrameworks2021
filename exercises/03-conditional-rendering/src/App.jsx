import "./App.css";
<<<<<<< HEAD
import { todos } from "./data/todos";
import Todo from "./Todo"
// import something
// import another thing

function App(props) {
  return <div className="App">{

    <Todo todo = {todos} showCompleted= {true} />
    
    }</div>; 
=======
import todos from "./data/todos.js"
import Todo from "./components/Todo"

function App() {
  return <div className="App">
    <Todo todos={todos} showCompleted={true} />
  </div>;
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

export default App;