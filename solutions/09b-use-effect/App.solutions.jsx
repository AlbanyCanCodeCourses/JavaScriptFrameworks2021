import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dogImages, setDogImages] = useState([]);
  /**
   * amountOfImages
   * @type {number} the number of dog images to display on the screen.
   * This should be set when the user selects a value from the dropdown.
   */
  const [amountOfImages, setAmountOfImages] = useState(1);

  useEffect(() => {
    /**
     * @see https://dog.ceo/dog-api/documentation/random#all
     */
    fetch(`https://dog.ceo/api/breeds/image/random/${amountOfImages}`)
      .then((resp) => resp.json())
      .then((resp) => setDogImages(resp.message));
  }, [amountOfImages]); // This means an AJAX request is made whenever amountOfImages changes

  return (
    <div className="App">
      <h1>Dogs</h1>
      <select
        value={amountOfImages}
        onChange={(e) => setAmountOfImages(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="container">
        {dogImages.map((dogImage, idx) => {
          return <img key={`dog-${idx}`} height="200" src={dogImage} />;
        })}
      </div>
    </div>
  );
}

export default App;
