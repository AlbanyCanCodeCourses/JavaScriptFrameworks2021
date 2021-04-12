import "./App.css";
import todos from "./data/todos.js";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={true} />
    </div>
  );
}

export default App;
