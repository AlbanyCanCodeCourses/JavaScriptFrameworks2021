import "./App.css";
import Welcome from "./Components/Welcome";
// import something here

function App(props) {
  return <div className="App"><Welcome name= {window.prompt("enter your name")}></Welcome></div>;
}

export default App;
