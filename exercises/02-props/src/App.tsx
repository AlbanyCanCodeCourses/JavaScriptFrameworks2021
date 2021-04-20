import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Welcome />
      <Welcome name="Katie" />
    </div>
  );
}

export default App;
