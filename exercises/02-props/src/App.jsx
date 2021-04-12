import "./App.css";
import Welcome from "./Components/Wlecome";
// import something here
import Welcome from "./components/Welcome";

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
