import React, { Component } from 'react'
import "./App.css";
import ronSwansonImage from "./assests/ronswanson.png";
import axios from 'axios';

export class App extends Component {
  state = { 
    isError: false,
    error: "",
    isLoading: false,
    data: null
  }

  componentDidMount = async() =>  {
    this.setState({
      ...this.state,
      isLoading: true
    })
    await axios.get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response)=> {
      this.setState({
        ...this.state,
        isLoading: false,
        data: response.data
      })
    })
    .catch((error) => {
      this.setState({
        ...this.state,
        isLoading: false,
        isError: true,
        error: "Sorry there was an error"
      })
    })
  }

  render() {
    return (
      <div class="cover bg-warning text-center">
        <img src={ronSwansonImage} alt="" width="450" height="423" class="mt-4" />
        <div class="container">
          <p>{this.state.isLoading && "Loading..."}</p>
          <p>{this.state.isError && this.state.error}</p>
          <blockquote
            id="quote"
            class="blockquote bg-dark text-white border-0 mb-4"
          >
            {this.state.data}
          </blockquote>
        </div>
      </div>
    )
  }
}

export default App;
