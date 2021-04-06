// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up state and make AJAX requests here
   */

  const [results, setResults] = useState([]);
  const [characters, setCharacters] = useState({
    name: "",
    idx: 0,
    img: "https://i.ytimg.com/vi/UFFi9PWKDjg/maxresdefault.jpg",
  });

  useEffect(() => {
    getResults();
    getCharacter();
  }, []);

  const getResults = () => {
    axios("https://rickandmortyapi.com/api/character/").then((res) => {
      // console.log(res.data.results);
      setResults(res.data.results);
    });
  };

  const getCharacter = () => {
    axios(`https://rickandmortyapi.com/api/character/${characters.idx}`).then(
      (res) => {
        // setCharacters({ ...characters }, { img: res.data.image });
        setCharacters({
          img: res.data.image,
        });
        console.log(res.data.image);
      }
    );
  };

  const onChange = (e) => {
    setCharacters(JSON.parse(e.target.value));
    getCharacter();
  };

  console.log(characters.idx);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{characters.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img
              height="250"
              alt="rick&Morty-character-img"
              src={characters.img}
            />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            {/* Handle event here */}
            <select id="dropdown" type="text" onChange={(e) => onChange(e)}>
              <option></option>
              {/**
               * Loop through all characters. The value should be the character id.
               * @example in HTML
               * <option value="2" key="character-1">Morty Smith</option>
               */}
              {results &&
                results.map((items, idx) => {
                  return (
                    <option
                      key={idx}
                      value={JSON.stringify({ idx, name: items.name })}
                    >
                      {items.name}
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
