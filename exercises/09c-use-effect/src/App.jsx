// import useEffect
<<<<<<< HEAD
import { useEffect } from "react";
import { useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
import "./App.css";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
<<<<<<< HEAD
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
=======
  const [selectedCharacter, setCharacter] = useState("0")
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to get response from quote API.");
        }
        return response.json();
      })
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, [characters]);
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de

  return (
    <div className="container">
      <div className="row text-center" id="body">
<<<<<<< HEAD
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
=======
        <h1 id="title-head">{selectedCharacter?.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img 
            height="250"
            src={selectedCharacter?.image ? selectedCharacter?.image : "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg" }
            alt={selectedCharacter?.name}
             />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select id="dropdown" type="text" onChange={(e)=>setCharacter(characters[e.target.value])}>
              {
                characters.map((character, index) => {
                return <option value={index} key={`character-`+character.id}>{character.name}</option>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
