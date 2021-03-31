import { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [selectedCharacter, setSelectedCharacter] = useState({})
  const [allCharacters, setAllCharacters] = useState([]);

  const CHARACTER_API_URL = 'https://rickandmortyapi.com/api/character/';

  useEffect(() => {
    axios.get(CHARACTER_API_URL+'?page=4')
      .then(results => results.data)
      .then(data => setAllCharacters(data.results))
      .catch(error => console.log(error))
  }, [])

  const handleCharacterSelect = e => {
    e.preventDefault();
    // Set selectedCharacter to character object with matching id
    const characterID = parseInt(e.target.value);
    characterID 
      ? setSelectedCharacter(allCharacters.find(character => character.id === characterID))
      : setSelectedCharacter({});
  }
  console.log(selectedCharacter);
  console.log(allCharacters);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{selectedCharacter.name || ''}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            {selectedCharacter !== {} && <img height="250" alt={selectedCharacter.name} src={selectedCharacter.image} />}
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" value={selectedCharacter.id} onChange={e => handleCharacterSelect(e)}>
              <option value={0}></option> 
              {allCharacters.map(character => <option value={character.id} key={'character-'+character.id}>{character.name}</option> )}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
