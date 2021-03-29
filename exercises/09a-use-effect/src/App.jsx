import {useEffect, useState} from "react"// Import useEffect here
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios"// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(() => {
    axios("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then(response => setQuote(response.data[0])
    )
    .catch((err) => {
      setError(true)
    })
    .then(() => setIsLoading(false));
  }
    ,[])
    
  
  return (
    <body class="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {isLoading && <div>...Loading</div>}
        {error && (<div> An Error Has Occured! </div>)}
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
