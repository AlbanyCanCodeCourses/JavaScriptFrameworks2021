/**
 * STOP! You will not modify the code that is in the file.
 * Instead, you will be writing the unit tests for this exercise
 * inside `App.test.js`
 */ 

import { useState } from "react";
import Links from "../Links/Links";

function App() {
  const [text, setText] = useState("");
  const [href, setHref] = useState("");

  const [links, setLinks] = useState([
    {
      text: "Running and Writing UI Tests Inside this Starter Kit",
      href: "https://create-react-app.dev/docs/running-tests/",
    },
    {
      text: "UI Testing with Enzyme",
      href: "https://enzymejs.github.io/enzyme/docs/api/",
    },
  ]);
  const addLink = () => {
    const newLink = {
      text: text,
      href: href,
    };
    setLinks([...links, newLink]);
  };

  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <h1>My Links</h1>
      {!isHidden && <Links links={links} />}

      <label htmlFor="text">Link Title</label>
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="href">Link</label>
      <input
        type="url"
        id="href"
        value={href}
        onChange={(e) => setHref(e.target.value)}
      />

      <button type="button" id="add-links" onClick={addLink}>
        Add Link
      </button>
      <button type="button" id="hide-links" onClick={() => setIsHidden(true)}>
        Hide Links
      </button>
    </>
  );
}

export default App;
