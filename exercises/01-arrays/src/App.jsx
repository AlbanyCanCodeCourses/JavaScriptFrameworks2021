import "./App.css";
// import something here
import images from "./images/images";

function App() {
  return <div className="App">
    {images.map(((x, index) => {return <div key={"${x}-"+index}> <img src={x}/></div>}))};
        </div>;
}

export default App;
