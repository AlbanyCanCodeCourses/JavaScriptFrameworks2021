import React, { useState } from "react";

const CharacterCount = () => {
  const [characterCount, setCharacterCount] = useState(0);

  return (
    <div>
      <textarea
        type="text"
        class="form-control input-group input-group-sm mt-3 mb-1"
        onChange={(e) => {
          setCharacterCount(e.target.value.length);
        }}
      />
      <p>Character count: {characterCount}</p>
    </div>
  );
};

export default CharacterCount;
