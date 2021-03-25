// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */

  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */

  useEffect(() => {
    setIsLoading(true);
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((response) => {
        setQuote(response.data);
      })
      .catch(() => {
        setHasError(true);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <body className="bg-warning text-center">
      <img
        src={ronSwansonImage}
        alt=""
        width="450"
        height="423"
        className="mt-4"
      />
      <div className="container">
        {/* Display a loading message */}
        {/* Display an error message if the API fails */}
        {isLoading && <p>Loading...</p>}
        {hasError && (
          <div className="alert alert-danger" role="alert">
            We're sorry, but an unexpected error occurred
          </div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {/* Complete me */}
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
