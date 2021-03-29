import { useState } from "react";

function CharacterCount() {
  const [characters, setCharacters] = useState(0);
  return (
    <div>
      <textarea
        onChange={(e) => setCharacters(e.target.value.length)}
        cols="30"
        rows="5"
      ></textarea>
      <div>Character Count : {characters}</div>
    </div>
  );
}
export default CharacterCount;
