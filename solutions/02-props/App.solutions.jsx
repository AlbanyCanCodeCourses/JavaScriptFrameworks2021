import "./App.css";
import Welcome from "../src/components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome name="Jamal" />
      <Welcome name="Jamal" />
      <Welcome />
    </div>
  );
}

export default App;
