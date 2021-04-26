import React from "react";
import Likes from "./components/Likes/Likes";
import LessText from "./components/LessText/LessText";
import CharacterCount from "./components/CharacterCount/CharacterCount";

function App() {
  return (
    <>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 1 - Likes</h1>
          <Likes />
        </div>
      </div>
      <div className="container pt-4 pb-4">
        <h2 className="h3">Challenge 2 - Less Text</h2>
        <LessText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus earum culpa expedita cumque tempora, nisi sequi, ratione debitis eveniet consequatur cupiditate quibusdam, quo voluptates asperiores voluptas inventore iusto. Et, unde!"
          maxLength={100}
        />
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount />
        </div>
      </div>
    </>
  );
}

export default App;
