import "./App.css";
// import something
import { todos } from "./data/todos";
// import another thing
import Todo from "./Components/Todo";

function App() {
  return (
    <div className="App">
      <Todo items={todos} showCompleted={false} />
    </div>
  );
}

export default App;
