import "./App.css";
import "./images/images"
import { images } from "./images/images";
import "./App.css"
// import something here

function App() {
  return <div className="App">{
    images.map((image, index)=>{
    return images ? <img src={image} alt="The evolution of computers"/> : "uh-oh";
  })}</div>;
  
}

export default App;
