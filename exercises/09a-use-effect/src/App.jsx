// Import useEffect here
<<<<<<< HEAD
import {useState, useEffect} from 'react';
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from 'axios';
=======
import {useState, useEffect} from 'react'
import "./App.css";
import ronSwansonImage from "./assets/ronswanson.png";
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
// import Axios (or use Fetch)

function App() {
  const [displayQuotes, setDisplayQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState('');
  /**
   * Set up your state
   */
<<<<<<< HEAD
  useEffect( ()=>{
    setIsLoading(true);
    axios ('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then (response=>{
      setDisplayQuotes(response.data);
      console.log(response)
      
    })
    .catch( ()=>{
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
=======
  const [quote, setQuote] = useState("Paging Ron Swanson....")
  /**
   * Make an AJAX call with the useEffect hook
   */
  useEffect(()=> {
    fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response=>{
      if (!response.ok) {
        throw new Error('Failed to get response from quote API.')
      }
      return response.json()})
    .then((newQuote) => setQuote(newQuote[0]))
    .catch(error => {
      setQuote('Failed to get quote! Try again later.');
      console.log(error)
    })
  }, []);

>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
  return (
    <body className="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
<<<<<<< HEAD
      <div class="container">
        {isLoading && <p>...Loading</p>}
        {hasError && <p>Sorry friends, we are having issues. We need some time to work on ourselves. Come back later and we will be back in business....or will we</p>}
=======
      <div className="container">
        {/* Display an error message if the API fails */}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
<<<<<<< HEAD
          {displayQuotes.map( (displayQuote)=>{
            return displayQuote;
          })}
          
=======
          {quote}
>>>>>>> 3e818c3fe64faa5d2493e35443e8331a8bb198de
        </blockquote>
      </div>
    </body>
  );
}

export default App;
