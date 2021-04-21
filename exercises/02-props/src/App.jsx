import "./App.css";
import Welcome from "./components/Welcome"
// import something here
import Welcome from "./components/Welcome"

function App(props) {
  return <div className="App">{/* Complete me */ <Welcome name = "Patricia"/>}</div>;
function App() {
  return <div className="App">
    <Welcome name="Greg"/>
    <Welcome name="John"/>
    <Welcome />
  </div>;
}

export default App; 
