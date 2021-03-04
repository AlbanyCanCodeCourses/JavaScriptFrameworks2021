import React, { useEffect, useState } from "react";

export default function CharacterCount() {
  const [state, setState] = useState({
    count: 0,
  });

  return (
    <div>
      <p>Records the amount of words you type!</p>
      <textarea
        type="text"
        onChange={(e) =>
          setState({
            count: e.target.value.length,
          })
        }
        style={{ width: "100%" }}
      ></textarea>
      <p>Character Count: {state.count}</p>
    </div>
  );
}
