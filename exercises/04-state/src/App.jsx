import "./App.css";
import LessText from './components/LessText';
import React, {useState} from 'react';
import CharacterCount from './components/CharacterCount';
const text =  "Ad proident ad minim eiusmod esse officia in ad ut ut. Voluptate do eiusmod tempor minim eiusmod commodo fugiat et. Reprehenderit cupidatat id incididunt pariatur nulla. Sit dolor aliqua consequat labore excepteur laborum elit enim sit ipsum laborum labore ipsum."
// Import CharacterCount here
import CharacterCount from "./components/CharacterCount"

function App() {
  const [maxLength, setMaxLength] = useState(25);
  const [userInput, setUserInput] = useState(0);
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text={text} maxLength={maxLength} click={setMaxLength}/>
      </div>
      <div className="bg-secondary text-white pt-4 pb-4 mb-4">
        <div className="container">
          <h1 className="h3">Challenge 2 - Character Count</h1>
          <CharacterCount userInput={userInput} change={setUserInput}/>
        </div>
      </div>
    </>
  );
}

export default App;
