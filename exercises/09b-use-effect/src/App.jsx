import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

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
  const [dogImages, setDogImages] = useState();
  const [howMany, setHowMany] = useState();
  
  useEffect(() => {
    async function getData(){
      try{
        setDogImages(await axios(`https://dog.ceo/api/breeds/image/random/${howMany}`));
      }
      catch(error){
        console.error(error);
      }
    }
    getData();
  }, [howMany]);

  
  /**
   * You may need to set something else in state
   */

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <div className="App">
      <h1>Dogs</h1>
      {/* Make me a controlled input */}
      <select onChange={(e)=>{setHowMany(e.target.value)}}>
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
        {dogImages && dogImages.data.message.map((dogImage, idx) => {
          return <><img key={`dog-${idx}`} height="200" src={dogImage} alt="" /><br /></>;
        })}
      </div>
    </div>
  );
}

export default App;