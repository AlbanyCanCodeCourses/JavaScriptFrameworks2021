import "./App.css";
import { todos } from "../src/data/todos";
import Todo from "./Component/Todo";
// import something
// import another thing

function App() {
  console.log(todos);
  return <div className="App"><Todo todos={todos} showCompleted={true}></Todo></div>;
}

export default App;
