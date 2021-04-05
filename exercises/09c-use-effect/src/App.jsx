// import useEffect
import { useState, useEffect } from "react";
import "./App.css";
// import Axios (or use Fetch)
import axios from "axios";

function App() {
  /**
   * Set up state and make AJAX requests here
   */

  const [results, setResults] = useState({
    results: [],
  });

  const [characters, setCharacters] = useState({
    name: "",
    image: "",
    index: "",
  });

  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [index, setIndex] = useState("");

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/`).then((res) => {
      setResults({
        results: res.data,
      });
      // console.log(characters.results);
    });
  }, [characters]);

  const onChange = (e) => {
    setCharacters({
      name: e.target.value,
    });
  };

  // console.log(name);
  // console.log(name.name);
  console.log(characters);

  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{characters.name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            {/* Add an alt and src to this image */}
            <img height="250" src={characters.image} alt="" />
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
              {results.results.results &&
                results.results.results.map((items, idx) => {
                  return (
                    <option key={idx} value={items.name}>
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
