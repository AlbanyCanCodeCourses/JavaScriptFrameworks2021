import "./App.css";
import LessText from "./LessText"
import CharacterCount from "./CharacterCount"
// Import LessText here
// Import CharacterCount here

function App() { 
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        {<LessText text = "I have a Donkey. His name is Silas." maxLength= {10}/>}
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          {<CharacterCount />}
        </div>
      </div>
    </>
  );
}

export default App;
