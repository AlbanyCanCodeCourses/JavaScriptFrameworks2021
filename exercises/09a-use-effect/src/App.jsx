// Import useEffect here
import { useState, useEffect } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";
function App() {
  /**
   * Set up your state
   */
  const [state, setState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  /**
   * Make an AJAX call with the useEffect hook
   */

  useEffect(() => {
    axios("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => {
        setState(res.data);
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
        {isLoading && <p>Loading...</p>}
        {hasError && (
          <div role="alert">We're sorry, but an unexpected error occurred</div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {state.map((quotes) => {
            return quotes;
          })}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
