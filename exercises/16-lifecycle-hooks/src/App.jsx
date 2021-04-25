import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

/**
 * Convert me to the React Class Component
 */
function App() {
  return (
    <div class="cover bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
        </blockquote>
      </div>
    </div>
  );
}

export default App;
