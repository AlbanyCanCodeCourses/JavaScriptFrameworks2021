import "./App.css";
import LessText from "./LessText"// Import LessText here
import CharacterCount from "./CharacterCount"// Import CharacterCount here

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text="This is a random string of text" maxLength={8}></LessText>
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount></CharacterCount>
        </div>
      </div>
    </>
  );
}

export default App;
