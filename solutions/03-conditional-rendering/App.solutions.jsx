import { todos } from "../src/data/todos";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  );
}

export default App;
