import "./App.css";
import Welcome from "./Components/Wlecome";
// import something here

function App() {
  return (
    <div className="App">
      <Welcome name="Godson" />
      <Welcome name="Umoren" />
      <Welcome />
    </div>
  );
}

export default App;
