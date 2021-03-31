import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  /**
   * allCharacters
   * @type {Array} array of objects, where each object represents a different character.
   * @example
   * [
   *    { id: 15, name: "Alien Rick", ... },
   *    { id: 16, name: "Amish Cyborg", ... },
   * ]
   */
  const [allCharacters, setAllCharacters] = useState([]);
  /**
   * image
   * @type {string} url for the character's image
   */
  const [image, setImage] = useState(
    "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg"
  );
  /**
   * name
   * @type {string} name of the character
   */
  const [name, setName] = useState("");
  /**
   * Gets all characters when the component first renders,
   * and only when the component first renders.
   */
  useEffect(() => {
    /**
     * With async & await,
     * @see https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
     */
    const getCharacters = async () => {
      const response = await axios(
        /**
         * @see https://rickandmortyapi.com/documentation/#get-all-characters
         */
        "https://rickandmortyapi.com/api/character/"
      );
      setAllCharacters(response.data.results);
    };
    getCharacters();
  }, []);
  /**
   * Does a request to look up more information on the character,
   * and then sets the chosen character's name and image.
   * @param {string|number} characterId
   */
  const getCharacter = async (characterId) => {
    const response = await axios(
      /**
       * @see https://rickandmortyapi.com/documentation/#get-a-single-character
       */
      `https://rickandmortyapi.com/api/character/${characterId}`
    );
    setImage(response.data.image);
    setName(response.data.name);
  };

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img alt={name} src={image} height="250" />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select
              id="dropdown"
              type="text"
              onChange={(e) => getCharacter(e.target.value)}
            >
              <option></option>
              {allCharacters.map((character) => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
