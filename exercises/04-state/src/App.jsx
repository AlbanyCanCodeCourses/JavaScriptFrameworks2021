import "./App.css";
import LessText from "./components/LessText";
import CharacterCount from "./components/CharacterCount";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quos excepturi assumenda optio saepe quasi cupiditate sed laborum. Ratione vitae quam ducimus officia, reiciendis amet quasi ipsam deserunt sit hic.";

function App() {
  return (
    <>
      <div className="container pt-4 pb-4">
        <h1 className="h3">Challenge 1 - Less Text</h1>
        <LessText text={text} maxLength={26} />
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
