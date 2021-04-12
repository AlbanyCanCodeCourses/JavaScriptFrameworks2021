import "./App.css";
<<<<<<< HEAD
import "./images/images"
import { images } from "./images/images";
import "./App.css"
// import something here

function App() {
  return <div className="App">{
    images.map((image, index)=>{
    return images ? <img src={image} key = {`image-${index}`} alt="The evolution of computers"/> : "uh-oh";
  })}</div>;
  
=======
import { images } from "./images/images.js"

// const handleArray = images.map((imgURL) => { return (<img src={imgURL}/>)})

function App() {
  return <div className="App">
    {images.map((imgURL) => { return (<img src={imgURL}/>)})}
  </div>;
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
}

export default App;
