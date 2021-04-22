import "./App.css";
import CharacterCount from "./components/Character Count/CharacterCount";
import LessText from "./components/Less Text/LessText";

import Likes from "./components/Likes/Likes";
// Import Likes here
// Import LessText here
// Import CharacterCount here

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          {/* Add CharacterCount here */}
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        {/* Add LessText with props here */}
        <LessText text="aASDFGHJKLQWERTYUIOPZXCVBNM," />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Character Count</h1>
          {/* Add CharacterCount here */}
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
