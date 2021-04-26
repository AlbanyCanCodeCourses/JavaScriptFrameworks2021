import { Component } from "react";
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.API_URL = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    this.state = {
      quote: "",
      loading: true,
      error: ""
    }
  }
  

  getSwansonQuote() {
    this.setState({loading: true})
    return axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then(response => {
        this.setState({loading: false})
        return response.data
      })
      
  }
  componentDidMount() {
    setTimeout(() => {
      this.getSwansonQuote()
        .then(quote => this.setState({quote}))
        .catch(error => {
          this.setState({loading: false})
          this.setState({error: error.toString()})
        })
    }, 2000)
  }
  render() {
    return (
      <div className="cover bg-warning text-center">
        <img src={ronSwansonImage} alt="" width="450" height="423" className="mt-4" />
        <div className="container">
          {/* Display a loading message */}
          {/* Display an error message if the API fails */}
          <blockquote
            id="quote"
            className="blockquote bg-dark text-white border-0 mb-4"
          >
            {this.state.loading ? "Loading..." : this.state.error ? this.state.error : this.state.quote}
          </blockquote>
        </div>
      </div>
    );
  }
}

export default App;
