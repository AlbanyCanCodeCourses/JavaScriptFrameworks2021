import React, { useState } from "react";

const LessText = ({ text, maxLength }) => {
  const [lessText, setLessText] = useState(maxLength);

  return (
    <div>
      <p>{text.substring(0, lessText)}</p>
      <button
        type="button"
        class="btn btn-dark m-1"
        onClick={() => {
          setLessText(text.length);
        }}
      >
        Read More
      </button>
      <button
        type="button"
        class="btn btn-dark m-1"
        onClick={() => {
          setLessText(maxLength);
        }}
      >
        Read Less
      </button>
    </div>
  );
};

export default LessText;
