// Import useEffect here
import { useState } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
  /**
   * dogImages
   * @type {Array} an array of image URLs
   * @example
   * [
   *     "https://images.dog.ceo/breeds/terrier-scottish/n02097298_7694.jpg",
   *     "https://images.dog.ceo/breeds/lhasa/n02098413_1137.jpg"
   * ]
   */
  const [dogImages, setDogImages] = useState([]);

  /**
   * You may need to set something else in state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Attach an event handler */}
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <div className="container">
        {dogImages &&
          dogImages.map((dogImage, idx) => {
            return <img key={`dog-${idx}`} height="200" src={dogImage} />;
          })}
      </div>
    </div>
  );
}

export default App;
