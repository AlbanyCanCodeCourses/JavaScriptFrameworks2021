import "./App.css";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Greg" />
      <Welcome name="John" />
      <Welcome />
    </div>
  );
}

export default App;
