import "./App.css";
import {images} from "./images/images";

function App() {
  return <div className="App">
    {
      images.map((image, index) => { 
        return(<img key={"image-" + index} src={image} alt=""/>)
      })
    }
  </div>;
}

export default App;
