import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  /**
   * quote
   * @type {string} quote that you will get back from the API
   */
  const [quote, setQuote] = useState("");
  /**
   * isLoading
   * @type {boolean} for displaying a loading symbol to the user
   */
  const [isLoading, setIsLoading] = useState(true);
  /**
   * hasError
   * @type {boolean} for displaying a error message to the user
   * if there is a problem with the API
   */
  const [hasError, setHasError] = useState(false);
  /**
   * I want to put the AJAX request within the useEffect hook.
   */
  useEffect(() => {
    /**
     * @see https://github.com/jamesseanwright/ron-swanson-quotes
     */
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((resp) => setQuote(resp.data[0]))
      .catch((err) => {
        // Your response if there is an error with the API
        console.error(err);
        setHasError(true);
      })
      .then(() => setIsLoading(false));
  }, []); // Because of "[]", this will only make an AJAX request when the component first renders

  return (
    <div className="bg-warning text-center cover">
      <img
        src="https://res.cloudinary.com/lando726/image/upload/v1466479089/ronswanson_gkopu4.png"
        alt=""
        width="450"
        height="423"
        className="mt-4"
      />
      <div className="container">
        {isLoading && <div>Loading ... </div>}
        {hasError && (
          <div className="error bg-white text-secondary border border-secondary mb-4">
            Oops! An unexpected error has occurred.
          </div>
        )}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </div>
  );
}

export default App;
