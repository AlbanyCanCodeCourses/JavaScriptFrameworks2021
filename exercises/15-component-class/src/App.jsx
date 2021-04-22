import "./App.css";

import Likes from "./components/Likes/Likes";
import LessText from "./components/LessText";
import CharacterCount from "./components/CharacterCount";

function App() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo consequuntur possimus unde maxime reprehenderit voluptas amet recusandae eaque laudantium perferendis est quibusdam, sit, dolores aliquid numquam laborum inventore pariatur exercitationem.";

  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        <LessText text={text} maxLength={26} />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4">
        <div className="container">
          <h1 className="h3">Challenge 3 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
