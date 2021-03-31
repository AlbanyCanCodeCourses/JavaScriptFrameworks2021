import {useEffect} from "react"// import useEffect
import { useState } from "react";
import "./App.css";
import axios from "axios"// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [charName, setCharName] = useState([]);
  const [charImage, setCharImage] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`)
    .then(response => setCharName(response.data.results))
  },[])

  const characterNames = [];
  const characterImages = [];
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{/* Plugin character name here */}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            
            <img height="250" src={charImage} />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {charName.forEach((element) => characterNames.push(element.name))}
            {charName.forEach((element) => characterImages.push(element.image))}
            {console.log(characterNames)}
            {console.log(characterImages)}
            <select id="dropdown" type="text" onChange={(event) => setCharImage(characterImages[event.target.value])}>
              {characterNames.map((x, index) => { return(
              <option value={index}>{x}</option>
              )
              }
              )}
              
              
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
