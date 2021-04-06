import "./App.css";
import { images } from "./images/images.js"

// const handleArray = images.map((imgURL) => { return (<img src={imgURL}/>)})

function App() {
  return <div className="App">
    {images.map((imgURL) => { return (<img src={imgURL}/>)})}
  </div>;
}

export default App;
