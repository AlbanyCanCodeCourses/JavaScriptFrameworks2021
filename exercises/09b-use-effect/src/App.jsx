// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
  const [dogCount, setDogCount] = useState("1");

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

  useEffect(() => {
    axios(`https://dog.ceo/api/breeds/image/random/${dogNumber}`).then(
      (res) => {
        console.log(res);
        setDogImages(res.data.message);
      }
    );
  }, [dogNumber]);

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
      <select value={dogCount} onChange={(e) => setDogCount(e.target.value)}>
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
          return <img alt="" key={`dog-${idx}`} height="200" src={dogImage} />;
        })}
      </div>
    </div>
  );
}

export default App;
