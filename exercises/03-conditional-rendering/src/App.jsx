import "./App.css";
import { todos } from './data/todos.js'
import Todo from './components/Todo'
// import something
// import another thing

function App() {
  return (
  <div className="App">
    <Todo todos={todos} showCompleted={false}/>
  </div>
  )
}

export default App;
