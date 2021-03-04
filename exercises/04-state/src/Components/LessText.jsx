import React, { useState } from "react";

const LessText = ({ text = "", maxLength }) => {
  const [state, setState] = useState({
    string: text,
  });

  const truncateString = () => {
    let str = state.string;
    let length = maxLength;
    const truncatedStringMain = str.substring(0, length);
    setState({
      string: truncatedStringMain,
    });
  };

  const showMore = () => {
    let str = text;
    //let length = maxLength;
    //const truncatedString = str.substring(0, length);
    setState({
      string: str,
    });
  };

  return (
    <div>
      <p>{state.string}</p>
      <button onClick={() => showMore()}>Read More</button>
      <button onClick={() => truncateString()}>Read Less</button>
    </div>
  );
};

export default LessText;
