import "./App.css";

import Likes from "./components/Likes/Likes";
import LessText from "./components/LessText";
import CharacterCount from "./components/CharacterCount";
// Import Likes here
// Import LessText here
// Import CharacterCount here

function App() {
  const myText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra id erat sit amet aliquet. Sed tellus augue, rhoncus nec mauris in, lobortis cursus urna. Mauris a nibh ex. Etiam scelerisque aliquam malesuada. Integer porta, augue in dictum gravida, justo tortor luctus ligula, sit amet sodales nisi ex quis elit. Nunc vel ipsum vel nibh accumsan feugiat vel id eros. Aenean eleifend eros et aliquet maximus. Donec facilisis dignissim aliquam. Morbi vitae sapien tellus. Sed molestie in metus id venenatis. In sit amet turpis mauris. Donec scelerisque nisl sed tortor finibus, id fermentum erat rhoncus. Aenean leo ex, eleifend dictum auctor imperdiet, interdum vitae erat."
  const maxLength = 20;
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
        <LessText text={myText} maxLength={maxLength} />
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
