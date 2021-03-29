// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [characters, setCharacters] = useState([]);
  const [character, setCharacter] = useState({});
  const [id, setId] = useState("");
  const [hasError, setHasError] = useState("");

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/`)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      (response) => {
        setCharacter(response.data);
      }
    );
  }, [id]);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{character.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              src={
                character.image
                  ? character.image
                  : "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
              }
              alt={`${character.name}`}
              height="250"
            />
          </a>
          {hasError && <div>We're sorry, but an unexpected error occurred</div>}
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select
              id="dropdown"
              type="text"
              onChange={(e) => setId(e.target.value)}
            >
              {characters.map((character, index) => {
                return (
                  <option key={`character-${index}`} value={`${character.id}`}>
                    {character.name}
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
