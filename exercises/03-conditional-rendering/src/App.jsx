import "./App.css";
import todos from "../src/data/todos";
import Todo from "./Component/Todo";
// import something
// import another thing

function App() {
  return <div className="App"><Todo todos={todos} showCompleted={false}></Todo></div>;
}

export default App;
