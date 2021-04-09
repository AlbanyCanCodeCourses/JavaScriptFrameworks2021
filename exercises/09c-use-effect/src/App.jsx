// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)

function App() {
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

  return (
    <div className="container">
      <div className="row text-center" id="body">
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
              })}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
