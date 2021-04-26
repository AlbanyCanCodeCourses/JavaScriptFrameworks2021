import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from 'axios';
import { Component } from 'react';
// import Axios (or use Fetch)

/**
 * Convert me to the React Class Component
 */
class App extends Component {
  state = {
    displayQuotes: [],
    isLoading: true,
    hasError: false,
  }

  componentDidMount(){
    axios({
      url: 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
    })
    .then( response =>{
      this.setState({
        displayQuotes: response.data,
        isLoading: false,
        hasError: false,
      });
    })
    .catch ( ()=>{
      this.setState({hasError: true, isLoading: false})
    });
  }


  render(){
  return (
    <div class="cover bg-warning text-center">
      <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
      <div class="container">
      {this.state.isLoading && <p>...loading</p>}

        {this.state.hasError && <p>Sorry folks, we done fudged up. Come back later. Or don't, Ron doesn't care.</p>}
        <blockquote
          id="quote"
          class="blockquote bg-dark text-white border-0 mb-4"
        >
          
         {this.state.displayQuotes}
        </blockquote>
        
      </div>
    </div>
  ); 
  }
}

export default App;
