import React from "react";
import DiceRollerContainer from "../DiceRoller/DiceRollerContainer";
import CounterContainer from "../Counter/CounterContainer";
import TodoContainer from "../Todo/TodoContainer";

function App() {
  return (
    <div className="container mt-4">
      <DiceRollerContainer />
      <CounterContainer />
      <TodoContainer />
    </div>
  );
}

export default App;
