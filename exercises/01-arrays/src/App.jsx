import "./App.css";
import { images } from './images/images.js';
// import something here

function App() {
  return (
  <div className="App">
    {images.map(image => <img key={image} alt='Array of images' src={image}/>)}
  </div>
  );
}

export default App;
