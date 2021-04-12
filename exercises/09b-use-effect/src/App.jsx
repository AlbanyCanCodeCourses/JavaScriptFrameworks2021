// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
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
<<<<<<< HEAD
  const [numberOfDogs, setNumberOfDogs] = useState([]); 

  /**
   * You may need to set something else in state
   */

  useEffect( ()=>{
    axios(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    .then(response=>{
     setDogImages(response.data.message)
    
    })

  }, [numberOfDogs] )
  /**
   * Make an AJAX call with the useEffect hook
   */ 
 
=======
  const [dogCount, setDogCount] = useState('1');

  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogCount}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get response from quote API.");
        }
        return response.json();
      })
      .then((data) => setDogImages(data.message))
      .catch((error) => console.log(error));
  }, [dogCount]);

>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
<<<<<<< HEAD
      <select onChange = {e=>setNumberOfDogs(e.target.value)}>
=======
      <select value={dogCount} onChange={(e) => setDogCount(e.target.value)}>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
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
