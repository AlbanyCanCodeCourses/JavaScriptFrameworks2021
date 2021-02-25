import "./App.css";
// import something here
import images from "./images/images";

function App() {
  return (
    <div className="App">
      {images.map((child, index) => (
        <>
          <img src={child} alt="" className="img" />
          {/*<text>{index}</text>*/}
        </>
      ))}
    </div>
  );
}

export default App;
