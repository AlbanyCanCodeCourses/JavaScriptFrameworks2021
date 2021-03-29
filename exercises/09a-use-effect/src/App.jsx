// Import useEffect here
import "./App.css";
import axios from 'axios';
import { useState, useEffect } from 'react';
import ronSwansonImage from "./assests/ronswanson.png";
// import Axios (or use Fetch)

function App() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false)

  const SWANSON_API = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

  useEffect(() => {
    setQuote("");
    setIsLoading(true);
    axios.get(SWANSON_API)
      .then(response => response.data)
      .then(newQuote => setQuote(newQuote))
      .catch(() => setHasError(true))
      .then(() => setIsLoading(false))
  }, []);

  /**
   * Make an AJAX call with the useEffect hook
   */

  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {isLoading && <h2>Loading a quote...</h2>}
        {hasError && <h2>There was a problem loading the quote!!</h2>}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
