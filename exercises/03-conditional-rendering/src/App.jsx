import "./App.css";
import React from 'react';
import Todo from './components/Todo';
import todos from "./data/todos";


function App() {
  return (
    <div className="App">
      <Todo todos={todos} showCompleted={false} />
    </div>
  ); 
}

export default App;
