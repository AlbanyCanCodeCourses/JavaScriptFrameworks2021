// Import useEffect here
import {useState, useEffect} from 'react'
import "./App.css";
import ronSwansonImage from "./assets/ronswanson.png";
// import Axios (or use Fetch)

function App() {
  /**
   * Set up your state
   */
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

  return (
    <body className="bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div className="container">
        {/* Display an error message if the API fails */}
        <blockquote
          id="quote"
          className="blockquote bg-dark text-white border-0 mb-4"
        >
          {quote}
        </blockquote>
      </div>
    </body>
  );
}

export default App;
