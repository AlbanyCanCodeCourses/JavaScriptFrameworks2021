// Import useEffect here
import {useState, useEffect} from 'react';
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from 'axios';
// import Axios (or use Fetch)

function App() {
  const [displayQuotes, setDisplayQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState('');
  /**
   * Set up your state
   */
  useEffect( ()=>{
    setIsLoading(true);
    axios ('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then (response=>{
      setDisplayQuotes(response.data);
      
    })
    .catch( (error)=>{ 
      console.error(error)
      setHasError(true);
    }) 
    .then( () =>{
      setIsLoading(false);
    })
  }, [] );
  /**
   * Make an AJAX call with the useEffect hook
   */
 console.log(displayQuotes)
  return (
    <body className="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
        {isLoading && <p>...Loading</p>}
        {hasError && <p>Sorry friends, we are having issues. We need some time to work on ourselves. Come back later and we will be back in business....or will we</p>}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {displayQuotes.map( (displayQuote)=>{
            return displayQuote;
          })}
          
        </blockquote>
      </div>
    </body>
  );
}

export default App;
