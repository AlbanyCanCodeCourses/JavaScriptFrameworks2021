import { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState();
  const [character, setCharacter] = useState();
  const [options, setOptions] = useState();

  useEffect(
    ()=> {
      const getCharacters = async() => {
        setCharacters(await axios("https://rickandmortyapi.com/api/character"));
      }
      getCharacters()
    }
  , []);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character && character[0].name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img height="250" src={character && character[0].image} />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" onChange={(e)=> {
              setCharacter(characters.data.results.filter((character)=> {
                return character.name === e.target.value
              }))
            }}>
              {characters && characters.data.results.map((character, index)=> {
                return <option key={`char-${index}`}>{character.name}</option>
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
