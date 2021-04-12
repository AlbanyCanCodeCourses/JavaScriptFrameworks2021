import "./App.css";
import LessText from "./LessText"
import CharacterCount from "./CharacterCount"
// Import LessText here
import LessText from "./components/LessText"
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount"

function App() { 
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
<<<<<<< HEAD
        {<LessText text = "I have a Donkey. His name is Silas." maxLength= {10}/>}
=======
        <LessText
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, accusamus illo? Autem ullam quisquam dolores. Sed amet repellat eum, recusandae repudiandae ipsa asperiores rem voluptatem corporis doloribus architecto, atque sint?"
        maxLength="30"
        />
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
<<<<<<< HEAD
          {<CharacterCount />}
=======
          <CharacterCount/>
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        </div>
      </div>
    </>
  );
}

export default App;
