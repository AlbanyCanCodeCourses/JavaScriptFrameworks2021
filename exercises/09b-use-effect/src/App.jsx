// Import useEffect here
import { useEffect, useState } from "react";
import axios from 'axios';
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
  const [numberOfDogs, setNumberOfDogs] = useState('1');
  const dogImageAPI = "https://dog.ceo/api/breeds/image/random/";

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    axios.get(`${dogImageAPI}${numberOfDogs && numberOfDogs}`)
      .then(response => response.data)
      .then(newDogImages => setDogImages(newDogImages.message))
      .catch(error => alert(error))

  }, [numberOfDogs]);


  console.log(numberOfDogs, dogImages)
  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
      <select value={numberOfDogs} onChange={e => setNumberOfDogs(e.target.value)}>
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
          return <img key={`dog-${idx}`} alt={`dog-${idx}`} height="200" src={dogImage} />;
        })}
      </div>
    </div>
  );
}

export default App;
