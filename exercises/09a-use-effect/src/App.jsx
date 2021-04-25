import {useState, useEffect} from 'react';
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from 'axios';

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState({data: "", error: null});

  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(()=> {
     async function getQuote() {
      try{
        setQuote({data: await axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes"), hasError: null})
      }
      catch(error){
        setQuote({data: null, hasError: "Error loading API"});
      }
    }
    getQuote();
  }, [])

  return (
    <body className="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" className="mt-4" />
      <div className="container">
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote.hasError ? quote.hasError : (quote.data.data ? quote.data.data : "Loading...")}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
