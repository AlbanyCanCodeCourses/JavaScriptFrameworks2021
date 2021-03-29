import { useState } from "react";

function LessText({ text, maxLength }) {
  const [currentText, setCurrentText] = useState(text);
  const readLess = text.substring(0, maxLength);
  return (
    <div>
      <div>{currentText}</div>  
      <button onClick={() => setCurrentText(text)}>Read More</button>
      <button onClick = {() => setCurrentText(readLess)}>Read Less</button>
    </div>
  );
}

export default LessText;
