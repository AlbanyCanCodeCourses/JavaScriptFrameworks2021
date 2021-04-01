// import useEffect
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character`).then((response) => {
      setAllCharacters(response.data.results);
    });
  }, []);

  /**
   * Set up state and make AJAX requests here
   */

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character && character.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img
              height="250"
              alt="picture of rick and morty character"
              src={character.image}
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select
              id="dropdown"
              type="text"
              onChange={(e) => {
                setCharacter(allCharacters[e.target.value]);
              }}
            >
              <option></option>
              {allCharacters.map((oneCharacter, index) => {
                return (
                  <option key={`character=${index}`} value={index}>
                    {oneCharacter.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
