import "./App.css";
import CharacterCount from "./Components/CharacterCount";
// Import LessText here
import LessText from "./components/LessText";
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, accusamus illo? Autem ullam quisquam dolores. Sed amet repellat eum, recusandae repudiandae ipsa asperiores rem voluptatem corporis doloribus architecto, atque sint?"
          maxLength="30"
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
