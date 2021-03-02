import "./App.css";
import { todos } from "./data/todos";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  );
}

export default App;
