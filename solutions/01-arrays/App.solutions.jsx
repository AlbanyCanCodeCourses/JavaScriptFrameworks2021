/******
 * Import an object of image paths from the images directory and render them to the screen using the map() method
 *
 *  Developer notes:
 *  Use the img tag to render an image syntax: <img src="path" />
 *
 */

import { images } from "./images/images";
import "./App.css";

function App() {
  return (
    <div className="App">
      {images.map((image, index) => (
        <img src={image} key={`image-${index}`} />
      ))}
    </div>
  );
}

export default App;
